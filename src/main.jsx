import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'animate.css/animate.min.css';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
