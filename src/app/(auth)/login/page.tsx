"use client"

import { useActionState, Suspense } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Lock, User, AlertCircle, Mail, UserPlus, LogIn } from "lucide-react"
import { login, signup } from "@/actions/auth"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useSearchParams } from "next/navigation"

const initialState = {
    message: "",
    error: undefined,
}

function AuthPageContent() {
    const [loginState, loginAction, isLoginPending] = useActionState(login, initialState)
    const [signupState, signupAction, isSignupPending] = useActionState(signup, initialState)

    const searchParams = useSearchParams()
    const defaultTab = searchParams.get("tab") === "signup" ? "signup" : "login"

    return (
        <div className="w-full min-h-[100dvh] flex flex-col lg:grid lg:grid-cols-2 relative">
            {/* Left Side - Hero Section */}
            <div className="hidden lg:flex flex-col relative bg-muted text-white dark:border-r h-full">
                <div className="absolute inset-0 bg-zinc-900" />
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-amber-500 opacity-90" />

                {/* Abstract Pattern */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl mix-blend-overlay animate-pulse duration-[5000ms]" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl mix-blend-overlay animate-pulse duration-[7000ms]" />
                </div>

                <div className="relative z-20 flex flex-col justify-between h-full p-10">
                    <div className="flex items-center gap-2 text-lg font-medium">
                        <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center font-bold">E</div>
                        Expense Manager
                    </div>

                    <div className="space-y-6 max-w-lg">
                        <blockquote className="space-y-2">
                            <p className="text-4xl font-bold leading-tight tracking-tight">
                                "Financial freedom begins with tracking your every expense."
                            </p>
                            <footer className="text-sm font-medium opacity-80 pt-4">
                                — The Expense Manager Team
                            </footer>
                        </blockquote>
                    </div>

                    <div className="text-sm opacity-60">
                        © 2026 Expense Manager Inc. All rights reserved.
                    </div>
                </div>
            </div>

            {/* Right Side - Auth Forms */}
            <div className="flex flex-1 items-center justify-center py-12 px-4 sm:px-6 min-h-[100dvh] lg:min-h-0 relative bg-background">
                {/* Mobile Background Blobs */}
                <div className="absolute inset-0 overflow-hidden lg:hidden pointer-events-none">
                    <div className="absolute -top-[20%] -right-[20%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]" />
                    <div className="absolute bottom-[-10%] -left-[10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]" />
                </div>

                <div className="mx-auto grid w-full max-w-[400px] gap-6 z-10">
                    <div className="flex flex-col space-y-2 text-center">
                        <h1 className="text-3xl font-bold tracking-tight">
                            {defaultTab === 'signup' ? 'Create an account' : 'Welcome back'}
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            {defaultTab === 'signup'
                                ? 'Enter your details below to create your account'
                                : 'Enter your email to sign in to your account'}
                        </p>
                    </div>

                    <Tabs defaultValue={defaultTab} className="w-full">
                        <TabsList className="grid w-full grid-cols-2 mb-8 bg-muted/50 p-1">
                            <TabsTrigger value="login" className="data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all duration-300">Login</TabsTrigger>
                            <TabsTrigger value="signup" className="data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all duration-300">Sign Up</TabsTrigger>
                        </TabsList>

                        <TabsContent value="login" className="space-y-4 animate-in fade-in slide-in-from-left-4 duration-500">
                            <form action={loginAction} className="space-y-4">
                                {loginState?.message && (
                                    <Alert variant="destructive" className="border-destructive/50 bg-destructive/10">
                                        <AlertCircle className="h-4 w-4" />
                                        <AlertTitle>Error</AlertTitle>
                                        <AlertDescription>{loginState.message}</AlertDescription>
                                    </Alert>
                                )}
                                <div className="space-y-2 group">
                                    <Label htmlFor="email">Email</Label>
                                    <div className="relative transform transition-all duration-200">
                                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                        <Input
                                            id="email"
                                            name="email"
                                            placeholder="name@example.com"
                                            type="email"
                                            className="pl-10 h-11 bg-muted/30 border-muted-foreground/20 focus:bg-background transition-all"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2 group">
                                    <Label htmlFor="password">Password</Label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                        <Input
                                            id="password"
                                            name="password"
                                            type="password"
                                            className="pl-10 h-11 bg-muted/30 border-muted-foreground/20 focus:bg-background transition-all"
                                            required
                                        />
                                    </div>
                                </div>
                                <Button type="submit" className="w-full h-11 text-base shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all" disabled={isLoginPending}>
                                    <LogIn className="mr-2 h-4 w-4" />
                                    {isLoginPending ? "Signing in..." : "Sign In"}
                                </Button>
                            </form>
                        </TabsContent>

                        <TabsContent value="signup" className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-500">
                            <form action={signupAction} className="space-y-4" autoComplete="off">
                                {signupState?.message && (
                                    <Alert variant="destructive" className="border-destructive/50 bg-destructive/10">
                                        <AlertCircle className="h-4 w-4" />
                                        <AlertTitle>Error</AlertTitle>
                                        <AlertDescription>{signupState.message}</AlertDescription>
                                    </Alert>
                                )}
                                <div className="space-y-2 group">
                                    <Label htmlFor="signup-name">Full Name</Label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                        <Input
                                            id="signup-name"
                                            name="signup-name"
                                            type="text"
                                            className="pl-10 h-11 bg-muted/30 border-muted-foreground/20 focus:bg-background transition-all"
                                            required
                                            autoComplete="off"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2 group">
                                    <Label htmlFor="signup-email">Email</Label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                        <Input
                                            id="signup-email"
                                            name="signup-email"
                                            type="email"
                                            className="pl-10 h-11 bg-muted/30 border-muted-foreground/20 focus:bg-background transition-all"
                                            required
                                            autoComplete="off"
                                            placeholder="name@example.com"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2 group">
                                    <Label htmlFor="signup-password">Password</Label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                        <Input
                                            id="signup-password"
                                            name="signup-password"
                                            type="password"
                                            className="pl-10 h-11 bg-muted/30 border-muted-foreground/20 focus:bg-background transition-all"
                                            required
                                            autoComplete="new-password"
                                            placeholder="******"
                                        />
                                    </div>
                                    <p className="text-xs text-muted-foreground px-1">Must be at least 6 characters long</p>
                                </div>
                                <div className="space-y-2 group">
                                    <Label htmlFor="signup-role">Role</Label>
                                    <div className="relative">
                                        <select
                                            id="signup-role"
                                            name="signup-role"
                                            className="w-full pl-3 h-11 rounded-md bg-muted/30 border border-muted-foreground/20 focus:bg-background focus:ring-2 focus:ring-primary transition-all appearance-none text-sm"
                                            defaultValue="User"
                                        >
                                            <option value="User">User</option>
                                            <option value="Admin">Admin</option>
                                        </select>
                                    </div>
                                </div>
                                <Button type="submit" className="w-full h-11 text-base shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all" disabled={isSignupPending}>
                                    <UserPlus className="mr-2 h-4 w-4" />
                                    {isSignupPending ? "Creating Account..." : "Create Account"}
                                </Button>
                            </form>
                        </TabsContent>
                    </Tabs>

                    <p className="px-8 text-center text-sm text-muted-foreground">
                        By clicking continue, you agree to our{" "}
                        <span className="underline underline-offset-4 hover:text-primary cursor-pointer">
                            Terms of Service
                        </span>{" "}
                        and{" "}
                        <span className="underline underline-offset-4 hover:text-primary cursor-pointer">
                            Privacy Policy
                        </span>
                        .
                    </p>
                </div>
            </div>
        </div>
    )
}

export default function AuthPage() {
    return (
        <Suspense fallback={<div className="flex h-screen w-full items-center justify-center">Loading...</div>}>
            <AuthPageContent />
        </Suspense>
    )
}
