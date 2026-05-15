import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { signup, saveToken } from "../auth/AuthService";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
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
      const response = await signup(formData);

      saveToken(response.data.token);

      navigate("/");
    } catch (error) {
      alert("Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-800 p-10 rounded-3xl shadow-2xl w-full max-w-md space-y-5"
      >
        <div>
          <h1 className="text-4xl font-bold mb-2">Signup</h1>

          <p className="text-slate-400">Create your FlowLedger account</p>
        </div>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-slate-700 outline-none"
        />

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
          className="w-full bg-green-600 hover:bg-green-700 p-4 rounded-xl font-semibold"
        >
          Signup
        </button>
        <p className="text-slate-400 text-center">
          Already have an account?
          <Link to="/login" className="text-green-400 ml-2 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
