import aboutMainImage from "../assets/images/kalamsir.jpg";  // Hero image
import apj from "../assets/images/apj.png";
import billGates from "../assets/images/billgate.jpg";
import einstein from "../assets/images/5822520-albert-einstein-quote-albert-einstein-motivational-p-wallpaper-hdwallpaper-desktop-einstein-albert-einstein-einstein-quotes.jpg";
import nelsonMandela from "../assets/images/nelson.png";
import steveJobs from "../assets/images/kalamsir.jpg"; // temporary use
import HomeLayout from "../Layouts/HomeLayout";

function AboutUs() {
  return (
    <HomeLayout>
      <div className="w-screen min-h-screen bg-black text-white pl-20 pt-20 flex flex-col">

        {/* Hero Section */}
        <div className="flex items-center gap-5 mx-10">
          <section className="w-1/2 space-y-10">
            <h1 className="text-5xl text-yellow-500 font-semibold">
              Affordable and quality education
            </h1>
            <p className="text-xl text-gray-200">
              Our goal is to provide affordable and quality education to the
              world. We are providing a platform for aspiring teachers and
              students to share their skills, creativity, and knowledge with
              each other to empower and contribute to the growth and wellness of
              mankind.
            </p>
          </section>

          <div className="w-1/2">
            <img
              id="test1"
              style={{
                filter: "drop-shadow(0px 10px 10px rgb(0,0,0))",
              }}
              alt="about main image"
              className="drop-shadow-2xl"
              src={aboutMainImage}
            />
          </div>
        </div>

        {/* Carousel Section */}
        <div className="carousel w-1/2 m-auto my-16">
          {/* Slide 1 - Nelson Mandela */}
          <div id="slide1" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              <img
                src={nelsonMandela}
                className="w-40 rounded-full border-2 border-gray-400"
                alt="Nelson Mandela"
              />
              <p className="text-xl text-gray-200">
                "Education is the most powerful tool you can use to change the
                world."
              </p>
              <h3 className="text-2xl font-semibold">Nelson Mandela</h3>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide5" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
              </div>
            </div>
          </div>

          {/* Slide 2 - APJ Abdul Kalam */}
          <div id="slide2" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              <img
                src={apj}
                className="w-40 rounded-full border-2 border-gray-400"
                alt="APJ Abdul Kalam"
              />
              <p className="text-xl text-gray-200">
                "Failure will never overtake me if my determination to succeed
                is strong enough."
              </p>
              <h3 className="text-2xl font-semibold">APJ Abdul Kalam</h3>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
              </div>
            </div>
          </div>

          {/* Slide 3 - Albert Einstein */}
          <div id="slide3" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              <img
                src={einstein}
                className="w-40 rounded-full border-2 border-gray-400"
                alt="Albert Einstein"
              />
              <p className="text-xl text-gray-200">
                "A person who never made a mistake never tried anything new."
              </p>
              <h3 className="text-2xl font-semibold">Albert Einstein</h3>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a>
                <a href="#slide4" className="btn btn-circle">❯</a>
              </div>
            </div>
          </div>

          {/* Slide 4 - Steve Jobs */}
          <div id="slide4" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              <img
                src={steveJobs}
                className="w-40 rounded-full border-2 border-gray-400"
                alt="Steve Jobs"
              />
              <p className="text-xl text-gray-200">
                "We don't get a chance to do that many things, and every one
                should be really excellent."
              </p>
              <h3 className="text-2xl font-semibold">DR kalam</h3>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">❮</a>
                <a href="#slide5" className="btn btn-circle">❯</a>
              </div>
            </div>
          </div>

          {/* Slide 5 - Bill Gates */}
          <div id="slide5" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              <img
                src={billGates}
                className="w-40 rounded-full border-2 border-gray-400"
                alt="Bill Gates"
              />
              <p className="text-xl text-gray-200">
                "Success is a lousy teacher. It seduces smart people into
                thinking they can’t lose."
              </p>
              <h3 className="text-2xl font-semibold">Bill Gates</h3>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default AboutUs;
