import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Work.css"; // Import the CSS file

const Work = () => {
  const [projects, setProjects] = useState([]);
  const [visibleProjects, setVisibleProjects] = useState([]);
  

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/data/projects.json"); // Adjust path as needed
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProjects(data);
        setVisibleProjects(data.slice(0, 6)); // Show first 6 projects
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    fetchProjects();
  }, []);

  // Tilt effect logic
  useEffect(() => {
    const boxes = document.querySelectorAll(".tilt");

    boxes.forEach((box) => {
      const handleMouseMove = (event) => {
        const { clientX, clientY } = event;
        const { width, height, left, top } = box.getBoundingClientRect();
        const x = (clientX - left - width / 2) / width;
        const y = (clientY - top - height / 2) / height;

        const rotateX = y * 40; // Adjust sensitivity
        const rotateY = -x * 40; // Adjust sensitivity

        box.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
      };

      const resetTransform = () => {
        box.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
      };

      box.addEventListener("mousemove", handleMouseMove);
      box.addEventListener("mouseleave", resetTransform);

      // Cleanup event listeners on unmount
      return () => {
        box.removeEventListener("mousemove", handleMouseMove);
        box.removeEventListener("mouseleave", resetTransform);
      };
    });
  }, [visibleProjects]);

  return (
    <section className="work" id="work">
      <h2 className="heading">
        <i className="fas fa-laptop-code"></i> Projects <span>Made</span>
      </h2>

      <div className="box-container">
        {visibleProjects.map((project) => (
          <div className="box tilt" key={project.id}>
            <img draggable="false" src={project.image} alt={project.title} />
            <div className="content">
              <div className="tag">
                <h3>{project.title}</h3>
              </div>
              <div className="desc">
                <p>{project.description}</p>
                <div className="btns">
                  <a
                    href={project.viewLink}
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-eye"></i> View
                  </a>
                  <a
                    href={project.codeLink}
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code <i className="fas fa-code"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="viewall">
        <Link to="/projects" className="btn">
          <span>View All</span>
          <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </section>
  );
};

export default Work;
