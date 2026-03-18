"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    LayoutDashboard,
    FolderKanban,
    Users,
    Receipt,
    BarChart3,
    LogOut,
    Menu,
    PieChart,
    Settings
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
    items: {
        href: string
        title: string
        icon: React.ComponentType<{ className?: string }>
    }[]
}

// SidebarNav moved to bottom
const sidebarItems = [
    { href: "/dashboard", title: "Dashboard", icon: LayoutDashboard },
    { href: "/projects", title: "Projects", icon: FolderKanban },
    { href: "/people", title: "People & Users", icon: Users },
    { href: "/expenses", title: "Expenses & Income", icon: Receipt },
    { href: "/categories", title: "Categories", icon: PieChart },
    { href: "/reports", title: "Reports", icon: BarChart3 },
]

import { ModeToggle } from "@/components/mode-toggle"
import { useEffect, useState } from "react"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [role, setRole] = useState("User")
    const [name, setName] = useState("User Detail")

    useEffect(() => {
        const cookies = document.cookie.split("; ");
        const roleCookie = cookies.find(row => row.startsWith("userRole="));
        if (roleCookie) {
            setRole(decodeURIComponent(roleCookie.split("=")[1]));
        }

        const nameCookie = cookies.find(row => row.startsWith("userName="));
        if (nameCookie) {
            setName(decodeURIComponent(nameCookie.split("=")[1]).replace(/\+/g, " "));
        }
    }, [])

    const filteredSidebarItems = sidebarItems.filter(item => {
        if (role === "Admin") return true; 
        if (role === "User") {
            // Hide Projects, People & Users, and Categories from regular users
            return !["/projects", "/people", "/categories"].includes(item.href);
        }
        return true;
    });
    return (
        <div className="flex min-h-screen flex-col lg:flex-row">
            {/* Mobile Header */}
            <div className="lg:hidden flex items-center justify-between p-4 border-b bg-sidebar">
                <span className="font-bold text-lg text-sidebar-foreground">Expense Manager</span>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Menu className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-64 bg-sidebar">
                        <div className="px-2 py-6">
                            <h2 className="mb-6 text-lg font-semibold tracking-tight px-4 text-sidebar-primary-foreground">
                                Expense Manager
                            </h2>
                            <SidebarNav items={filteredSidebarItems} />
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                            <ModeToggle />
                        </div>
                    </SheetContent>
                </Sheet>
            </div>

            {/* Desktop Sidebar */}
            <aside className="hidden lg:flex flex-col w-64 border-r bg-sidebar min-h-screen sticky top-0">
                <div className="p-6 pb-2">
                    <h2 className="text-xl font-bold tracking-tight text-primary flex items-center gap-2 mb-6">
                        <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center">
                            <LayoutDashboard className="h-5 w-5 text-primary" />
                        </div>
                        Expense Manager
                    </h2>

                </div>
                <div className="flex-1 px-4 py-2 overflow-auto">
                    <SidebarNav items={filteredSidebarItems} className="space-y-2" />
                </div>
                <div className="p-4 border-t border-sidebar-border bg-sidebar/50 mt-auto">
                    <div className="flex items-center justify-between mb-4 p-2 bg-sidebar-accent/50 rounded-lg">
                        <span className="text-xs font-medium text-muted-foreground ml-1">Preferences</span>
                        <ModeToggle />
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-sidebar-accent cursor-pointer transition-colors">
                        <Avatar className="h-9 w-9 border-2 border-background">
                            <AvatarImage src="/avatars/01.png" alt={`@${name}`} />
                            <AvatarFallback className="bg-primary text-primary-foreground">
                                {name.charAt(0).toUpperCase()}
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                            <span className="text-sm font-medium text-sidebar-foreground">{name}</span>
                            <span className="text-xs text-muted-foreground">{role}</span>
                        </div>
                    </div>
                    <Button variant="ghost" className="w-full justify-start mt-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10" asChild>
                        <Link href="/login">
                            <LogOut className="mr-2 h-4 w-4" />
                            Log out
                        </Link>
                    </Button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 bg-background h-screen overflow-y-auto">
                <div className="p-4 lg:p-8 pb-20">
                    {children}
                </div>
            </main>
        </div>
    )
}

function SidebarNav({ className, items, ...props }: SidebarNavProps) {
    const pathname = usePathname()

    return (
        <nav className={cn("flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1", className)} {...props}>
            {items.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                        "justify-start text-sm font-medium transition-all duration-200 flex items-center gap-3 px-3 py-2.5 rounded-lg group",
                        pathname === item.href
                            ? "bg-primary text-primary-foreground shadow-md"
                            : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    )}
                >
                    <item.icon className={cn("h-4 w-4 transition-colors", pathname === item.href ? "text-primary-foreground" : "text-muted-foreground group-hover:text-primary")} />
                    {item.title}
                </Link>
            ))}
        </nav>
    )
}
