"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { z } from "zod";

const projectSchema = z.object({
    ProjectName: z.string().min(1, "Name is required"),
    ProjectDetail: z.string().optional(),
    IsActive: z.boolean().default(true),
    // adding Budget/Spent mapped to description for simple mocking since schema doesn't have those exact fields
    Budget: z.coerce.number().optional().default(0), 
});

export type ProjectFormData = z.infer<typeof projectSchema>;

async function getUserId() {
    // using cookies here properly like auth.ts does or fallback to first user
    const cookieStore = await cookies();
    const userIdCookie = cookieStore.get("userId");
    
    if (userIdCookie) {
        return parseInt(userIdCookie.value);
    }
    
    // Fallback if no cookie
    const user = await db.users.findFirst();
    return user ? user.UserID : 1; 
}

export async function getProjects() {
    try {
        const userId = await getUserId();
        const projects = await db.projects.findMany({
            where: { UserID: userId },
            orderBy: { Created: "desc" },
        });

        // Parse mock budget data stored in Description if any, otherwise 0
        const parsedProjects = projects.map(p => {
            const budgetData = p.Description ? JSON.parse(p.Description) : { budget: 0, spent: 0 };
            return {
                ...p,
                budget: budgetData.budget || 0,
                spent: budgetData.spent || 0
            };
        });

        return { success: true, data: parsedProjects };
    } catch (error) {
        console.error("Error fetching projects:", error);
        return { success: false, error: "Failed to fetch projects", data: [] };
    }
}

export async function createProject(data: ProjectFormData) {
    try {
        const validated = projectSchema.parse(data);
        const userId = await getUserId();

        await db.projects.create({
            data: {
                ProjectName: validated.ProjectName,
                ProjectDetail: validated.ProjectDetail,
                IsActive: validated.IsActive,
                Description: JSON.stringify({ budget: validated.Budget || 0, spent: 0 }),
                UserID: userId,
                Created: new Date(),
                Modified: new Date(),
            },
        });

        revalidatePath("/projects");
        return { success: true };
    } catch (error) {
        console.error("Error creating project:", error);
        return { success: false, error: "Failed to create project" };
    }
}

export async function updateProject(id: number, data: ProjectFormData) {
    try {
        const validated = projectSchema.parse(data);
        
        // Let's get the original project to preserve spent amount
        const proj = await db.projects.findUnique({ where: { ProjectID: id } });
        const oldBudgetData = proj?.Description ? JSON.parse(proj.Description) : { budget: 0, spent: 0 };

        await db.projects.update({
            where: { ProjectID: id },
            data: {
                ProjectName: validated.ProjectName,
                ProjectDetail: validated.ProjectDetail,
                IsActive: validated.IsActive,
                Description: JSON.stringify({ budget: validated.Budget, spent: oldBudgetData.spent }),
                Modified: new Date(),
            },
        });

        revalidatePath("/projects");
        return { success: true };
    } catch (error) {
        console.error("Error updating project:", error);
        return { success: false, error: "Failed to update project" };
    }
}

export async function deleteProject(id: number) {
    try {
        await db.projects.delete({
            where: { ProjectID: id },
        });

        revalidatePath("/projects");
        return { success: true };
    } catch (error) {
        console.error("Error deleting project:", error);
        return { success: false, error: "Failed to delete project" };
    }
}
