

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoginRegister() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin((prev) => !prev);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(isLogin ? "Login Data:" : "Register Data:", data);
    alert(`${isLogin ? "Login" : "Register"} successful!`);
    e.target.reset();
  };

  // Variants for staggered form fields animation
  const formVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { staggerChildren: 0.1, duration: 0.6 } 
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  const fieldVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  return (
<div className="relative min-h-screen w-screen flex items-center justify-center font-sans overflow-hidden">


      {/* ✅ Animated Background Gradient (Updated Colors) */}
      <motion.div
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 -z-10 bg-gradient-to-b from-[#A0D2EB] via-[#E5EAF5] via-[#D0B0F4] to-[#845BB3] bg-[length:200%_200%]"
      />

      {/* Overlay (optional dark layer) */}
      <div className="absolute inset-0 bg-black/30 -z-5"></div>

      {/* Card */}
      <div className="relative w-[850px] max-w-full flex rounded-2xl overflow-hidden shadow-2xl border border-purple-400/40">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ x: -200, opacity: 0, scale: 0.9 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="w-1/2 bg-gradient-to-br from-[#A0D2EB] to-[#845BB3] p-10 flex flex-col justify-center relative clip-path-diagonal"
        >
          <h1 className="text-4xl font-extrabold mb-4 drop-shadow-lg">WELCOME!</h1>
          <p className="text-base leading-relaxed text-gray-100 drop-shadow">
            {isLogin
              ? "Glad to see you back. Login to continue your journey with us."
              : "We're delighted to have you here. Please register and start your journey with us."}
          </p>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          initial={{ x: 200, opacity: 0, scale: 0.95 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="w-1/2 bg-gray-900 p-10 relative flex flex-col justify-center"
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-purple-300">
            {isLogin ? "Login" : "Register"}
          </h2>

          <AnimatePresence mode="wait">
            {isLogin ? (
              <motion.form
                key="login"
                onSubmit={handleSubmit}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={formVariants}
                className="space-y-5"
              >
                <motion.div variants={fieldVariants}>
                  <label className="block text-sm mb-1 text-gray-100">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-md bg-gray-800 px-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-400 outline-none border border-gray-700"
                    placeholder="Enter your email"
                  />
                </motion.div>
                <motion.div variants={fieldVariants}>
                  <label className="block text-sm mb-1 text-gray-100">Password</label>
                  <input
                    type="password"
                    name="password"
                    required
                    className="w-full rounded-md bg-gray-800 px-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-400 outline-none border border-gray-700"
                    placeholder="Enter your password"
                  />
                </motion.div>
                <motion.button
                  variants={fieldVariants}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(132,91,179,0.6)" }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#A0D2EB] to-[#845BB3] py-2 rounded-lg font-semibold hover:opacity-90 transition shadow-md shadow-purple-500/40"
                >
                  Login
                </motion.button>
              </motion.form>
            ) : (
              <motion.form
                key="register"
                onSubmit={handleSubmit}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={formVariants}
                className="space-y-5"
              >
                <motion.div variants={fieldVariants}>
                  <label className="block text-sm mb-1 text-gray-100">Username</label>
                  <input
                    type="text"
                    name="username"
                    required
                    className="w-full rounded-md bg-gray-800 px-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-400 outline-none border border-gray-700"
                    placeholder="Enter your username"
                  />
                </motion.div>
                <motion.div variants={fieldVariants}>
                  <label className="block text-sm mb-1 text-gray-100">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-md bg-gray-800 px-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-400 outline-none border border-gray-700"
                    placeholder="Enter your email"
                  />
                </motion.div>
                <motion.div variants={fieldVariants}>
                  <label className="block text-sm mb-1 text-gray-100">Password</label>
                  <input
                    type="password"
                    name="password"
                    required
                    className="w-full rounded-md bg-gray-800 px-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-400 outline-none border border-gray-700"
                    placeholder="Enter your password"
                  />
                </motion.div>
                <motion.div variants={fieldVariants}>
                  <label className="block text-sm mb-1 text-gray-100">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    required
                    className="w-full rounded-md bg-gray-800 px-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-400 outline-none border border-gray-700"
                    placeholder="Confirm your password"
                  />
                </motion.div>
                <motion.button
                  variants={fieldVariants}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(132,91,179,0.6)" }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#A0D2EB] to-[#845BB3] py-2 rounded-lg font-semibold hover:opacity-90 transition shadow-md shadow-purple-500/40"
                >
                  Register
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>

          <p className="mt-6 text-sm text-gray-400 text-center">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              onClick={toggleForm}
              className="text-purple-300 hover:underline font-semibold"
            >
              {isLogin ? "Register" : "Login"}
            </button>
          </p>
        </motion.div>
      </div>

      {/* Diagonal clip path */}
      <style>{`
        .clip-path-diagonal {
          clip-path: polygon(0 0, 100% 0, 80% 100%, 0% 100%);
        }
      `}</style>
    </div>
  );
}
