import './OfferCard.scss';

export function OfferCard(props){
    const {
        imgPath,
        text
      } = props
    
    return(
        <div className="offer-card">
            <div className="offer-card__img-wrapper">
                <img src={imgPath} alt="Card Icon" />
            </div>
            <p className="offer-card__text">{text}</p>
        </div>
    )
}