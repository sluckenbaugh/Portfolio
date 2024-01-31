import { Link } from "react-router-dom";
import Nav from "./Nav";
import { useContext } from "react";
import { ToggleContext } from "../App";

const Dropdown = () => {
  const { clicked, setClicked } = useContext(ToggleContext);
  return (
    <div>
      <div data-aos="fade-in fade-out" className="dropdown">
        <Nav />
        <div data-aos="slide-up" className="dropdown__links">
          <Link
            onClick={() => setClicked(!clicked)}
            className="down__link"
            to="/about"
          >
            About
          </Link>
          <Link
            onClick={() => setClicked(!clicked)}
            className="down__link"
            to="/resume"
          >
            Resume
          </Link>
          <Link
            onClick={() => setClicked(!clicked)}
            className="down__link"
            to="/contact"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
