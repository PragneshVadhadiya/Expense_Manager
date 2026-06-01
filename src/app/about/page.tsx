import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LandingNavbar } from "@/components/landing-navbar";
import {
  ArrowRight,
  Target,
  Zap,
  Shield,
  Heart,
  TrendingUp,
  IndianRupee,
  BarChart3,
  Users,
  Award,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | ExpensMan",
  description:
    "Learn about ExpensMan — our mission to help everyone take control of their finances with smart, beautiful, and intuitive expense tracking.",
};



const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "Empower every individual and family to make smarter financial decisions through intuitive tools, beautiful design, and real-time insights.",
    gradient: "from-violet-500 to-purple-600",
    bg: "bg-violet-50 dark:bg-violet-950/20",
  },
  {
    icon: Zap,
    title: "Innovation First",
    description:
      "We constantly push the boundaries of what expense tracking can be — from smart categorization to predictive budgeting powered by data.",
    gradient: "from-purple-500 to-indigo-600",
    bg: "bg-purple-50 dark:bg-purple-950/20",
  },
  {
    icon: Shield,
    title: "Privacy & Security",
    description:
      "Your financial data is sacred. We use bank-grade encryption and never sell your information. Your data stays yours — always.",
    gradient: "from-indigo-500 to-blue-600",
    bg: "bg-indigo-50 dark:bg-indigo-950/20",
  },
  {
    icon: Heart,
    title: "Built with Care",
    description:
      "Every pixel, every interaction, every feature is crafted with care for the end user experience. We obsess over the details so you don't have to.",
    gradient: "from-pink-500 to-rose-600",
    bg: "bg-pink-50 dark:bg-pink-950/20",
  },
];

const features = [
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description: "Visual reports that reveal your spending patterns at a glance.",
  },
  {
    icon: TrendingUp,
    title: "Budget Goals",
    description: "Set monthly budgets and get alerts before you overspend.",
  },
  {
    icon: IndianRupee,
    title: "Multi-Currency",
    description: "Track expenses in any currency with real-time conversion.",
  },
  {
    icon: Users,
    title: "Team Expenses",
    description: "Manage shared expenses for families, teams and groups.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "End-to-end encryption keeps your financial data protected.",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized as a top-rated finance app across all platforms.",
  },
];

const team = [
  {
    name: "Pragnesh Vadhadiya",
    role: "Founder & CEO",
    initials: "PV",
    gradient: "from-violet-500 to-purple-700",
    bio: "Passionate about making financial literacy accessible to everyone through elegant software.",
  },
  {
    name: "Aryan Shah",
    role: "Lead Designer",
    initials: "AS",
    gradient: "from-purple-500 to-indigo-700",
    bio: "Crafting beautiful, user-first interfaces that make complex data feel effortless.",
  },
  {
    name: "Riya Patel",
    role: "Head of Engineering",
    initials: "RP",
    gradient: "from-indigo-500 to-blue-700",
    bio: "Building robust, scalable systems that handle millions of transactions reliably.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden font-sans relative selection:bg-primary/20 selection:text-primary">
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] mix-blend-multiply animate-blob" />
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary/30 rounded-full blur-[100px] mix-blend-multiply animate-blob animation-delay-2000" />
        <div className="absolute top-[50%] left-[20%] w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] mix-blend-multiply animate-blob animation-delay-4000" />
        <div className="absolute bottom-[-10%] right-[20%] w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] opacity-50" />
      </div>

      <LandingNavbar />

      {/* ─── Hero ─── */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pt-36 pb-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/50 border border-secondary text-secondary-foreground text-sm font-medium mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          Our Story
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
          We&apos;re on a mission to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
            simplify finance
          </span>
        </h1>

        <p className="mt-6 text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
          ExpensMan was born from a simple frustration — managing money shouldn&apos;t
          be complicated. We built a tool we wished existed, and now we share it
          with the world.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          <Button
            asChild
            className="h-12 px-8 rounded-full text-lg shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all hover:scale-105"
          >
            <Link href="/login?tab=signup">
              Start Free Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-12 px-8 rounded-full text-lg border-border hover:border-primary/50 transition-all"
          >
            <Link href="/dashboard">View Dashboard</Link>
          </Button>
        </div>
      </section>



      {/* ─── Values ─── */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pb-28">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            What drives{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
              us forward
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Four core principles that shape every decision we make.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className={`group relative ${v.bg} border border-border/50 hover:border-primary/30 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10`}
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${v.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg`}
              >
                <v.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{v.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Features Grid ─── */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pb-28">
        <div className="relative bg-gradient-to-br from-primary/5 via-purple-500/5 to-indigo-500/5 border border-border/50 rounded-3xl p-10 md:p-14 overflow-hidden">
          {/* Decorative blob inside section */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Everything you need to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                thrive financially
              </span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              A complete suite of tools designed for modern money management.
            </p>
          </div>

          <div className="relative grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="group bg-white/70 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 rounded-2xl p-6 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <f.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Team ─── */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pb-28">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Meet the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
              team
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            A small, passionate group obsessed with great software and financial
            wellness.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="group bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-border/50 hover:border-primary/30 rounded-3xl p-8 text-center hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
            >
              {/* Avatar */}
              <div
                className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center mx-auto mb-5 text-white text-2xl font-bold group-hover:scale-110 transition-transform shadow-lg`}
              >
                {member.initials}
              </div>
              <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
              <div className="text-sm font-medium text-primary mt-1 mb-3">
                {member.role}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pb-28">
        <div className="relative bg-gradient-to-br from-primary to-purple-700 rounded-3xl p-12 md:p-16 text-center overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -mt-10 -ml-10 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -mb-10 -mr-10 pointer-events-none" />

          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              Ready to take control of
              <br />
              your finances?
            </h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
              Join thousands of smart savers who use ExpensMan every day. It&apos;s
              free to get started — no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Button
                asChild
                className="h-12 px-10 rounded-full text-lg bg-white text-primary hover:bg-white/90 shadow-xl hover:scale-105 transition-all font-semibold"
              >
                <Link href="/login?tab=signup">
                  Get Started Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Link
                href="/"
                className="text-white/80 hover:text-white text-sm font-medium transition-colors underline underline-offset-4"
              >
                Learn more on home page
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="relative z-10 border-t border-border/40 py-8 text-center text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-foreground">ExpensMan</span>. Made
          with{" "}
          <Heart className="inline w-4 h-4 text-red-500 fill-red-500 mx-0.5 align-text-bottom" />{" "}
          by Pragnesh Vadhadiya.
        </p>
      </footer>
    </div>
  );
}
