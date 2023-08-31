import { useContext } from "react";
import { ProductLayout } from "../productsLayout/ProductsLayout";
import { LocalStorageContext } from "../app/App";

export function ShopProducts() {
  const { products, allProduct, toggleLoadMore } = useContext(LocalStorageContext);

  return (
    <ProductLayout
      displayedProductsCount={allProduct ? products.length : 12}
      showLoadMore={false}
      allProduct={allProduct}
      toggleLoadMore={toggleLoadMore}
    />
  );
}



