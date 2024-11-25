import {React,useEffect} from "react";
import "./Contact.css"; // Import the CSS file if needed
import cntimg from "../assets/images/contact1.png";
import ScrollReveal from "scrollreveal";

const Contact = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 1000,
      reset: true,
    });

 sr.reveal('.contact .container', { delay: 400 });
sr.reveal('.contact .container .form-group', { delay: 400 });

    // Cleanup function to prevent memory leaks
    return () => {
      sr.destroy(); // Optional: clean up ScrollReveal instance
    };
  }, []);
  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        <i className="fas fa-headset"></i> Get in <span>Touch</span>
      </h2>

      <div className="container">
        <div className="content">
          <div className="image-box">
            <img draggable="false" src={cntimg} alt="Contact" />
          </div>
          <form id="contact-form">
            <div className="form-group">
              <div className="field">
                <input type="text" name="name" placeholder="Name" required />
                <i className="fas fa-user"></i>
              </div>
              <div className="field">
                <input type="email" name="email" placeholder="Email" required />
                <i className="fas fa-envelope"></i>
              </div>
              <div className="field">
                <input type="text" name="phone" placeholder="Phone" />
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="message">
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
                <i className="fas fa-comment-dots"></i>
              </div>
            </div>
            <div className="button-area">
              <button type="submit">
                Submit <i className="fa fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
