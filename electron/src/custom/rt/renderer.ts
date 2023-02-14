import { contextBridge, ipcRenderer } from 'electron/renderer';
import { SharedContextBridge } from 'shared';
import { IPC_CHANNEL } from '../enum';

const api: SharedContextBridge = {
    onFileOpen: (callback) => {
        ipcRenderer.on(IPC_CHANNEL.FILE_OPEN, (event: Event, fileContents: string) => {
            callback(fileContents);
        });
    },

    onFileSaveAs: (callback) => {
        ipcRenderer.on(IPC_CHANNEL.FILE_SAVE_AS, (event: Event, filePath: string) => {
            callback(filePath);
        });
    },

    fileSaveAs: (filePath: string, contents: string) => {
        ipcRenderer.send(IPC_CHANNEL.FILE_SAVE_AS, filePath, contents);
    },
};

// Create an api for window objects in web pages
contextBridge.exposeInMainWorld('electronRenderer', api);
