import { getAllProducts } from "../fetches/fetches";

export async function fetchProducts() {
  const result = await getAllProducts();
  return result.data;
}

export function categorizeProductsByDiscount(products) {
    return products.reduce(
      (categories, product) => {
        if (product.discount > 0) {
          categories.productsWithDiscount.push(product);
        } else {
          categories.productsWithoutDiscount.push(product);
        }
        return categories;
      },
      { productsWithDiscount: [], productsWithoutDiscount: [] }
    );
}

export function sliceProducts(products, count) {
    return products.slice(0, count);
}

export function getDiscountSum(price, discount) {
  if (!discount) return 0;
  return Number((discount / 100).toFixed(2)) * price;
}

export function getDiscountPrice(price, discountSum) {
  if (!discountSum) return price;
  return price - discountSum;
}

export function setSelected(id, products, setSelectedProduct, getDiscountSum, getDiscountPrice) {
    const selected = products.find((product) => product.id === id);
    const discountSum = getDiscountSum(selected.price, selected.discount);
    setSelectedProduct({
      ...selected,
      discountSum,
      discountPrice: getDiscountPrice(selected.price, discountSum),
    });
}  

export function showDetails(e, detailRef) {
  if (
    e.target.classList.contains("products__detail") ||
    e.target.classList.contains("main-content__close-btn") ||
    e.target.classList.contains("product")
  ) {
    detailRef.current.classList.toggle("hidden");
  }
}
