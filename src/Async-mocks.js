// async-mocks.js
const products = [
    { id: 1, name: 'Product 1', category: 'A', image: '/images/suburban-1984.webp' },
    { id: 2, name: 'Product 2', category: 'B', image: '/images/rolls-royce-cullian-suv.webp' },
    { id: 3, name: 'Product 3', category: 'A', image: '/images/mazda-rx7.webp' },
    { id: 4, name: 'Product 4', category: 'B', image: '/images/1970-chevelle-ss-red.webp' },
];

    export const fetchProductsByCategory = (category) => {
        return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(product => product.category === category));
        }, 1000);
        });
    };
    
    export const fetchProductById = (id) => {
        return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(product => product.id === parseInt(id)));
        }, 1000);
        });
    };


