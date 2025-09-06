import aboutMainImage from "../assets/images/kalamsir.jpg";  // Hero image
import HomeLayout from "../Layouts/HomeLayout";
import CarouselSlide from "../components/CarouselSlide";
import { celebrities } from "../assets/constants/CelebrityData";

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
              style={{ filter: "drop-shadow(0px 10px 10px rgb(0,0,0))" }}
              alt="about main"
              className="drop-shadow-2xl"
              src={aboutMainImage}
            />
          </div>
        </div>

        {/* Carousel Section */}
        <div className="carousel w-1/2 m-auto my-16">
          {celebrities.map((celeb, index) => (
            <CarouselSlide
              key={index}
              image={celeb.image}
              title={celeb.title}
              description={celeb.description}
              slidenumber={celeb.slidenumber}
              totelslides={celebrities.length}
            />
          ))}
        </div>
      </div>
    </HomeLayout>
  );
}

export default AboutUs;

