import "./ProductDetails.scss";
import { Button } from "../button/Button";
import { RatingStars } from "../ratingStars/RatingStars";
import { useState, useContext, useEffect } from "react";
import { LocalStorageContext } from "../app/App";
export function ProductDetails(props) {
  const {
    id,
    productName,
    price,
    discountSum,
    discountPrice,
    description,
    fullDescription,
    exstraInformation,
    star,
    imagePath,
    categoryName,
  } = props;


  const {store, updateStore } = useContext(LocalStorageContext);
  const [quantity, setQuantity] = useState(1);
  const [isInCart, setIsInCart] = useState(false);
  const [productInfo, setProductInfo] = useState(fullDescription);

  const findProductInStore= (productId) =>store?.products.find((item) => item.id === productId);

  useEffect(()=>{
    const currentProduct = findProductInStore(id)
    setQuantity(currentProduct?.quantity || 1);
    setIsInCart(currentProduct? true :false);
  }, [id])
 
  const addProduct = (e) => {
    e.preventDefault();
    if (e.target.closest(".dark-btn")) {
      const product = { id, quantity, productName, price, imagePath , discountSum,discountPrice};
      if (store) {
        let existProduct = findProductInStore(product.id);
        existProduct
          ? (existProduct.quantity++)
          : store.products.push(product);
        localStorage.setItem("order", JSON.stringify(store));
      } else {
        localStorage.setItem(
          "order",
          JSON.stringify({ products: [{ ...product }] })
        );
      }
      updateStore();
    }
  };
  
  const changeQuantity = (e) => {
    const newValue = +e.target.value;
    setQuantity(newValue >= 1 ? newValue : 1);
  };
  
  const changeProductInfo = (e) => {
    const target = e.target;
    if (target.closest(".details__actions-btn")) {
      e.currentTarget
        .querySelector(".active-btn")
        .classList.toggle("active-btn");
      target.classList.add("active-btn");
      target.value === "full"
        ? setProductInfo(fullDescription)
        : setProductInfo(exstraInformation);
    }
  };
  return (
    <div className="details">
      <div className="details__container">
        <div className="details__content-wrapper">
          <div
            className="details__image"
            style={{backgroundImage: `url(${require("../../assets" + (imagePath || "/product/fruit-vegetables.png"))})`}}
          >
            <div className="details__category">{categoryName}</div>
          </div>
          <div className="details__main-content main-content">
            <button className="main-content__close-btn">X</button>
            <h2 className="main-content__title">{productName}</h2>
            <p className="main-content__rating">
            <RatingStars stars={star}/>
            </p>
            <p className="main-content__values">
              <span
                className={"main-content__price" + (discountSum > 0 ? " discount":"")}>
                ${price}
              </span>
              <span className="main-content__discount">
                {discountSum ? "$" + discountPrice : null}
              </span>
            </p>
            <p className="main-content__text">{description}</p>
            <form className="main-content__form" onClick={addProduct}>
              <label className="main-content__lable" htmlFor="details-quantity">
                Quantity :
              </label>
              <input
                className="main-content__field"
                type="number"
                name="quantity"
                id="details-quantity"
                value={quantity}
                onChange={changeQuantity}
              />
              <Button  className={"dark-btn" + (isInCart? " yellow-btn":"")} text="Add To Cart" icon />
            </form>
          </div>
        </div>
        <div className="details__extra">
          <div className="details__actions" onClick={changeProductInfo}>
            <button className="details__actions-btn active-btn" value="full">
              Product Description
            </button>
            <button className="details__actions-btn" value="exstra">
              Additional Info
            </button>
          </div>
          <p className="details__description">{productInfo}</p>
        </div>
      </div>
    </div>
  );
}