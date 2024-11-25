import React, { useEffect, useState } from "react";
import "./Skills.css"; // Import the CSS file
import ScrollReveal from "scrollreveal"; // Import ScrollReveal

const Skills = () => {
  const [skills, setSkills] = useState([]);

     useEffect(() => {
       const sr = ScrollReveal({
         origin: "top",
         distance: "80px",
         duration: 1000,
         reset: true,
       });

       sr.reveal(".skills .container", { interval: 150 });
       sr.reveal(".skills .container .bar", { delay: 200 });

       // Cleanup function to prevent memory leaks
       return () => {
         sr.destroy(); // Optional: clean up ScrollReveal instance
       };
     }, []);

  useEffect(() => {
       
    const fetchSkills = async () => {
      try {
        const response = await fetch("/data/skills.json"); // Adjust the path if necessary
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched skills:", data); // Log the fetched skills
        setSkills(data);
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    };

    fetchSkills();
  }, []);

  return (
    <section className="skills" id="skills">
      <h2 className="heading">
        <i className="fas fa-laptop-code"></i> Skills & <span>Abilities</span>
      </h2>

      <div className="container">
        <div className="row" id="skillsContainer">
          {skills.map((skill) => (
            <div className="bar" key={skill.name}>
              <div className="info">
                <img src={skill.icon} alt={skill.name} />
                <span>{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
