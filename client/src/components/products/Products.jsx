import { useContext } from "react";
import { ProductLayout } from "../productsLayout/ProductsLayout";
import { LocalStorageContext } from "../app/App";

export function Products() {
  const { products, allProduct, toggleLoadMore } = useContext(LocalStorageContext);

  return (
      <ProductLayout
        title="Our Products"
        subtitle="Categories"
        displayedProductsCount={allProduct ? products.length : 8}
        showLoadMore={true}
        allProduct={allProduct}
        toggleLoadMore={toggleLoadMore}
      />
  );
}
