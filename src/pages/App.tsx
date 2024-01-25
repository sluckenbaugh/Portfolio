import Footer from "../components/Footer";
import Hello from "../components/Hello";
import Intro from "../components/Intro";
import ProjectGrid from "../components/ProjectGrid";
import Projects from "../components/Projects";

const App = () => {
  return (
    <div className="grid">
      <Intro />
      <Hello />
      <Projects />
      <ProjectGrid />
      <Footer />
    </div>
  );
};

export default App;
