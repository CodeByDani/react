import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/scrollbar';
import LuxuryCarLanding from './LuxuryCarLanding';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LuxuryCarLanding />
  </StrictMode>
);
