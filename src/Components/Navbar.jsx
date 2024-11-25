import React, { useEffect, useState } from "react";
import "./Navbar.css"; // Ensure the CSS file is properly imported

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section"); // Assuming each section has a <section> tag
    const navLinks = document.querySelectorAll(".navbar ul li a");

    const options = {
      threshold: 0.6, // Trigger when 60% of section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          setActiveSection(id); // Set the active section
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section)); // Clean up observer
    };
  }, []);

  return (
    <header>
      <a href="/" className="logo">
        <i className="fab fa-node-js"></i> Aryan
      </a>

      <div
        id="menu"
        className={isNavOpen ? "fas fa-times" : "fas fa-bars"}
        onClick={handleToggle}
      ></div>

      <nav className={`navbar ${isNavOpen ? "nav-toggle" : ""}`}>
        <ul>
          <li>
            <a
              className={activeSection === "home" ? "active" : ""}
              href="#home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className={activeSection === "about" ? "active" : ""}
              href="#about"
            >
              About
            </a>
          </li>
          <li>
            <a
              className={activeSection === "skills" ? "active" : ""}
              href="#skills"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              className={activeSection === "education" ? "active" : ""}
              href="#education"
            >
              Education
            </a>
          </li>
          <li>
            <a
              className={activeSection === "work" ? "active" : ""}
              href="#work"
            >
              Work
            </a>
          </li>
          <li>
            <a
              className={activeSection === "experience" ? "active" : ""}
              href="#experience"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              className={activeSection === "contact" ? "active" : ""}
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
