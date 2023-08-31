import "./Cart.scss";
import { useContext, useEffect, useRef, useState } from "react";
import {LocalStorageContext} from '../app/App';
import { Link } from "react-router-dom";

export function Cart() {
  const {store}= useContext(LocalStorageContext);
  const [itemsInCart, setItemsInCart] = useState(0);
  const countCartRef = useRef(null);

  const countProducts =( products )=>products.reduce((sum, product)=> sum + product.quantity,0);
  
  useEffect(() => {
    setItemsInCart(store ? countProducts(store.products) : 0);
  }, [store]);

  useEffect(()=>{
    itemsInCart>0?countCartRef.current.style.color ="#FF0404"  : countCartRef.current.style.color ="#274C5B"
  }, [itemsInCart]);

  return (
    <div className="header__cart header-cart">
      <Link to="cart" className="header-cart__link">
        <div className="header-cart__icon"></div>
        <p className="header-cart__lable">Cart<span ref={countCartRef} className="header-cart__count">({itemsInCart})</span></p>
      </Link>
    </div>
  );
}
