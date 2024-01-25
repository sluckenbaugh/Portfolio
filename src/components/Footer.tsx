import logo from "../static/logo.jpeg";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <img src={logo} alt="" />
        <div className="link__list">
          <a
            href="https://www.linkedin.com/in/shane-luckenbaugh-ab64842a7/"
            target="_blank"
          >
            Linkedin
          </a>
          <a href="https://github.com/sluckenbaugh" target="_blank">
            Github
          </a>
          <a href="https://www.instagram.com/shaneluckenbaugh/" target="_blank">
            Instagram
          </a>
        </div>
      </div>
      <div className="copyright">
        <p className="p">© 2024 Shane Luckenbaugh</p>
      </div>
    </>
  );
};

export default Footer;
