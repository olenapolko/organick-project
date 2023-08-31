import { Button } from "../button/Button";
import "./AboutUs.scss";

import plateImg from "../../assets/about/plate.png";

export function AboutUs() {
    return (
      <section className="about-us">
        <div className="about-us__container">
          <div className="about-us__content-wrapper">
          <img src={plateImg} className="about-us__img" alt="A plate of fresh veggies" />
          <div className="about-us__content">
          <p className="about-us__subtitle">About Us</p>
            <h2 className="about-us__title">
                We do Creative Things for Success
            </h2>
            <p className="about-us__text">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley.
            </p>
            <p className="about-us__text">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley.
            </p>
            <ul className="about-us__list">
              <li className="about-us__item equipment">
                <div className="about-us__item-content">
                  <h6 className="about-us__item-title">Modern Agriculture Equipment</h6>
                </div>
              </li>
              <li className="about-us__item hormones">
                <div className="about-us__item-content">
                  <h6 className="about-us__item-title">No growth hormones are used</h6>
                </div>
              </li>
            </ul>
            <Button className="dark-btn" text="Explore more" icon />
          </div>
          </div>
        </div>
      </section>
    );
  }
  