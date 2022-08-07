const {app, BrowserWindow} = require('electron')
const url = require('url')
const path = require('path')

let win

function createWindow() {
   win = new BrowserWindow({width: 800, height: 600})
   win.loadURL(url.format ({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
   }))
}



app.on('ready', createWindow)
// var fs = require('fs');
// var content = {
  
// };
// function insertContent(formdata){

// var content = localStorage.getItem('storage');

  
  // fs.writeFileSync('include/setting.txt', content);
//   location.replace('./setting.html');
//   //   fs.readFileSync('include/read.txt');
// //   console.log(contentstring);

//   // fs.renameSync("include/read.txt","include/storeData.txt",contentstring);
// // }

// // insertContent(content);

