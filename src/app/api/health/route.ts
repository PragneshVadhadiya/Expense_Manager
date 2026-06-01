import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
    const checks: Record<string, any> = {
        timestamp: new Date().toISOString(),
        env_database_url: process.env.DATABASE_URL ? "SET ✅" : "MISSING ❌",
        database_url_preview: process.env.DATABASE_URL
            ? process.env.DATABASE_URL.substring(0, 40) + "..."
            : "Not configured",
        node_env: process.env.NODE_ENV,
    };

    try {
        // Test DB connection
        await db.$queryRaw`SELECT 1 as ok`;
        checks.database_connection = "Connected ✅";

        // Test user table
        const userCount = await db.users.count();
        checks.users_in_db = userCount;
    } catch (error: any) {
        checks.database_connection = "FAILED ❌";
        checks.database_error = error?.message || String(error);
        checks.error_code = error?.code;

        return NextResponse.json(checks, { status: 500 });
    }

    return NextResponse.json(checks, { status: 200 });
}
