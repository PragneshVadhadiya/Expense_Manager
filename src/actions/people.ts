"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const personSchema = z.object({
    PeopleName: z.string().min(1, "Name is required"),
    Email: z.string().email("Invalid email address"),
    MobileNo: z.string().min(1, "Mobile number is required"),
    PeopleCode: z.string().optional(),
    Description: z.string().optional(),
    IsActive: z.boolean().default(true),
});

export type PersonFormData = z.infer<typeof personSchema>;

// Helper to get a valid UserID (simulating auth for now)
async function getUserId() {
    const user = await db.users.findFirst();
    if (user) return user.UserID;

    // Create a default user if none exists
    const newUser = await db.users.create({
        data: {
            UserName: "Demo User",
            EmailAddress: "demo@example.com",
            Password: "password",
            MobileNo: "0000000000",
            Created: new Date(),
            Modified: new Date(),
        }
    });
    return newUser.UserID;
}

export async function getPeople() {
    try {
        const userId = await getUserId();
        const people = await db.peoples.findMany({
            where: {
                UserID: userId,
            },
            orderBy: {
                Created: "desc",
            },
        });
        return { success: true, data: people };
    } catch (error) {
        console.error("Error fetching people:", error);
        return { success: false, error: "Failed to fetch people" };
    }
}

export async function createPerson(data: PersonFormData) {
    try {
        const validated = personSchema.parse(data);
        const userId = await getUserId();

        await db.peoples.create({
            data: {
                ...validated,
                Password: "defaultPassword123", // Default password for now as it's required
                UserID: userId,
                Created: new Date(),
                Modified: new Date(),
            },
        });

        revalidatePath("/people");
        return { success: true };
    } catch (error) {
        console.error("Error creating person:", error);
        return { success: false, error: "Failed to create person" };
    }
}

export async function updatePerson(id: number, data: PersonFormData) {
    try {
        // We parse with partial or full? usually full for edit form
        const validated = personSchema.parse(data);

        await db.peoples.update({
            where: {
                PeopleID: id,
            },
            data: {
                ...validated,
                Modified: new Date(),
            },
        });

        revalidatePath("/people");
        return { success: true };
    } catch (error) {
        console.error("Error updating person:", error);
        return { success: false, error: "Failed to update person" };
    }
}

export async function deletePerson(id: number) {
    try {
        await db.peoples.delete({
            where: {
                PeopleID: id,
            },
        });

        revalidatePath("/people");
        return { success: true };
    } catch (error) {
        console.error("Error deleting person:", error);
        return { success: false, error: "Failed to delete person" };
    }
}

export async function togglePersonStatus(id: number, isActive: boolean) {
    try {
        await db.peoples.update({
            where: { PeopleID: id },
            data: {
                IsActive: isActive,
                Modified: new Date()
            }
        });
        revalidatePath("/people");
        return { success: true };
    } catch (error) {
        console.error("Error toggling person status:", error);
        return { success: false, error: "Failed to update status" };
    }
}
