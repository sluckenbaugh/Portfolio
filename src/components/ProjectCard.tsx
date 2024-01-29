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

        <img src={pic} alt="" />
        <p className="card__description">{description}</p>
        <a href={url} target="_blank" className="btn--primary card__btn">
          Visit
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
