"use client"

import { useRef, useEffect, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { getExpensesData } from "@/actions/expenses";

const COLORS = ['hsl(270, 70%, 55%)', 'hsl(160, 60%, 45%)', 'hsl(30, 80%, 55%)', 'hsl(210, 70%, 50%)', 'hsl(340, 75%, 55%)'];

export default function ReportsPage() {
    const reportRef = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState(true);
    const [reportData, setReportData] = useState<{
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
        async function loadData() {
            try {
                const data = await getExpensesData();
                setReportData(data);
            } catch (error) {
                console.error("Failed to load report data", error);
            } finally {
                setLoading(false);
            }
        }
        loadData();
    }, []);

    const { transactions = [], projects = [] } = reportData;

    // 1. Dynamic Monthly Income vs Expense Breakdown (Past 6 Months)
    const last6Months = Array.from({ length: 6 }).map((_, i) => {
        const d = new Date();
        d.setMonth(d.getMonth() - i);
        return {
            label: d.toLocaleString('en-US', { month: 'short' }),
            year: d.getFullYear(),
            monthNum: d.getMonth()
        };
    }).reverse();

    const monthlyData = last6Months.map(m => {
        const monthTransactions = transactions.filter((t: any) => {
            const tDate = new Date(t.TransactionDate);
            return tDate.getMonth() === m.monthNum && tDate.getFullYear() === m.year;
        });

        const income = monthTransactions
            .filter((t: any) => t.Type?.toLowerCase() === 'income')
            .reduce((sum: number, t: any) => sum + Number(t.Amount), 0);

        const expense = monthTransactions
            .filter((t: any) => t.Type?.toLowerCase() === 'expense')
            .reduce((sum: number, t: any) => sum + Number(t.Amount), 0);

        return {
            name: m.label,
            income,
            expense
        };
    });

    // 2. Dynamic Expense Distribution grouped by Category
    const expenseGroup: { [key: string]: number } = {};
    transactions
        .filter((t: any) => t.Type?.toLowerCase() === 'expense' && t.Category)
        .forEach((t: any) => {
            const catName = t.Category.CategoryName;
            expenseGroup[catName] = (expenseGroup[catName] || 0) + Number(t.Amount);
        });

    const categoryDataRaw = Object.entries(expenseGroup).map(([name, value]) => ({
        name,
        value: Math.round(value * 100) / 100
    })).sort((a, b) => b.value - a.value);

    // Limit to Top 4 and group others into "Others"
    let categoryData = [];
    if (categoryDataRaw.length > 4) {
        categoryData = categoryDataRaw.slice(0, 4);
        const othersValue = categoryDataRaw.slice(4).reduce((sum, item) => sum + item.value, 0);
        categoryData.push({
            name: "Others",
            value: Math.round(othersValue * 100) / 100
        });
    } else {
        categoryData = categoryDataRaw;
    }

    // 3. Dynamic Project-wise Summary
    const projectSummaryList = projects.map((p: any) => {
        const projTransactions = transactions.filter((t: any) => t.Project?.ProjectID === p.ProjectID);
        
        const income = projTransactions
            .filter((t: any) => t.Type?.toLowerCase() === 'income')
            .reduce((sum: number, t: any) => sum + Number(t.Amount), 0);

        const expense = projTransactions
            .filter((t: any) => t.Type?.toLowerCase() === 'expense')
            .reduce((sum: number, t: any) => sum + Number(t.Amount), 0);

        return {
            name: p.ProjectName,
            transactionCount: projTransactions.length,
            income,
            expense,
        };
    });

    // Unassigned Operations row
    const unassignedTransactions = transactions.filter((t: any) => !t.Project?.ProjectID);
    if (unassignedTransactions.length > 0) {
        const income = unassignedTransactions
            .filter((t: any) => t.Type?.toLowerCase() === 'income')
            .reduce((sum: number, t: any) => sum + Number(t.Amount), 0);

        const expense = unassignedTransactions
            .filter((t: any) => t.Type?.toLowerCase() === 'expense')
            .reduce((sum: number, t: any) => sum + Number(t.Amount), 0);

        projectSummaryList.push({
            name: "General Operations (Unassigned)",
            transactionCount: unassignedTransactions.length,
            income,
            expense
        });
    }

    // Sort by count
    const projectSummary = projectSummaryList.sort((a, b) => b.transactionCount - a.transactionCount);

    const handleExportPDF = async () => {
        if (!reportRef.current) {
            console.error("Ref not attached");
            return;
        }

        try {
            console.log("Starting export...");
            const canvas = await html2canvas(reportRef.current, {
                scale: 2,
                useCORS: true,
                logging: true,
            });

            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: 'a4',
            });

            const imgWidth = 210;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
            pdf.save('expense-report.pdf');
            console.log("Export complete");
        } catch (error) {
            console.error("Export failed:", error);
            alert("Failed to export PDF. Check console for details.");
        }
    };

    if (loading) {
        return (
            <div className="space-y-6 animate-pulse p-6 md:p-8 pt-6">
                <div className="flex items-center justify-between">
                    <div className="h-9 w-48 bg-muted rounded-lg" />
                    <div className="h-9 w-36 bg-muted rounded-lg" />
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                    <div className="h-[380px] bg-muted rounded-xl col-span-2 lg:col-span-1" />
                    <div className="h-[380px] bg-muted rounded-xl col-span-2 lg:col-span-1" />
                    <div className="h-[300px] bg-muted rounded-xl col-span-2" />
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Reports & Analytics</h2>
                <Button onClick={handleExportPDF} className="rounded-xl shadow-md">
                    <Download className="mr-2 h-4 w-4" /> Export to PDF
                </Button>
            </div>

            <div ref={reportRef} className="grid gap-6 md:grid-cols-2 p-4 bg-background rounded-2xl border">
                {/* Total Income vs Expense */}
                <Card className="col-span-2 lg:col-span-1 shadow-md border-none bg-muted/20">
                    <CardHeader>
                        <CardTitle>Income vs Expense (Monthly)</CardTitle>
                        <CardDescription>Visual summary of earnings vs costs</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {transactions.length === 0 ? (
                            <div className="h-[300px] flex items-center justify-center text-muted-foreground text-sm">
                                No transactions to display income vs expense chart.
                            </div>
                        ) : (
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart
                                    data={monthlyData}
                                    margin={{
                                        top: 20,
                                        right: 30,
                                        left: 20,
                                        bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                    <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                                    <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `₹${value}`} />
                                    <Tooltip
                                        cursor={{ fill: 'transparent' }}
                                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                                        formatter={(value) => [`₹${Number(value).toFixed(2)}`]}
                                    />
                                    <Legend />
                                    <Bar dataKey="income" fill="#10b981" radius={[4, 4, 0, 0]} name="Income" />
                                    <Bar dataKey="expense" fill="#ef4444" radius={[4, 4, 0, 0]} name="Expense" />
                                </BarChart>
                            </ResponsiveContainer>
                        )}
                    </CardContent>
                </Card>

                {/* Category Distribution */}
                <Card className="col-span-2 lg:col-span-1 shadow-md border-none bg-muted/20">
                    <CardHeader>
                        <CardTitle>Expense Distribution by Category</CardTitle>
                        <CardDescription>Allocation across spending segments</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {categoryData.length === 0 ? (
                            <div className="h-[300px] flex items-center justify-center text-muted-foreground text-sm">
                                No expenses to display category distribution.
                            </div>
                        ) : (
                            <ResponsiveContainer width="100%" height={300}>
                                <PieChart>
                                    <Pie
                                        data={categoryData}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        label={({ name, percent }: any) => `${name} ${(percent * 100).toFixed(0)}%`}
                                        outerRadius={80}
                                        fill="#8884d8"
                                        dataKey="value"
                                    >
                                        {categoryData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip formatter={(value) => [`₹${Number(value).toFixed(2)}`]} />
                                </PieChart>
                            </ResponsiveContainer>
                        )}
                    </CardContent>
                </Card>

                {/* Project-wise Summary */}
                <Card className="col-span-2 shadow-md border-none bg-muted/20">
                    <CardHeader>
                        <CardTitle>Project-wise Summary</CardTitle>
                        <CardDescription>Resource allocation across initiatives</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {projectSummary.length === 0 ? (
                            <div className="text-center py-6 text-muted-foreground text-sm">
                                No project transactions recorded yet.
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {projectSummary.map((project, i) => (
                                    <div key={i} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0 border-slate-200/55 dark:border-slate-800/55">
                                        <div>
                                            <p className="font-semibold text-slate-900 dark:text-slate-100">{project.name}</p>
                                            <p className="text-xs text-muted-foreground">{project.transactionCount} transactions</p>
                                        </div>
                                        <div className="text-right space-y-0.5">
                                            {project.income > 0 && (
                                                <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                                                    +₹{Number(project.income).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                                </p>
                                            )}
                                            {project.expense > 0 && (
                                                <p className="text-sm font-semibold text-rose-600 dark:text-rose-400">
                                                    -₹{Number(project.expense).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                                </p>
                                            )}
                                            {project.income === 0 && project.expense === 0 && (
                                                <p className="text-sm font-semibold text-slate-400">₹0.00</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
