import { DiscountCard } from "../discountCard/DiscountCard";
import "./Discounts.scss";
import bananaSmoothie from "../../assets/discounts/banana-smoothie.png";
import apricotsBg from "../../assets/discounts/apricots-bg.png";

export function Discounts() {
  return (
    <section className="discounts">
      <div className="discounts__container">
        <DiscountCard
          className="white-text"
          src={bananaSmoothie}
          subtitle="Natural!!"
          title="Get Garden Fresh Fruits"
        />
        <DiscountCard
          src={apricotsBg}
          subtitle="Offer!!"
          title={`Get 10% off on Vegetables`}
        />
      </div>
    </section>
  );
}
