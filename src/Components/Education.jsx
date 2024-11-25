import {React,useEffect} from "react";
import collimg from "../assets/images/educat/college.png";
import schimg from "../assets/images/educat/school.png";
import "./Education.css"; // Import the CSS file
import ScrollReveal from "scrollreveal";


const Education = () => {
   useEffect(() => {
     const sr = ScrollReveal({
       origin: "top",
       distance: "80px",
       duration: 1000,
       reset: true,
     });

     sr.reveal(".education .box", { interval: 200 });

     // Cleanup function to prevent memory leaks
     return () => {
       sr.destroy(); // Optional: clean up ScrollReveal instance
     };
   }, []);
  return (
    <section className="education" id="education">
      <h1 className="heading">
        <i className="fas fa-graduation-cap"></i> My <span>Education</span>
      </h1>

      <p className="quote">
        Education is not the learning of facts, but the training of the mind to
        think.
      </p>

      <div className="box-container">
        <div className="box">
          <div className="image">
            <img
              draggable="false"
              src={collimg}
              alt="College of Engineering and Research"
            />
          </div>
          <div className="content">
            <h3>Bachelor of Technology in ECE</h3>
            <p>Indian Institute Of Information Technology Nagpur</p>
            <h4>2021-2025 | Ongoing</h4>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img draggable="false" src={schimg} alt="Secondary Education" />
          </div>
          <div className="content">
            <h3>Higher Secondary Education</h3>
            <p>DAV PUBLIC SCHOOL BSEB COLONY PATNA | CBSE</p>
            <h4>2018-2020 | Completed</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
