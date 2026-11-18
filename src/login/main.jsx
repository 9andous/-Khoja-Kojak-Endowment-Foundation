import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../components/setup.js';
import './login.css';
import LoginPage from './LoginPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginPage />
  </StrictMode>,
);
