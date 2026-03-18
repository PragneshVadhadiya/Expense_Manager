"use client";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createPerson, updatePerson } from "@/actions/people";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Checkbox } from "@/components/ui/checkbox";
import { Plus, Pencil } from "lucide-react";

// Schema matching the server action's expectation, but easier for client form typing
const personSchema = z.object({
    PeopleName: z.string().min(1, "Name is required"),
    Email: z.string().email("Invalid email address"),
    MobileNo: z.string().min(1, "Mobile number is required"),
    PeopleCode: z.string().optional(),
    Description: z.string().optional(),
    IsActive: z.boolean(),
});

type PersonSchemaType = z.infer<typeof personSchema>;

interface PersonDialogProps {
    person?: any;
    trigger?: React.ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    mode?: "add" | "edit";
}

export function PersonDialog({ person, trigger, open, onOpenChange, mode = "add" }: PersonDialogProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState("");

    const form = useForm<PersonSchemaType>({
        resolver: zodResolver(personSchema),
        defaultValues: {
            PeopleName: person?.PeopleName || "",
            Email: person?.Email || "",
            MobileNo: person?.MobileNo || "",
            PeopleCode: person?.PeopleCode || "",
            Description: person?.Description || "",
            IsActive: person?.IsActive ?? true,
        },
    });

    const handleOpenChange = (val: boolean) => {
        setIsOpen(val);
        if (onOpenChange) onOpenChange(val);
        if (!val) {
            form.reset({
                PeopleName: "",
                Email: "",
                MobileNo: "",
                PeopleCode: "",
                Description: "",
                IsActive: true
            });
            setError("");
        } else if (mode === "edit" && person) {
            form.reset({
                PeopleName: person.PeopleName || "",
                Email: person.Email || "",
                MobileNo: person.MobileNo || "",
                PeopleCode: person.PeopleCode || "",
                Description: person.Description || "",
                IsActive: person.IsActive ?? true,
            });
        }
    };

    const onSubmit = (data: PersonSchemaType) => {
        setError("");
        startTransition(async () => {
            try {
                let result;
                // Cast data to match server action type if strict check fails, 
                // but structures are compatible enough for runtime.
                if (mode === "edit" && person) {
                    result = await updatePerson(person.PeopleID, data as any);
                } else {
                    result = await createPerson(data as any);
                }

                if (result.success) {
                    handleOpenChange(false);
                    // form.reset(); // handled in handleOpenChange(false)
                } else {
                    setError(result.error || "Something went wrong");
                }
            } catch (e) {
                setError("An unexpected error occurred");
            }
        });
    };

    const isControlled = open !== undefined;
    const showOpen = isControlled ? open : isOpen;
    const showOnOpenChange = isControlled ? onOpenChange : handleOpenChange;

    return (
        <Dialog open={showOpen} onOpenChange={showOnOpenChange}>
            <DialogTrigger asChild>
                {trigger || (
                    mode === "add" ? (
                        <Button>
                            <Plus className="mr-2 h-4 w-4" /> Add User
                        </Button>
                    ) : (
                        <Button variant="ghost" size="icon">
                            <Pencil className="h-4 w-4" />
                        </Button>
                    )
                )}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{mode === "add" ? "Add New Person" : "Edit Person"}</DialogTitle>
                    <DialogDescription>
                        {mode === "add"
                            ? "Add a new person to your contact list."
                            : "Update the details of the person."}
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="peopleName">Name</Label>
                        <Input id="peopleName" {...form.register("PeopleName")} placeholder="John Doe" />
                        {form.formState.errors.PeopleName && (
                            <p className="text-destructive text-sm">{form.formState.errors.PeopleName.message}</p>
                        )}
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" {...form.register("Email")} placeholder="john@example.com" />
                        {form.formState.errors.Email && (
                            <p className="text-destructive text-sm">{form.formState.errors.Email.message}</p>
                        )}
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="mobile">Mobile No</Label>
                        <Input id="mobile" {...form.register("MobileNo")} placeholder="+1234567890" />
                        {form.formState.errors.MobileNo && (
                            <p className="text-destructive text-sm">{form.formState.errors.MobileNo.message}</p>
                        )}
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="code">Code (Optional)</Label>
                        <Input id="code" {...form.register("PeopleCode")} placeholder="USR-001" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="description">Description (Optional)</Label>
                        <Textarea id="description" {...form.register("Description")} placeholder="Additional details..." />
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox
                            id="active"
                            checked={form.watch("IsActive")}
                            onCheckedChange={(checked) => form.setValue("IsActive", checked as boolean)}
                        />
                        <Label htmlFor="active">Is Active?</Label>
                    </div>

                    {error && <p className="text-destructive text-sm">{error}</p>}

                    <DialogFooter>
                        <Button type="submit" disabled={isPending}>
                            {isPending ? "Saving..." : "Save changes"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
