import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchProductsByCategory } from '../../Async-mocks';

const ProductList = () => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (categoryId) {
        fetchProductsByCategory(categoryId).then(setProducts);
        }
    }, [categoryId]);

    return (
        <div>
        <h1>Product List {categoryId && `- Category: ${categoryId}`}</h1>
        <ul>
            {products.map((product) => (
            <li key={product.id}>
                <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} style={{ width: '100px', height: '100px' }} />
                <p>{product.name}</p>
                </Link>
            </li>
            ))}
        </ul>
        </div>
    );
};

export default ProductList;


