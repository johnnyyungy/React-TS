import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css'; // Ensure this points to your CSS file
import App from './App'; // No need to add .tsx extension

// Get the root element from your HTML file
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