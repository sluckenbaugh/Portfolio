import design from "../static/design.gif";

const Hello = () => {
  return (
    <div data-aos="slide-up" className="hello">
      <p className="hello__p">Hello, my name is</p>
      <h1>Shane Luckenbaugh.</h1>
      <article>
        I am a growth-minded developer currently focused on creating rich web
        experiences with React, Typescript, and Sass.
      </article>
      <img src={design} alt="" />
    </div>
  );
};

export default Hello;
