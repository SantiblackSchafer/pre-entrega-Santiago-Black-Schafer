// src/components/products/ProductList.jsx
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../../firebase'; // Asegúrate de que esta ruta sea correcta.

const ProductList = () => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
        try {
            let q;
            if (categoryId) {
            // Crea una consulta a Firestore para obtener productos de una categoría específica
            q = query(collection(db, 'products'), where('category', '==', categoryId));
            } else {
            // Obtén todos los productos si no hay categoría específica
            q = collection(db, 'products');
            }

            const querySnapshot = await getDocs(q);
            const productsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setProducts(productsList);
        } catch (error) {
            console.error("Error fetching products: ", error);
        }
        };

        fetchProducts();
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





