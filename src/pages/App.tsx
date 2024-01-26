import Footer from "../components/Footer";
import Hello from "../components/Hello";
import Intro from "../components/Intro";
import ProjectGrid from "../components/ProjectGrid";
import Projects from "../components/Projects";
import Sidebar from "../components/Sidebar";

const App = () => {
  return (
    <div className="grid">
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
