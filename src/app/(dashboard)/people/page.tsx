import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { User, Mail, Phone, Trash } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { getPeople, deletePerson } from "@/actions/people"
import { PersonDialog } from "@/components/people/person-dialog"
import { DeletePersonButton } from "@/components/people/delete-person-button"
import { Badge } from "@/components/ui/badge"

interface Person {
    PeopleID: number;
    PeopleName: string;
    Email: string;
    MobileNo: string;
    PeopleCode: string | null;
    Description: string | null;
    IsActive: boolean | null;
}

export default async function PeoplePage() {
    const { data } = await getPeople();
    // Cast to Person[] to ensure type safety with local interface
    const people = (data as unknown as Person[]) || [];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">People & Users</h2>
                    <p className="text-muted-foreground">Manage system users and access roles.</p>
                </div>
                <PersonDialog />
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {people?.map((person) => (
                    <Card key={person.PeopleID} className="group relative overflow-hidden transition-all hover:shadow-md">
                        <CardHeader className="flex flex-row items-center gap-4 space-y-0 text-left">
                            <Avatar className="h-10 w-10">
                                <AvatarImage src={`/avatars/${person.PeopleID}.png`} alt={person.PeopleName} />
                                <AvatarFallback>{person.PeopleName.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="space-y-1">
                                <CardTitle className="text-base">{person.PeopleName}</CardTitle>
                                <CardDescription>{person.PeopleCode || "No Code"}</CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground space-y-2">
                            <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-primary/70" />
                                <span className="truncate">{person.Email}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-primary/70" />
                                <span>{person.MobileNo}</span>
                            </div>

                            <div className="mt-4 flex items-center justify-between border-t pt-4">
                                <Badge variant={person.IsActive ? "default" : "secondary"} className={person.IsActive ? "bg-emerald-500 hover:bg-emerald-600" : ""}>
                                    {person.IsActive ? "Active" : "Inactive"}
                                </Badge>
                                <div className="flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                                    <PersonDialog mode="edit" person={person} />
                                    <DeletePersonButton id={person.PeopleID} />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
            {people && people.length === 0 && (
                <div className="flex h-[400px] flex-col items-center justify-center rounded-md border border-dashed text-center animate-in fade-in-50">
                    <User className="h-10 w-10 text-muted-foreground mb-4 opacity-50" />
                    <h3 className="text-lg font-semibold">No people found</h3>
                    <p className="text-sm text-muted-foreground max-w-sm mt-2">
                        Get started by adding a new person to your network.
                    </p>
                    <div className="mt-4">
                        <PersonDialog />
                    </div>
                </div>
            )}
        </div>
    )
}
