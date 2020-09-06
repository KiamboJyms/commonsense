const { app, BrowserWindow } = require ('electron');
const path = require ('path');
const url = require('url');

let win;
 function createWindow(){
     //create the browser window
     win = new BrowserWindow({width: 800,
                              height: 600
                            })

     win.loadURL(url.format({
         pathname: path.join(__dirname, './dist/atatest/index.html'),
         protocol: 'file:',
         slashes: true,
         webPreferences: {nodeIntegration: true}
     }))


   win.on('closed', ()=>{
       win =null;
   })
}

app.on('ready', createWindow);