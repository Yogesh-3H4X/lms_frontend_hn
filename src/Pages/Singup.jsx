import { motion } from "framer-motion";
import HomeLayout from "../Layouts/HomeLayout";

export default function Singup() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log("Register Data:", data);
    alert("Registration successful!");
    e.target.reset();
  };

  const formVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, duration: 0.6 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  const fieldVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  return (
    <HomeLayout>
      <div className="relative min-h-screen flex items-center justify-center font-sans overflow-hidden h-screen w-screen ">
        {/* Background */}
        <motion.div
          initial={{ backgroundPosition: "0% 50%" }}
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 -z-10 bg-gradient-to-b from-[#A0D2EB] via-[#E5EAF5] via-[#D0B0F4] to-[#845BB3] bg-[length:200%_200%]"
        />
        <div className="absolute inset-0 bg-black/60 -z-5"></div>

        {/* Card */}
        <div className="relative w-[850px] max-w-full flex rounded-2xl overflow-hidden shadow-2xl border border-orange-600/40">
          {/* LEFT */}
          <motion.div
            initial={{ x: -200, opacity: 0, scale: 0.9 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="w-1/2 bg-gradient-to-br from-orange-500 to-red-700 p-10 flex flex-col justify-center relative clip-path-diagonal"
          >
            <h1 className="text-4xl font-extrabold mb-4 drop-shadow-lg">WELCOME!</h1>
            <p className="text-base leading-relaxed text-gray-100 drop-shadow">
              We're delighted to have you here. Please register and start your journey with us.
            </p>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ x: 200, opacity: 0, scale: 0.95 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="w-1/2 bg-gray-900 p-10 relative flex flex-col justify-center"
          >
            <h2 className="text-3xl font-bold mb-6 text-center text-orange-400">Register</h2>

            <motion.form
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
                  className="w-full rounded-md bg-gray-800 px-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 outline-none border border-gray-700"
                  placeholder="Enter your username"
                />
              </motion.div>
              <motion.div variants={fieldVariants}>
                <label className="block text-sm mb-1 text-gray-100">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-md bg-gray-800 px-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 outline-none border border-gray-700"
                  placeholder="Enter your email"
                />
              </motion.div>
              <motion.div variants={fieldVariants}>
                <label className="block text-sm mb-1 text-gray-100">Password</label>
                <input
                  type="password"
                  name="password"
                  required
                  className="w-full rounded-md bg-gray-800 px-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 outline-none border border-gray-700"
                  placeholder="Enter your password"
                />
              </motion.div>
              <motion.div variants={fieldVariants}>
                <label className="block text-sm mb-1 text-gray-100">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  required
                  className="w-full rounded-md bg-gray-800 px-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 outline-none border border-gray-700"
                  placeholder="Confirm your password"
                />
              </motion.div>
              <motion.button
                variants={fieldVariants}
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,165,0,0.6)" }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-red-600 py-2 rounded-lg font-semibold hover:opacity-90 transition shadow-md shadow-orange-600/40"
              >
                Register
              </motion.button>
            </motion.form>
          </motion.div>
        </div>

        {/* Clip Path */}
        <style>{`
          .clip-path-diagonal {
            clip-path: polygon(0 0, 100% 0, 80% 100%, 0% 100%);
          }
        `}</style>
      </div>
    </HomeLayout>
  );
}
