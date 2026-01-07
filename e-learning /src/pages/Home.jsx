import Hero from "../components/Hero";
import FeaturedCourses from "../components/FeaturedCourses";
import LearningPaths from "../components/LearningPaths";
import AILearning from "../components/AILearning";
import LiveProjects from "../components/LiveProjects";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import Newsletter from "../components/Newsletter";
import AIChatbox from "../components/AIChatbox";
import Navbar from "../components/Navbar";
const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedCourses />
      <LearningPaths />
      <AILearning />
      <LiveProjects />
      <Testimonials />
      <Pricing />
      <Newsletter />
      <AIChatbox />
    </>
  );
};

export default Home;
