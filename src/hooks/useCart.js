import { useContext } from 'react';
import { CartContext } from './CartProvider';

const useCart = () => {
    const { cart, addToCart, removeFromCart, clearCart, getTotal } = useContext(CartContext);

    return {
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        getTotal
    };
};

export default useCart;
