import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LandingNavbar } from "@/components/landing-navbar";
import { ArrowRight, PieChart, CreditCard, TrendingUp, Activity, IndianRupee } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden font-sans relative selection:bg-primary/20 selection:text-primary">

      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] mix-blend-multiply animate-blob"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary/30 rounded-full blur-[100px] mix-blend-multiply animate-blob animation-delay-2000"></div>
        <div className="absolute top-[20%] left-[20%] w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] mix-blend-multiply animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-[-10%] right-[20%] w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] opacity-50"></div>
      </div>

      <LandingNavbar />

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 md:pt-40 md:grid md:grid-cols-2 gap-12 items-center min-h-[90vh]">
        {/* Left Content */}
        <div className="space-y-8 md:pr-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-secondary text-secondary-foreground text-sm font-medium animate-in fade-in slide-in-from-bottom-4 duration-500">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Be smart with your money
          </div>

          <div className="relative">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1] animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
              Control <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                Your Finances
              </span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto md:mx-0 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
              Track expenses, set budgets, and achieve your financial goals with our intuitive and beautiful expense manager.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start pt-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <Button
              asChild
              className="h-12 px-8 rounded-full text-lg shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all hover:scale-105"
            >
              <Link href="/login">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>

          <div className="pt-8 flex items-center justify-center md:justify-start gap-8 opacity-80 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
            <div>
              <h3 className="text-3xl font-bold text-foreground">50K+</h3>
              <p className="text-muted-foreground text-sm">Active Users</p>
            </div>
            <div className="w-px h-10 bg-border"></div>
            <div>
              <h3 className="text-3xl font-bold text-foreground">4.9</h3>
              <p className="text-muted-foreground text-sm">App Rating</p>
            </div>
          </div>
        </div>

        {/* Right Content - Abstract Mockup */}
        <div className="relative mt-16 md:mt-0 h-[400px] md:h-[600px] w-full perspective-1000 animate-in fade-in zoom-in-95 duration-1000 delay-300">
          {/* Floating Cards Composition */}
          <div className="absolute inset-0 flex items-center justify-center">

            {/* Back Card (Chart) */}
            <div className="absolute top-[10%] right-[10%] w-72 h-80 bg-white/80 dark:bg-black/40 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl skew-y-3 -rotate-6 transform transition-transform hover:-translate-y-2 duration-500 flex flex-col p-6 z-10">
              <div className="flex justify-between items-center mb-6">
                <span className="text-sm font-semibold text-muted-foreground">Monthly Spend</span>
                <PieChart className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 flex items-center justify-center relative">
                {/* CSS Pie Chart */}
                <div className="w-32 h-32 rounded-full border-8 border-primary/20 relative">
                  <div className="absolute inset-0 border-8 border-primary border-t-transparent border-r-transparent rounded-full rotate-45"></div>
                </div>
              </div>
              <div className="mt-4 flex justify-between items-end">
                <div>
                  <div className="text-2xl font-bold">₹2,450</div>
                  <div className="text-xs text-green-500 font-medium">+12% vs last month</div>
                </div>
              </div>
            </div>

            {/* Front Card (Credit Card) */}
            <div className="absolute bottom-[20%] left-[10%] w-80 h-48 bg-gradient-to-br from-primary to-purple-800 rounded-3xl shadow-2xl shadow-primary/30 skew-y-3 rotate-3 transform transition-transform hover:-translate-y-2 duration-500 z-20 overflow-hidden p-6 text-white flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
              <div className="flex justify-between items-start">
                <div className="w-10 h-6 bg-white/20 rounded-md backdrop-blur-md"></div>
                <CreditCard className="w-6 h-6 text-white/80" />
              </div>
              <div className="space-y-4 relative z-10">
                <div className="text-lg tracking-widest font-mono opacity-90">**** **** **** 4289</div>
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-xs opacity-70 uppercase">Card Holder</div>
                    <div className="font-medium">Pragnesh Vadhadiya</div>
                  </div>
                  <div>
                    <div className="text-xs opacity-70 uppercase">Expires</div>
                    <div className="font-medium">09/28</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Bubble (Transaction) */}
            <div className="absolute top-[40%] right-[5%] bg-white dark:bg-zinc-900 p-4 rounded-2xl shadow-xl z-30 flex items-center gap-3 animate-bounce duration-[3000ms]">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                <IndianRupee className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold opacity-70">Netflix</div>
                <div className="text-sm font-bold text-red-500">-₹15.99</div>
              </div>
            </div>

            {/* Floating Bubble (Income) */}
            <div className="absolute bottom-[30%] left-[-5%] bg-white dark:bg-zinc-900 p-4 rounded-2xl shadow-xl z-30 flex items-center gap-3 animate-bounce duration-[3000ms]">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold opacity-70">Salary</div>
                <div className="text-sm font-bold text-green-500">+₹4,250</div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
