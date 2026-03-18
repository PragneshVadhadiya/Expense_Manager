"use client";

import { useState } from "react";
import { Trash2, Loader2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { deleteCategory, deleteSubCategory } from "@/actions/categories";
import { useToast } from "@/components/ui/use-toast";

export function DeleteCategoryButton({ id }: { id: number }) {
    const [isDeleting, setIsDeleting] = useState(false);
    const { toast } = useToast();

    const handleDelete = async () => {
        if (!confirm("Are you sure you want to delete this category?\n\nThis will also delete ALL its subcategories. This action cannot be undone.")) return;
        
        setIsDeleting(true);
        try {
            const res = await deleteCategory(id);
            if (!res.success) throw new Error(res.error);
            toast({ title: "Deleted", description: "Category removed" });
        } catch (error: any) {
            toast({ title: "Error", description: error.message, variant: "destructive" });
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-destructive/10 p-0 text-destructive" onClick={handleDelete} disabled={isDeleting}>
            {isDeleting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4" />}
        </Button>
    );
}

export function DeleteSubCategoryButton({ id }: { id: number }) {
    const [isDeleting, setIsDeleting] = useState(false);
    const { toast } = useToast();

    const handleDelete = async () => {
        setIsDeleting(true);
        try {
            const res = await deleteSubCategory(id);
            if (!res.success) throw new Error(res.error);
            toast({ title: "Deleted", description: "Subcategory removed" });
        } catch (error: any) {
            toast({ title: "Error", description: error.message, variant: "destructive" });
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <button 
            type="button" 
            onClick={handleDelete} 
            disabled={isDeleting}
            className="ml-1 hover:text-destructive focus:outline-none transition-colors"
        >
            {isDeleting ? <Loader2 className="h-3 w-3 animate-spin text-destructive" /> : <X className="h-3 w-3" />}
        </button>
    );
}
