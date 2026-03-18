"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, Plus, Edit } from "lucide-react";

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
import { Checkbox } from "@/components/ui/checkbox";
import { createProject, updateProject } from "@/actions/projects";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
    ProjectName: z.string().min(1, "Name is required"),
    ProjectDetail: z.string().optional(),
    Budget: z.coerce.number().min(0).default(0),
    IsActive: z.boolean().default(true),
});

export function ProjectDialog({ project, mode = "create" }: { project?: any, mode?: "create" | "edit" }) {
    const [open, setOpen] = useState(false);
    const { toast } = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema) as any,
        defaultValues: {
            ProjectName: project?.ProjectName || "",
            ProjectDetail: project?.ProjectDetail || "",
            IsActive: project?.IsActive ?? true,
            Budget: project?.budget || 0,
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            if (mode === "create") {
                const res = await createProject(values);
                if (!res.success) throw new Error(res.error);
                toast({ title: "Success", description: "Project created" });
            } else {
                const res = await updateProject(project.ProjectID, values);
                if (!res.success) throw new Error(res.error);
                toast({ title: "Success", description: "Project updated" });
            }
            setOpen(false);
            if (mode === "create") form.reset();
        } catch (error: any) {
            toast({ title: "Error", description: error.message, variant: "destructive" });
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {mode === "create" ? (
                    <Button>
                        <Plus className="mr-2 h-4 w-4" /> New Project
                    </Button>
                ) : (
                    <Button variant="outline" size="icon" className="h-8 w-8">
                        <Edit className="h-4 w-4 text-emerald-600" />
                    </Button>
                )}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{mode === "create" ? "Add Project" : "Edit Project"}</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="ProjectName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Project Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Marketing Campaign" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="ProjectDetail"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Detail</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Short description" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                         <FormField
                            control={form.control}
                            name="Budget"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Budget ($)</FormLabel>
                                    <FormControl>
                                        <Input type="number" step="0.01" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="IsActive"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                                    <div className="space-y-0.5">
                                        <FormLabel>Active Status</FormLabel>
                                    </div>
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <div className="flex justify-end space-x-2 pt-4">
                            <Button variant="outline" type="button" onClick={() => setOpen(false)}>Cancel</Button>
                            <Button type="submit" disabled={form.formState.isSubmitting}>
                                {form.formState.isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                {mode === "create" ? "Save" : "Update"}
                            </Button>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
