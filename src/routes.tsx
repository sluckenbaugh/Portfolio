import { createBrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/resume", element: <Resume /> },
  { path: "/contact", element: <Contact /> },
]);

export default router;
