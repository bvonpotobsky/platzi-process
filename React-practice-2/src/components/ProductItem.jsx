import React, { useContext } from "react";
import { AppContext } from "@context/AppContext";

import IconAddToCart from "@icons/bt_add_to_cart.svg";

import "@styles/components/ProductItem.scss";

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext);

  const handleClick = (item) => {
    addToCart(item);
  };

  return (
    <div className="ProductItem">
      <img src={product.images[0]} alt={product.title} />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <img src={IconAddToCart} alt="Add to cart icon" />
        </figure>
      </div>
    </div>
  );
};

export { ProductItem };
