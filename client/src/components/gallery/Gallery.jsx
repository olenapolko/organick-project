import { GalleryCard } from '../galleryCard/GalleryCard';
import './Gallery.scss';
import juiceImg from '../../assets/gallery/juice.png';
import leavesImg from '../../assets/gallery/leaves.png';
import cookiesImg from '../../assets/gallery/cookies.png';



export function Gallery(){
    return(
        <section className='gallery'>
            <div className='gallery__container' id='projects'>
                <GalleryCard text="Organic Juice" imgPath={juiceImg}/>
                <GalleryCard text="Organic Food" imgPath={leavesImg}/>
                <GalleryCard text="Nuts Cookies" imgPath={cookiesImg}/>
            </div>
        </section>
    )
}