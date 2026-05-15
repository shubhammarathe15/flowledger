import { Link, useNavigate } from "react-router-dom";

import {
    logout,
    isAuthenticated
} from "../auth/AuthService";

function Navbar() {

    const navigate = useNavigate();

    const handleLogout = () => {

        logout();

        navigate("/login");
    };

    return (

        <nav className="bg-slate-800/70 backdrop-blur-md border border-slate-700 p-4 rounded-2xl mb-8 shadow-lg">

            <div className="flex items-center justify-between">

                <div>

                    <h1 className="text-2xl font-bold text-white">
                        FlowLedger
                    </h1>

                    <p className="text-slate-400 text-sm">
                        Smart Expense Tracking
                    </p>

                </div>

                <div className="hidden md:flex gap-6 text-slate-300 items-center">

                    <Link to="/">
                        Dashboard
                    </Link>

                    <Link to="/expenses">
                        Expenses
                    </Link>

                    <Link to="/analytics">
                        Analytics
                    </Link>

                    {
                        isAuthenticated() && (

                            <button
                                onClick={handleLogout}
                                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl"
                            >
                                Logout
                            </button>
                        )
                    }

                </div>

            </div>

        </nav>
    );
}

export default Navbar;