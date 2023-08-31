import "./DiscountCard.scss";

export function DiscountCard({ src, subtitle, title, className }) {
 
  return (
    <div className={`discount-card ${className}`} style = {{backgroundImage:`url(${src})`}}>
      <div className="discount-card__content">
        <p className="discount-card__subtitle">{subtitle}</p>
        <h3 className="discount-card__title">{title}</h3>
      </div>
    </div>
  );
}
