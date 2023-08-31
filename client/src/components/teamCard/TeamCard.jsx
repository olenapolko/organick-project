import "./TeamCard.scss";

export function TeamCard(props) {
    const {
      imageUrl,
      name,
      occupation
    } = props;

    return (
      <div className="expert"
      style={{backgroundImage: `url(${require("../../assets"+ (imageUrl))})`}}
      >
        <div className="expert__description">
          <p className="expert__name">{name}</p>
          <div className="expert__details">
            <span className="expert__occupation">{occupation}</span>
            <ul className="expert__socials-list social">
                <li className="social__item">
                    <a
                      href="https://www.instagram.com/"
                      className="social__link instagram-link"
                      target="_blank" 
                      rel="noopener noreferrer" 
                  >.</a>
                </li>
                <li className="social__item">
                    <a
                      href="https://www.facebook.com/"
                      className="social__link facebook-link"
                      target="_blank" 
                      rel="noopener noreferrer" 
                  >.</a>
                </li>
                <li className="social__item">
                    <a
                      href="https://twitter.com/"
                      className="social__link twitter-link"
                      target="_blank" 
                      rel="noopener noreferrer" 
                  >.</a>
                </li>
                
            </ul>
          </div>
        </div>
      </div>
    );
  }