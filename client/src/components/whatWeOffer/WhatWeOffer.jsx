import './WhatWeOffer.scss';
import { OfferCard } from '../offerCard/OfferCard';
import spicesImg from '../../assets/offerCard/spices.png';
import nutsImg from '../../assets/offerCard/nuts.png';
import pomegranateImg from '../../assets/offerCard/pomegranate.png';
import gingerImg from '../../assets/offerCard/ginger.png';

export function WhatWeOffer(){
    return(
        <section className="what-we-offer">
            <div className="what-we-offer__container">
                <div className="what-we-offer__text">
                    <p className="what-we-offer__subtitle">About Us</p>
                    <h1 className="what-we-offer__title">
                        What We Offer for You
                    </h1>

                </div>
                <div className="what-we-offer__content">
                    <OfferCard imgPath={spicesImg} text="Spicy"/>
                    <OfferCard imgPath={nutsImg} text="Nuts & Feesd"/>
                    <OfferCard imgPath={pomegranateImg} text="Fruits"/>
                    <OfferCard imgPath={gingerImg} text="Vegetable"/>
                </div>
            </div>
        </section>
    )
}