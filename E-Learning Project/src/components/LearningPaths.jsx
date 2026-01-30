import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import '../styles/Courses.css';

const LearningPaths = () => {
  const paths = [
    {
      level: 'Beginner',
      title: 'Start Your Journey',
      description: 'Learn fundamentals and build your first projects',
      courses: 12,
      duration: '3 months',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      level: 'Intermediate',
      title: 'Level Up Your Skills',
      description: 'Master advanced concepts and build real applications',
      courses: 18,
      duration: '4 months',
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      level: 'Advanced',
      title: 'Become an Expert',
      description: 'Specialize in cutting-edge technologies and architecture',
      courses: 24,
      duration: '6 months',
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    }
  ];

  return (
    <section className="learning-paths">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Structured Learning Paths</h2>
          <p className="section-subtitle">
            Follow curated paths from beginner to expert level
          </p>
        </div>
        <div className="paths-container">
          {paths.map((path, index) => (
            <div key={index} className="path-card">
              <div className="path-header" style={{ background: path.color }}>
                <span className="path-level">{path.level}</span>
              </div>
              <div className="path-content">
                <h3 className="path-title">{path.title}</h3>
                <p className="path-description">{path.description}</p>
                <div className="path-stats">
                  <div className="path-stat">
                    <span className="stat-value">{path.courses}</span>
                    <span className="stat-label">Courses</span>
                  </div>
                  <div className="path-stat">
                    <span className="stat-value">{path.duration}</span>
                    <span className="stat-label">Duration</span>
                  </div>
                </div>
                <button className="path-btn">
                  Explore Path <FiArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningPaths;