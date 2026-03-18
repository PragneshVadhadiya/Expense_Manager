"use client"
import { useEffect, useState } from "react"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, Legend, LineChart, Line } from "recharts"
import { Button } from "@/components/ui/button"
import { ArrowDownIcon, ArrowUpIcon, IndianRupee, CreditCard, Activity, TrendingUp, FileText, Download } from "lucide-react"

// Mock Data
const data = [
    { name: "Jan", total: 1200, expenses: 1400 }, // Expenses > Income
    { name: "Feb", total: 2100, expenses: 1200 }, // Income > Expenses (Crossed)
    { name: "Mar", total: 1800, expenses: 2000 }, // Expenses > Income (Crossed)
    { name: "Apr", total: 2400, expenses: 1600 }, // Income > Expenses (Crossed)
    { name: "May", total: 1500, expenses: 1700 }, // Expenses > Income (Crossed)
    { name: "Jun", total: 3200, expenses: 2200 }, // Income > Expenses (Crossed)
]

const pieData = [
    { name: "Rent", value: 1200, color: "hsl(270, 70%, 55%)" },
    { name: "Food", value: 800, color: "hsl(160, 60%, 45%)" },
    { name: "Utilities", value: 450, color: "hsl(30, 80%, 55%)" },
    { name: "Entertainment", value: 300, color: "hsl(210, 70%, 50%)" },
    { name: "Others", value: 200, color: "hsl(340, 75%, 55%)" },
]

const COLORS = ['hsl(270, 70%, 55%)', 'hsl(160, 60%, 45%)', 'hsl(30, 80%, 55%)', 'hsl(210, 70%, 50%)', 'hsl(340, 75%, 55%)'];

