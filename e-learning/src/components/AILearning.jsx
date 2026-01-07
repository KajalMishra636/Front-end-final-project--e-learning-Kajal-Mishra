import React from 'react';
import { FiZap,  FiCpu, FiTarget } from 'react-icons/fi';
import '../styles/Courses.css';

const AILearning = () => {
  const features = [
    {
      icon: <FiZap />,
      title: 'AI-Powered Recommendations',
      description: 'Get personalized course suggestions based on your goals and progress'
    },
    {
      icon: <FiCpu />,
      title: 'Smart Learning Assistant',
      description: '24/7 AI tutor to answer questions and explain complex concepts'
    },
    {
      icon: <FiTarget />,
      title: 'Adaptive Learning Paths',
      description: 'Courses that adapt to your learning pace and style'
    }
  ];

  return (
    <section className="ai-learning">
      <div className="container">
        <div className="ai-content">
          <div className="ai-text">
            <h2 className="section-title">AI-Powered Learning Experience</h2>
            <p className="section-subtitle">
              Experience the future of education with our intelligent learning platform.
              Get instant help, personalized recommendations, and adaptive content.
            </p>
            <div className="ai-features">
              {features.map((feature, index) => (
                <div key={index} className="ai-feature">
                  <div className="ai-feature-icon">{feature.icon}</div>
                  <div className="ai-feature-content">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="btn-primary">Try AI Assistant</button>
          </div>
          <div className="ai-visual">
            <div className="ai-card">
              <div className="ai-card-header">
                <div className="ai-avatar">🤖</div>
                <div>
                  <div className="ai-name">AI Learning Assistant</div>
                  <div className="ai-status">Online</div>
                </div>
              </div>
              <div className="ai-messages">
                <div className="ai-message bot">
                  Hi! I'm here to help you learn. What would you like to know?
                </div>
                <div className="ai-message user">
                  Can you explain React hooks?
                </div>
                <div className="ai-message bot">
                  React hooks are functions that let you use state and other React features in functional components...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AILearning;