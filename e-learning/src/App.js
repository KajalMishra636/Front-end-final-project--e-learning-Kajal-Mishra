import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCourses from './components/FeaturedCourses';
import LearningPaths from './components/LearningPaths';
import AILearning from './components/AILearning';
import LiveProjects from './components/LiveProjects';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Newsletter from './components/Newsletter';
import AIChatbox from './components/AIChatbox';
import './styles/global.css';
import Loader from './components/Loader';


function App() {
  const [loading, setLoading] = useState(true);
const [progress, setProgress] = useState(1);

useEffect(() => {
  const interval = setInterval(() => {
    setProgress((prev) => {
      if (prev >= 100) {
        clearInterval(interval);
        setLoading(false);
        return 100;
      }
      return prev + 1;
    });
  }, 25);

  return () => clearInterval(interval);
}, []);

if (loading) {
  return <Loader progress={progress} />;
}


  return (
    <div className="App">
      <Navbar />
 <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<CategoryPage />} />
        <Route path="/:category/:course" element={<CourseList />} />
      </Routes>

      <Hero />
      <FeaturedCourses />
      <LearningPaths />
      <AILearning />
      <LiveProjects />
      <Testimonials />
      <Pricing />
      <Newsletter />
      <AIChatbox />
    </div>
  );
}
export default App;
