import { PrismaClient } from '../src/generated/prisma/client'
const prisma = new PrismaClient()

async function main() {
    const users = await prisma.users.findMany({ select: { UserID: true, UserName: true, EmailAddress: true } })
    console.log('All users:', JSON.stringify(users, null, 2))
    
    const cats = await prisma.categories.groupBy({ by: ['UserID'], _count: { CategoryID: true } })
    console.log('Categories per UserID:', JSON.stringify(cats, null, 2))
}

main().finally(() => prisma.$disconnect())
