import "./ProjectsPage.scss";
import {Banner} from "../../banner/Banner";
import { Subscribe } from "../../subscribe/Subscribe";
import { Projects } from "../../projects/Projects";

import patterns from '../../../assets/projects/patterns.svg';
import bgFruit from '../../../assets/projects/bg-fruit.png';



export function ProjectsPage(){
    const backgroundUrls = [patterns, bgFruit];
  
    return (
      <>
          <Banner backgroundUrls={backgroundUrls} title='Projects'/>
          <Projects/>
          <Subscribe/>
      </>
    );
  }