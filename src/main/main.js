// ===== ELECTRON ГЛАВНЫЙ ПРОЦЕСС =====
// Этот файл создаёт окно приложения

const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

// ===== СОЗДАНИЕ ОКНА =====
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
    icon: path.join(__dirname, '../../public/icon.png')
  });

  // Загрузка React приложения (dev режим)
  mainWindow.loadURL('http://localhost:3000');

  // Открыть DevTools для отладки (можно закомментировать позже)
  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// ===== ЗАПУСК ПРИЛОЖЕНИЯ =====
app.whenReady().then(() => {
  createWindow();
  console.log('✅ Electron окно создано');
});

// Закрытие приложения на macOS
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
