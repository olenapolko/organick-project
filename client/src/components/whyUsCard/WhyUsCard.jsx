import './WhyUsCard.scss';

export function WhyUsCard(props){
    const {
        imgPath,
        title,
        text
      } = props
    
    return(
        <div className="why-us-card">
            <div className="why-us-card__img-wrapper">
                <img src={imgPath} alt="Card Icon" />
            </div>
            <h3 className="why-us-card__title">{title}</h3>
            <p className="why-us-card__text">{text}</p>
        </div>
    )
}