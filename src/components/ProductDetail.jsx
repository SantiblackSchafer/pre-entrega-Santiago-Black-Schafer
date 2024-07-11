// ProductDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const products = [
    { id: 1, name: 'Product 1', description: 'This is Product 1' },
    { id: 2, name: 'Product 2', description: 'This is Product 2' },
  // Agrega más productos según sea necesario
];

const ProductDetail = () => {
    const { productId } = useParams();
    const product = products.find((p) => p.id === parseInt(productId));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        </div>
    );
}

export default ProductDetail;
