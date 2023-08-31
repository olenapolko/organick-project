import "./ProductCard.scss";
import { RatingStars } from "../ratingStars/RatingStars";
import imgNotFound from "../../assets/product/not-found.png";

export function ProductCard(props) {
  const {
    id,
    name,
    price,
    discountSum,
    discountPrice,
    rating,
    imagePath,
    categoryName,
    selectProduct
  } = props;

  return (
    <div className="product"
    onClick={()=>selectProduct(id)}
    style={{backgroundImage: `url(${require("../../assets" + imagePath)})`}}
    >
      <div className="product__category">{categoryName}</div>
      <div className="product__description">
        <p className="product__name">{name}</p>
        <div className="product__values">
          <span className={"product__price"+ (discountSum ? " discount":"")}>${price}</span>
          <span className="product__discount-price">{discountSum? '$'+ discountPrice : null}</span>
          <p className="rating">
            <RatingStars stars={rating}/>
          </p>
        </div>
      </div>
    </div>
  );
}

