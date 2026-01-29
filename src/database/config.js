// ===== НАСТРОЙКА ПОДКЛЮЧЕНИЯ К POSTGRESQL =====
// Этот файл создаёт пул соединений с базой данных

require('dotenv').config(); // Загружаем переменные из .env
const { Pool } = require('pg');

// Создание пула подключений к PostgreSQL
const pool = new Pool({
  host: process.env.DB_HOST,       // localhostы
  port: process.env.DB_PORT,       // 5432
  user: process.env.DB_USER,       // postgres
  password: process.env.DB_PASSWORD, // твой пароль
  database: process.env.DB_NAME    // library_db
});

// Проверка подключения при запуске
pool.on('connect', () => {
  console.log('✅ Подключение к PostgreSQL успешно!');
});

// Обработка ошибок подключения
pool.on('error', (err) => {
  console.error('❌ Ошибка подключения к БД:', err.message);
});

module.exports = pool;
