import "./Hero.scss";
import { Button } from "../button/Button";

export function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__container">
        <div className="hero__content ">
          <p className="hero__subtitle">100% Natural Food</p>
          <h1 className="hero__title">
          Choose the best healthier way of life</h1>
          <Button className="bright-btn" text="Explore Now" icon />
        </div>
      </div>
    </section>
  );
}
