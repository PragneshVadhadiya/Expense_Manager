import { PrismaClient } from '../src/generated/prisma/client'
const prisma = new PrismaClient()

async function main() {
    const users = await prisma.users.findMany({ select: { UserID: true, UserName: true, EmailAddress: true } })
    console.log('All users:', JSON.stringify(users, null, 2))
    
    const cats = await prisma.categories.groupBy({ by: ['UserID'], _count: { CategoryID: true } })
    console.log('Categories per UserID:', JSON.stringify(cats, null, 2))

    const projects = await prisma.projects.groupBy({ by: ['UserID'], _count: { ProjectID: true } })
    console.log('Projects per UserID:', JSON.stringify(projects, null, 2))

    const expenses = await prisma.expenses.count()
    console.log('Total Expenses count:', expenses)

    const incomes = await prisma.incomes.count()
    console.log('Total Incomes count:', incomes)
}

main().finally(() => prisma.$disconnect())
