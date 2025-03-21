import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css'; 
import App from './App'; 

const rootElement = document.getElementById('root');

// Ensure the root element exists before rendering
if (rootElement) {
    const root = createRoot(rootElement);
    root.render(
        <StrictMode>
            <App />
        </StrictMode>
    );
} else {
    console.error('Root element not found');
}