import { Link } from "react-router-dom";
import logo from "../static/logo.jpeg";
import { useContext } from "react";
import { ToggleContext } from "../App";

const Nav = () => {
  const { clicked, setClicked } = useContext(ToggleContext);

  return (
    <>
      <nav className="nav">
        <Link
          onClick={() => (clicked ? setClicked(!clicked) : setClicked(clicked))}
          to="/"
        >
          <img data-aos="flip-right" src={logo} alt="Navigate home"></img>
        </Link>
        <div className="nav__links">
          <Link to="/about">About</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
      <div
        data-aos="fade-in"
        onClick={() => setClicked(!clicked)}
        className="toggle"
      >
        <span className={clicked ? "bar1 clicked" : "bar1"}></span>
        <span className={clicked ? "bar2 clicked" : "bar2"}></span>
      </div>
    </>
  );
};

export default Nav;
