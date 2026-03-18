import { PrismaClient } from '../src/generated/prisma/client'
const prisma = new PrismaClient()

const PROJECTS = [
    {
        name: "Website Redesign",
        detail: "Complete overhaul of corporate website with modern UI/UX",
        budget: 150000,
        spent: 48000,
        startDays: -90,
        endDays: 60,
        active: true,
    },
    {
        name: "Mobile App Development",
        detail: "Cross-platform mobile app for Android and iOS using React Native",
        budget: 500000,
        spent: 125000,
        startDays: -60,
        endDays: 120,
        active: true,
    },
    {
        name: "ERP System Integration",
        detail: "Integrate third-party ERP with existing accounting software",
        budget: 300000,
        spent: 300000,
        startDays: -180,
        endDays: -30,
        active: false,
    },
    {
        name: "Marketing Campaign Q1",
        detail: "Digital marketing and social media campaign for Q1 product launch",
        budget: 80000,
        spent: 72000,
        startDays: -120,
        endDays: -1,
        active: false,
    },
    {
        name: "Cloud Migration",
        detail: "Migrate on-premise infrastructure to AWS cloud environment",
        budget: 250000,
        spent: 60000,
        startDays: -30,
        endDays: 90,
        active: true,
    },
    {
        name: "Office Renovation",
        detail: "Redesign and renovation of main office space for 50 employees",
        budget: 400000,
        spent: 120000,
        startDays: -15,
        endDays: 45,
        active: true,
    },
    {
        name: "HR Software Setup",
        detail: "Implement HR management system for attendance, payroll and leave tracking",
        budget: 120000,
        spent: 35000,
        startDays: -45,
        endDays: 30,
        active: true,
    },
    {
        name: "Annual Product Audit",
        detail: "Full audit of product line including quality and compliance checks",
        budget: 50000,
        spent: 50000,
        startDays: -200,
        endDays: -60,
        active: false,
    },
    {
        name: "Customer Portal Development",
        detail: "Build a self-service customer portal for order tracking and support",
        budget: 200000,
        spent: 15000,
        startDays: 0,
        endDays: 180,
        active: true,
    },
    {
        name: "Security & Compliance Upgrade",
        detail: "Implement ISO 27001 compliance and upgrade data security protocols",
        budget: 175000,
        spent: 40000,
        startDays: -20,
        endDays: 100,
        active: true,
    },
]

function daysFromNow(days: number): Date {
    const d = new Date()
    d.setDate(d.getDate() + days)
    return d
}

async function main() {
    const users = await prisma.users.findMany({ select: { UserID: true, UserName: true } })
    console.log(`Found ${users.length} user(s). Seeding projects for all...\n`)

    for (const u of users) {
        console.log(`Processing UserID ${u.UserID} (${u.UserName})...`)

        // Clear existing projects for this user
        // First null-out project refs in expenses/incomes to avoid FK issues
        await prisma.$executeRawUnsafe(`UPDATE expenses SET ProjectID = NULL WHERE ProjectID IN (SELECT ProjectID FROM projects WHERE UserID = ${u.UserID})`)
        await prisma.$executeRawUnsafe(`UPDATE incomes SET ProjectID = NULL WHERE ProjectID IN (SELECT ProjectID FROM projects WHERE UserID = ${u.UserID})`)
        await prisma.$executeRawUnsafe(`DELETE FROM projects WHERE UserID = ${u.UserID}`)

        let count = 0
        for (const p of PROJECTS) {
            await prisma.projects.create({
                data: {
                    ProjectName: p.name,
                    ProjectDetail: p.detail,
                    // Store budget/spent as JSON in Description field
                    Description: JSON.stringify({ budget: p.budget, spent: p.spent }),
                    IsActive: p.active,
                    ProjectStartDate: daysFromNow(p.startDays),
                    ProjectEndDate: daysFromNow(p.endDays),
                    UserID: u.UserID,
                    Created: new Date(),
                    Modified: new Date(),
                }
            })
            count++
        }
        console.log(`  ✅ ${count} projects created`)
    }

    console.log('\n🎉 Projects seeded for all users!')
}

main().finally(() => prisma.$disconnect())
