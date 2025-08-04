import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './styles/mailerlite.css';
import { initializeClarity } from './utils/clarity';

// Initialize Clarity in production
initializeClarity();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Add to your SEO component
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "My Accurate Books",
  "url": "https://myaccuratebooks.com",
  "logo": "https://myaccuratebooks.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-XXX-XXX-XXXX",
    "contactType": "customer service"
  }
};
