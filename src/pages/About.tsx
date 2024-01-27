import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import profile from "../static/profile2.jpeg";

const About = () => {
  return (
    <>
      <div className="background">
        <Nav />
        <div className="heading--center">
          <h2>About Me</h2>
          <p className="heading__underline" data-aos="slide-right">
            ____________________
          </p>
        </div>
      </div>
      <div className="about__container">
        <div className="about__content">
          <div data-aos="slide-left" className="circle"></div>
          <img data-aos="fade-in" src={profile} alt="" />
          <article>
            <p>
              Hello! My name is Shane and I'm a developer, musician, and teacher
              who loves building beautiful, user-centered websites.
            </p>
            <p>
              My journey as developer began in 2023 when I took Harvard's CS50
              online program. While learning languages such as C, Python, and
              SQL, the course's projects challenged and inspired me. However,
              when the HTML, CSS, and JavaScript week came, I realized what I
              really wanted to do with my new skills. After completing CS50, I
              dove straight into front-end development and have been building my
              own projects ever since.
            </p>
            <p>
              Here are some of the technologies I've been learning and using:
            </p>
            <div className="list__container">
              <ul>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React</li>
              </ul>
              <ul>
                <li>Next.js</li>
                <li>Sass</li>
                <li>Git</li>
              </ul>
            </div>
            <p>
              This site was built using Sass, React, React Router, and
              Typescript.
            </p>
          </article>
        </div>
      </div>
      <div className="space__filler"></div>
      <Sidebar />
      <Footer />
    </>
  );
};

export default About;
