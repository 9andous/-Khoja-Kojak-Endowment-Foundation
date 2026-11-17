import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../components/setup.js';
import './water.css';
import WaterPage from './WaterPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WaterPage />
  </StrictMode>,
);
