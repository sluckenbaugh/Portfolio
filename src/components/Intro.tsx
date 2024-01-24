import profile from "../static/profile2.jpeg";
import Nav from "./Nav";

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro__background">
        <Nav />
        <div className="text__container">
          <h2>Frontend Developer.</h2>
          <p>I Love creating beautiful, user centered websites</p>
        </div>
      </div>
      <img className="profile" src={profile} alt="" />
    </section>
  );
};

export default Intro;
