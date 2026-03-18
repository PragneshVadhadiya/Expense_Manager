"use client"

import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

// Mock Data for Charts
const monthlyData = [
    { name: 'Jan', income: 4000, expense: 2400 },
    { name: 'Feb', income: 3000, expense: 1398 },
    { name: 'Mar', income: 2000, expense: 9800 },
    { name: 'Apr', income: 2780, expense: 3908 },
    { name: 'May', income: 1890, expense: 4800 },
    { name: 'Jun', income: 2390, expense: 3800 },
];

const categoryData = [
    { name: 'Travel', value: 400 },
    { name: 'Food', value: 300 },
    { name: 'Stay', value: 300 },
    { name: 'Purchase', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function ReportsPage() {
    const reportRef = useRef<HTMLDivElement>(null);

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
                logging: true, // Enable logging to see potential issues in console
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

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">Reports & Analytics</h2>
                <Button onClick={handleExportPDF}>
                    <Download className="mr-2 h-4 w-4" /> Export to PDF
                </Button>
            </div>

            <div ref={reportRef} className="grid gap-6 md:grid-cols-2 p-4 bg-background">
                {/* Total Income vs Expense */}
                <Card className="col-span-2 lg:col-span-1">
                    <CardHeader>
                        <CardTitle>Income vs Expense (Monthly)</CardTitle>
                    </CardHeader>
                    <CardContent>
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
                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                />
                                <Legend />
                                <Bar dataKey="income" fill="#10b981" radius={[4, 4, 0, 0]} name="Income" />
                                <Bar dataKey="expense" fill="#ef4444" radius={[4, 4, 0, 0]} name="Expense" />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                {/* Category Distribution */}
                <Card className="col-span-2 lg:col-span-1">
                    <CardHeader>
                        <CardTitle>Expense Distribution by Category</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={categoryData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                    label={({ name, percent }: any) => `${name} ${(percent * 100).toFixed(0)}%`}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {categoryData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                {/* Project-wise Summary */}
                <Card className="col-span-2">
                    <CardHeader>
                        <CardTitle>Project-wise Summary</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {['Project Alpha', 'Project Beta', 'Internal Operations'].map((project, i) => (
                                <div key={i} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                                    <div>
                                        <p className="font-medium">{project}</p>
                                        <p className="text-sm text-muted-foreground">12 transactions</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-medium text-emerald-600">+₹12,400.00</p>
                                        <p className="font-medium text-rose-600">-₹4,200.00</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
