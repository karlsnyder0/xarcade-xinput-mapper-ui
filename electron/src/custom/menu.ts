import { MenuItemConstructorOptions } from 'electron';
import { app, MenuItem } from 'electron';
import { fileOpen, fileSaveAs } from './menu-actions';

export const appMenuBarMenuTemplate: (MenuItemConstructorOptions | MenuItem)[] = [
  { role: process.platform === 'darwin' ? 'appMenu' : 'fileMenu' },
  { role: 'viewMenu' },
];

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
        label: 'Quit',
        accelerator: 'CmdOrCtrl+Q',
        click: () => {
            // Quit the app
            app.quit();
        }
    }]
};

appMenuBarMenuTemplate.splice(1, 0, template);
