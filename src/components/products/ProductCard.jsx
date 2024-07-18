import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { CartContext } from '../CART/CartProvider';

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(CartContext);

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.image} alt={product.name} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                    ${product.price.toFixed(2)}
                </Card.Text>
                <Button variant="primary" onClick={() => addToCart(product)}>Add to Cart</Button>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;

