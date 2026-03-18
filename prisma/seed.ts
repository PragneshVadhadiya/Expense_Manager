import { PrismaClient } from '../src/generated/prisma/client'
const prisma = new PrismaClient()

async function main() {
    const email = 'demo@example.com'
    const found = await prisma.users.findFirst({ where: { EmailAddress: email } })
    let user = found;
    if (!user) {
        user = await prisma.users.create({
            data: {
                UserName: "Demo User",
                EmailAddress: email,
                Password: "password",
                MobileNo: "1234567890",
                Created: new Date(),
                Modified: new Date(),
            }
        })
        console.log("Created demo user: demo@example.com / password");
    } else {
        console.log("User already exists: demo@example.com");
    }

    // Seed Categories
    const userId = user.UserID;
    const existingCats = await prisma.categories.count({ where: { UserID: userId } });
    if (existingCats === 0) {
        console.log("Seeding initial categories...");
        const categories = [
            { name: "Salary", isIncome: true, isExpense: false, subs: ["Base Salary", "Bonus", "Commission"] },
            { name: "Freelance", isIncome: true, isExpense: false, subs: ["Design", "Development", "Writing"] },
            { name: "Housing", isIncome: false, isExpense: true, subs: ["Rent", "Mortgage", "Maintenance", "Property Tax"] },
            { name: "Utilities", isIncome: false, isExpense: true, subs: ["Electricity", "Water", "Internet", "Gas"] },
            { name: "Food", isIncome: false, isExpense: true, subs: ["Groceries", "Restaurants", "Delivery"] },
            { name: "Transportation", isIncome: false, isExpense: true, subs: ["Fuel", "Public Transit", "Car Maint."] },
            { name: "Personal", isIncome: false, isExpense: true, subs: ["Clothing", "Entertainment", "Hobbies"] }
        ];

        for (const cat of categories) {
            const dbCat = await prisma.categories.create({
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
                await prisma.sub_categories.create({
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
        console.log("Seeded default categories.");
    } else {
        console.log("Categories already seeded.");
    }
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
