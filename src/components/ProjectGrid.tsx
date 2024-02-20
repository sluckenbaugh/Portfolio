import ProjectCard from "./ProjectCard";
import bobs from "../static/bobs.png";
import weather from "../static/weather.png";
import game from "../static/game.png";
import todo from "../static/todo.png";
import gallery from "../static/gallery.png";

const ProjectGrid = () => {
  return (
    <div data-aos="fade-in" className="grid__projects">
      <ProjectCard
        pic={weather}
        title="WEATHER CITY"
        description="A weather app built with React, Typescript, and Tailwind CSS. Using the fetch API the app queries the National Weather Service API. The site also features a smooth image carousel and a dark mode."
        url="https://weather-city-woad.vercel.app/"
      />
      <ProjectCard
        pic={bobs}
        title="BOB'S BURGERS FANSITE"
        description="A responsive and interactive website featuring smooth animations. Built with React, Typescript, CSS, Fetch and Context APIs, and React Router, the site queries the Bob's Burgers REST API and displays the results with crisp UI."
        url="https://bobs-burgers-fansite.vercel.app/"
      />
      <ProjectCard
        pic={game}
        title="GAMEHUB"
        description="A video game app I built for the Code with Mosh React + Typescript course. This project queries the Rawg gaming API with React Query and employs Chakra UI. The Zustand library is also used for state management.  "
        url="https://game-hub-eta-lime.vercel.app/"
      />
      <ProjectCard
        pic={todo}
        title="TODO LIST"
        description="A simple but satisfying To-Do app designed with HTML5, CSS, JavaScript, and deployed with Vercel."
        url="https://todo-list-virid-ten.vercel.app/"
      />
      <ProjectCard
        pic={gallery}
        title="THE GALLERY WALL"
        description="A responsive website built with HTML5, CSS, and JavaScript with hamburger menu on mobile."
        url="https://gallery-wall.vercel.app/"
      />
    </div>
  );
};

export default ProjectGrid;
