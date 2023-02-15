import { app, globalShortcut, ipcMain } from 'electron';
import log from 'electron-log';
import { IPC_CHANNEL } from './enum';
import { saveFile } from './menu-actions';

// Disable tabbing between controls.
app.on('ready', () => {
    globalShortcut.register('Tab', () => {
       return false;
    })
});

app.on('will-quit', () => {
    // Unregister a shortcut.
    globalShortcut.unregister('Tab');
});

app.on('window-all-closed', async () => {
    app.quit();
});

// Save File
ipcMain.on(IPC_CHANNEL.FILE_SAVE_AS, (event, filePath: string, fileContents: string) => {
    saveFile(filePath, fileContents);
});