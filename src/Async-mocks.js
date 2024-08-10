import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';

export const fetchProductsByCategory = async (categoryId) => {
    const productsCollection = collection(db, 'products');
    const q = query(productsCollection, where('category', '==', categoryId));
    const querySnapshot = await getDocs(q);
    const products = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
    }));
    return products;
    };

export const fetchAllProducts = async () => {
    const productsCollection = collection(db, 'products');
    const querySnapshot = await getDocs(productsCollection);
    const products = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
    }));
    return products;
};



