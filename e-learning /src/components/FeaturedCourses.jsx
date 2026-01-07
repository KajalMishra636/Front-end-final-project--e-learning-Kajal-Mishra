import React from 'react';
import '../styles/Courses.css';

const FeaturedCourses = () => {
  const courses = [
    {
      id: 1,
      title: 'Complete React Mastery',
      instructor: 'Sarah Chen',
      rating: 4.9,
      students: 12500,
      price: '$89',
      image: '🎨',
      category: 'React & Frontend'
    },
    {
      id: 2,
      title: 'Python for AI & ML',
      instructor: 'Dr. Alex Kumar',
      rating: 4.8,
      students: 18900,
      price: '$99',
      image: '🤖',
      category: 'Python & AI'
    },
    {
      id: 3,
      title: 'Full Stack Web Dev',
      instructor: 'Mike Johnson',
      rating: 4.9,
      students: 15200,
      price: '$79',
      image: '💻',
      category: 'Web Development'
    },
    {
      id: 4,
      title: 'Java Spring Boot',
      instructor: 'Emily Rodriguez',
      rating: 4.7,
      students: 9800,
      price: '$89',
      image: '☕',
      category: 'Java & Spring Boot'
    },
    {
      id: 5,
      title: 'Data Analytics Pro',
      instructor: 'David Kim',
      rating: 4.8,
      students: 11200,
      price: '$94',
      image: '📊',
      category: 'Data Analytics'
    },
    {
      id: 6,
      title: 'Interview Prep Bootcamp',
      instructor: 'Tech Career Coaches',
      rating: 4.9,
      students: 15600,
      price: '$69',
      image: '🎯',
      category: 'Interview Prep'
    }
  ];

  return (
    <section className="featured-courses" id="courses">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Courses</h2>
          <p className="section-subtitle">
            Hand-picked courses to accelerate your learning journey
          </p>
        </div>
        <div className="courses-grid">
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              <div className="course-image">
                <div className="course-emoji">{course.image}</div>
                <div className="course-badge">{course.category}</div>
              </div>
              <div className="course-content">
                <h3 className="course-title">{course.title}</h3>
                <p className="course-instructor">by {course.instructor}</p>
                <div className="course-meta">
                  <span className="course-rating">⭐ {course.rating}</span>
                  <span className="course-students">👥 {course.students.toLocaleString()}</span>
                </div>
                <div className="course-footer">
                  <span className="course-price">{course.price}</span>
                  <button className="course-btn">Enroll Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;