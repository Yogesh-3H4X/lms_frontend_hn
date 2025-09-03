import { motion } from "framer-motion";

const ZigZagText = () => {
  const text = "find out best online courses";
  const letters = text.split("");

  // Fancy rainbow colors
  const colors = [
    "text-pink-500",
    "text-yellow-400",
    "text-green-400",
    "text-blue-400",
    "text-purple-500",
    "text-red-400",
  ];

  return (
    <h1 className="text-5xl font-bold flex flex-wrap justify-center">
      {letters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ y: index % 2 === 0 ? -50 : 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: index * 0.05,
            type: "spring",
          }}
          className={char === " " ? "mx-2" : colors[index % colors.length]}
        >
          {char}
        </motion.span>
      ))}
    </h1>
  );
};

export default ZigZagText;
