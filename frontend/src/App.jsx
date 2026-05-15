import { useEffect, useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Expenses from "./pages/Expenses";
import Analytics from "./pages/Analytics";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

import ProtectedRoute from "./auth/ProtectedRoute";

import {
  getExpenses,
  addExpense,
  updateExpense,
  deleteExpense
} from "./services/expenseService";

function App() {

  const [expenses, setExpenses] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    category: ""
  });

  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {

    try {

      const response = await getExpenses();

      setExpenses(response.data);

    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      if (editingId) {

        await updateExpense(editingId, formData);

        setEditingId(null);

      } else {

        await addExpense(formData);
      }

      setFormData({
        title: "",
        amount: "",
        category: ""
      });

      fetchExpenses();

    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (expense) => {

    setFormData({
      title: expense.title,
      amount: expense.amount,
      category: expense.category
    });

    setEditingId(expense.id);
  };

  const handleDelete = async (id) => {

    try {

      await deleteExpense(id);

      fetchExpenses();

    } catch (error) {
      console.error(error);
    }
  };

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        <Route
          path="/*"
          element={

            <ProtectedRoute>

              <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white p-6">

                <div className="max-w-7xl mx-auto">

                  <Navbar />

                  <Routes>

                    <Route
                      path="/"
                      element={
                        <Dashboard expenses={expenses} />
                      }
                    />

                    <Route
                      path="/expenses"
                      element={
                        <Expenses
                          formData={formData}
                          handleChange={handleChange}
                          handleSubmit={handleSubmit}
                          editingId={editingId}
                          expenses={expenses}
                          handleEdit={handleEdit}
                          handleDelete={handleDelete}
                        />
                      }
                    />

                    <Route
                      path="/analytics"
                      element={
                        <Analytics expenses={expenses} />
                      }
                    />

                  </Routes>

                </div>

              </div>

            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;