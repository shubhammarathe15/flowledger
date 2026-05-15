function ExpenseCard({
    expense,
    handleEdit,
    handleDelete
}) {

    return (

        <div
            className="bg-slate-800/70 backdrop-blur-md border border-slate-700 p-6 rounded-3xl shadow-xl hover:scale-[1.01] transition-all"
        >

            <div className="flex justify-between items-center">

                <div>

                    <h2 className="text-2xl font-semibold">
                        {expense.title}
                    </h2>

                    <p className="text-green-400 text-lg mt-2">
                        ₹ {expense.amount}
                    </p>

                    <p className="text-slate-400 mt-1">
                        {expense.category}
                    </p>

                </div>

                <div className="flex gap-3">

                    <button
                        onClick={() => handleEdit(expense)}
                        className="bg-yellow-500 hover:bg-yellow-600 px-5 py-2 rounded-xl font-medium transition-all"
                    >
                        Edit
                    </button>

                    <button
                        onClick={() => handleDelete(expense.id)}
                        className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-xl font-medium transition-all"
                    >
                        Delete
                    </button>

                </div>

            </div>

        </div>
    );
}

export default ExpenseCard;