// ===== BACKEND СЕРВЕР (EXPRESS API) =====
// Этот файл создаёт сервер для обработки запросов от frontend

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const pool = require('../database/config');

const app = express();
const PORT = process.env.SERVER_PORT || 5000;

// ===== MIDDLEWARE =====
// Разрешает запросы с frontend (React на порту 3000)
app.use(cors());

// Парсинг JSON из запросов
app.use(express.json());

// ===== ТЕСТОВЫЙ РОУТ =====
// Проверка работы сервера
app.get('/api/test', (req, res) => {
  res.json({ message: '✅ Сервер работает!' });
});

// ===== ТЕСТОВЫЙ РОУТ БД =====
// Проверка подключения к PostgreSQL
app.get('/api/db-test', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ 
      message: '✅ Подключение к БД успешно!', 
      time: result.rows[0].now 
    });
  } catch (error) {
    res.status(500).json({ 
      message: '❌ Ошибка подключения к БД', 
      error: error.message 
    });
  }
});

// ===== ЗАПУСК СЕРВЕРА =====
app.listen(PORT, () => {
  console.log(`🚀 Backend сервер запущен на http://localhost:${PORT}`);
});
