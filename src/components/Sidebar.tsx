import insta from "../static/insta.svg";
import github from "../static/GitHub-Logo.wine.svg";
import linkedin from "../static/linkedin.svg";

const Sidebar = () => {
  return (
    <div className="sidebar__container">
      <div className="sidebar">
        <ul>
          <li>
            <a href="https://github.com/sluckenbaugh" target="_blank">
              <img src={github} alt="" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/shane-luckenbaugh-ab64842a7/"
              target="_blank"
            >
              <img src={linkedin} alt="" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/shaneluckenbaugh/"
              target="_blank"
            >
              <img src={insta} alt="" />
            </a>
          </li>
          <li> </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
