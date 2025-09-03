import HomeLayout from "../Layouts/HomeLayout";
import { Link } from "react-router-dom";
import HomepageVideo from "../assets/video/2268807-hd_1920_1080_24fps.mp4"
import ZigZagText from "../components/ZigZagText";
// import HomepageImage from "../assets/images/janko-ferlic-sfL_QOnmy00-unsplash.jpg"

function Homepage() {
  return (
    <HomeLayout>
      <div className="min-h-screen w-screen flex items-center justify-center bg-black text-white px-6">
        <div className="max-w-3xl text-center space-y-6">
          
          <ZigZagText />

          <p className="text-lg text-gray-300">
            we have a large library of courses taught by highly skilled and qualified faculties at a very affordable cost
          </p>

          <div className="space-x-6">
            <Link to="/courses">
  <button
    className="bg-emerald-900 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer 
               transition-all duration-500 ease-[cubic-bezier(.17,.67,.83,.67)]
               transform hover:scale-110 hover:rotate-x-6 hover:rotate-y-6 border border-emerald-500
               shadow-lg hover:shadow-emerald-400/70"
  >
                       Explore Courses
                  </button>
              </Link>

                  <Link to="/contact">
              <button className=" border border-pink-500 px-5 py-3 rounded-md font-semibold text-lg  duration-500 ease-[cubic-bezier(.17,.67,.83,.67)]
               transform hover:scale-110 hover:rotate-x-6 hover:rotate-y-6
               shadow-lg hover:shadow-pink-400/70 cursor-pointer hover:bg-pink-600 transition-all ease-in-out mr-40">
                Contact Us
              </button>
            </Link>

          </div>
        </div>

        <div className="w-1/2 flex items-center justify-center ">
         <video 
            src={HomepageVideo} 
            autoPlay 
            loop 
            muted 
            playsInline
               className="w-[900px] h-[692px] rounded-lg shadow-lg object-cover mr-[-39px] 
                  transition-transform duration-500 ease-out
                   group-hover:rotate-x-6 group-hover:rotate-y-6 group-hover:scale-105 group-hover:shadow-yellow-500/50"
          />
        </div>

        {/* <div className="w-1/2 flex items-center justify-center "> 
             <img src={HomepageImage} alt="homepage image" />
        </div> */}

      </div>
    </HomeLayout>
  );
}

export default Homepage;
