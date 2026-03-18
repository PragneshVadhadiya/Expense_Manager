"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CalendarIcon, Loader2, Plus } from "lucide-react";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { createTransaction } from "@/actions/expenses";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
    Type: z.enum(["income", "expense"]),
    Date: z.date(),
    Amount: z.coerce.number().min(0.01, "Amount must be greater than 0"),
    Description: z.string().optional(),
    CategoryID: z.string().optional(),
    SubCategoryID: z.string().optional(),
    ProjectID: z.string().optional(),
    PeopleID: z.string().min(1, "Person is required"),
});

interface AddTransactionDialogProps {
    categories: any[];
    subCategories: any[];
    projects: any[];
    people: any[];
}

export function AddTransactionDialog({
    categories,
    subCategories,
    projects,
    people,
}: AddTransactionDialogProps) {
    const [open, setOpen] = useState(false);
    const { toast } = useToast();
    const [activeTab, setActiveTab] = useState<"income" | "expense">("expense");

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema) as any,
        defaultValues: {
            Type: "expense",
            Date: new Date(),
            Amount: undefined as any,
            Description: "",
            CategoryID: undefined,
            SubCategoryID: undefined,
            ProjectID: undefined,
            PeopleID: undefined,
        },
    });

    const watchCategory = form.watch("CategoryID");

    // Filter subcategories based on selected category
    const filteredSubCategories = watchCategory
        ? subCategories.filter((sub) => sub.CategoryID.toString() === watchCategory)
        : [];

    // Filter categories based on Type (Income/Expense) if your categories have that flag
    // The schema shows IsExpense and IsIncome usage. 
    const filteredCategories = categories.filter(cat =>
        activeTab === 'expense' ? cat.IsExpense : cat.IsIncome
    );

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            await createTransaction({
                ...values,
                CategoryID: values.CategoryID ? parseInt(values.CategoryID) : undefined,
                SubCategoryID: values.SubCategoryID ? parseInt(values.SubCategoryID) : undefined,
                ProjectID: values.ProjectID ? parseInt(values.ProjectID) : undefined,
                PeopleID: parseInt(values.PeopleID),
            });

            toast({
                title: "Success",
                description: "Transaction added successfully",
            });
            setOpen(false);
            form.reset({
                Type: activeTab,
                Date: new Date(),
                Amount: undefined, // Reset amount
                Description: "",
                CategoryID: undefined,
                SubCategoryID: undefined,
                ProjectID: undefined,
                PeopleID: undefined,
            });
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to add transaction",
                variant: "destructive",
            });
        }
    };

    const handleTabChange = (val: string) => {
        const type = val as "income" | "expense";
        setActiveTab(type);
        form.setValue("Type", type);
        form.setValue("CategoryID", undefined); // Reset category on type switch to avoid invalid state
        form.setValue("SubCategoryID", undefined);
    };

    // Dynamic button styling and text based on active tab
    const getButtonStyles = () => {
        if (activeTab === "income") {
            return "bg-green-600 hover:bg-green-700 text-white";
        }
        return "bg-red-600 hover:bg-red-700 text-white";
    };

    const getButtonText = () => {
        if (activeTab === "income") {
            return "Save Income";
        }
        return "Save Expense";
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-primary/90 text-white">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Transaction
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Add Transaction</DialogTitle>
                </DialogHeader>

                <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="income" className="data-[state=active]:bg-green-100 data-[state=active]:text-green-700">Income</TabsTrigger>
                        <TabsTrigger value="expense" className="data-[state=active]:bg-red-100 data-[state=active]:text-red-700">Expense</TabsTrigger>
                    </TabsList>
                </Tabs>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-4">
                        <div className="grid grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="Date"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                        <FormLabel>Date</FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant={"outline"}
                                                        className={cn(
                                                            "w-full pl-3 text-left font-normal",
                                                            !field.value && "text-muted-foreground"
                                                        )}
                                                    >
                                                        {field.value ? (
                                                            format(field.value, "PPP")
                                                        ) : (
                                                            <span>Pick a date</span>
                                                        )}
                                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar
                                                    mode="single"
                                                    selected={field.value}
                                                    onSelect={field.onChange}
                                                    disabled={(date) =>
                                                        date > new Date() || date < new Date("1900-01-01")
                                                    }
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="Amount"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Amount</FormLabel>
                                        <FormControl>
                                            <Input placeholder="0.00" type="number" step="0.01" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="Description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Input placeholder="What was this for?" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="grid grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="CategoryID"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Category</FormLabel>
                                        <Select onValueChange={field.onChange} value={field.value} disabled={filteredCategories.length === 0}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select Category" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {filteredCategories.map((cat) => (
                                                    <SelectItem key={cat.CategoryID} value={cat.CategoryID.toString()}>
                                                        {cat.CategoryName}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="SubCategoryID"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Sub Category</FormLabel>
                                        <Select onValueChange={field.onChange} value={field.value} disabled={!watchCategory || filteredSubCategories.length === 0}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select Sub Category" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {filteredSubCategories.map((sub) => (
                                                    <SelectItem key={sub.SubCategoryID} value={sub.SubCategoryID.toString()}>
                                                        {sub.SubCategoryName}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="PeopleID"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Person</FormLabel>
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select Person" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {people.map((p) => (
                                                    <SelectItem key={p.PeopleID} value={p.PeopleID.toString()}>
                                                        {p.PeopleName}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="ProjectID"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Project</FormLabel>
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select Project" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {projects.map((proj) => (
                                                    <SelectItem key={proj.ProjectID} value={proj.ProjectID.toString()}>
                                                        {proj.ProjectName}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="flex justify-end space-x-2 pt-4">
                            <Button variant="outline" type="button" onClick={() => setOpen(false)}>Cancel</Button>
                            <Button type="submit" disabled={form.formState.isSubmitting} className={getButtonStyles()}>
                                {form.formState.isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                {getButtonText()}
                            </Button>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
