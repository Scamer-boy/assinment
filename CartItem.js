import React from 'react';
import { useCart } from '../context/CartContext';

const CartItem = ({ product }) => {
  const { removeFromCart } = useCart();

  return (
    <div className="cart-item">
      <img src={product.image} alt={product.name} />
      <h4>{product.name}</h4>
      <p>${product.price}</p>
      <button onClick={() => removeFromCart(product.id)}>Remove</button>
    </div>
  );
};

export default CartItem;
