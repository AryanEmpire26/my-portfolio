import React from "react";
import "./Footer.css"; // Import the CSS file if needed

const Footer = () => {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>Aryan's Portfolio</h3>
          <p>
            Thank you for visiting my personal portfolio website. Connect with
            me over socials. <br /> <br />
            Keep Rising 🚀. Connect with me over live chat!
          </p>
        </div>

        <div className="box">
          <h3>quick links</h3>
          <a href="#home">
            <i className="fas fa-chevron-circle-right"></i> home
          </a>
          <a href="#about">
            <i className="fas fa-chevron-circle-right"></i> about
          </a>
          <a href="#skills">
            <i className="fas fa-chevron-circle-right"></i> skills
          </a>
          <a href="#education">
            <i className="fas fa-chevron-circle-right"></i> education
          </a>
          <a href="#work">
            <i className="fas fa-chevron-circle-right"></i> work
          </a>
          <a href="#experience">
            <i className="fas fa-chevron-circle-right"></i> experience
          </a>
        </div>

        <div className="box">
          <h3>contact info</h3>
          <p>
            {" "}
            <i className="fas fa-phone"></i>+91 XXX-XXX-XXXX
          </p>
          <p>
            {" "}
            <i className="fas fa-envelope"></i>aryanranjanwork@gmail.com
          </p>
          <p>
            {" "}
            <i className="fas fa-map-marked-alt"></i>UP, India-1011011
          </p>
          <div className="share">
            <a
              href="https://www.linkedin.com/in/aryan-ranjan-79634124a/"
              className="fab fa-linkedin"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <a
              href="https://github.com/AryanEmpire26"
              className="fab fa-github"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <a
              href="mailto:aryanranjanwork@gmail.com"
              className="fas fa-envelope"
              aria-label="Mail"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <a
              href="https://x.com/AryanRa35562120"
              className="fab fa-twitter"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <a
              href="https://t.me"
              className="fab fa-telegram-plane"
              aria-label="Telegram"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </div>
        </div>
      </div>

      <h1 className="credit">
        Designed with <i className="fa fa-heart pulse"></i> by{" "}
        <a href="https://www.linkedin.com/in/aryan-ranjan-79634124a/"> Aryan Ranjan</a>
      </h1>
    </section>
  );
};

export default Footer;
