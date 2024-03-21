import { useContext } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import { ToggleContext } from "../App";
import Dropdown from "../components/Dropdown";

const Resume = () => {
  const { clicked } = useContext(ToggleContext);
  return (
    <>
      {clicked && <Dropdown />}
      <div className="background">
        <Nav />
        <div className="heading--center">
          <h2>Resume</h2>
          <p data-aos="slide-left" className="heading__underline">
            ____________________
          </p>
        </div>
      </div>
      <div data-aos="fade-in" className="resume__container">
        <div className="line"></div>
        <div className="line2"></div>
        {/* <img src={resume} alt="" /> */}
        <article className="resume">
          <h2>SHANE LUCKENBAUGH</h2>
          <p>Red Bank, NJ</p>
          <h3>PROFILE</h3>
          <p>
            Creative and highly collaborative professional adept at problem
            solving and learning new technologies. Well versed in managing
            projects from conception to completion with great attention to
            detail. 10+ years of experience cultivating and maintaining
            meaningful working relationships.
          </p>
          <h3>SKILLS</h3>
          <p>
            HTML5, CSS, Sass, JavaScript, React, Typescript, Next.js, SQL, Git
          </p>
          <h3>EXPERIENCE</h3>
          <h4>Web development</h4>
          <ul>
            <li>
              Developed responsive, accessible, and search engine friendly
              websites that provide users with an intuitive environment and an
              enjoyable experience through clean and aesthetic UI.
            </li>
            <li>
              Created and deployed highly interactive and well composed sites
              that integrate data via REST APIs and supply the user with fast,
              clear, and meaningful results
            </li>
            <li>
              Designed and built a portfolio website (shaneluckenbaugh.tech)
              that showcases all deployed projects in a way that highlights
              accomplishments and guides the user to a call to action
            </li>
            <li>
              Gained experience with technologies and libraries such as
              Bootstrap, Tailwind CSS, Chakra UI, React Router, Redux, React
              Hook Form, Figma, and Github
            </li>
          </ul>
          <h4>
            Music Teacher, Octopus Music School, Middletown, NJ — 2021-2023
          </h4>
          <ul>
            <li>
              Brought in new clients and maintained a large student base by
              supplying personalized and attentive instruction
            </li>
            <li>
              Developed a curriculum and taught a program for an adult
              special-needs organization. The program fostered an inclusive
              outlet for growth and therapy through music and was exceedingly
              valued by said organization
            </li>
            <li>
              Prepared and rehearsed student ensembles which led to successful
              seasonal performances that bolstered many student’s confidence
              levels and built up the school’s reputation for high quality
              mentorship.
            </li>
          </ul>
          <h4>Professional Musician, Self-employed — 2014-Current</h4>
          <ul>
            <li>
              Performed hundreds of successful concerts and was a valued member
              of tours with various artists around the world
            </li>
            <li>
              Worked in the recording studio with dozens of clients and
              consistently helped them to materialize their vision through
              open-minded collaboration and a determination to produce the
              highest outcome. Some of these collaborations have resulted in
              tracks with 500,000 + streams and helped to launch successful
              album release tours
            </li>
            <li>
              Led an original band and supplied fans with meaningful experiences
              by managing responsive social media campaigns, producing and
              selling unique merchandise, and distributing music with global
              releases
            </li>
          </ul>
          <h3>EDUCATION</h3>
          <ul>
            <li>Harvard edX — Certificate in Computer Science, 2023 </li>
            <li>University of the Arts — Bachelor of Arts, 3.7 GPA, 2014</li>
          </ul>
        </article>
      </div>
      <Sidebar />
      <Footer />
    </>
  );
};

export default Resume;
