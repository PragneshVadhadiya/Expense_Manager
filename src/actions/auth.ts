"use server";

import { db } from "@/lib/db";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(1, "Password is required"),
});

export async function login(prevState: any, formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const validated = loginSchema.safeParse({ email, password });

    if (!validated.success) {
        return { error: validated.error.flatten().fieldErrors, message: "Invalid input" };
    }

    try {
        const user = await db.users.findFirst({
            where: {
                EmailAddress: email,
                Password: password, // checking plain text as per existing schema constraints
            },
        });

        if (!user) {
            return { message: "Invalid email or password" };
        }

        // Set simple session cookie
        const cookieStore = await cookies();
        cookieStore.set("userId", user.UserID.toString(), {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24 * 7, // 1 week
            path: "/",
        });

        // Store user role/name
        cookieStore.set("userRole", user.Role || "User", {
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24 * 7,
            path: "/",
        });
        cookieStore.set("userName", user.UserName, {
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24 * 7,
            path: "/",
        });

    } catch (error) {
        console.error("Login error:", error);
        return { message: "An unexpected error occurred" };
    }

    // ... existing code ...
    redirect("/dashboard");
}

const signupSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    role: z.string().default("User"),
});

async function seedDefaultUserData(userId: number, name: string, email: string, mobile: string) {
    try {
        // 1. Create default Person (Peoples)
        await db.peoples.create({
            data: {
                PeopleCode: "SELF",
                Password: "pass123",
                PeopleName: name,
                Email: email,
                MobileNo: mobile,
                Description: "Default self profile",
                UserID: userId,
                IsActive: true,
                Created: new Date(),
                Modified: new Date(),
            }
        });

        // 2. Create default projects
        const defaultProjects = [
            { name: "General Operations", detail: "General daily operations and standard budget" },
            { name: "Personal Budget", detail: "Personal allowances, hobbies, and personal spendings" }
        ];

        for (const proj of defaultProjects) {
            await db.projects.create({
                data: {
                    ProjectName: proj.name,
                    ProjectDetail: proj.detail,
                    UserID: userId,
                    IsActive: true,
                    Created: new Date(),
                    Modified: new Date(),
                }
            });
        }

        // 3. Create default categories & subcategories
        const DEFAULT_CATEGORIES = [
            {
                name: "Food & Dining",
                isIncome: false,
                isExpense: true,
                subs: ["Groceries", "Restaurants", "Coffee Shops", "Fast Food"]
            },
            {
                name: "Housing & Utilities",
                isIncome: false,
                isExpense: true,
                subs: ["Rent/Mortgage", "Electricity", "Water", "Internet", "Gas"]
            },
            {
                name: "Transportation",
                isIncome: false,
                isExpense: true,
                subs: ["Fuel", "Public Transport", "Ride Sharing", "Vehicle Maintenance"]
            },
            {
                name: "Entertainment & Leisure",
                isIncome: false,
                isExpense: true,
                subs: ["Movies & Streaming", "Hobbies", "Gifts", "Vacation/Travel"]
            },
            {
                name: "Healthcare",
                isIncome: false,
                isExpense: true,
                subs: ["Medicines", "Doctor Consultations", "Health Insurance"]
            },
            {
                name: "Salary & Wages",
                isIncome: true,
                isExpense: false,
                subs: ["Full-time Job", "Freelance", "Bonus"]
            },
            {
                name: "Investments & Interest",
                isIncome: true,
                isExpense: false,
                subs: ["Stock Market", "Savings Interest", "Rental Income"]
            }
        ];

        for (const cat of DEFAULT_CATEGORIES) {
            const dbCat = await db.categories.create({
                data: {
                    CategoryName: cat.name,
                    IsIncome: cat.isIncome,
                    IsExpense: cat.isExpense,
                    IsActive: true,
                    UserID: userId,
                    Created: new Date(),
                    Modified: new Date(),
                }
            });

            for (const sub of cat.subs) {
                await db.sub_categories.create({
                    data: {
                        SubCategoryName: sub,
                        IsActive: true,
                        CategoryID: dbCat.CategoryID,
                        UserID: userId,
                        IsExpense: cat.isExpense,
                        IsIncome: cat.isIncome,
                        Created: new Date(),
                        Modified: new Date(),
                    }
                });
            }
        }
    } catch (err) {
        console.error("Error seeding default user data:", err);
    }
}

export async function signup(prevState: any, formData: FormData) {
    const name = formData.get("signup-name") as string;
    const email = formData.get("signup-email") as string;
    const password = formData.get("signup-password") as string;
    const role = formData.get("signup-role") as string || "User";
    const mobile = formData.get("signup-mobile") as string || "N/A";
    const profileImage = formData.get("signup-profile-image") as string || `https://api.dicebear.com/7.x/adventurer/svg?seed=${name}`;

    const validated = signupSchema.safeParse({ name, email, password, role });

    if (!validated.success) {
        return { error: validated.error.flatten().fieldErrors, message: "Invalid input" };
    }

    try {
        const existingUser = await db.users.findFirst({
            where: {
                EmailAddress: email,
            },
        });

        if (existingUser) {
            return { message: "User with this email already exists" };
        }

        const newUser = await db.users.create({
            data: {
                UserName: name,
                EmailAddress: email,
                Password: password, // In a real app, hash this!
                MobileNo: mobile,
                ProfileImage: profileImage,
                Role: role,
                Created: new Date(),
                Modified: new Date(),
            },
        });

        // Seed default categories, subcategories, projects and peoples so they can select them right away!
        await seedDefaultUserData(newUser.UserID, newUser.UserName, newUser.EmailAddress, newUser.MobileNo);

        const cookieStore = await cookies();
        cookieStore.set("userId", newUser.UserID.toString(), {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24 * 7, // 1 week
            path: "/",
        });

        cookieStore.set("userRole", newUser.Role, {
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24 * 7,
            path: "/",
        });
        cookieStore.set("userName", newUser.UserName, {
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24 * 7,
            path: "/",
        });

    } catch (error) {
        console.error("Signup error:", error);
        return { message: "An unexpected error occurred during signup" };
    }

    redirect("/dashboard");
}

export async function logout() {
    const cookieStore = await cookies();
    cookieStore.delete("userId");
    cookieStore.delete("userRole");
    cookieStore.delete("userName");
    redirect("/login");
}
