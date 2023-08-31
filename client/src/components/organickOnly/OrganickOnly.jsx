import './OrganickOnly.scss';
import arrowIcon from '../../assets/services/arrow-right.svg';

export function OrganickOnly(){
    return(
        <section className='organick-only'>
            <div className="organick-only__container">
                <div className="organick-only__content">
                    <p className="organick-only__subtitle">Organic Only</p>
                    <h1 className="organick-only__title">Everyday Fresh & Clean</h1>
                    <p className='organick-only__text'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the</p>
                    <button className='organick-only__btn btn'>
                        <img src={arrowIcon} alt="Arrow Icon" />
                    </button>
                </div>
            </div>
        </section>
    )
}