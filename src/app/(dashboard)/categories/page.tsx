import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tag } from "lucide-react"
import { getCategories } from "@/actions/categories"
import { CategoryDialog } from "@/components/categories/category-dialog"
import { DeleteCategoryButton, DeleteSubCategoryButton } from "@/components/categories/delete-category-button"
import { SubCategoryDialog } from "@/components/categories/sub-category-dialog"
import { SeedCategoriesButton } from "@/components/categories/seed-categories-button"

export default async function CategoriesPage() {
    const { data: categoriesData } = await getCategories()
    const categories = categoriesData || []

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Categories</h2>
                    <p className="text-muted-foreground">Manage income and expense categories.</p>
                </div>
                <CategoryDialog mode="create" />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {categories.map((cat: any) => (
                    <Card key={cat.CategoryID} className="group relative">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-base font-semibold flex items-center gap-2">
                                <Tag className="h-4 w-4 text-primary" />
                                {cat.CategoryName}
                                {!cat.IsActive && <span className="text-xs font-normal text-muted-foreground ml-2">(Inactive)</span>}
                            </CardTitle>
                            <div className="flex items-center gap-2">
                                <span className={`text-xs font-medium px-2 py-1 rounded-full ${cat.IsIncome ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                                    {cat.IsIncome ? 'Income' : 'Expense'}
                                </span>
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center">
                                    <CategoryDialog mode="edit" category={cat} />
                                    <DeleteCategoryButton id={cat.CategoryID} />
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {cat.sub_categories?.map((sub: any) => (
                                    <span key={sub.SubCategoryID} className="inline-flex items-center rounded-md border pl-2.5 pr-1 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
                                        {sub.SubCategoryName}
                                        <DeleteSubCategoryButton id={sub.SubCategoryID} />
                                    </span>
                                ))}
                                <SubCategoryDialog categoryId={cat.CategoryID} />
                            </div>
                        </CardContent>
                    </Card>
                ))}
                {categories.length === 0 && (
                    <div className="col-span-2 flex flex-col items-center justify-center space-y-4 py-16 text-muted-foreground border rounded-lg border-dashed">
                       <p>No categories found. Create your first category, or generate defaults!</p>
                       <SeedCategoriesButton />
                    </div>
                )}
            </div>
        </div>
    )
}
