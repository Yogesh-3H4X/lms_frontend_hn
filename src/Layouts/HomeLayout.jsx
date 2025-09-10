import { AiFillCloseCircle } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer.jsx"
import { useDispatch, useSelector } from "react-redux";

function HomeLayout({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  

  // for checking if user is logged in
  const isloggedIn = useSelector((state) => state?.auth?.isloggedIn);

  // for displaying the option according to the role
  const role = useSelector((state) => state?.auth?.role);

  function changeWidth() {
    const drawerSide = document.getElementsByClassName("drawer-side");
    if (drawerSide.length > 0) {
      drawerSide[0].style.width = "auto"; // ✅ ab element milega
    }
  }

  function hideDrawer() {
    const element = document.getElementsByClassName("drawer-toggle");
    element[0].checked = false;
    changeWidth();
  }

  function handleLogout(){
    e.preventDefault();

    // const res = await dispatch(logout());
   
    // if(res?.payload?.success)

      navigate("/");

  }

  return (
    <div className="min-h-[90vh]">
      <div className="drawer absolute left-0 z-50 w-fit">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content">
          <label htmlFor="my-drawer" className="cursor-pointer relative">
            <FiMenu
              onClick={changeWidth}
              size={"32px"}
              className="font-bold text-white m-4"
            />
          </label>
        </div>

        {/* 👇 yaha pe drawer-size ki jagah drawer-side use kiya hai */}
        <div className="drawer-side w-0">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>

          <ul className="menu p-4 w-48  h-[100] sm:w-80 bg-black text-white relative space-y-3 bg-emerald-900 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer 
                        transition-all duration-500 ease-[cubic-bezier(.17,.67,.83,.67)]
                        transform hover:rotate-y-6 border border-emerald-500
                        shadow-lg hover:shadow-emerald-400/70">
 
            {/* Close button */}

            <li className="w-fit absolute right-2 z-50 ">
              <button onClick={hideDrawer}>
                <AiFillCloseCircle size={24} />
              </button>
            </li>

            {/* Navigation Links */}
            <li>
              <Link to="/">Home</Link>
            </li>

            {isloggedIn && role === "ADMIN" && (
              <li>
                <Link to="/admin/dashboard">Admin Dashboard</Link>
              </li>

            )}
            <li>
              <Link to="/courses">All courses</Link>
            </li>

            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>

            {/* ✅ Login / Signup Buttons (only if NOT logged in) */}
            {!isloggedIn && (
  <li className="bg-emerald-900 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer 
                        transition-all duration-500 ease-[cubic-bezier(.17,.67,.83,.67)]
                        transform hover:scale-110 hover:rotate-x-6 hover:rotate-y-6 border border-emerald-500
                        shadow-lg hover:shadow-emerald-400/70">
    <div className="flex items-center space-x-3">
      <button className="bg-black px-5 py-3 rounded-md font-semibold text-lg cursor-pointer 
                        transition-all duration-500 ease-[cubic-bezier(.17,.67,.83,.67)]
                        transform hover:scale-110 hover:rotate-x-6 hover:rotate-y-6 border border-emerald-500
                        shadow-lg hover:shadow-emerald-400/70">
        <Link to="/login">Login</Link>
      </button>
      <button className="bg-yellow-900 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer 
                        transition-all duration-500 ease-[cubic-bezier(.17,.67,.83,.67)]
                        transform hover:scale-110 hover:rotate-x-6 hover:rotate-y-6 border border-yellow-500
                        shadow-lg hover:shadow-yellow-400/70 wl-8px">

        <Link to="/Singup">Signup</Link>
      </button>
    </div>
  </li>
)}

       {isloggedIn && (
         <div className="flex items-center space-x-3">
 <button className="">
        <Link to="/user/profile">profile</Link>
      </button>
      <button className="">

        <Link onClick={handleLogout}>logout</Link>
         </button>
         </div>
       )}
          </ul>
        </div>
      </div>
      {children}
      <Footer />
    </div>
  );
}

export default HomeLayout;


