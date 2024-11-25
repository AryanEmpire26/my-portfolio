import React, { useEffect, useState } from "react";
import "./HeroSection.css"; // Assuming you have the styles in a separate CSS file
import heroimg from "../assets/images/hero.png";
import ScrollReveal from "scrollreveal"; // Import ScrollReveal

const typingTexts = [
  "frontend development",
  "backend development",
  "web designing",
  "web development",
]; // Add your desired texts here
   
const HeroSection = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 50; // Typing speed
  const deletingSpeed = 25; // Deleting speed
useEffect(() => {
  const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 1000,
    reset: true,
  });

  sr.reveal(".home .content h3", { delay: 400 });
  sr.reveal(".home .content p", { delay: 400 });
  sr.reveal(".home .content .btn", { delay: 400 });

  sr.reveal(".home .image", { delay: 400 });
  sr.reveal(".home .linkedin", { interval: 800 });
  sr.reveal(".home .github", { interval: 1000 });
  sr.reveal(".home .twitter", { interval: 1200 });
  sr.reveal(".home .telegram", { interval: 800 });
  sr.reveal(".home .instagram", { interval: 800 });
  sr.reveal(".home .dev", { interval: 800 });


  // Cleanup function to prevent memory leaks
  return () => {
    sr.destroy(); // Optional: clean up ScrollReveal instance
  };
}, []);

  useEffect(() => {





    const handleTyping = () => {
      const currentText = typingTexts[index];
      if (isDeleting) {
        setText(currentText.substring(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % typingTexts.length); // Move to the next text
        }
      } else {
        setText(currentText.substring(0, text.length + 1));
        if (text === currentText) {
          setTimeout(() => setIsDeleting(true), 500); // Wait before deleting
        }
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timer);
  }, [text, index, isDeleting]);
  useEffect(() => {
    const image = document.querySelector(".tilt");

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { width, height, left, top } = image.getBoundingClientRect();
      const x = (clientX - left - width / 2) / width;
      const y = (clientY - top - height / 2) / height;
      
      const rotateX = y * 20;
      const rotateY = -x * 20;

      image.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    };

    const resetTransform = () => {
      image.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    };

    image.addEventListener("mousemove", handleMouseMove);
    image.addEventListener("mouseleave", resetTransform);

    return () => {
      image.removeEventListener("mousemove", handleMouseMove);
      image.removeEventListener("mouseleave", resetTransform);
    };
  }, []);


  return (
    <section className="home" id="home">
      <div className="content">
        <h2>
          Hi There,
          <br /> I'm Aryan <span>Ranjan</span>
        </h2>
        <p>
          I am into <span className="typing-text">{text}</span>
        </p>
        <a href="#about" className="btn">
          <span>About Me</span>
          <i className="fas fa-arrow-circle-down"></i>
        </a>

        <div className="socials">
          <ul className="social-icons">
            <li>
              <a
                className="linkedin"
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/aryan-ranjan-79634124a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                className="github"
                aria-label="GitHub"
                href="https://github.com/AryanEmpire26"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a
                className="twitter"
                aria-label="Twitter"
                href="https://x.com/AryanRa35562120"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                className="telegram"
                aria-label="Telegram"
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-telegram-plane"></i>
              </a>
            </li>
            <li>
              <a
                className="instagram"
                aria-label="Instagram"
                href="https://www.instagram.com/_a_r_y_a_n_rj/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                className="dev"
                aria-label="Dev"
                href="https://dev.to/aryan_ranjan_31a21d1829f5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-dev"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="image">
        <img draggable="false" className="tilt" src={heroimg} alt="Hero" />
      </div>
    </section>
  );
};

export default HeroSection;
