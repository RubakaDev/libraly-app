// === КОНФИГУРАЦИЯ VITE ДЛЯ REACT ===
// Настройка сборщика для frontend части приложения

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  
  // Корневая директория с исходным кодом React
  root: './src/renderer',
  
  // Папка для собранных файлов
  build: {
    outDir: '../../dist',
    emptyOutDir: true
  },
  
  // Настройка dev-сервера
  server: {
    port: 3000
  }
});
