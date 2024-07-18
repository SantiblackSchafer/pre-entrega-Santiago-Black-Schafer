import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Item = ({ item }) => {
    return (
        <Card className="mb-4">
        <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>Price: ${item.price}</Card.Text>
            <Button variant="primary">Add to Cart</Button>
        </Card.Body>
        </Card>
    );
}

export default Item;

