import { useState, useRef, useContext } from "react";
import { getDiscountSum, getDiscountPrice, sliceProducts, showDetails, setSelected } from "../../utils/productsUtils";
import { LocalStorageContext } from "../app/App";
import { ProductCard } from "../productCard/ProductCard";
import { ProductDetails } from "../productDetails/ProductDetails";
import "./Offer.scss";

export function Offer() {
  const { products } = useContext(LocalStorageContext);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const detail = useRef(null);
  const displayedProducts = sliceProducts(products, 4);

  return (
    <section className="offer">
      <div className="offer__container">
        <p className="offer__subtitle">Offer</p>
        <h2 className="offer__title">We Offer Organic For You</h2>
        <div className="offer__content" onClick={(e) => showDetails(e, detail)}>
          {displayedProducts.map((product) => {
            const { id, productName, price, star, discount, categoryName, imagePath } = product;
            const discountSum = getDiscountSum(price, discount);
            const discountPrice = getDiscountPrice(price, discountSum);
            return (
              <ProductCard
                key={id}
                id={id}
                name={productName}
                price={price}
                discountSum={discountSum}
                discountPrice = {discountPrice}
                rating={star}
                imagePath={imagePath}
                categoryName={categoryName}
                selectProduct={(id) => setSelected(id, products, setSelectedProduct, getDiscountSum, getDiscountPrice)}
              />
            );
          })}
        </div>
      </div>
        <div className="offer__detail hidden" ref={detail} onClick={(e) => showDetails(e, detail)}>
        {selectedProduct ? <ProductDetails {...selectedProduct} /> : null}
        </div>
    </section>
  );
}


