import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Learn Skills That Matter in the AI Era';
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-headline">
            {displayText}
            {isTyping && <span className="cursor">|</span>}
          </h1>
          <p className="hero-subtitle">
            Master in-demand skills with interactive courses, AI-powered learning,
            and real-world projects. Join thousands of learners building their future.
          </p>
          <div className="hero-cta">
            <button className="btn-primary">Explore Courses</button>
            <button className="btn-secondary">Start Free</button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">50K+</span>
              <span className="stat-label">Active Learners</span>
            </div>
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Courses</span>
            </div>
            <div className="stat">
              <span className="stat-number">95%</span>
              <span className="stat-label">Job Success Rate</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-card card-1">
            <div className="card-icon">💻</div>
            <div className="card-text">Interactive Coding</div>
          </div>
          <div className="floating-card card-2">
            <div className="card-icon">🤖</div>
            <div className="card-text">AI Assistant</div>
          </div>
          <div className="floating-card card-3">
            <div className="card-icon">📈</div>
            <div className="card-text">Track Progress</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;