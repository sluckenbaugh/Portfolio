import logo from "../static/logo.jpeg";

const Nav = () => {
  return (
    <div className="nav">
      <img data-aos="flip-right" src={logo} alt="" />
      <div className="nav__links">
        <a href="#">About</a>
        <a href="#">Resume</a>
        <a href="#">Contact</a>
      </div>
    </div>
  );
};

export default Nav;
