import { createBrowserRouter } from "react-router-dom";
import App from "./pages/App";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/about", element: <About /> },
  { path: "/resume", element: <Resume /> },
  { path: "/contact", element: <Contact /> },
]);

export default router;
