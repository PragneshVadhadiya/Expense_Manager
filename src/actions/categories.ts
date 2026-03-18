"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { z } from "zod";

const categorySchema = z.object({
    CategoryName: z.string().min(1, "Name is required"),
    Type: z.enum(["Income", "Expense"]),
    IsActive: z.boolean().default(true),
});

export type CategoryFormData = z.infer<typeof categorySchema>;

async function getUserId() {
    const cookieStore = await cookies();
    const userIdCookie = cookieStore.get("userId");
    
    if (userIdCookie) {
        return parseInt(userIdCookie.value);
    }
    
    // Fallback if no cookie
    const user = await db.users.findFirst();
    return user ? user.UserID : 1; 
}

export async function getCategories() {
    try {
        const userId = await getUserId();
        const categories = await db.categories.findMany({
            where: { UserID: userId },
            include: {
                sub_categories: true
            },
            orderBy: { Created: "desc" },
        });

        // Safe decimal serialization
        return { success: true, data: JSON.parse(JSON.stringify(categories)) };
    } catch (error) {
        console.error("Error fetching categories:", error);
        return { success: false, error: "Failed to fetch categories", data: [] };
    }
}

export async function createCategory(data: CategoryFormData) {
    try {
        const validated = categorySchema.parse(data);
        const userId = await getUserId();

        await db.categories.create({
            data: {
                CategoryName: validated.CategoryName,
                IsExpense: validated.Type === "Expense",
                IsIncome: validated.Type === "Income",
                IsActive: validated.IsActive,
                UserID: userId,
                Created: new Date(),
                Modified: new Date(),
            },
        });

        revalidatePath("/categories");
        return { success: true };
    } catch (error) {
        console.error("Error creating category:", error);
        return { success: false, error: "Failed to create category" };
    }
}

export async function updateCategory(id: number, data: CategoryFormData) {
    try {
        const validated = categorySchema.parse(data);
        
        await db.categories.update({
            where: { CategoryID: id },
            data: {
                CategoryName: validated.CategoryName,
                IsExpense: validated.Type === "Expense",
                IsIncome: validated.Type === "Income",
                IsActive: validated.IsActive,
                Modified: new Date(),
            },
        });

        revalidatePath("/categories");
        return { success: true };
    } catch (error) {
        console.error("Error updating category:", error);
        return { success: false, error: "Failed to update category" };
    }
}

export async function deleteCategory(id: number) {
    try {
        // Delete all subcategories belonging to this category first (FK constraint)
        await db.sub_categories.deleteMany({
            where: { CategoryID: id },
        });

        // Now safely delete the parent category
        await db.categories.delete({
            where: { CategoryID: id },
        });

        revalidatePath("/categories");
        return { success: true };
    } catch (error) {
        console.error("Error deleting category:", error);
        return { success: false, error: "Failed to delete category" };
    }
}

// Subcategory Actions
const subCategorySchema = z.object({
    SubCategoryName: z.string().min(1, "Name is required"),
    IsActive: z.boolean().default(true),
});

export async function createSubCategory(categoryId: number, data: { SubCategoryName: string, IsActive?: boolean }) {
    try {
        const validated = subCategorySchema.parse(data);
        const userId = await getUserId();

        await db.sub_categories.create({
            data: {
                CategoryID: categoryId,
                SubCategoryName: validated.SubCategoryName,
                IsExpense: false,
                IsIncome: false,
                IsActive: validated.IsActive ?? true,
                UserID: userId,
                Created: new Date(),
                Modified: new Date(),
            },
        });

        revalidatePath("/categories");
        return { success: true };
    } catch (error) {
        console.error("Error creating subcategory:", error);
        return { success: false, error: "Failed to create subcategory" };
    }
}

export async function deleteSubCategory(id: number) {
    try {
        await db.sub_categories.delete({
            where: { SubCategoryID: id },
        });

        revalidatePath("/categories");
        return { success: true };
    } catch (error) {
        console.error("Error deleting subcategory:", error);
        return { success: false, error: "Failed to delete subcategory" };
    }
}

export async function seedDefaultCategories() {
    try {
        const userId = await getUserId();
        const existingCats = await db.categories.count({ where: { UserID: userId } });
        
        if (existingCats === 0) {
            const defaults = [
                { name: "Salary", isIncome: true, isExpense: false, subs: ["Base Salary", "Bonus", "Commission"] },
                { name: "Freelance", isIncome: true, isExpense: false, subs: ["Design", "Development", "Writing"] },
                { name: "Housing", isIncome: false, isExpense: true, subs: ["Rent", "Mortgage", "Maintenance"] },
                { name: "Utilities", isIncome: false, isExpense: true, subs: ["Electricity", "Water", "Internet"] },
                { name: "Food", isIncome: false, isExpense: true, subs: ["Groceries", "Restaurants", "Delivery"] },
                { name: "Transportation", isIncome: false, isExpense: true, subs: ["Fuel", "Public Transit", "Car Maint."] },
                { name: "Personal", isIncome: false, isExpense: true, subs: ["Clothing", "Entertainment", "Health"] }
            ];

            for (const cat of defaults) {
                const dbCat = await db.categories.create({
                    data: {
                        CategoryName: cat.name,
                        IsIncome: cat.isIncome,
                        IsExpense: cat.isExpense,
                        IsActive: true,
                        UserID: userId,
                        Created: new Date(),
                        Modified: new Date()
                    }
                });

                for (const sub of cat.subs) {
                    await db.sub_categories.create({
                        data: {
                            SubCategoryName: sub,
                            IsActive: true,
                            CategoryID: dbCat.CategoryID,
                            UserID: userId,
                            IsExpense: false,
                            IsIncome: false,
                            Created: new Date(),
                            Modified: new Date()
                        }
                    });
                }
            }
        }
        
        revalidatePath("/categories");
        return { success: true };
    } catch (error) {
        console.error("Error seeding categories:", error);
        return { success: false, error: "Failed to seed categories" };
    }
}
