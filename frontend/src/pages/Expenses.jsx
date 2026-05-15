import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";

function Expenses({
    formData,
    handleChange,
    handleSubmit,
    editingId,
    expenses,
    handleEdit,
    handleDelete
}) {

    return (

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            <ExpenseForm
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                editingId={editingId}
            />

            <ExpenseList
                expenses={expenses}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />

        </div>
    );
}

export default Expenses;