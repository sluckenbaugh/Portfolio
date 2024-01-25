import Nav from "../components/Nav";
import resume from "../static/resume.png";

const Resume = () => {
  return (
    <>
      <Nav />
      <div>
        <img src={resume} alt="" />
      </div>
    </>
  );
};

export default Resume;
