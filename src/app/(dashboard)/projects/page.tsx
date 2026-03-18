import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { getProjects } from "@/actions/projects"
import { ProjectDialog } from "@/components/projects/project-dialog"
import { DeleteProjectButton } from "@/components/projects/delete-project-button"
import { FolderKanban } from "lucide-react"

export default async function ProjectsPage() {
    const { data: projectsData } = await getProjects()
    const projects = projectsData || []

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
                    <p className="text-muted-foreground">Manage projects and budget allocations.</p>
                </div>
                <ProjectDialog mode="create" />
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>All Projects</CardTitle>
                    <CardDescription>A list of all projects in the organization.</CardDescription>
                </CardHeader>
                <CardContent>
                    {projects.length === 0 ? (
                        <div className="flex flex-col items-center justify-center p-8 text-center animate-in fade-in-50">
                            <FolderKanban className="h-10 w-10 text-muted-foreground mb-4 opacity-50" />
                            <p className="text-sm text-muted-foreground">No projects found. Create one to get started.</p>
                        </div>
                    ) : (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Project Name</TableHead>
                                    <TableHead>Detail</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead className="text-right">Budget</TableHead>
                                    <TableHead className="text-right">Spent</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {projects.map((project) => (
                                    <TableRow key={project.ProjectID}>
                                        <TableCell className="font-medium">
                                            {project.ProjectName}
                                            <div className="text-xs text-muted-foreground">ID: {project.ProjectID}</div>
                                        </TableCell>
                                        <TableCell className="max-w-[200px] truncate">{project.ProjectDetail || "-"}</TableCell>
                                        <TableCell>
                                            <Badge variant={project.IsActive ? "default" : "secondary"} className={project.IsActive ? "bg-emerald-500 hover:bg-emerald-600" : ""}>
                                                {project.IsActive ? "Active" : "Inactive"}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-right">₹{project.budget.toLocaleString()}</TableCell>
                                        <TableCell className="text-right">₹{project.spent.toLocaleString()}</TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex justify-end gap-2">
                                                <ProjectDialog mode="edit" project={project} />
                                                <DeleteProjectButton id={project.ProjectID} />
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}

