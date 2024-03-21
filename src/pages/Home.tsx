import { useContext } from "react";
import Footer from "../components/Footer";
import Hello from "../components/Hello";
import Intro from "../components/Intro";
import ProjectGrid from "../components/ProjectGrid";
import Projects from "../components/Projects";
import Sidebar from "../components/Sidebar";
import { ToggleContext } from "../App";
import Dropdown from "../components/Dropdown";
import painting from "../static/painting.gif";

const App = () => {
  const { clicked } = useContext(ToggleContext);
  return (
    <div className="grid">
      {clicked && <Dropdown />}
      <Intro />
      <Hello />
      <Projects />
      <ProjectGrid />
      <div className="contact__container mt">
        <h2 className="home">Let's Build Together!</h2>
        <img src={painting} alt="Painting animation" />
        <a
          target="_blank"
          className="btn--primary btn__email"
          href="mailto:sluckenbaugh16@gmail.com"
          aria-label="Email Shane"
        >
          Email Shane
        </a>
      </div>

      <Sidebar />
      <Footer />
    </div>
  );
};

export default App;
