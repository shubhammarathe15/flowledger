import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { login, saveToken } from "../auth/AuthService";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await login(formData);

      saveToken(response.data.token);

      navigate("/");
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-800 p-10 rounded-3xl shadow-2xl w-full max-w-md space-y-5"
      >
        <div>
          <h1 className="text-4xl font-bold mb-2">Login</h1>

          <p className="text-slate-400">Welcome back to FlowLedger</p>
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-slate-700 outline-none"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-slate-700 outline-none"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 p-4 rounded-xl font-semibold"
        >
          Login
        </button>
        <p className="text-slate-400 text-center">
          Don't have an account?
          <Link to="/signup" className="text-blue-400 ml-2 hover:underline">
            Create Account
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
