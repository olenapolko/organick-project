import './ProductsLayout.scss';
import { useState, useRef, useContext } from "react";
import { getDiscountSum, getDiscountPrice, sliceProducts, showDetails, setSelected  } from "../../utils/productsUtils";
import { LocalStorageContext } from "../app/App";
import { ProductCard } from "../productCard/ProductCard";
import { ProductDetails } from "../productDetails/ProductDetails";
import { Button } from '../button/Button';

export function ProductLayout({ title, subtitle, displayedProductsCount, showLoadMore, allProduct}) {
  const { products, onToggleLoadMore} = useContext(LocalStorageContext);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const detail = useRef(null);

  const displayedProducts = sliceProducts(products, displayedProductsCount);

  const loadMore = (e) => {
    if (e.target.closest(".btn")) {
      onToggleLoadMore(); 
    }
  };

  return (
    <section className="products-layout">
      <div className="products-layout__container"  onClick={loadMore}>
        {subtitle &&<p className="products-layout__subtitle">{subtitle}</p>}
        {title &&<h2 className="products-layout__title">{title}</h2>}
        <div className="products-layout__content" onClick={(e) => showDetails(e, detail)}>
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
                discountPrice={discountPrice}
                rating={star}
                imagePath={imagePath}
                categoryName={categoryName}
                selectProduct={(id) => setSelected(id, displayedProducts, setSelectedProduct, getDiscountSum, getDiscountPrice)}
              />
            );
          })}
        </div>
        {showLoadMore && (
          <Button
            className="dark-btn"
            text={allProduct ? "Hide All" : "Load More"}
            icon
            onClick={loadMore}
          />
        )}
      </div>
      
      <div className="products-layout__detail hidden" ref={detail} onClick={(e) => showDetails(e, detail)}>
        {selectedProduct ? <ProductDetails {...selectedProduct} /> : null}
      </div>
    </section>
  );
}
