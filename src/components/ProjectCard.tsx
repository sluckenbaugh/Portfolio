interface Props {
  pic: string;
  title: string;
  description: string;
  url: string;
}

const ProjectCard = ({ pic, title, description, url }: Props) => {
  return (
    <div className="card">
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        <div className="box__img">
          <img src={pic} alt="" />
        </div>
        <p className="card__description">{description}</p>
      </div>
      <a href={url} target="_blank">
        <button className="btn--primary card__btn">Visit</button>
      </a>
    </div>
  );
};

export default ProjectCard;
