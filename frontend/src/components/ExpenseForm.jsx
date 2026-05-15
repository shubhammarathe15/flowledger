function ExpenseForm({
    formData,
    handleChange,
    handleSubmit,
    editingId
}) {

    return (

        <form
            onSubmit={handleSubmit}
            className="bg-slate-800/70 backdrop-blur-md border border-slate-700 p-8 rounded-3xl shadow-2xl space-y-5"
        >

            <div>

                <h2 className="text-2xl font-bold mb-2">
                    {
                        editingId
                            ? "Update Expense"
                            : "Add New Expense"
                    }
                </h2>

                <p className="text-slate-400">
                    Manage your daily spending efficiently
                </p>

            </div>

            <input
                type="text"
                name="title"
                placeholder="Expense Title"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-slate-700 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
                type="number"
                name="amount"
                placeholder="Amount"
                value={formData.amount}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-slate-700 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
                type="text"
                name="category"
                placeholder="Category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-slate-700 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-[1.01] transition-all p-4 rounded-xl font-semibold shadow-lg"
            >
                {
                    editingId
                        ? "Update Expense"
                        : "Add Expense"
                }
            </button>

        </form>
    );
}

export default ExpenseForm;