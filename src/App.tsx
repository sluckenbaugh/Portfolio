import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { createContext, useState } from "react";

interface ToggleType {
  clicked: boolean;
  setClicked: (clicked: boolean) => void;
}

export const ToggleContext = createContext({} as ToggleType);

const App = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <ToggleContext.Provider value={{ clicked, setClicked }}>
        <RouterProvider router={router} />
      </ToggleContext.Provider>
    </div>
  );
};

export default App;
