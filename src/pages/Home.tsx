import { useContext } from "react";
import Footer from "../components/Footer";
import Hello from "../components/Hello";
import Intro from "../components/Intro";
import ProjectGrid from "../components/ProjectGrid";
import Projects from "../components/Projects";
import Sidebar from "../components/Sidebar";
import { ToggleContext } from "../App";
import Dropdown from "../components/Dropdown";

const App = () => {
  const { clicked } = useContext(ToggleContext);
  return (
    <div className="grid">
      {clicked && <Dropdown />}
      <Intro />
      <Hello />
      <Projects />
      <ProjectGrid />
      <Sidebar />
      <Footer />
    </div>
  );
};

export default App;
