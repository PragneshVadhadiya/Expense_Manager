"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { getUserId } from "@/lib/auth-helper";

const transactionSchema = z.object({
    Type: z.enum(["income", "expense"]),
    Date: z.date(),
    Amount: z.coerce.number().min(0.01, "Amount must be greater than 0"),
    Description: z.string().optional(),
    CategoryID: z.coerce.number().optional(), // Make optional
    SubCategoryID: z.coerce.number().optional(), // Make optional
    ProjectID: z.coerce.number().optional(), // Make optional
    PeopleID: z.coerce.number().min(1, "Person is required"), // Make required
});

export type TransactionFormData = z.infer<typeof transactionSchema>;

export async function createTransaction(data: TransactionFormData) {
    try {
        const userId = await getUserId();
        const validated = transactionSchema.parse(data);

        // Prepare common data
        const commonData = {
            Amount: validated.Amount,
            Description: validated.Description,
            CategoryID: validated.CategoryID || null,
            SubCategoryID: validated.SubCategoryID || null,
            ProjectID: validated.ProjectID || null,
            PeopleID: validated.PeopleID, // Required
            UserID: userId,
            Created: new Date(),
            Modified: new Date(),
        };

        if (validated.Type === 'expense') {
            await db.expenses.create({
                data: {
                    ...commonData,
                    ExpenseDate: validated.Date,
                    ExpenseDetail: validated.Description, // Map Description to ExpenseDetail as well just in case
                }
            });
        } else {
            await db.incomes.create({
                data: {
                    ...commonData,
                    IncomeDate: validated.Date,
                    IncomeDetail: validated.Description, // Map Description to IncomeDetail
                }
            });
        }

        revalidatePath("/expenses");
        return { success: true };
    } catch (error) {
        console.error("Error creating transaction:", error);
        return { success: false, error: "Failed to create transaction" };
    }
}

export async function getExpensesData() {
    try {
        const userId = await getUserId();

        const [expenses, incomes, categories, subCategories, projects, people] = await Promise.all([
            db.expenses.findMany({
                where: { UserID: userId },
                orderBy: { ExpenseDate: 'desc' },
                include: {
                    categories: true,
                    sub_categories: true,
                    projects: true,
                    peoples: true
                }
            }),
            db.incomes.findMany({
                where: { UserID: userId },
                orderBy: { IncomeDate: 'desc' },
                include: {
                    categories: true,
                    sub_categories: true,
                    projects: true,
                    peoples: true
                }
            }),
            db.categories.findMany({ where: { OR: [{ UserID: userId }, { UserID: 1 }] } }),
            db.sub_categories.findMany({ where: { OR: [{ UserID: userId }, { UserID: 1 }] } }),
            db.projects.findMany({ where: { OR: [{ UserID: userId }, { UserID: 1 }] } }),
            db.peoples.findMany({ where: { OR: [{ UserID: userId }, { UserID: 1 }] } })
        ]);

        // Normalize and combine data
        const normalizedExpenses = expenses.map(e => ({
            TransactionID: `exp-${e.ExpenseID}`,
            TransactionDate: e.ExpenseDate,
            Type: 'Expense',
            Amount: Number(e.Amount),
            Description: e.Description || e.ExpenseDetail,
            Category: e.categories,
            SubCategory: e.sub_categories,
            Project: e.projects,
            People: e.peoples,
            Raw: e
        }));

        const normalizedIncomes = incomes.map(i => ({
            TransactionID: `inc-${i.IncomeID}`,
            TransactionDate: i.IncomeDate,
            Type: 'Income',
            Amount: Number(i.Amount),
            Description: i.Description || i.IncomeDetail,
            Category: i.categories,
            SubCategory: i.sub_categories,
            Project: i.projects,
            People: i.peoples,
            Raw: i
        }));

        const transactions = [...normalizedExpenses, ...normalizedIncomes]
            .sort((a, b) => new Date(b.TransactionDate).getTime() - new Date(a.TransactionDate).getTime());

        // Deduplicate lists, preferring current user's own items over admin defaults if names clash
        const catMap = new Map<string, typeof categories[0]>();
        categories.forEach(cat => {
            const key = cat.CategoryName.toLowerCase();
            if (cat.UserID === userId || !catMap.has(key)) {
                catMap.set(key, cat);
            }
        });
        const deduplicatedCategories = Array.from(catMap.values());

        const subMap = new Map<string, typeof subCategories[0]>();
        subCategories.forEach(sub => {
            const key = `${sub.CategoryID}::${sub.SubCategoryName.toLowerCase()}`;
            if (sub.UserID === userId || !subMap.has(key)) {
                subMap.set(key, sub);
            }
        });
        const deduplicatedSubCategories = Array.from(subMap.values());

        const projMap = new Map<string, typeof projects[0]>();
        projects.forEach(proj => {
            const key = proj.ProjectName.toLowerCase();
            if (proj.UserID === userId || !projMap.has(key)) {
                projMap.set(key, proj);
            }
        });
        const deduplicatedProjects = Array.from(projMap.values());

        const peopMap = new Map<string, typeof people[0]>();
        people.forEach(p => {
            const key = p.PeopleName.toLowerCase();
            if (p.UserID === userId || !peopMap.has(key)) {
                peopMap.set(key, p);
            }
        });
        const deduplicatedPeople = Array.from(peopMap.values());

        return JSON.parse(JSON.stringify({
            transactions,
            categories: deduplicatedCategories,
            subCategories: deduplicatedSubCategories,
            projects: deduplicatedProjects,
            people: deduplicatedPeople
        }));
    } catch (error) {
        console.error("Error fetching expenses data:", error);
        return {
            transactions: [],
            categories: [],
            subCategories: [],
            projects: [],
            people: []
        };
    }
}

export async function deleteTransaction(transactionId: string) {
    try {
        if (transactionId.startsWith('exp-')) {
            const id = parseInt(transactionId.replace('exp-', ''));
            await db.expenses.delete({ where: { ExpenseID: id } });
        } else if (transactionId.startsWith('inc-')) {
            const id = parseInt(transactionId.replace('inc-', ''));
            await db.incomes.delete({ where: { IncomeID: id } });
        }
        
        revalidatePath("/expenses");
        return { success: true };
    } catch (error) {
        console.error("Error deleting transaction:", error);
        return { success: false, error: "Failed to delete transaction" };
    }
}
