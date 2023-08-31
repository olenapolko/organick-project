import './ProjectsCard.scss';

export function ProjectsCard(props){
    const {
        title,
        subtitle,
        imagePath,
      } = props;

    const fullImgPath = require(`../../assets/projects/${imagePath}`);
    
    return(
        <div className="project-card">
            <div className="project-card__img-wrapper">
                <img src={fullImgPath} alt="Card Icon" />
            </div>
            <h5 className="project-card__title">{title}</h5>
            <span className="project-card__subtitle">{subtitle}</span>
        </div>
    )
}