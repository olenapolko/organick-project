import {Banner} from "../../banner/Banner";
import { AboutUs } from "../../aboutUs/AboutUs";
import { WhyUs } from "../../whyUs/WhyUs";
import { Team } from "../../team/Team";
import { WhatWeOffer } from "../../whatWeOffer/WhatWeOffer";
import { Subscribe } from "../../subscribe/Subscribe";

import patterns from '../../../assets/about/patterns.svg';
import bgFresh from '../../../assets/about/bg-fresh.png';

export function AboutPage(){
  const backgroundUrls = [patterns, bgFresh];

  return (
    <>
        <Banner backgroundUrls={backgroundUrls} title='About Us'/>
        <AboutUs/>
        <WhyUs/>
        <Team/>
        <WhatWeOffer/>
        <Subscribe/>
    </>
  );
}