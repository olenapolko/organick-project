import { useState } from "react";
import "./Navigation.scss";
import { HashLink as Link } from 'react-router-hash-link';
import arrowDown from '../../assets/header/arrow-down.svg'

export function Navigation(props) {
  const [showPagesSubMenu, setShowPagesSubMenu] = useState(false);
  const [burgerActive, setBurgerActive] = useState(false);

  const toggleBurger = () => {
    setBurgerActive(prevBurgerActive => !prevBurgerActive);
  };

  return (
    <nav className={(props.className || '') + ' navigation'}>
      <ul className="navigation__list" onClick={toggleBurger}>
        <li className="navigation__item">
          <Link to="/" smooth>
            Home
          </Link>
        </li>
        <li className="navigation__item">
          <Link to="/about" smooth>
            About
          </Link>
        </li>
        <li
            className={`navigation__item${showPagesSubMenu ? ' show-submenu' : ''}`}
            onMouseEnter={() => setShowPagesSubMenu(true)}
            onMouseLeave={() => setShowPagesSubMenu(false)}
            onClick={() => setShowPagesSubMenu(!showPagesSubMenu)}
        >
          Pages
          <img src={arrowDown} alt="Arrow Down icon" className={`navigation__icon ${burgerActive ? 'active' : ''}`}/>
          {showPagesSubMenu && (
            <ul className="submenu">
              <li className="submenu__item">
                <Link to="/services" smooth>
                  Services
                </Link>
              </li>
              <li className="submenu__item">
                <Link to="/standard" smooth>
                  Standard
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li className="navigation__item">
          <Link to="/shop" smooth>
            Shop
          </Link>
        </li>
        <li className="navigation__item">
          <Link to="/projects" smooth>
            Projects
          </Link>
        </li>
        <li className="navigation__item">
          <Link to="/news" smooth>
            News
          </Link>
        </li>
      </ul>
    </nav>
  );
}