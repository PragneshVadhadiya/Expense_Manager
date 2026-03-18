"use client";

import { useState } from "react";
import { Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { seedDefaultCategories } from "@/actions/categories";
import { useToast } from "@/components/ui/use-toast";

export function SeedCategoriesButton() {
    const [isSeeding, setIsSeeding] = useState(false);
    const { toast } = useToast();

    const handleSeed = async () => {
        setIsSeeding(true);
        try {
            const res = await seedDefaultCategories();
            if (!res?.success) throw new Error(res?.error || "Unknown error occurred.");
            toast({ title: "Success", description: "Default categories added." });
        } catch (error: any) {
            toast({ title: "Error", description: error.message, variant: "destructive" });
        } finally {
            setIsSeeding(false);
        }
    };

    return (
        <Button onClick={handleSeed} disabled={isSeeding} variant="outline" className="h-8">
            {isSeeding ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4 text-emerald-500" />}
            Auto-Generate Categories
        </Button>
    );
}
