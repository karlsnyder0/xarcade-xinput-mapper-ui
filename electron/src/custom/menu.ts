import { MenuItemConstructorOptions } from 'electron';
import { app, MenuItem } from 'electron';
import { fileOpen, fileSaveAs } from './menu-actions';

export const appMenuBarMenuTemplate: (MenuItemConstructorOptions | MenuItem)[] = [];

if (process.platform === 'darwin') {
    appMenuBarMenuTemplate.push({ role: 'appMenu' });
}

const template: MenuItemConstructorOptions = {
    label: 'File',
    submenu: [{
        label: 'Open',
        accelerator: 'CmdOrCtrl+O',
        click: fileOpen,
    }, {
        label: 'Save As...',
        click: fileSaveAs,
    }, {
        label: process.platform === 'darwin' ? 'Quit' : 'Exit',
        accelerator: 'CmdOrCtrl+Q',
        click: () => {
            // Quit the app
            app.quit();
        }
    }]
};

appMenuBarMenuTemplate.push(template);

appMenuBarMenuTemplate.push({ role: 'viewMenu' });