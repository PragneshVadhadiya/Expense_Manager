"use client";

import { useState } from "react";
import { Trash2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { deleteTransaction } from "@/actions/expenses";
import { useToast } from "@/components/ui/use-toast";

export function DeleteTransactionButton({ id }: { id: string }) {
    const [isDeleting, setIsDeleting] = useState(false);
    const { toast } = useToast();

    const handleDelete = async () => {
        if (!confirm("Are you sure you want to delete this transaction? This cannot be undone.")) return;
        
        setIsDeleting(true);
        try {
            const res = await deleteTransaction(id);
            if (!res.success) throw new Error(res.error);
            toast({ title: "Deleted", description: "Transaction removed successfully." });
        } catch (error: any) {
            toast({ title: "Error", description: error.message, variant: "destructive" });
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-destructive/10 text-destructive p-0" onClick={handleDelete} disabled={isDeleting}>
            {isDeleting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4" />}
        </Button>
    );
}
