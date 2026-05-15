import ExpenseCard from "./ExpenseCard";

function ExpenseList({
    expenses,
    handleEdit,
    handleDelete
}) {

    if (expenses.length === 0) {
        return (
            <div className="text-center text-slate-400 mt-10">
                No expenses added yet.
            </div>
        );
    }

    return (
        <div className="space-y-4">

            {expenses.map((expense) => (

                <ExpenseCard
                    key={expense.id}
                    expense={expense}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                />

            ))}

        </div>
    );
}

export default ExpenseList;