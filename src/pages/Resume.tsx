import Footer from "../components/Footer";
import Nav from "../components/Nav";
import resume from "../static/resume.png";

const Resume = () => {
  return (
    <>
      <div className="background">
        <Nav />
        <div className="heading--center">
          <h2>Resume</h2>
          <p className="heading__underline">____________________</p>
        </div>
      </div>
      <div data-aos="fade-in" className="resume">
        <div className="line"></div>
        <div className="line2"></div>
        <img src={resume} alt="" />
      </div>
      <Footer />
    </>
  );
};

export default Resume;
