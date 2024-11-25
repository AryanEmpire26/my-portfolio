import React, { useEffect, useState } from "react";
import "./WorkPage.css"; // Add styles as needed

const WorkPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/data/projects.json"); // Adjust path as needed
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="work" id="work">
      <h2 className="heading">All Projects</h2>
      <div className="box-container">
        {projects.map((project) => (
          <div className="box" key={project.id}>
            <img src={project.image} alt={project.title} />
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
    </section>
  );
};

export default WorkPage;
