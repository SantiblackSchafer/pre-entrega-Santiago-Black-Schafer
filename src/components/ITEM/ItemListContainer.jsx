import React, { useState, useEffect } from 'react';
import Item from './Item';
import { Container, Row, Col } from 'react-bootstrap';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const products = [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 200 },
        ];
        setItems(products);
    }, []);

    return (
        <Container className="my-4">
        <Row>
            {items.map(item => (
            <Col key={item.id} sm={12} md={6} lg={4}>
                <Item item={item} />
            </Col>
            ))}
        </Row>
        </Container>
    );
}

export default ItemListContainer;

