"use client"

import { useActionState, Suspense, useState, useRef, useEffect, startTransition } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { 
    Lock, 
    User, 
    AlertCircle, 
    Mail, 
    UserPlus, 
    LogIn, 
    Check, 
    Eye, 
    EyeOff, 
    ChevronRight, 
    ArrowLeft, 
    Camera 
} from "lucide-react"
import { login, signup } from "@/actions/auth"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
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

    // Toggle between login and signup
    const [isSignUp, setIsSignUp] = useState(defaultTab === "signup")
    // Step machine for signup: 'create-account' | 'personal-details' | 'about-you'
    const [signupStep, setSignupStep] = useState<"create-account" | "personal-details" | "about-you">("create-account")

    // Client fields states
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    // Step 2 fields
    const [fullName, setFullName] = useState("")
    const [mobileNo, setMobileNo] = useState("")
    const [profileImg, setProfileImg] = useState<string | null>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)

    // Step 3 fields
    const [aboutYou, setAboutYou] = useState("")

    // Errors
    const [clientError, setClientError] = useState("")

    // Password validation tests
    const hasMinLength = password.length >= 8
    const hasNumber = /[0-9]/.test(password)
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password)

    // If a server signup error occurs, bounce the user back to step 1
    useEffect(() => {
        if (signupState?.message) {
            setSignupStep("create-account")
        }
    }, [signupState])

    // Local file reader for avatar preview
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setProfileImg(reader.result as string)
            }
            reader.readAsDataURL(file)
        }
    }

    // Step navigation actions
    const handleNextFromStep1 = () => {
        if (!username.trim()) {
            setClientError("Username is required")
            return
        }
        if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
            setClientError("A valid email address is required")
            return
        }
        if (!hasMinLength || !hasNumber || !hasSpecial) {
            setClientError("Password must satisfy all strength check requirements")
            return
        }
        if (password !== confirmPassword) {
            setClientError("Passwords do not match")
            return
        }

        setClientError("")
        setSignupStep("personal-details")
    }

    const handleNextFromStep2 = () => {
        if (!fullName.trim()) {
            setClientError("Full name is required to proceed. Alternatively, click 'Skip for now'.")
            return
        }
        setClientError("")
        setSignupStep("about-you")
    }

    const handleSkipStep2 = () => {
        setFullName("")
        setMobileNo("")
        setClientError("")
        setSignupStep("about-you")
    }

    const handleSubmit = (skipAbout = false) => {
        const finalAbout = skipAbout ? "" : aboutYou;

        const formData = new FormData()
        formData.append("signup-name", fullName.trim() || username.trim())
        formData.append("signup-email", email.trim())
        formData.append("signup-password", password)
        formData.append("signup-mobile", mobileNo.trim() || "N/A")
        formData.append("signup-profile-image", profileImg || `https://api.dicebear.com/7.x/adventurer/svg?seed=${username.trim()}`)
        formData.append("signup-role", "User")

        startTransition(() => {
            signupAction(formData)
        })
    }

    return (
        <div className="w-full min-h-[100dvh] flex flex-col lg:grid lg:grid-cols-2 relative bg-background">
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
            <div className="flex flex-1 items-center justify-center py-12 px-4 sm:px-6 min-h-[100dvh] lg:min-h-0 relative">
                {/* Mobile Background Blobs */}
                <div className="absolute inset-0 overflow-hidden lg:hidden pointer-events-none">
                    <div className="absolute -top-[20%] -right-[20%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]" />
                    <div className="absolute bottom-[-10%] -left-[10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]" />
                </div>

                {isSignUp ? (
                    /* ─── THREE-STEP SIGN UP WIZARD ─── */
                    <div className="mx-auto w-full max-w-[380px] z-10 space-y-6">
                        
                        {/* Step 1: Create Account */}
                        {signupStep === "create-account" && (
                            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                                <div className="text-center space-y-1">
                                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Create Account</h1>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Sign up for Expense Manager</p>
                                </div>

                                {(clientError || signupState?.message) && (
                                    <Alert variant="destructive" className="border-destructive/50 bg-destructive/10">
                                        <AlertCircle className="h-4 w-4" />
                                        <AlertTitle>Error</AlertTitle>
                                        <AlertDescription>{clientError || signupState.message}</AlertDescription>
                                    </Alert>
                                )}

                                <div className="space-y-4">
                                    <div className="space-y-1">
                                        <Label htmlFor="signup-username" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Username</Label>
                                        <Input
                                            id="signup-username"
                                            name="username"
                                            autoComplete="new-username"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            placeholder="Pragnesh Vadhadiya"
                                            className="h-11 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-xl focus:bg-background transition-all pl-4 text-slate-900 dark:text-white"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-1">
                                        <Label htmlFor="signup-email" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email</Label>
                                        <Input
                                            id="signup-email"
                                            type="email"
                                            name="email"
                                            autoComplete="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter your email"
                                            className="h-11 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-xl focus:bg-background transition-all pl-4 text-slate-900 dark:text-white"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-1">
                                        <Label htmlFor="signup-password-field" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Password</Label>
                                        <div className="relative">
                                            <Input
                                                id="signup-password-field"
                                                type={showPassword ? "text" : "password"}
                                                name="new-password"
                                                autoComplete="new-password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                placeholder="••••••••"
                                                className="h-11 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-xl focus:bg-background transition-all pl-4 pr-10 text-slate-900 dark:text-white"
                                                required
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-3 top-3.5 text-slate-400 hover:text-slate-600 transition-colors"
                                            >
                                                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                            </button>
                                        </div>

                                        {/* Password Strength Checklist */}
                                        <div className="space-y-1 pt-1.5 px-0.5">
                                            <div className="flex items-center text-xs space-x-2">
                                                {hasMinLength ? (
                                                    <Check className="w-3.5 h-3.5 text-emerald-500 stroke-[3px]" />
                                                ) : (
                                                    <Check className="w-3.5 h-3.5 text-slate-300" />
                                                )}
                                                <span className={hasMinLength ? "text-emerald-600 font-semibold" : "text-slate-500"}>At least 8 characters</span>
                                            </div>
                                            <div className="flex items-center text-xs space-x-2">
                                                {hasNumber ? (
                                                    <Check className="w-3.5 h-3.5 text-emerald-500 stroke-[3px]" />
                                                ) : (
                                                    <Check className="w-3.5 h-3.5 text-slate-300" />
                                                )}
                                                <span className={hasNumber ? "text-emerald-600 font-semibold" : "text-slate-500"}>At least one number</span>
                                            </div>
                                            <div className="flex items-center text-xs space-x-2">
                                                {hasSpecial ? (
                                                    <Check className="w-3.5 h-3.5 text-emerald-500 stroke-[3px]" />
                                                ) : (
                                                    <Check className="w-3.5 h-3.5 text-slate-300" />
                                                )}
                                                <span className={hasSpecial ? "text-emerald-600 font-semibold" : "text-slate-500"}>At least one special character</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <Label htmlFor="signup-confirm-password-field" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Confirm Password</Label>
                                        <div className="relative">
                                            <Input
                                                id="signup-confirm-password-field"
                                                type={showConfirmPassword ? "text" : "password"}
                                                name="confirm-password"
                                                autoComplete="new-password"
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                placeholder="Confirm your password"
                                                className="h-11 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-xl focus:bg-background transition-all pl-4 pr-10 text-slate-900 dark:text-white"
                                                required
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                className="absolute right-3 top-3.5 text-slate-400 hover:text-slate-600 transition-colors"
                                            >
                                                {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                            </button>
                                        </div>
                                    </div>

                                    <Button
                                        type="button"
                                        onClick={handleNextFromStep1}
                                        className="w-full h-11 mt-4 text-base font-bold bg-[#00a2e8] hover:bg-[#008cc9] text-white shadow-md rounded-xl transition-all"
                                    >
                                        Sign Up
                                    </Button>

                                    <div className="text-center pt-2">
                                        <button
                                            type="button"
                                            onClick={() => setIsSignUp(false)}
                                            className="text-sm text-slate-900 dark:text-white font-medium hover:underline underline-offset-4"
                                        >
                                            Already have an account? <span className="underline font-bold">Log in</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 2: Complete Profile (Step 1 of 2: Personal Details) */}
                        {signupStep === "personal-details" && (
                            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                                <div className="text-center space-y-1">
                                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Complete Profile</h1>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Step 1 of 2: Personal Details</p>
                                </div>

                                {clientError && (
                                    <Alert variant="destructive" className="border-destructive/50 bg-destructive/10">
                                        <AlertCircle className="h-4 w-4" />
                                        <AlertTitle>Error</AlertTitle>
                                        <AlertDescription>{clientError}</AlertDescription>
                                    </Alert>
                                )}

                                <div className="space-y-5 flex flex-col items-center">
                                    {/* Profile Avatar Dotted Circle */}
                                    <div className="flex flex-col items-center space-y-2">
                                        <div
                                            onClick={() => fileInputRef.current?.click()}
                                            className="w-24 h-24 rounded-full border-2 border-dashed border-slate-300 hover:border-[#00a2e8] dark:border-slate-700 flex flex-col items-center justify-center cursor-pointer transition-all bg-slate-50/50 dark:bg-slate-900/50 relative overflow-hidden group shadow-sm"
                                        >
                                            {profileImg ? (
                                                <img src={profileImg} alt="Profile Preview" className="w-full h-full object-cover" />
                                            ) : (
                                                <Camera className="w-8 h-8 text-slate-400 group-hover:text-[#00a2e8] transition-colors" />
                                            )}
                                        </div>
                                        <input
                                            type="file"
                                            ref={fileInputRef}
                                            onChange={handleFileChange}
                                            accept="image/*"
                                            className="hidden"
                                        />
                                        <span className="text-xs font-semibold text-slate-400">Tap to upload photo</span>
                                    </div>

                                    {/* Full Name */}
                                    <div className="space-y-1 w-full">
                                        <Label htmlFor="signup-fullname" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Full Name</Label>
                                        <Input
                                            id="signup-fullname"
                                            value={fullName}
                                            onChange={(e) => setFullName(e.target.value)}
                                            placeholder="Enter Full Name"
                                            className="h-11 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-xl focus:bg-background transition-all pl-4 text-slate-900 dark:text-white"
                                        />
                                    </div>

                                    {/* Mobile Number */}
                                    <div className="space-y-1 w-full">
                                        <Label htmlFor="signup-mobile" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Mobile Number</Label>
                                        <Input
                                            id="signup-mobile"
                                            value={mobileNo}
                                            onChange={(e) => setMobileNo(e.target.value)}
                                            placeholder="9999999999"
                                            className="h-11 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-xl focus:bg-background transition-all pl-4 text-slate-900 dark:text-white"
                                        />
                                    </div>

                                    <Button
                                        type="button"
                                        onClick={handleNextFromStep2}
                                        className="w-full h-11 mt-2 text-base font-bold bg-[#00a2e8] hover:bg-[#008cc9] text-white shadow-md rounded-xl flex items-center justify-center gap-1.5 transition-all"
                                    >
                                        Next Step <ChevronRight className="w-4 h-4 stroke-[3px]" />
                                    </Button>

                                    <div className="w-full flex items-center justify-between text-slate-300 dark:text-slate-800 py-1">
                                        <div className="h-[1px] bg-slate-200 dark:bg-slate-850 flex-1"></div>
                                        <span className="text-xs font-semibold px-4 text-slate-400">OR</span>
                                        <div className="h-[1px] bg-slate-200 dark:bg-slate-850 flex-1"></div>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={handleSkipStep2}
                                        className="text-base text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 font-bold transition-colors"
                                    >
                                        Skip for now
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Step 3: Complete Profile (Step 2 of 2: About You) */}
                        {signupStep === "about-you" && (
                            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                                <div className="text-center space-y-1">
                                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Complete Profile</h1>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Step 2 of 2: About You</p>
                                </div>

                                {clientError && (
                                    <Alert variant="destructive" className="border-destructive/50 bg-destructive/10">
                                        <AlertCircle className="h-4 w-4" />
                                        <AlertTitle>Error</AlertTitle>
                                        <AlertDescription>{clientError}</AlertDescription>
                                    </Alert>
                                )}

                                <div className="space-y-5">
                                    {/* About You textarea */}
                                    <div className="space-y-1">
                                        <Label htmlFor="signup-about" className="text-sm font-semibold text-slate-700 dark:text-slate-300">About You</Label>
                                        <textarea
                                            id="signup-about"
                                            value={aboutYou}
                                            onChange={(e) => setAboutYou(e.target.value)}
                                            placeholder="Tell us a bit about yourself..."
                                            rows={5}
                                            className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:border-[#00a2e8] focus:ring-1 focus:ring-[#00a2e8] rounded-xl text-slate-900 dark:text-white p-4 text-sm transition-all focus:outline-none resize-none shadow-sm"
                                        />
                                    </div>

                                    {/* Actions */}
                                    <div className="flex gap-4 w-full pt-1">
                                        <Button
                                            type="button"
                                            onClick={() => setSignupStep("personal-details")}
                                            className="h-11 border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 dark:border-slate-800 dark:text-slate-300 dark:bg-slate-955 dark:hover:bg-slate-900 font-bold rounded-xl flex items-center justify-center px-6 transition-all"
                                        >
                                            <ArrowLeft className="w-4 h-4 mr-1.5 stroke-[2.5px]" /> Back
                                        </Button>

                                        <Button
                                            type="button"
                                            onClick={() => handleSubmit(false)}
                                            className="h-11 flex-1 text-base font-bold bg-[#00a2e8] hover:bg-[#008cc9] text-white shadow-md rounded-xl transition-all"
                                            disabled={isSignupPending}
                                        >
                                            {isSignupPending ? "Setting up..." : "Complete Setup"}
                                        </Button>
                                    </div>

                                    <div className="w-full flex items-center justify-between text-slate-300 dark:text-slate-800 py-1">
                                        <div className="h-[1px] bg-slate-200 dark:bg-slate-850 flex-1"></div>
                                        <span className="text-xs font-semibold px-4 text-slate-400">OR</span>
                                        <div className="h-[1px] bg-slate-200 dark:bg-slate-850 flex-1"></div>
                                    </div>

                                    <div className="flex justify-center">
                                        <button
                                            type="button"
                                            onClick={() => handleSubmit(true)}
                                            className="text-base text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 font-bold transition-colors"
                                            disabled={isSignupPending}
                                        >
                                            Skip for now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    /* ─── PREMIUM CUSTOM LOGIN CARD ─── */
                    <div className="mx-auto w-full max-w-[380px] z-10 space-y-6 animate-in fade-in slide-in-from-left-4 duration-300">
                        <div className="text-center space-y-1">
                            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Welcome back</h1>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Enter your email to sign in to your account</p>
                        </div>

                        <form action={loginAction} className="space-y-4">
                            {loginState?.message && (
                                <Alert variant="destructive" className="border-destructive/50 bg-destructive/10">
                                    <AlertCircle className="h-4 w-4" />
                                    <AlertTitle>Error</AlertTitle>
                                    <AlertDescription>{loginState.message}</AlertDescription>
                                </Alert>
                            )}

                            <div className="space-y-1 group">
                                <Label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email</Label>
                                <div className="relative">
                                    <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400 group-focus-within:text-[#00a2e8] transition-colors" />
                                    <Input
                                        id="email"
                                        name="email"
                                        placeholder="name@example.com"
                                        type="email"
                                        className="pl-11 h-11 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 focus:bg-background rounded-xl text-slate-900 dark:text-white transition-all shadow-sm"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-1 group">
                                <Label htmlFor="password" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Password</Label>
                                <div className="relative">
                                    <Lock className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400 group-focus-within:text-[#00a2e8] transition-colors" />
                                    <Input
                                        id="password"
                                        name="password"
                                        type="password"
                                        placeholder="••••••••"
                                        className="pl-11 h-11 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 focus:bg-background rounded-xl text-slate-900 dark:text-white transition-all shadow-sm"
                                        required
                                    />
                                </div>
                            </div>

                            <Button 
                                type="submit" 
                                className="w-full h-11 mt-2 text-base font-bold bg-[#00a2e8] hover:bg-[#008cc9] text-white shadow-md rounded-xl transition-all"
                                disabled={isLoginPending}
                            >
                                <LogIn className="mr-2 h-4 w-4 stroke-[2.5px]" />
                                {isLoginPending ? "Signing in..." : "Sign In"}
                            </Button>
                        </form>

                        <div className="text-center pt-2">
                            <button
                                type="button"
                                onClick={() => setIsSignUp(true)}
                                className="text-sm text-slate-900 dark:text-white font-medium hover:underline underline-offset-4"
                            >
                                Don't have an account? <span className="underline font-bold">Sign Up</span>
                            </button>
                        </div>
                    </div>
                )}
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
