import { Link } from "react-router-dom";
import logo from "../static/logo.jpeg";

const Nav = () => {
  return (
    <nav className="nav">
      <Link to="/">
        <img data-aos="flip-right" src={logo} alt="Navigate home"></img>
      </Link>
      <div className="nav__links">
        <Link to="/about">About</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Nav;
