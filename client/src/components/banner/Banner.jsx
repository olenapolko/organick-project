import "./Banner.scss";

export function Banner ({ backgroundUrls, title }) {
    const bannerStyle = {
        background: backgroundUrls.map(url => `url(${url}) center/cover no-repeat`).join(', '),
    };
  
    return (
        <section className="banner">
              <div className="banner__title-block" style={bannerStyle}>
                  <h1 className="banner__title">{title}</h1>
              </div>
        </section>
    );
};