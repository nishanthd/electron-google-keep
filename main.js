
const { app, BrowserWindow, BrowserView } = require('electron')

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({ width: 800, height: 600, frame: false })


  let view = new BrowserView({
    webPreferences: {
      nodeIntegration: false
    }
  })
  mainWindow.setBrowserView(view)
  view.setBounds({ x: 0, y: 0, width: 800, height: 600 })
  view.webContents.loadURL('https://keep.google.com')

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {

  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})
