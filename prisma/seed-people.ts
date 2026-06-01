import { PrismaClient } from '../src/generated/prisma/client'
const prisma = new PrismaClient()

const PEOPLE_LIST = [
    { name: "Priya Vadhadiya",   mobile: "9876500001", email: "priya.v@gmail.com",   code: "PV001", desc: "Wife - family expenses"           },
    { name: "Rohit Sharma",      mobile: "9876500002", email: "rohit.s@gmail.com",   code: "RS002", desc: "Friend - shared outings"          },
    { name: "Anita Patel",       mobile: "9876500003", email: "anita.p@gmail.com",   code: "AP003", desc: "Sister - occasional transfers"    },
    { name: "Suresh Kumar",      mobile: "9876500004", email: "suresh.k@gmail.com",  code: "SK004", desc: "Colleague - lunch splits"         },
    { name: "Meena Desai",       mobile: "9876500005", email: "meena.d@gmail.com",   code: "MD005", desc: "Neighbour - utility payments"     },
    { name: "Vikas Mehta",       mobile: "9876500006", email: "vikas.m@gmail.com",   code: "VM006", desc: "Business partner"                 },
    { name: "Kavita Joshi",      mobile: "9876500007", email: "kavita.j@gmail.com",  code: "KJ007", desc: "Freelance client"                 },
    { name: "Deepak Rao",        mobile: "9876500008", email: "deepak.r@gmail.com",  code: "DR008", desc: "Landlord - rent payments"        },
    { name: "Sunita Gupta",      mobile: "9876500009", email: "sunita.g@gmail.com",  code: "SG009", desc: "Mother - family support"         },
    { name: "Amit Trivedi",      mobile: "9876500010", email: "amit.t@gmail.com",    code: "AT010", desc: "CA / Accountant"                  },
    { name: "Pooja Nair",        mobile: "9876500011", email: "pooja.n@gmail.com",   code: "PN011", desc: "Gym partner"                      },
    { name: "Rahul Pandey",      mobile: "9876500012", email: "rahul.p@gmail.com",   code: "RP012", desc: "Cousin - shared travel"          },
]

async function main() {
    const users = await prisma.users.findMany({ select: { UserID: true, UserName: true } })
    console.log(`Found ${users.length} user(s). Seeding contacts for all...\n`)

    for (const u of users) {
        console.log(`Processing UserID ${u.UserID} (${u.UserName})...`)

        // Clear existing peoples for this user safely
        // First delete dependent expenses/incomes to avoid FK constraints
        await prisma.$executeRawUnsafe(`DELETE FROM expenses WHERE PeopleID IN (SELECT PeopleID FROM peoples WHERE UserID = ${u.UserID})`)
        await prisma.$executeRawUnsafe(`DELETE FROM incomes WHERE PeopleID IN (SELECT PeopleID FROM peoples WHERE UserID = ${u.UserID})`)
        await prisma.$executeRawUnsafe(`DELETE FROM peoples WHERE UserID = ${u.UserID}`)

        let count = 0
        for (const p of PEOPLE_LIST) {
            await prisma.peoples.create({
                data: {
                    PeopleName: p.name,
                    MobileNo: p.mobile,
                    Email: p.email,
                    PeopleCode: p.code,
                    Description: p.desc,
                    Password: "pass123",
                    IsActive: true,
                    UserID: u.UserID,
                    Created: new Date(),
                    Modified: new Date(),
                }
            })
            count++
        }
        console.log(`  ✅ ${count} contacts created`)
    }

    console.log('\n🎉 Contacts seeded successfully for all users!')
}

main()
    .catch(e => { console.error(e); process.exit(1) })
    .finally(() => prisma.$disconnect())
