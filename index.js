const electron = require("electron");
const url = require("url");
const path = require("path");
let fs = require("fs");
const sqlite3 = require("better-sqlite3");
// import fs from "./node_modules/fs";

// const fs = require('fs');
// require("electron-reload")(__dirname, {
// electron: require(`${__dirname}/node_modules/electron`),
// });

("use strict");

const { app, BrowserWindow, Menu } = electron;
app.disableHardwareAcceleration();
let mainWindow;
app.on("ready", function () {
  mainWindow = new BrowserWindow({
    Width: 800,
    height: 1200,
    // title: "",
    movable: true,
    resizable: true,
    simpleFullscreen: true,
    webPreferences: {
      devTools: false,
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });

  mainWindow.loadFile(
    "login.html"
    // url.format({
    //   pathname: path.join(__dirname, "setting.html"),
    //   protocol: "file",
    //   slashes: true,
    // })
  );
  const mainMenu = Menu.buildFromTemplate(mainMenuTempelate);
  Menu.setApplicationMenu(null);
  // require("electron-reload")(__dirname, {
  //   electron: path.join(__dirname, "node_modules", ".bin", "electron"),
  //   hardResetMethod: "exit",
  // });
});

const mainMenuTempelate = [
  {
    label: "Developer",
    submenu: [
      {
        label: "console",
        accelerator: process.platform == "darwin" ? "Command+I" : "Ctrl+I",
        click(item, focusedWindow) {
          focusedWindow.toggleDevTools();
        },
      },
      {
        role: "reload",
        accelerator: process.platform == "darwin" ? "Command+R" : "Ctrl+R",
      },
    ],
  },
];
