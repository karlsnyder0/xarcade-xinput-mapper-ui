import { dialog } from 'electron/main';
import log from 'electron-log';
import * as fs from 'fs';
import { IPC_CHANNEL } from './enum';

let capacitorApp;
export const setCapacitorApp = (_capacitorApp) => {
    capacitorApp = _capacitorApp;
}

export const fileOpen = async () => {
    const { filePaths } = await dialog.showOpenDialog(capacitorApp.MainWindow, {
        title: 'Open XArcade XInput Mapping Configuration',
        properties: ['openFile'],
        filters: [{
            name: 'JSON Files',
            extensions: ['json']
        }],
    });

    if (filePaths) {
        const contents = fs.readFileSync(filePaths[0], 'utf-8');
        capacitorApp.MainWindow.webContents.send(IPC_CHANNEL.FILE_OPEN, contents);
    }
}

export const fileSaveAs = async () => {
    const { filePath } = await dialog.showSaveDialog(capacitorApp.MainWindow, {
        title: 'Save XArcade XInput Mapping Configuration',
        filters: [{
            name: 'JSON Files',
            extensions: ['json']
        }],
    });

    if (filePath) {
        capacitorApp.MainWindow.webContents.send(IPC_CHANNEL.FILE_SAVE_AS, filePath);
    }
}

export const saveFile = (filePath: string, contents: string) => {
    try {
        fs.writeFileSync(filePath, contents);
    } catch (e) {
        log.error(e);
    }
}
