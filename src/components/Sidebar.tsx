import insta from "../static/insta.svg";
import github from "../static/GitHub-Logo.wine.svg";
import linkedin from "../static/linkedin.svg";

const Sidebar = () => {
  return (
    <div className="sidebar__container">
      <div className="sidebar">
        <ul>
          <li>
            <a
              href="https://github.com/sluckenbaugh"
              aria-label="Go to Github"
              target="_blank"
            >
              <img src={github} alt="Github logo" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/shane-luckenbaugh-ab64842a7/"
              target="_blank"
              aria-label="Go to Linkedin"
            >
              <img src={linkedin} alt="Linkedin logo" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/shaneluckenbaugh/"
              target="_blank"
              aria-label="Go to Instagram"
            >
              <img src={insta} alt="Instagram logo" />
            </a>
          </li>
          <li> </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
