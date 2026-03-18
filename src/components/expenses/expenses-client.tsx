"use client";

import { useState } from "react";
import { format } from "date-fns";
import { Search, Filter, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AddTransactionDialog } from "./add-transaction-dialog";
import { DeleteTransactionButton } from "./delete-transaction-button";

interface ExpensesClientProps {
    data: any[];
    categories: any[];
    subCategories: any[];
    projects: any[];
    people: any[];
}

export default function ExpensesClient({
    data = [],
    categories,
    subCategories,
    projects,
    people,
}: ExpensesClientProps) {
    const [filter, setFilter] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredData = Array.isArray(data) ? data.filter((item) => {
        const matchesSearch =
            (item.Description?.toLowerCase() || "").includes(searchQuery.toLowerCase()) ||
            (item.Category?.CategoryName?.toLowerCase() || "").includes(searchQuery.toLowerCase());

        if (filter === "all") return matchesSearch;
        return matchesSearch && item.Type?.toLowerCase() === filter;
    }) : [];

    return (
        <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight text-primary">Transactions</h2>
                <div className="flex items-center space-x-2">
                    <Button variant="outline" className="border-sidebar-primary text-sidebar-primary hover:bg-sidebar-primary hover:text-white transition-colors">
                        <Download className="mr-2 h-4 w-4" />
                        Export
                    </Button>
                    <AddTransactionDialog
                        categories={categories}
                        subCategories={subCategories}
                        projects={projects}
                        people={people}
                    />
                </div>
            </div>

            <div className="flex items-center justify-between space-x-2 py-4">
                <div className="flex w-full items-center space-x-2">
                    <div className="relative w-full md:w-1/3">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search transactions..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-8 bg-card border-none shadow-sm"
                        />
                    </div>
                </div>
            </div>

            <Tabs defaultValue="all" className="space-y-4" onValueChange={setFilter}>
                <TabsList className="bg-muted/50 p-1">
                    <TabsTrigger value="all" className="data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm">All</TabsTrigger>
                    <TabsTrigger value="income" className="data-[state=active]:bg-background data-[state=active]:text-green-600 data-[state=active]:shadow-sm">Income</TabsTrigger>
                    <TabsTrigger value="expense" className="data-[state=active]:bg-background data-[state=active]:text-red-600 data-[state=active]:shadow-sm">Expense</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="space-y-4">
                    {renderTable(filteredData)}
                </TabsContent>
                <TabsContent value="income" className="space-y-4">
                    {renderTable(filteredData)}
                </TabsContent>
                <TabsContent value="expense" className="space-y-4">
                    {renderTable(filteredData)}
                </TabsContent>
            </Tabs>
        </div>
    );
}

function renderTable(data: any[]) {
    if (data.length === 0) {
        return (
            <Card>
                <CardContent className="h-[400px] flex items-center justify-center text-muted-foreground">
                    No transactions found.
                </CardContent>
            </Card>
        )
    }

    return (
        <div className="rounded-md border bg-card shadow-sm overflow-hidden">
            <Table>
                <TableHeader className="bg-muted/30">
                    <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Project</TableHead>
                        <TableHead>Person</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                        <TableHead className="text-right w-[80px]">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((item) => (
                        <TableRow key={item.TransactionID} className="hover:bg-muted/30 transition-colors">
                            <TableCell className="font-medium text-muted-foreground">
                                {item.TransactionDate ? format(new Date(item.TransactionDate), "MMM dd, yyyy") : "-"}
                            </TableCell>
                            <TableCell>
                                <div className="font-medium">{item.Description || "-"}</div>
                                {item.SubCategory && (
                                    <span className="text-xs text-muted-foreground">{item.SubCategory.SubCategoryName}</span>
                                )}
                            </TableCell>
                            <TableCell>
                                {item.Category ? (
                                    <Badge variant="outline" className="bg-primary/5 border-primary/20 text-primary">
                                        {item.Category.CategoryName}
                                    </Badge>
                                ) : "-"}
                            </TableCell>
                            <TableCell>{item.Project?.ProjectName || "-"}</TableCell>
                            <TableCell>{item.People?.PeopleName || "-"}</TableCell>
                            <TableCell className={`text-right font-bold ${item.Type?.toLowerCase() === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                                {item.Type?.toLowerCase() === 'expense' ? '-' : '+'}
                                ₹{Number(item.Amount).toFixed(2)}
                            </TableCell>
                            <TableCell className="text-right">
                                <DeleteTransactionButton id={item.TransactionID} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
