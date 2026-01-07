import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import '../styles/Courses.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Alex Martinez',
      role: 'Software Engineer at Google',
      image: '👨‍💻',
      text: 'DevLern helped me transition from a non-tech background to landing my dream job at Google. The AI assistant was incredibly helpful!'
    },
    {
      name: 'Priya Sharma',
      role: 'Frontend Developer at Meta',
      image: '👩‍💻',
      text: 'The structured learning paths and real projects gave me the confidence to apply for senior positions. Highly recommend!'
    },
    {
      name: 'James Wilson',
      role: 'Full Stack Developer',
      image: '👨‍💼',
      text: 'Best investment I made in my career. The courses are up-to-date and the community support is amazing.'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What Our Learners Say</h2>
          <p className="section-subtitle">
            Join thousands of successful professionals who transformed their careers
          </p>
        </div>
        <div className="testimonial-carousel">
          <button className="carousel-btn prev" onClick={prev}>
            <FiChevronLeft />
          </button>
          <div className="testimonial-card">
            <div className="testimonial-avatar">
              {testimonials[currentIndex].image}
            </div>
            <p className="testimonial-text">"{testimonials[currentIndex].text}"</p>
            <div className="testimonial-author">
              <div className="author-name">{testimonials[currentIndex].name}</div>
              <div className="author-role">{testimonials[currentIndex].role}</div>
            </div>
          </div>
          <button className="carousel-btn next" onClick={next}>
            <FiChevronRight />
          </button>
        </div>
        <div className="carousel-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;