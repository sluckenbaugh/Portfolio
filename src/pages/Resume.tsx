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
          <p>HTML5, CSS, Sass, JavaScript, React, Typescript, Git</p>
          <h3>EXPERIENCE</h3>
          <h4>Web development</h4>
          <ul>
            <li>
              Developed responsive, accessable, and search engine optimized
              websites with CSS, Sass, Bootstrap, and JavaScript
            </li>
            <li>
              Created and deployed React apps that query APIs using Axios, Fetch
              API, and React Query
            </li>
            <li>
              Experience with SQL, React Router, React Hook Form, Zustand State
              Management, Bootstrap, Tailwind CSS, Chakra UI, GitKraken, and
              Github
            </li>
          </ul>
          <h4>
            Music Teacher, Octopus Music School, Middletown, NJ — 2021-2023
          </h4>
          <ul>
            <li>Mentored individual students across various instruments</li>
            <li>
              Developed and taught an interactive music program for
              special-needs adults in a group setting
            </li>
            <li>Rehearsed and prepared student ensembles for performances</li>
          </ul>
          <h4>Professional Musician, Self-employed — 2014-Current</h4>
          <ul>
            <li>Performed and toured with various artists around the world</li>
            <li>
              Worked in the recording studio with dozens of artists as a session
              musician, engineer, producer, and songwriter
            </li>
            <li>
              Led a music project and gained experience managing social media,
              the production and sale of merchandise, music distribution, and
              negotiation with venues
            </li>
          </ul>
          <h4>Barista & Server, La Va Cafe, Philadelphia, PA — 2016-2020</h4>
          <ul>
            <li>
              Closing manager responsible for all aspects of business operations
              including tasks such as taking inventory, restocking, cleaning
              equipment, and balancing the register
            </li>
            <li>
              Displayed thorough knowledge of the food and drink menu and was
              skilled at making recommendations and supplying excellent customer
              service
            </li>
          </ul>
          <h3>EDUCATION</h3>
          <ul>
            <li>Harvard edX — Certificate in Computer Science, 2023 </li>
            <li>
              University of the Arts — Bachelor of Arts, Jazz Performance, 2014
            </li>
          </ul>
        </article>
      </div>
      <Sidebar />
      <Footer />
    </>
  );
};

export default Resume;
