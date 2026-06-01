"use client"
import { useEffect, useState } from "react"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, Legend, LineChart, Line } from "recharts"
import { Button } from "@/components/ui/button"
import { ArrowDownIcon, ArrowUpIcon, IndianRupee, CreditCard, Activity, TrendingUp, FileText, Download } from "lucide-react"
import { getExpensesData } from "@/actions/expenses"

const COLORS = ['hsl(270, 70%, 55%)', 'hsl(160, 60%, 45%)', 'hsl(30, 80%, 55%)', 'hsl(210, 70%, 50%)', 'hsl(340, 75%, 55%)'];

export default function DashboardPage() {
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);
    const [dashboardData, setDashboardData] = useState<{
        transactions: any[];
        categories: any[];
        subCategories: any[];
        projects: any[];
        people: any[];
    }>({
        transactions: [],
        categories: [],
        subCategories: [],
        projects: [],
        people: []
    });

    useEffect(() => {
        const cookies = document.cookie.split("; ");
        const roleCookie = cookies.find(row => row.startsWith("userRole="));
        if (roleCookie) {
            const role = decodeURIComponent(roleCookie.split("=")[1]);
            setIsAdmin(role === "Admin");
        }

        async function loadData() {
            try {
                const data = await getExpensesData();
                setDashboardData(data);
            } catch (error) {
                console.error("Failed to load dashboard data", error);
            } finally {
                setLoading(false);
            }
        }
        loadData();
    }, []);

    const { transactions = [], projects = [] } = dashboardData;

    // Calculate metrics
    const totalIncome = transactions
        .filter((t: any) => t.Type?.toLowerCase() === 'income')
        .reduce((sum: number, t: any) => sum + Number(t.Amount), 0);

    const totalExpenses = transactions
        .filter((t: any) => t.Type?.toLowerCase() === 'expense')
        .reduce((sum: number, t: any) => sum + Number(t.Amount), 0);

    const netIncome = totalIncome - totalExpenses;
    const activeProjectsCount = projects.filter((p: any) => p.IsActive).length;

    // Compute monthly breakdown dynamically for past 6 months
    const last6Months = Array.from({ length: 6 }).map((_, i) => {
        const d = new Date();
        d.setMonth(d.getMonth() - i);
        return {
            key: d.toLocaleString('en-US', { month: 'short' }) + ' ' + d.getFullYear(),
            label: d.toLocaleString('en-US', { month: 'short' }),
            year: d.getFullYear(),
            monthNum: d.getMonth()
        };
    }).reverse();

    const chartData = last6Months.map(m => {
        const monthTransactions = transactions.filter((t: any) => {
            const tDate = new Date(t.TransactionDate);
            return tDate.getMonth() === m.monthNum && tDate.getFullYear() === m.year;
        });

        const totalIncomeForMonth = monthTransactions
            .filter((t: any) => t.Type?.toLowerCase() === 'income')
            .reduce((sum: number, t: any) => sum + Number(t.Amount), 0);

        const totalExpensesForMonth = monthTransactions
            .filter((t: any) => t.Type?.toLowerCase() === 'expense')
            .reduce((sum: number, t: any) => sum + Number(t.Amount), 0);

        return {
            name: m.label,
            total: totalIncomeForMonth,
            expenses: totalExpensesForMonth
        };
    });

    // Compute Expense Distribution grouped by category for the pie chart
    const expenseGroup: { [key: string]: number } = {};
    transactions
        .filter((t: any) => t.Type?.toLowerCase() === 'expense' && t.Category)
        .forEach((t: any) => {
            const catName = t.Category.CategoryName;
            expenseGroup[catName] = (expenseGroup[catName] || 0) + Number(t.Amount);
        });

    const pieChartData = Object.entries(expenseGroup).map(([name, value]) => ({
        name,
        value,
    })).sort((a, b) => b.value - a.value);

    // Limit to top 5 categories and group the rest into "Others" to avoid a cluttered graph
    let finalPieData = [];
    if (pieChartData.length > 5) {
        const topCategories = pieChartData.slice(0, 5);
        const otherValue = pieChartData.slice(5).reduce((sum, item) => sum + item.value, 0);
        finalPieData = [...topCategories, { name: "Others", value: otherValue }];
    } else {
        finalPieData = pieChartData.length > 0 ? pieChartData : [
            { name: "No expenses", value: 1 }
        ];
    }

    // Recent Transactions
    const recentTransactions = transactions.slice(0, 5);

    const handleDownload = (reportName: string) => {
        const csvRows = [
            ["Date", "Description", "Category", "Amount", "Type"],
            ...transactions.map(t => [
                t.TransactionDate ? new Date(t.TransactionDate).toISOString().split('T')[0] : "",
                t.Description || "",
                t.Category?.CategoryName || "",
                t.Type?.toLowerCase() === 'expense' ? `-${t.Amount}` : `${t.Amount}`,
                t.Type || ""
            ])
        ];

        const csvContent = "data:text/csv;charset=utf-8,"
            + csvRows.map(e => e.map(val => `"${String(val).replace(/"/g, '""')}"`).join(",")).join("\n");

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", `${reportName.replace(/\s+/g, "_")}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    if (loading) {
        return (
            <div className="flex-1 space-y-6 p-6 md:p-8 pt-6 animate-pulse">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-2 md:space-y-0">
                    <div className="h-8 w-48 bg-muted rounded-lg" />
                </div>
                <div className="h-10 w-64 bg-muted rounded-lg" />
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} className="h-28 bg-muted rounded-xl" />
                    ))}
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
                    <div className="col-span-4 h-[400px] bg-muted rounded-xl" />
                    <div className="col-span-3 h-[400px] bg-muted rounded-xl" />
                </div>
            </div>
        );
    }

    return (
        <div className="flex-1 space-y-6 p-6 md:p-8 pt-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-2 md:space-y-0">
                <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                    {isAdmin ? "Admin Dashboard" : "Dashboard Overview"}
                </h2>
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
                                <div className="text-2xl font-bold">₹{totalIncome.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                                <p className="text-xs text-muted-foreground mt-1 flex items-center">
                                    <span className="text-emerald-500 flex items-center mr-1"><TrendingUp className="w-3 h-3 mr-1" /> Active</span> live tracking
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
                                <div className="text-2xl font-bold">₹{totalExpenses.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                                <p className="text-xs text-muted-foreground mt-1 flex items-center">
                                    <span className="text-rose-500 flex items-center mr-1"><ArrowDownIcon className="w-3 h-3 mr-1" /> Tracked</span> live tracking
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
                                <div className={`text-2xl font-bold ${netIncome >= 0 ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"}`}>
                                    {netIncome >= 0 ? "+" : "-"}₹{Math.abs(netIncome).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                </div>
                                <p className="text-xs text-muted-foreground mt-1 flex items-center">
                                    <span className={`flex items-center mr-1 ${netIncome >= 0 ? "text-emerald-500" : "text-rose-500"}`}>
                                        <TrendingUp className="w-3 h-3 mr-1" /> {netIncome >= 0 ? "Surplus" : "Deficit"}
                                    </span> current balance
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
                                <div className="text-2xl font-bold">{activeProjectsCount}</div>
                                <p className="text-xs text-muted-foreground mt-1">
                                    Allocated projects
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
                                <CardDescription>Monthly income breakdown</CardDescription>
                            </CardHeader>
                            <CardContent className="pl-2">
                                {transactions.length === 0 ? (
                                    <div className="h-[350px] flex items-center justify-center text-muted-foreground text-sm">
                                        No transactions to display overview chart.
                                    </div>
                                ) : (
                                    <ResponsiveContainer width="100%" height={350}>
                                        <BarChart data={chartData}>
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
                                                formatter={(value) => [`₹${Number(value).toFixed(2)}`, "Income"]}
                                            />
                                            <Bar
                                                dataKey="total"
                                                fill="currentColor"
                                                radius={[6, 6, 0, 0]}
                                                className="fill-primary"
                                            />
                                        </BarChart>
                                    </ResponsiveContainer>
                                )}
                            </CardContent>
                        </Card>

                        {/* Pie Chart (Circle Graph) */}
                        <Card className="col-span-3 shadow-lg border-none">
                            <CardHeader>
                                <CardTitle>Expense Distribution</CardTitle>
                                <CardDescription>Where your money goes</CardDescription>
                            </CardHeader>
                            <CardContent>
                                {pieChartData.length === 0 ? (
                                    <div className="h-[350px] flex items-center justify-center text-muted-foreground text-sm">
                                        No tracked expenses to show distribution.
                                    </div>
                                ) : (
                                    <ResponsiveContainer width="100%" height={350}>
                                        <PieChart>
                                            <Pie
                                                data={finalPieData}
                                                cx="50%"
                                                cy="50%"
                                                innerRadius={60}
                                                outerRadius={100}
                                                paddingAngle={5}
                                                dataKey="value"
                                            >
                                                {finalPieData.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                ))}
                                            </Pie>
                                            <Tooltip
                                                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                                                formatter={(value) => `₹${Number(value).toFixed(2)}`}
                                            />
                                            <Legend
                                                verticalAlign="bottom"
                                                height={36}
                                                iconType="circle"
                                            />
                                        </PieChart>
                                    </ResponsiveContainer>
                                )}
                            </CardContent>
                        </Card>
                    </div>

                    {/* Recent Expenses List */}
                    <Card className="shadow-lg border-none">
                        <CardHeader>
                            <CardTitle>Recent Transactions</CardTitle>
                            <CardDescription>
                                {transactions.length === 0 
                                    ? "No transactions recorded yet." 
                                    : `Showing your latest ${recentTransactions.length} transactions.`}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                {recentTransactions.map((item: any) => (
                                    <div className="flex items-center justify-between p-2 hover:bg-muted/50 rounded-lg transition-colors" key={item.TransactionID}>
                                        <div className="flex items-center gap-4">
                                            <div className={`h-10 w-10 rounded-full flex items-center justify-center ${item.Type?.toLowerCase() === 'income' ? 'bg-emerald-100 dark:bg-emerald-950/30' : 'bg-rose-100 dark:bg-rose-950/30'}`}>
                                                <CreditCard className={`h-5 w-5 ${item.Type?.toLowerCase() === 'income' ? 'text-emerald-600' : 'text-rose-600'}`} />
                                            </div>
                                            <div className="space-y-1">
                                                <p className="text-sm font-medium leading-none">{item.Description || "Untitled Transaction"}</p>
                                                <p className="text-xs text-muted-foreground">
                                                    {item.Category?.CategoryName || "No Category"} • {item.Project?.ProjectName || "No Project"} • {item.TransactionDate ? new Date(item.TransactionDate).toLocaleDateString() : ""}
                                                </p>
                                            </div>
                                        </div>
                                        <div className={`font-semibold ${item.Type?.toLowerCase() === 'income' ? 'text-emerald-600' : 'text-rose-600'}`}>
                                            {item.Type?.toLowerCase() === 'income' ? '+' : '-'}₹{Number(item.Amount).toFixed(2)}
                                        </div>
                                    </div>
                                ))}
                                {transactions.length === 0 && (
                                    <div className="h-20 flex items-center justify-center text-muted-foreground text-sm">
                                        No recent transactions.
                                    </div>
                                )}
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
                            {transactions.length === 0 ? (
                                <div className="h-[400px] flex items-center justify-center text-muted-foreground text-sm">
                                    No transaction data available to plot trends.
                                </div>
                            ) : (
                                <ResponsiveContainer width="100%" height={400}>
                                    <LineChart data={chartData}>
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
                                            formatter={(value) => `₹${Number(value).toFixed(2)}`}
                                        />
                                        <Legend verticalAlign="top" height={36} />
                                        <Line type="monotone" dataKey="total" name="Income" stroke="#10b981" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 8 }} />
                                        <Line type="monotone" dataKey="expenses" name="Expenses" stroke="#f43f5e" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 8 }} strokeDasharray="5 5" />
                                    </LineChart>
                                </ResponsiveContainer>
                            )}
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="reports" className="space-y-6">
                    <Card className="shadow-lg border-none">
                        <CardHeader>
                            <CardTitle>Generated Reports</CardTitle>
                            <CardDescription>Download your transaction data summaries.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {transactions.length === 0 ? (
                                    <div className="h-40 flex flex-col items-center justify-center text-muted-foreground text-sm gap-2">
                                        <span>No transactions recorded.</span>
                                        <span>Add transactions first to download reports.</span>
                                    </div>
                                ) : (
                                    [
                                        { name: "Complete Transactions Export", date: new Date().toLocaleDateString(), size: `${(transactions.length * 0.1).toFixed(1)} KB` },
                                        { name: "Monthly Summary Report", date: new Date().toLocaleDateString(), size: "1.2 KB" }
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
                                                Download CSV
                                            </Button>
                                        </div>
                                    ))
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div >
    )
}
