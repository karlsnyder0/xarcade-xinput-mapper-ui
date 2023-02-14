import { SharedContextBridge } from 'shared';
import { loadMappingConfig, saveMappingConfig } from './util/MappingUtil';

declare global {
    interface Window {
        electronRenderer: SharedContextBridge;
    }
}

if (window.electronRenderer) {
    window.electronRenderer.onFileOpen((fileContents: string) => {
        loadMappingConfig(fileContents);
    });
    
    window.electronRenderer.onFileSaveAs((filePath: string) => {
        const contents = saveMappingConfig();
    
        window.electronRenderer.fileSaveAs(filePath, contents);
    });
}

export default {}