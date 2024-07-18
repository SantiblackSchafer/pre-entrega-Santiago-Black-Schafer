import React from 'react';
import { Button } from 'react-bootstrap';

const CartWidget = () => {
    return (
        <Button variant="outline-light" className="d-flex align-items-center">
        <span role="img" aria-label="cart">🛒</span>
        <span className="ms-2">0</span>
        </Button>
    );
}

export default CartWidget;
