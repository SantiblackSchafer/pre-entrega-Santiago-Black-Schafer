import React from 'react';
import NavigationBar from './components/Navbar';
import ProductList from './components/products/ProductList';
import ProductDetail from './components/products/ProductDetail';
import Cart from './components/CART/Cart';
import CartProvider from './components/CART/CartContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/category/:categoryId" element={<ProductList />} />
          <Route path="/product/:itemId" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;




