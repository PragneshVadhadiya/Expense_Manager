"use client";

import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { deletePerson } from "@/actions/people";

interface DeletePersonButtonProps {
    id: number;
}

export function DeletePersonButton({ id }: DeletePersonButtonProps) {
    const [isPending, startTransition] = useTransition();

    const handleDelete = () => {
        if (confirm("Are you sure you want to delete this person?")) {
            startTransition(async () => {
                await deletePerson(id);
            });
        }
    };

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={handleDelete}
            disabled={isPending}
            className="text-destructive hover:bg-destructive/10 hover:text-destructive"
        >
            <Trash className="h-4 w-4" />
        </Button>
    );
}