export default function DashboardPage() {
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const cookies = document.cookie.split("; ");
        const roleCookie = cookies.find(row => row.startsWith("userRole="));
        if (roleCookie) {
            const role = decodeURIComponent(roleCookie.split("=")[1]);
            setIsAdmin(role === "Admin");
        }
    }, []);

    const handleDownload = (reportName: string) => {
        // Mock data for Excel/CSV export
        const csvRows = [
            ["Date", "Description", "Category", "Amount", "Type"],
            ["2025-12-01", "Office Rent", "Rent", "-1200", "Expense"],
            ["2025-12-05", "Client Payment - Project A", "Income", "3500", "Income"],
            ["2025-12-10", "Team Lunch", "Food", "-250", "Expense"],
            ["2025-12-15", "AWS Server Costs", "Utilities", "-450", "Expense"],
            ["2025-12-20", "Freelancer Payment", "Outsourcing", "-1500", "Expense"],
            ["2025-12-28", "Year End Bonus", "Income", "5000", "Income"],
        ];

        const csvContent = "data:text/csv;charset=utf-8,"
            + csvRows.map(e => e.join(",")).join("\n");

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", `${reportName.replace(/\s+/g, "_")}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div className="flex-1 space-y-6 p-6 md:p-8 pt-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-2 md:space-y-0">
                <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                    {isAdmin ? "Admin Dashboard" : "Dashboard Overview"}
                </h2>
                <div className="flex items-center space-x-2">
                    {/* Date Range Picker Could Go Here */}
                </div>
            </div>
            <Tabs defaultValue="overview" className="space-y-6">
                <TabsList className="bg-muted/50 p-1 rounded-xl">
                    <TabsTrigger value="overview" className="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm">Overview</TabsTrigger>
                    <TabsTrigger value="analytics" className="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm">Analytics</TabsTrigger>
                    <TabsTrigger value="reports" className="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm">Reports</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="space-y-6">
                    {/* Summary Cards */}
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        <Card className="hover:shadow-lg transition-all duration-300 border-none shadow-md bg-gradient-to-br from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/5 dark:to-purple-500/5">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium text-muted-foreground">
                                    {isAdmin ? "Total Revenue" : "Total Income"}
                                </CardTitle>
                                <div className="h-8 w-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                                    <IndianRupee className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">₹45,231.89</div>
                                <p className="text-xs text-muted-foreground mt-1 flex items-center">
                                    <span className="text-emerald-500 flex items-center mr-1"><TrendingUp className="w-3 h-3 mr-1" /> +20.1%</span> from last month
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="hover:shadow-lg transition-all duration-300 border-none shadow-md bg-gradient-to-br from-rose-500/10 to-orange-500/10 dark:from-rose-500/5 dark:to-orange-500/5">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium text-muted-foreground">
                                    {isAdmin ? "Total Expenses" : "Total Expenses"}
                                </CardTitle>
                                <div className="h-8 w-8 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center">
                                    <ArrowDownIcon className="h-4 w-4 text-rose-600 dark:text-rose-400" />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">₹12,345.00</div>
                                <p className="text-xs text-muted-foreground mt-1 flex items-center">
                                    <span className="text-rose-500 flex items-center mr-1"><ArrowDownIcon className="w-3 h-3 mr-1" /> +4.5%</span> from last month
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="hover:shadow-lg transition-all duration-300 border-none shadow-md bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-blue-500/5 dark:to-cyan-500/5">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium text-muted-foreground">
                                    Net Income
                                </CardTitle>
                                <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                    <Activity className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">₹32,886.89</div>
                                <p className="text-xs text-muted-foreground mt-1 flex items-center">
                                    <span className="text-emerald-500 flex items-center mr-1"><TrendingUp className="w-3 h-3 mr-1" /> +15%</span> from last month
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="hover:shadow-lg transition-all duration-300 border-none shadow-md bg-gradient-to-br from-amber-500/10 to-yellow-500/10 dark:from-amber-500/5 dark:to-yellow-500/5">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium text-muted-foreground">
                                    Active Projects
                                </CardTitle>
                                <div className="h-8 w-8 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                                    <CreditCard className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">12</div>
                                <p className="text-xs text-muted-foreground mt-1">
                                    +2 active now
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Charts Section */}
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
                        {/* Bar Chart */}
                        <Card className="col-span-4 shadow-lg border-none">
                            <CardHeader>
                                <CardTitle>Overview</CardTitle>
                                <CardDescription>Monthly revenue breakdown</CardDescription>
                            </CardHeader>
                            <CardContent className="pl-2">
                                <ResponsiveContainer width="100%" height={350}>
                                    <BarChart data={data}>
                                        <XAxis
                                            dataKey="name"
                                            stroke="#888888"
                                            fontSize={12}
                                            tickLine={false}
                                            axisLine={false}
                                        />
                                        <YAxis
                                            stroke="#888888"
                                            fontSize={12}
                                            tickLine={false}
                                            axisLine={false}
                                            tickFormatter={(value) => `₹${value}`}
                                        />
                                        <Tooltip
                                            cursor={{ fill: 'transparent' }}
                                            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                                        />
                                        <Bar
                                            dataKey="total"
                                            fill="currentColor"
                                            radius={[6, 6, 0, 0]}
                                            className="fill-primary"
                                        />
                                    </BarChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>

                        {/* Pie Chart (Circle Graph) */}
                        <Card className="col-span-3 shadow-lg border-none">
                            <CardHeader>
                                <CardTitle>Expense Distribution</CardTitle>
                                <CardDescription>Where your money goes</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ResponsiveContainer width="100%" height={350}>
                                    <PieChart>
                                        <Pie
                                            data={pieData}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={60}
                                            outerRadius={100}
                                            paddingAngle={5}
                                            dataKey="value"
                                        >
                                            {pieData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                        <Tooltip
                                            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                                            formatter={(value) => `₹${value}`}
                                        />
                                        <Legend
                                            verticalAlign="bottom"
                                            height={36}
                                            iconType="circle"
                                        />
                                    </PieChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Recent Expenses List */}
                    <Card className="shadow-lg border-none">
                        <CardHeader>
                            <CardTitle>Recent Transactions</CardTitle>
                            <CardDescription>You made 265 transactions this month.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <div className="flex items-center justify-between p-2 hover:bg-muted/50 rounded-lg transition-colors" key={i}>
                                        <div className="flex items-center gap-4">
                                            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                                                <CreditCard className="h-5 w-5 text-primary" />
                                            </div>
                                            <div className="space-y-1">
                                                <p className="text-sm font-medium leading-none">Office Supplies</p>
                                                <p className="text-xs text-muted-foreground">Project X • 2 hours ago</p>
                                            </div>
                                        </div>
                                        <div className="font-medium text-rose-500">-₹250.00</div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                </TabsContent>

                <TabsContent value="analytics" className="space-y-6">
                    <Card className="shadow-lg border-none">
                        <CardHeader>
                            <CardTitle>Financial Trends</CardTitle>
                            <CardDescription>Income vs Expenses over time</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ResponsiveContainer width="100%" height={400}>
                                <LineChart data={data}>
                                    <XAxis
                                        dataKey="name"
                                        stroke="#888888"
                                        fontSize={12}
                                        tickLine={false}
                                        axisLine={false}
                                    />
                                    <YAxis
                                        stroke="#888888"
                                        fontSize={12}
                                        tickLine={false}
                                        axisLine={false}
                                        tickFormatter={(value) => `₹${value}`}
                                    />
                                    <Tooltip
                                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                                    />
                                    <Legend verticalAlign="top" height={36} />
                                    <Line type="monotone" dataKey="total" name="Income" stroke="#8884d8" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 8 }} />
                                    <Line type="monotone" dataKey="expenses" name="Expenses" stroke="#ff8042" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 8 }} strokeDasharray="5 5" />
                                </LineChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="reports" className="space-y-6">
                    <Card className="shadow-lg border-none">
                        <CardHeader>
                            <CardTitle>Generated Reports</CardTitle>
                            <CardDescription>Download your monthly summaries.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {[
                                    { name: "Annual Summary 2025", date: "Jan 01, 2026", size: "2.4 MB" },
                                    { name: "Monthly Report - December", date: "Jan 01, 2026", size: "1.2 MB" },
                                    { name: "Monthly Report - November", date: "Dec 01, 2025", size: "1.1 MB" },
                                    { name: "Tax Deductions 2025", date: "Dec 15, 2025", size: "850 KB" }
                                ].map((report, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div className="h-10 w-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                                <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                            </div>
                                            <div>
                                                <p className="font-medium">{report.name}</p>
                                                <p className="text-sm text-muted-foreground">Generated on {report.date} • {report.size}</p>
                                            </div>
                                        </div>
                                        <Button variant="outline" size="sm" className="gap-2" onClick={() => handleDownload(report.name)}>
                                            <Download className="h-4 w-4" />
                                            Download
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div >
    )
}
