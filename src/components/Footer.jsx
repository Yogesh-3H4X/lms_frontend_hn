import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

function Footer() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  return (
    <>
    <div className=" ">
        
      <footer
  className="fixed  w-full bg-gray-800 h-[10vh] flex  sm:flex-row  justify-between text-white sm:px-20 py-4 bottom-0">

        <section className="text-lg text-white-500">
          copyright {year} | All rights reserved
        </section>

        <section className="flex items-center justify-center gap-5 text-2xl text-white">
          <a className="hover:text-yellow-500 transition-all ease-in-out duration-300">
            <BsFacebook />
          </a>
          <a className="hover:text-yellow-500 transition-all ease-in-out duration-300">
            <BsInstagram />
          </a>
          <a className="hover:text-yellow-500 transition-all ease-in-out duration-300">
            <BsLinkedin />
          </a>
          <a className="hover:text-yellow-500 transition-all ease-in-out duration-300">
            <BsTwitter />
          </a>
        </section>
      </footer>
      </div>
    </>
  );
}

export default Footer;

