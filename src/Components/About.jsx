import React, { useEffect } from "react";
import "./About.css"; // Import the CSS file
import ScrollReveal from "scrollreveal"; // Import ScrollReveal
import imgg from "../assets/images/imgg.avif";

const About = () => {

     useEffect(() => {
       const sr = ScrollReveal({
         origin: "top",
         distance: "80px",
         duration: 1000,
         reset: true,
       });

       sr.reveal(".about .content h3", { delay: 200 });
       sr.reveal(".about .content .tag", { delay: 200 });
       sr.reveal(".about .content p", { delay: 200 });
       sr.reveal(".about .content .box-container", { delay: 200 });
       sr.reveal(".about .content .resumebtn", { delay: 200 });

       // Cleanup function to prevent memory leaks
       return () => {
         sr.destroy(); // Optional: clean up ScrollReveal instance
       };
     }, []);
  
  useEffect(() => {
    // Initialize ScrollReveal and apply it to specific elements
    
 
    // Handle the image tilt effect
    const image = document.querySelector(".tilt");

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { width, height, left, top } = image.getBoundingClientRect();
      const x = (clientX - left - width / 2) / width;
      const y = (clientY - top - height / 2) / height;

      const rotateX = y * 20; // Adjust sensitivity
      const rotateY = -x * 20; // Adjust sensitivity

      image.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    };

    const resetTransform = () => {
      image.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    };

    image.addEventListener("mousemove", handleMouseMove);
    image.addEventListener("mouseleave", resetTransform);

    return () => {
      image.removeEventListener("mousemove", handleMouseMove);
      image.removeEventListener("mouseleave", resetTransform);
    };
  }, []);

  return (
    <section className="about" id="about">
      <h2 className="heading">
        <i className="fas fa-user-alt"></i> About <span>Me</span>
      </h2>

      <div className="row">
        <div className="image">
          <img draggable="false" className="tilt" src={imgg} alt="About me" />
        </div>

        <div className="content">
          <h3>I'm Aryan</h3>
          <span className="tag">Software Engineer</span>

          <p>
            I am a Software Engineer from Patna, currently interning in Noida,
            India. With a strong passion for coding, I focus on developing
            applications and websites using the MERN stack. I continually seek
            to improve my skills through personal projects and hands-on
            experience. My dedication to learning and growth drives my journey
            in the tech industry.
          </p>

          <div className="box-container">
            <div className="box">
              <p>
                <span>email: </span> aryanranjanwork@gmail.com
              </p>
              <p>
                <span>place: </span>Noida, Uttar Pradesh, India - 101101
              </p>
            </div>
          </div>

          <div className="resumebtn">
            <a
              href="https://drive.google.com/file/d/1u1Z4YKL1_WMvCTVMOVPN3laht41W9MH2/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <span>Resume</span>
              <i className="fas fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
