import Hello from "./components/Hello";
import Intro from "./components/Intro";
import ProjectGrid from "./components/ProjectGrid";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className="grid">
      <Intro />
      <Hello />
      <Projects />
      <ProjectGrid />
    </div>
  );
};

export default App;
