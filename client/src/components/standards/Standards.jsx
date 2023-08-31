import './Standards.scss';

import farmerImg from '../../assets/standard/farmer.jpg';
import handsImg from '../../assets/standard/hands.jpg';
import plants from '../../assets/standard/plants.jpg'


export function Standards() {
    return (
      <section className="standards">
        <div className="standards__container">
            <img className="standards__poster" src={farmerImg} alt="A planting farmer" />
            <div className="standards__content">
                <h2 className="standards__title">
                    Organic Store Services
                </h2>
                <p className="standards__text">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
                </p>
                <p className="standards__text">
                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years
                </p>
                <div className="standards__reasons">
                    <div className="standards__reason">
                        <img className="standards__img" src={handsImg} alt="Planting hands"/>
                        <div className="standards__card card">
                            <h5 className='card__title'>Why Organic</h5>
                            <p className='card__text'>Sed ut perspiciatis unde omnis iste natus error sit voluptat. page editors now use Lorem Ipsum as their default model text, and auncover.</p>
                        </div>
                    </div>
                    <div className="standards__reason">
                        <div className="standards__card card">
                            <h5 className='card__title'>Speciality Produce</h5>
                            <p className='card__text'>Sed ut perspiciatis unde omnis iste natus error sit voluptat. page editors now use Lorem Ipsum as their default model text, and auncover.</p>
                        </div>
                        <img className="standards__img" src={plants} alt="Planting hands"/>
                    </div>
                </div>
                <div className="standards__farming farming">
                    <h3 className='farming__title'>We farm your land</h3>
                    <p className='farming__text'>It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    <ul className='farming__list'>
                        <li className="farming__item">
                            <div className="farming__number">01</div>
                            <p className="farming__reason">Best quality support</p>
                        </li>
                        <li className="farming__item">
                        <div className="farming__number">02</div>
                            <p className="farming__reason">Money back guarantee</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </section>
    );
  }
  