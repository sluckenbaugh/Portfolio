import { useContext } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import painting from "../static/painting.gif";
import { ToggleContext } from "../App";
import Dropdown from "../components/Dropdown";

const Contact = () => {
  const { clicked } = useContext(ToggleContext);
  return (
    <div>
      {clicked && <Dropdown />}
      <div className="background">
        <Nav />
        <div className="heading--center">
          <h2>Contact</h2>
          <p data-aos="slide-right" className="heading__underline">
            ____________________
          </p>
        </div>
      </div>
      <div className="contact__container">
        <h2>Let's Build Together!</h2>
        <img src={painting} alt="Painting animation" />
        <a
          target="_blank"
          className="btn--primary btn__email"
          href="mailto:sluckenbaugh16@gmail.com"
          aria-label="Email Shane"
        >
          Email Shane
        </a>
      </div>
      <Sidebar />
      <Footer />
    </div>
  );
};

export default Contact;
