import { About } from "../../about/About";
import { EcoFriendly } from "../../ecoFriendly/EcoFriendly";
import { Gallery } from "../../gallery/Gallery";
import { Offer } from "../../offer/Offer";
import { Hero } from "../../hero/Hero";
import { Products } from "../../products/Products";
import { Discounts } from "../../discounts/Discounts";
import { News } from "../../news/News";
import { Subscribe } from "../../subscribe/Subscribe";
import { Testimonial } from "../../testimonial/Testimonial";

export function HomePage() {
  return (
    <>
      <Hero />
      <Discounts />
      <About />
      <Products />
      <Testimonial/>
      <Offer />
      <EcoFriendly />
      <Gallery />
      <News/>
      <Subscribe/>
    </>
  );
}
