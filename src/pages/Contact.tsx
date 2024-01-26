import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import painting from "../static/painting.gif";

const Contact = () => {
  return (
    <div>
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
        <img src={painting} alt="" />
        <p>
          Email Shane at <br />
          sluckenbaugh16@gmail.com
        </p>
        <a target="_blank" href="mailto:sluckenbaugh16@gmail.com">
          <button className="btn--primary btn__email">Email Shane</button>
        </a>
      </div>
      <Sidebar />
      <Footer />
    </div>
  );
};

export default Contact;
