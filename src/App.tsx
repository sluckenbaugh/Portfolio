import Hello from "./components/Hello";
import Intro from "./components/Intro";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className="grid">
      <Intro />
      <Hello />
      <Projects />
    </div>
  );
};

export default App;
