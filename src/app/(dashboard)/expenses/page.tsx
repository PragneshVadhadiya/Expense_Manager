import { getExpensesData } from "@/actions/expenses";
import ExpensesClient from "@/components/expenses/expenses-client";

export default async function ExpensesPage() {
    // Fetch data from the server action
    const { transactions, categories, subCategories, projects, people } = await getExpensesData();

    return (
        <ExpensesClient
            data={transactions}
            categories={categories}
            subCategories={subCategories}
            projects={projects}
            people={people}
        />
    );
}
