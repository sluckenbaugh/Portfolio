import { Link } from "react-router-dom";
import logo from "../static/logo.jpeg";

const Nav = () => {
  return (
    <div className="nav">
      <Link to="/">
        <img data-aos="flip-right" src={logo} alt=""></img>
      </Link>
      <div className="nav__links">
        <Link to="/about">About</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Nav;
