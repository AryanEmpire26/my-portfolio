import {React,useEffect} from "react";
import "./Experience.css"; // Import the CSS file if needed
import ScrollReveal from "scrollreveal";

const Experience = () => {
   useEffect(() => {
     const sr = ScrollReveal({
       origin: "top",
       distance: "80px",
       duration: 1000,
       reset: true,
     });

     sr.reveal(".experience .timeline", { delay: 400 });
     sr.reveal(".experience .timeline .container", { interval: 400 });

     // Cleanup function to prevent memory leaks
     return () => {
       sr.destroy(); // Optional: clean up ScrollReveal instance
     };
   }, []);
  return (
    <section className="experience" id="experience">
      <h2 className="heading">
        <i className="fas fa-briefcase"></i> Experience
      </h2>

      <div className="timeline">
        <div className="container right">
          <div className="content">
            <div className="tag">
              <h2>Frontend Intern</h2>
            </div>
            <div className="desc">
              <h3>Physics Wallah</h3>
              <p>Sep 2024 - Present</p>
            </div>
          </div>
        </div>

        <div className="container left">
          <div className="content">
            <div className="tag">
              <h2>Software Engineer Intern</h2>
            </div>
            <div className="desc">
              <h3>Webkul</h3>
              <p>July 2024 - Sep 2024</p>
            </div>
          </div>
        </div>

        <div className="container right">
          <div className="content">
            <div className="tag">
              <h2>Intern</h2>
            </div>
            <div className="desc">
              <h3>Exposys Data Labs</h3>
              <p>Jan 2023 - Feb 2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
