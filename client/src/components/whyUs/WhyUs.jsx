import './WhyUs.scss';
import { WhyUsCard } from '../whyUsCard/WhyUsCard';
import greenVeggies from '../../assets/whyUs/greenVeggies.jpg';
import cartIcon from '../../assets/whyUs/cart.svg';
import leafIcon from '../../assets/whyUs/leaf.svg';
import timeIcon from '../../assets/whyUs/time.svg';
import paymentIcon from '../../assets/whyUs/payment.svg';

export function WhyUs() {
    return (
      <section className="why-us">
        <div className="why-us__container">
          <div className="why-us__content-wrapper">
            <div className="why-us__content">
                <p className="why-us__subtitle">Why Choose us?</p>
                <h2 className="why-us__title">
                We do not buy from the open market & traders.
                </h2>
                <p className="why-us__text">
                Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard  the 1500s, when an unknown
                </p>
                <ul className="why-us__list">
                <li className="why-us__item">
                    <span className='why-us__reason'>100% Natural Product</span>
                    <p className='why-us__explanation'>Simply dummy text of the printing and typesetting industry Lorem Ipsum</p>
                </li>
                <li className="why-us__item">
                    <span className='why-us__reason'>Increases resistance</span>
                    <p className='why-us__explanation'>Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing</p>
                </li>
                </ul>
            </div>
            <img src={greenVeggies} className="why-us__img" alt="A plate of fresh veggies" />
          </div>
          <div className="why-us__cards-wrapper">
            <WhyUsCard imgPath={cartIcon} title="Return Policy" text="Simply dummy text of the printintypesetting industry."/>
            <WhyUsCard imgPath={leafIcon} title="100% Fresh" text="Simply dummy text of the printintypesetting industry."/>
            <WhyUsCard imgPath={timeIcon} title="Support 24/7" text="Simply dummy text of the printintypesetting industry."/>
            <WhyUsCard imgPath={paymentIcon} title="Secured Payment" text="Simply dummy text of the printintypesetting industry."/>
          </div>
        </div>
      </section>
    );
  }
  