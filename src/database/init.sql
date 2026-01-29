-- ===== СОЗДАНИЕ ТАБЛИЦ БАЗЫ ДАННЫХ БИБЛИОТЕКИ =====

-- Таблица: Издательства
CREATE TABLE IF NOT EXISTS publishers (
    publish_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    books TEXT,
    description TEXT
);

-- Таблица: Книги
CREATE TABLE IF NOT EXISTS books (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    description TEXT,
    year INTEGER,
    genre VARCHAR(100),
    publish_id INTEGER REFERENCES publishers(publish_id),
    cover_image VARCHAR(500),
    total_copies INTEGER DEFAULT 1,
    available_copies INTEGER DEFAULT 1,
    age_restriction VARCHAR(10) DEFAULT '0+'
);

-- Таблица: Читатели
CREATE TABLE IF NOT EXISTS readers (
    reader_id SERIAL PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    age INTEGER,
    address VARCHAR(500),
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    avatar VARCHAR(500),
    registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица: Сотрудники
CREATE TABLE IF NOT EXISTS workers (
    worker_id SERIAL PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    avatar VARCHAR(500)
);

-- Таблица: Выдача книг
CREATE TABLE IF NOT EXISTS extraditions (
    extradition_id SERIAL PRIMARY KEY,
    reader_id INTEGER REFERENCES readers(reader_id),
    book_id INTEGER REFERENCES books(book_id),
    worker_id INTEGER REFERENCES workers(worker_id),
    request_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    issue_date TIMESTAMP,
    return_date TIMESTAMP,
    status VARCHAR(50) DEFAULT 'requested',
    rejection_reason TEXT
);

-- Индексы для ускорения поиска
CREATE INDEX idx_books_genre ON books(genre);
CREATE INDEX idx_books_publisher ON books(publish_id);
CREATE INDEX idx_extraditions_status ON extraditions(status);
CREATE INDEX idx_extraditions_reader ON extraditions(reader_id);
