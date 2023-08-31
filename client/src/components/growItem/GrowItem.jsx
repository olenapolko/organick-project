import './GrowItem.scss';

export function GrowItem(props){
    const {
        imgPath,
        title,
        description
    } = props;

    return(
        <div className="grow-item">
            <img src={imgPath} alt="Card Icon" />
            <h3 className="grow-item__title">{title}</h3>
            <p className="grow-item__description">{description}</p>
        </div>
    )
}