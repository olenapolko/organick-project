import "./ServicesPage.scss";
import {Banner} from "../../banner/Banner";
import { WhatWeGrow } from "../../whatWeGrow/WhatWeGrow";
import { OrganickOnly } from "../../organickOnly/OrganickOnly";

import patterns from '../../../assets/services/patterns.svg';
import bgApples from '../../../assets/services/bg-apples.png';

export function ServicesPage(){
    const backgroundUrls = [patterns, bgApples];
  
    return (
      <>
          <Banner backgroundUrls={backgroundUrls} title='Services'/>
          <WhatWeGrow/>
          <OrganickOnly/>
      </>
    );
  }