function SummaryCards({ expenses }) {

    const totalExpenses = expenses.reduce(
        (sum, expense) => sum + expense.amount,
        0
    );

    return (

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

            <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-6 rounded-3xl shadow-xl">

                <h2 className="text-lg font-medium text-blue-100">
                    Total Expenses
                </h2>

                <p className="text-4xl font-bold mt-4">
                    {expenses.length}
                </p>

            </div>

            <div className="bg-gradient-to-r from-green-600 to-emerald-500 p-6 rounded-3xl shadow-xl">

                <h2 className="text-lg font-medium text-green-100">
                    Total Spending
                </h2>

                <p className="text-4xl font-bold mt-4">
                    ₹ {totalExpenses}
                </p>

            </div>

            <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-6 rounded-3xl shadow-xl">

                <h2 className="text-lg font-medium text-purple-100">
                    Categories
                </h2>

                <p className="text-4xl font-bold mt-4">
                    {
                        new Set(
                            expenses.map(expense => expense.category)
                        ).size
                    }
                </p>

            </div>

        </div>
    );
}

export default SummaryCards;