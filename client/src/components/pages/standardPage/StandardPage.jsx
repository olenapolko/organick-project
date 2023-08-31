import "./StandardPage.scss";
import {Banner} from "../../banner/Banner";
import { Subscribe } from "../../subscribe/Subscribe";
import { Standards } from "../../standards/Standards";

import patterns from '../../../assets/standard/patterns.svg';
import bgLemons from '../../../assets/standard/bg-lemons.jpg';

export function StandardPage(){
    const backgroundUrls = [patterns, bgLemons];
  
    return (
      <>
            <Banner backgroundUrls={backgroundUrls} title='Quality Standard'/>
            <Standards/>
            <Subscribe/>
      </>
    );
}