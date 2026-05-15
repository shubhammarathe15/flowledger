function Analytics({ expenses }) {

    const totalSpending = expenses.reduce(
        (sum, expense) => sum + expense.amount,
        0
    );

    const highestExpense = expenses.reduce(
        (max, expense) =>
            expense.amount > max.amount
                ? expense
                : max,
        expenses[0] || { amount: 0 }
    );

    return (

        <div>

            <h1 className="text-4xl font-bold mb-8">
                Analytics
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="bg-slate-800 p-8 rounded-3xl shadow-xl">

                    <h2 className="text-xl font-semibold mb-4">
                        Total Spending
                    </h2>

                    <p className="text-5xl text-green-400 font-bold">
                        ₹ {totalSpending}
                    </p>

                </div>

                <div className="bg-slate-800 p-8 rounded-3xl shadow-xl">

                    <h2 className="text-xl font-semibold mb-4">
                        Highest Expense
                    </h2>

                    <p className="text-3xl text-blue-400 font-bold">
                        {highestExpense.title || "N/A"}
                    </p>

                    <p className="text-slate-400 mt-2">
                        ₹ {highestExpense.amount || 0}
                    </p>

                </div>

            </div>

        </div>
    );
}

export default Analytics;