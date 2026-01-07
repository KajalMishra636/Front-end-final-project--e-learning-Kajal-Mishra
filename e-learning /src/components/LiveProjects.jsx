import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import '../styles/Courses.css';

const LiveProjects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      tech: 'React, Node.js, MongoDB',
      description: 'Build a full-stack e-commerce solution with payment integration',
      difficulty: 'Intermediate'
    },
    {
      title: 'Social Media Dashboard',
      tech: 'React, Redux, Firebase',
      description: 'Create a real-time social media analytics dashboard',
      difficulty: 'Advanced'
    },
    {
      title: 'Task Management App',
      tech: 'React, TypeScript, Express',
      description: 'Develop a collaborative task management application',
      difficulty: 'Beginner'
    }
  ];

  return (
    <section className="live-projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Build Real-World Projects</h2>
          <p className="section-subtitle">
            Apply your skills by building projects that employers want to see
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-difficulty">{project.difficulty}</span>
              </div>
              <p className="project-tech">{project.tech}</p>
              <p className="project-description">{project.description}</p>
              <div className="project-actions">
                <button className="project-btn">
                  <FiExternalLink /> View Project
                </button>
                <button className="project-btn secondary">
                  <FiGithub /> Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveProjects;