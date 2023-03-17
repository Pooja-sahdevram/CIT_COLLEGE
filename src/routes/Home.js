import Destination from "../components/Destination";
import Hero from "../components/Hero";
import Navbar from "../components/Nav_Bar/Navbar";
import Trip from "../components/Trip";
import image from "./../assets/download.jpeg";
import AboutUs from "../components/AboutUs";
import Academics_progrma from "../components/ACADEMIC_PROGRAMS";
import Student_count from "../components/student-count/Student";
import SlickC from "../components/Slick_carosule/SlickC";
import Campus_life from "../components/Campus_life/Campus_life";
import Event from "../components/Photo_Gallary/Events";
import CollegeRecognition from "../components/testimonial/CollegeRecognition";

import Footer from "../components/Footer-sec/Footer";
import Testimonial from "../components/testimonial/Testimonial";
function Home() {
  return (
    <div className="HOme">
      <Navbar />
      <Hero />
      <AboutUs />
      <Academics_progrma />
      <SlickC />
      <Student_count />
      <Campus_life />
      <Event />
      <Testimonial />
      <CollegeRecognition />
      <Footer />
    </div>
  );
}

export default Home;
