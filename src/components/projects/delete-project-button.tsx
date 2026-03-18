"use client";

import { useState } from "react";
import { Trash2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { deleteProject } from "@/actions/projects";
import { useToast } from "@/components/ui/use-toast";

export function DeleteProjectButton({ id }: { id: number }) {
    const [isDeleting, setIsDeleting] = useState(false);
    const { toast } = useToast();

    const handleDelete = async () => {
        if (!confirm("Are you sure you want to delete this project? This cannot be undone.")) return;
        
        setIsDeleting(true);
        try {
            const res = await deleteProject(id);
            if (!res.success) throw new Error(res.error);
            toast({ title: "Deleted", description: "Project removed" });
        } catch (error: any) {
            toast({ title: "Error", description: error.message, variant: "destructive" });
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <Button variant="outline" size="icon" className="h-8 w-8 hover:bg-destructive/10" onClick={handleDelete} disabled={isDeleting}>
            {isDeleting ? <Loader2 className="h-4 w-4 animate-spin text-destructive" /> : <Trash2 className="h-4 w-4 text-destructive" />}
        </Button>
    );
}
