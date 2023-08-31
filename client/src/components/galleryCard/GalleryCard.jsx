import { Button } from '../button/Button';
import './GalleryCard.scss';

export function GalleryCard({text, imgPath}){
    return(
        <div className='gallery-card'
        style={{backgroundImage: `url(${imgPath})`}}>
       <Button text={text} className="white-btn"/>
        </div>
    )
}
