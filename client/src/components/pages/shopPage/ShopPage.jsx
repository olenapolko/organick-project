import {Banner} from "../../banner/Banner";
import patterns from '../../../assets/shop/pattern.svg';
import bgApricot from '../../../assets/shop/bg-apricots.png';
import { ShopProducts } from "../../shopProducts/ShopProducts";
import { Subscribe } from "../../subscribe/Subscribe";

export function ShopPage(){
    const backgroundUrls = [patterns, bgApricot];
    return (
        <>
            <Banner backgroundUrls={backgroundUrls} title='Shop'/>
            <ShopProducts/>
            <Subscribe/>
        </>
      );

}