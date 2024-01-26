import Footer from "../components/Footer";
import Nav from "../components/Nav";

const About = () => {
  return (
    <>
      <div className="background">
        <Nav />
        <div className="heading--center">
          <h2>About</h2>
          <p className="heading__underline">____________________</p>
        </div>
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident alias
        quis laborum molestiae vero facere vitae incidunt inventore, corrupti
        voluptate, ratione earum dicta, aut explicabo obcaecati consequatur.
        Ducimus possimus dignissimos optio, fugit nesciunt beatae, fuga a,
        cupiditate modi facere tempore?
      </div>
      <Footer />
    </>
  );
};

export default About;
