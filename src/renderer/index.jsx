// ===== ТОЧКА ВХОДА REACT ПРИЛОЖЕНИЯ =====
// Этот файл рендерит главный компонент App в HTML

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/main.css';

// Создание корневого элемента React
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

console.log('✅ React приложение запущено');
