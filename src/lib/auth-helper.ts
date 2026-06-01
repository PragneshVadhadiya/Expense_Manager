import { cookies } from "next/headers";
import { db } from "./db";

export async function getUserId(): Promise<number> {
    const cookieStore = await cookies();
    const userIdCookie = cookieStore.get("userId");
    
    if (userIdCookie) {
        const parsed = parseInt(userIdCookie.value);
        if (!isNaN(parsed)) {
            return parsed;
        }
    }
    
    // Fallback if no cookie exists
    const user = await db.users.findFirst();
    return user ? user.UserID : 1; 
}
