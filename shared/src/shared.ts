export interface SharedContextBridge {
    onFileOpen: (callback: (fileContents: string) => void) => void;
    onFileSaveAs: (callback: (filePath: string) => void) => void;
    fileSaveAs: (filePath: string, fileContents: string) => void;
}