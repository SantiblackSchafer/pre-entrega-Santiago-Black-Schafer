import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../../Async-mocks';

const ProductDetail = () => {
    const { itemId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetchProductById(itemId).then(setProduct);
    }, [itemId]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
        <h1>{product.name}</h1>
        <img src={product.image} alt={product.name} style={{ width: '300px', height: '300px' }} />
        <p>{product.description || 'No description available'}</p>
        </div>
    );
};

export default ProductDetail;

