import Hello from "./components/Hello";
import Intro from "./components/Intro";

const App = () => {
  return (
    <div className="grid">
      <Intro />
      <Hello />
    </div>
  );
};

export default App;
