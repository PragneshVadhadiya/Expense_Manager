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

export async function signup(prevState: any, formData: FormData) {
    const name = formData.get("signup-name") as string;
    const email = formData.get("signup-email") as string;
    const password = formData.get("signup-password") as string;
    const role = formData.get("signup-role") as string || "User";

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
                MobileNo: "N/A", // Default value as it is required but not in form
                Role: role,
                Created: new Date(),
                Modified: new Date(),
            },
        });

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
