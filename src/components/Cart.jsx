import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
    const { cart, removeFromCart, clearCart } = useContext(CartContext);

    if (cart.length === 0) {
        return <div>Your cart is empty</div>;
    }

    return (
        <div>
        <h1>Your Cart</h1>
        <ul>
            {cart.map((product) => (
            <li key={product.id}>
                <img src={product.image} alt={product.name} style={{ width: '100px', height: '100px' }} />
                <p>{product.name}</p>
                <button onClick={() => removeFromCart(product.id)}>Remove</button>
            </li>
            ))}
        </ul>
        <button onClick={clearCart}>Clear Cart</button>
        </div>
    );
};

export default Cart;
