import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';

const container = document.getElementById('root');
const root = createRoot(container as HTMLDivElement);
import './index.css';

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
