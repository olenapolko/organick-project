import "./Footer.scss";
import { Logo } from "../logo/Logo";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__contacts contacts">
          <h5 className="contacts__title">Contact Us</h5>
          <ul className="contacts__list">
            <li className="contacts__item">
              <p className="contacts__item-title">Email</p>
              <a href="mailto:needhelp@Organia.com">needhelp@Organia.com</a>
            </li>
            <li className="contacts__item">
              <p className="contacts__item-title">Phone</p>
              <a href="tel:666 888 888">666 888 888</a>
            </li>
            <li className="contacts__item">
              <p className="contacts__item-title">Address</p>
              <p>88 road, borklyn street, USA</p>
            </li>
          </ul>
        </div>
        <div className="footer__socials-wrapper">
          <div className="footer__info footer-info">
            <Logo />
            <p className="footer-info__description">
              Simply dummy text of the printing and typesetting industry.
              LoremIpsum simply dummy text of the printing
            </p>
          </div>
          <ul className="footer__socials socials">
            <li className="socials__item">
              <a
                href="https://www.instagram.com/"
                className="socials__link instagram-link"
                target="_blank" 
                rel="noopener noreferrer" 
              ></a>
            </li>
            <li className="socials__item">
              <a
                href="https://www.facebook.com/"
                className="socials__link facebook-link"
                target="_blank" 
                rel="noopener noreferrer" 
              ></a>
            </li>
            <li className="socials__item">
              <a
                href="https://twitter.com/"
                className="socials__link twitter-link"
                target="_blank" 
                rel="noopener noreferrer" 
              ></a>
            </li>
            <li className="socials__item">
              <a
                href="https://www.pinterest.ca/"
                className="socials__link pintrest-link"
                target="_blank" 
                rel="noopener noreferrer" 
              ></a>
            </li>
          </ul>
        </div>
        <div className="footer__utility utility">
          <h5 className="utility__title">Utility Pages</h5>
          <ul className="utility__list">
            <li className="utility__item">
              <a href="#">Style Guide</a>
            </li>
            <li className="utility_item">
              <a href="#">404 Not Found</a>
            </li>
            <li className="utility__item">
              <a href="#">Password Protected</a>
            </li>
            <li className="utility__item">
              <a href="#">Licences</a>
            </li>
            <li className="utility__item">
              <a href="#">Changelog</a>
            </li>
          </ul>
        </div>
      </div>
      <p className="footer__copyright">
        Copyright ©<span className="bold-text">Organick</span>| Designed by
        <span className="bold-text"> VictorFlow</span>
        Templates - Powered by <span className="bold-text">Webflow</span>
      </p>
    </footer>
  );
}
