import React, { useState, useEffect } from "react";
import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiSun,
  FiMoon,
} from "react-icons/fi";
import "../styles/Navbar.css";
import logo from "../Images/logo.png"
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme(theme === "dark" ? "light" : "dark");

  const categories = {
    "Web Development": [
      "HTML & CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Full Stack Projects",
    ],
    "Java Ecosystem": [
      "Java Basics",
      "OOP & DSA",
      "Spring Core",
      "Spring Boot",
      "Hibernate & JPA",
    ],
    "Python & AI": [
      "Python Fundamentals",
      "Machine Learning",
      "Deep Learning",
      "AI Projects",
    ],
    "Interview & Career": [
      "DSA Practice",
      "System Design",
      "Resume Building",
      "Mock Interviews",
    ],
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        {/* LOGO */}
        <div className="nav-logo">
          <img src={logo} alt="DevLern Logo" />
          <span className="logo-text"></span>
        </div>

        {/* DESKTOP MENU */}
        <div className="nav-menu">
          {Object.entries(categories).map(([category, items]) => (
            <div
              key={category}
              className="nav-item"
              onMouseEnter={() => setActiveDropdown(category)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <span className="nav-link">
                {category}
                <FiChevronDown className="dropdown-icon" />
              </span>

              {activeDropdown === category && (
                <div className="mega-menu">
                  <div className="mega-menu-layout">
                    <div className="mega-menu-grid">
                      {items.map((item) => (
                        <a
                          key={item}
                          href={`#${item
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                        >
                          {item}
                        </a>
                      ))}
                    </div>

                    {/* FEATURED CARD */}
                    <div className="mega-feature">
                      <h4>Featured</h4>
                      <div className="feature-card">
                        <span className="tag">POPULAR</span>
                        <h5>{category} Bootcamp</h5>
                        <p>
                          Industry-ready curriculum with live projects.
                        </p>
                        <button>Explore</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ACTIONS */}
        <div className="nav-auth">
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
          <button className="btn-login">Login</button>
          <button className="btn-signup">Sign Up Free</button>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
