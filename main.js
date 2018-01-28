const {app, BrowserWindow, ipcMain} = require('electron');
const {autoUpdater} = require("electron-updater");
const url = require('url');
const path = require('path');
let win;
function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 600, 
    height: 600,
    backgroundColor: '#ffffff',
    icon: `file://${__dirname}/dist/assets/logo.png`
  })
  // win.loadURL(`file://${__dirname}/dist/index.html`)
  // and load the index.html of the app.
  win.loadURL(url.format({
    pathname: path.join(__dirname, '/dist/index.html'),
    protocol: 'file:',
    slashes: true,
  }));
  //// uncomment below to open the DevTools.
  // win.webContents.openDevTools()
  // Event when the window is closed.
  win.on('closed', function () {
    win = null
  })
  
}
// Create window on electron intialization
app.on('ready', createWindow)
// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS specific close process
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', function () {
  // macOS specific close process
  if (win === null) {
    createWindow()
  }
})

// when the update has been downloaded and is ready to be installed, notify the BrowserWindow
autoUpdater.on('update-downloaded', (info) => {
    win.webContents.send('update-ready')
});

// when receiving a install-update signal, quit and install the new version ;)
ipcMain.on("install-update", (event, arg) => {
    autoUpdater.quitAndInstall();
})

// check for updates
// autoUpdater.checkForUpdates();