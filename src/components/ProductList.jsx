// ProductList.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
  // Agrega más productos según sea necesario
];

const ProductList = () => {
    return (
        <div>
        <h1>Product List</h1>
        <ul>
            {products.map((product) => (
            <li key={product.id}>
                <Link to={`/product/${product.id}`}>{product.name}</Link>
            </li>
            ))}
        </ul>
        </div>
    );
}

export default ProductList;
