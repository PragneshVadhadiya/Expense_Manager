import { PrismaClient } from '../src/generated/prisma/client'
const prisma = new PrismaClient()

const CATEGORIES = [
    { name: "Salary",            isIncome: true,  isExpense: false, subs: ["Basic Pay", "Dearness Allowance", "HRA", "Bonus", "Overtime", "Commission"] },
    { name: "Freelance",         isIncome: true,  isExpense: false, subs: ["Web Development", "Graphic Design", "Content Writing", "Consultation", "Photography"] },
    { name: "Business Income",   isIncome: true,  isExpense: false, subs: ["Product Sales", "Service Revenue", "Online Sales", "Rental Income"] },
    { name: "Investment Returns", isIncome: true, isExpense: false, subs: ["Stock Dividends", "Mutual Funds", "FD Interest", "PPF Interest", "Crypto Gains"] },
    { name: "Other Income",      isIncome: true,  isExpense: false, subs: ["Gifts Received", "Tax Refund", "Cashback", "Insurance Payout"] },
    { name: "Housing",           isIncome: false, isExpense: true,  subs: ["Rent", "Home Loan EMI", "Maintenance", "Electricity", "Water Bill", "Gas Bill", "Property Tax"] },
    { name: "Food & Dining",     isIncome: false, isExpense: true,  subs: ["Groceries", "Restaurant", "Food Delivery", "Coffee & Snacks", "Office Lunch"] },
    { name: "Transportation",    isIncome: false, isExpense: true,  subs: ["Petrol/Diesel", "Car EMI", "Auto/Taxi", "Bus/Train Fare", "Metro Pass", "Parking"] },
    { name: "Health & Medical",  isIncome: false, isExpense: true,  subs: ["Doctor Consultation", "Medicines", "Lab Tests", "Hospital Bills", "Health Insurance", "Gym"] },
    { name: "Education",         isIncome: false, isExpense: true,  subs: ["School/College Fees", "Online Courses", "Books & Stationery", "Coaching", "Exam Fees"] },
    { name: "Shopping",          isIncome: false, isExpense: true,  subs: ["Clothing", "Electronics", "Footwear", "Accessories", "Home Appliances", "Online Shopping"] },
    { name: "Entertainment",     isIncome: false, isExpense: true,  subs: ["Movies", "OTT Subscriptions", "Concerts/Events", "Gaming", "Hobbies"] },
    { name: "Communication",     isIncome: false, isExpense: true,  subs: ["Mobile Recharge", "Broadband/Internet", "Cable/DTH", "Streaming Services"] },
    { name: "Personal Care",     isIncome: false, isExpense: true,  subs: ["Salon & Haircut", "Skincare", "Cosmetics", "Spa & Wellness", "Dental Care"] },
    { name: "Savings & Investments", isIncome: false, isExpense: true, subs: ["SIP", "Recurring Deposit", "PPF", "LIC Premium", "Emergency Fund", "Gold Purchase"] },
    { name: "Travel & Vacation", isIncome: false, isExpense: true,  subs: ["Flights", "Hotels", "Bus/Train Tickets", "Travel Insurance", "Sightseeing", "Visa Fees"] },
    { name: "Gifts & Donations", isIncome: false, isExpense: true,  subs: ["Birthday Gifts", "Wedding Gifts", "Festival Expenses", "Charity/NGO Donation"] },
    { name: "Business Expenses", isIncome: false, isExpense: true,  subs: ["Office Rent", "Software/Tools", "Advertising", "Employee Salary", "Office Supplies"] },
]

async function main() {
    const users = await prisma.users.findMany({ select: { UserID: true, UserName: true } })
    console.log(`Found ${users.length} user(s). Seeding all...\n`)

    // Disable foreign key checks temporarily (MySQL)
    await prisma.$executeRawUnsafe('SET FOREIGN_KEY_CHECKS = 0')

    for (const u of users) {
        console.log(`Processing UserID ${u.UserID} (${u.UserName})...`)

        // Delete all existing categories & subcategories for this user
        await prisma.$executeRawUnsafe(`DELETE FROM sub_categories WHERE UserID = ${u.UserID}`)
        await prisma.$executeRawUnsafe(`DELETE FROM categories WHERE UserID = ${u.UserID}`)

        let catCount = 0, subCount = 0
        for (const cat of CATEGORIES) {
            const dbCat = await prisma.categories.create({
                data: {
                    CategoryName: cat.name,
                    IsIncome: cat.isIncome,
                    IsExpense: cat.isExpense,
                    IsActive: true,
                    UserID: u.UserID,
                    Created: new Date(),
                    Modified: new Date(),
                }
            })
            catCount++
            for (const sub of cat.subs) {
                await prisma.sub_categories.create({
                    data: {
                        SubCategoryName: sub,
                        IsActive: true,
                        CategoryID: dbCat.CategoryID,
                        UserID: u.UserID,
                        IsExpense: cat.isExpense,
                        IsIncome: cat.isIncome,
                        Created: new Date(),
                        Modified: new Date(),
                    }
                })
                subCount++
            }
        }
        console.log(`  ✅ ${catCount} categories, ${subCount} subcategories`)
    }

    // Re-enable foreign key checks
    await prisma.$executeRawUnsafe('SET FOREIGN_KEY_CHECKS = 1')

    console.log('\n🎉 All users seeded successfully!')
}

main().finally(() => prisma.$disconnect())
