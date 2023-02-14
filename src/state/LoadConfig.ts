let loadConfig: string | null;
let setLoadConfig: (loadConfig: string | null) => void;

export const setLoadConfigState = 
    (loadConfigState: [string | null, React.Dispatch<React.SetStateAction<string | null>>]):
    [string | null, React.Dispatch<React.SetStateAction<string | null>>] => {
    const [ _loadConfig, _setLoadConfig ] = loadConfigState;

    loadConfig = _loadConfig;
    setLoadConfig = (_loadConfig: string | null) => {
        loadConfig = _loadConfig;
        _setLoadConfig(_loadConfig);
    }

    return [loadConfig, <React.Dispatch<React.SetStateAction<string | null>>> setLoadConfig];
}

export default {
    getLoadConfig: () => loadConfig,
    setLoadConfig: (value: string | null) => setLoadConfig(value),
}