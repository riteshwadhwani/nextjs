import './globals.css'
import FeaturedCourses from "./components/FeaturedCourses";
import HeroSection from "./components/HeroSection";
import WhyChooseUs from "./components/WhyChooseUs";
import TestimonialCards from './components/TestimonialCards';
import UpcommingWebinars from './components/UpcommingWebinars';
import Instructors from './components/Instructors';
import Footer from './components/Footer';
export default function Home() {
  return (
    <div className="min-h-screen w-screen bg-black/[0.96] overflow-x-hidden antialiased bg-grid-white/[0.02]">
     <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <TestimonialCards/>
      <UpcommingWebinars/>
      <Instructors/>
      <Footer/>
    </div>
  );
}
