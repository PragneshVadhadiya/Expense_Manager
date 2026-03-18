const { PrismaClient } = require('../src/generated/prisma/client');
const prisma = new PrismaClient();

async function main() {
    try {
        const email = 'demo@example.com';
        const found = await prisma.users.findFirst({ where: { EmailAddress: email } });
        if (!found) {
            await prisma.users.create({
                data: {
                    UserName: "Demo User",
                    EmailAddress: email,
                    Password: "password",
                    MobileNo: "1234567890",
                    Created: new Date(),
                    Modified: new Date(),
                }
            });
            console.log("SUCCESS: Created user");
        } else {
            console.log("SUCCESS: User already exists");
        }
    } catch (e) {
        console.error("ERROR:", e);
    } finally {
        await prisma.$disconnect();
    }
}
main();
