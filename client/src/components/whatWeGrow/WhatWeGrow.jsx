import "./WhatWeGrow.scss";
import { GrowItem } from "../growItem/GrowItem";
import { Button } from "../button/Button";

import dairyIcon from '../../assets/services/dairy-icon.svg';
import storeIcon from '../../assets/services/store-icon.svg';
import busIcon from '../../assets/services/bus-icon.svg';
import leavesIcon from '../../assets/services/leaves-icon.svg';
import potatoesIcon from '../../assets/services/potatoes-icon.svg';
import beetrootIcon from '../../assets/services/beetroot-icon.svg';

export function WhatWeGrow() {
    return (
      <section className="what-we-grow">
        <div className="what-we-grow__container">
          <p className="what-we-grow__subtitle">What we Grow</p>
          <h1 className="what-we-grow__title">Better Agriculture for Better Future</h1>
          <div className="what-we-grow__content">
            <div className="what-we-grow__content-left">
                <GrowItem imgPath={dairyIcon} title='Dairy Products' description='Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis'/>
                <GrowItem imgPath={storeIcon} title='Store Services' description='Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis'/>
                <GrowItem imgPath={busIcon} title='Delivery Services' description='Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis'/>
            </div>
            <div className="what-we-grow__content-right">
                <GrowItem imgPath={leavesIcon} title='Agricultural Services' description='Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis'/>
                <GrowItem imgPath={potatoesIcon} title='Organic Products' description='Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis'/>
                <GrowItem imgPath={beetrootIcon} title='Fresh Vegetables' description='Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis'/>
            </div>
   
          </div>
          <Button text="Explore more" icon className="white-btn btn-border" />
        </div>
      </section>
    );
  }
  