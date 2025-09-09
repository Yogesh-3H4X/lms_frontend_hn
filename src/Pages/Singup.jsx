import { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register Data:", formData);
    alert("Registration Successful!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      {/* Card */}
      <div className="flex w-[900px] max-w-full rounded-2xl shadow-2xl overflow-hidden">
        {/* LEFT SIDE */}
        <div className="w-1/2 bg-gradient-to-br from-blue-300 to-purple-500 p-12 flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">WELCOME!</h1>
          <p className="text-gray-800 text-lg leading-relaxed">
            We're delighted to have you here. Please register and start your journey with us.
          </p>
        </div>

        {/* RIGHT SIDE (Form) */}
        <div className="w-1/2 bg-[#0f172a] p-12 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6 text-purple-300">Register</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm mb-1 text-gray-100">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                placeholder="Enter your username"
                className="w-full rounded-md bg-gray-800 px-4 py-2 text-white placeholder-gray-400 border border-gray-700 focus:ring-2 focus:ring-purple-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-100">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-full rounded-md bg-gray-800 px-4 py-2 text-white placeholder-gray-400 border border-gray-700 focus:ring-2 focus:ring-purple-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-100">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
                className="w-full rounded-md bg-gray-800 px-4 py-2 text-white placeholder-gray-400 border border-gray-700 focus:ring-2 focus:ring-purple-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-100">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                placeholder="Confirm your password"
                className="w-full rounded-md bg-gray-800 px-4 py-2 text-white placeholder-gray-400 border border-gray-700 focus:ring-2 focus:ring-purple-400 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-300 to-purple-500 py-2 rounded-lg font-semibold text-gray-900 hover:opacity-90 transition shadow-md shadow-purple-500/40"
            >
              Register
            </button>
          </form>

          <p className="mt-6 text-sm text-gray-400 text-center">
            Already have an account?{" "}
            <a href="/login" className="text-purple-300 hover:underline font-semibold">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
