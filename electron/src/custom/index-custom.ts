import { app, globalShortcut } from 'electron';

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