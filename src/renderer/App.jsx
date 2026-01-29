// ===== ГЛАВНЫЙ КОМПОНЕНТ REACT =====
// Это корневой компонент приложения с тестовым интерфейсом

import React, { useState, useEffect } from 'react';

function App() {
  const [serverStatus, setServerStatus] = useState('Проверка...');
  const [dbStatus, setDbStatus] = useState('Проверка...');

  // Проверка подключения к серверу при загрузке
  useEffect(() => {
    checkServer();
    checkDatabase();
  }, []);

  // Проверка работы backend сервера
  const checkServer = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/test');
      const data = await response.json();
      setServerStatus(data.message);
    } catch (error) {
      setServerStatus('❌ Сервер не отвечает');
    }
  };

  // Проверка подключения к БД
  const checkDatabase = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/db-test');
      const data = await response.json();
      setDbStatus(data.message);
    } catch (error) {
      setDbStatus('❌ Ошибка подключения к БД');
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1>📚 Система управления библиотекой</h1>
        <div className="user-avatar">👤</div>
      </header>

      <nav className="navbar">
        <a href="#" className="nav-link active">Главная</a>
        <a href="#" className="nav-link">Категории</a>
        <a href="#" className="nav-link">Издательства</a>
      </nav>

      <main className="content">
        <div className="status-panel">
          <h2>Статус системы</h2>
          <div className="status-item">
            <span>Backend сервер:</span>
            <span className="status-value">{serverStatus}</span>
          </div>
          <div className="status-item">
            <span>База данных:</span>
            <span className="status-value">{dbStatus}</span>
          </div>
        </div>

        <div className="welcome-message">
          <h3>Добро пожаловать!</h3>
          <p>Приложение успешно запущено. Все системы работают корректно.</p>
          <p>Это базовый интерфейс для проверки подключений. В следующих этапах мы добавим функционал работы с книгами, читателями и выдачей.</p>
        </div>
      </main>
    </div>
  );
}

export default App;
