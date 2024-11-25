import "./App.css";
import ParticlesComponent from "./Components/particles";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Education from "./Components/Education";
import Work from "./Components/Work";
import WorkPage from "./Components/WorkPage"; // New component for displaying all projects
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Added for routing
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <ParticlesComponent id="particles" />
      </div>
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <About />
              <Skills />
              <Education />
              <Work /> {/* This will show the top 6 projects */}
              <Experience/>
              <Contact/>
              <Footer/>
            </>
          }
        />
        {/* WorkPage Route for viewing all projects */}
        <Route path="/projects" element={<WorkPage />} />{" "}
        {/* New page with all projects */}
      </Routes>
    </Router>
  );
}

export default App;
