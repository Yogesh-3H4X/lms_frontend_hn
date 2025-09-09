export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-[#1a2238] text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold tracking-widest">404</h1>
        <div className="text-xl mt-4 tracking-widest">
          Page Not Found
        </div>

        {/* Styled Button */}
        <button
          onClick={() => window.history.back()}
          className="mt-6 px-6 py-2 bg-gradient-to-r from-purple-400 to-blue-500 
                     text-white font-semibold rounded-lg shadow-lg 
                     hover:scale-105 hover:shadow-xl transition duration-300"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
