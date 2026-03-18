"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function LandingNavbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full bg-background/50 backdrop-blur-md border-b border-border/40 supports-[backdrop-filter]:bg-background/20 mt-4 rounded-full">
            {/* Logo */}
            <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold font-sans text-foreground flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold">E</div>
                    ExpensMan
                </Link>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-12">
                <Link href="/" className="text-muted-foreground hover:text-primary font-medium text-sm transition-colors">
                    Home
                </Link>
                <Link href="/dashboard" className="text-muted-foreground hover:text-primary font-medium text-sm transition-colors">
                    Dashboard
                </Link>
                <Link href="/about" className="text-muted-foreground hover:text-primary font-medium text-sm transition-colors">
                    About Us
                </Link>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center gap-4">
                <Link href="/login" className="hidden md:block font-medium text-muted-foreground hover:text-primary text-sm transition-colors">
                    Login
                </Link>
                <Link href="/login?tab=signup">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all rounded-full px-6 shadow-lg shadow-primary/25">
                        Sign up
                    </Button>
                </Link>
            </div>
        </nav>
    );
}
