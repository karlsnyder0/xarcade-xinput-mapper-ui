import { toastStore, Type } from '../components/Toast';

export interface Mapping {
    [key: string]: string;
    [XInputControllerInput.LeftTrigger]: KeyName;
    [XInputControllerInput.LeftBumper]: KeyName;
    [XInputControllerInput.LeftStickX]: KeyName;    // Right (Analog)
    [XInputControllerInput.LeftStickXI]: KeyName;   // Left (Analog)
    [XInputControllerInput.LeftStickY]: KeyName;    // Up (Analog)
    [XInputControllerInput.LeftStickYI]: KeyName;   // Down (Analog)
    [XInputControllerInput.RightTrigger]: KeyName;
    [XInputControllerInput.RightBumper]: KeyName;
    [XInputControllerInput.RightStickX]: KeyName;   // Right (Analog)
    [XInputControllerInput.RightStickXI]: KeyName;  // Left (Analog)
    [XInputControllerInput.RightStickY]: KeyName;   // Up (Analog)
    [XInputControllerInput.RightStickYI]: KeyName;  // Down (Analog)
    [XInputControllerInput.Up]: KeyName;            // D-Pad
    [XInputControllerInput.Down]: KeyName;          // D-Pad
    [XInputControllerInput.Left]: KeyName;          // D-Pad
    [XInputControllerInput.Right]: KeyName;         // D-Pad
    [XInputControllerInput.Y]: KeyName;             // Top Button
    [XInputControllerInput.B]: KeyName;             // Right Button
    [XInputControllerInput.A]: KeyName;             // Bottom Button
    [XInputControllerInput.X]: KeyName;             // Left Button
    [XInputControllerInput.Start]: KeyName;
    [XInputControllerInput.Back]: KeyName;
    [XInputControllerInput.Logo]: KeyName;
}

export enum XInputControllerInput {
    LeftTrigger = 'LeftTrigger',
    LeftBumper = 'LeftBumper',
    LeftStickX = 'LeftStickX',
    LeftStickXI = 'LeftStickXI',
    LeftStickY = 'LeftStickY',
    LeftStickYI = 'LeftStickYI',
    RightTrigger = 'RightTrigger',
    RightBumper = 'RightBumper',
    RightStickX = 'RightStickX',
    RightStickXI = 'RightStickXI',
    RightStickY = 'RightStickY',
    RightStickYI = 'RightStickYI',
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right',
    Y = 'Y',
    B = 'B',
    A = 'A',
    X = 'X',
    Start = 'Start',
    Back = 'Back',
    Logo = 'Logo',
}

export enum KeyName {
    Digit1 = 'Digit1',
    Digit2 = 'Digit2',
    Digit3 = 'Digit3',
    Digit4 = 'Digit4',
    Digit5 = 'Digit5',
    Digit6 = 'Digit6',
    Digit7 = 'Digit7',
    Digit8 = 'Digit8',
    Digit9 = 'Digit9',
    Digit0 = 'Digit0',
    KeyA = 'KeyA',
    KeyB = 'KeyB',
    KeyC = 'KeyC',
    KeyD = 'KeyD',
    KeyE = 'KeyE',
    KeyF = 'KeyF',
    KeyG = 'KeyG',
    KeyH = 'KeyH',
    KeyI = 'KeyI',
    KeyJ = 'KeyJ',
    KeyK = 'KeyK',
    KeyL = 'KeyL',
    KeyM = 'KeyM',
    KeyN = 'KeyN',
    KeyO = 'KeyO',
    KeyP = 'KeyP',
    KeyQ = 'KeyQ',
    KeyR = 'KeyR',
    KeyS = 'KeyS',
    KeyT = 'KeyT',
    KeyU = 'KeyU',
    KeyV = 'KeyV',
    KeyW = 'KeyW',
    KeyX = 'KeyX',
    KeyY = 'KeyY',
    KeyZ = 'KeyZ',

    Backquote = 'Backquote',
    Backslash = 'Backslash',
    BracketLeft = 'BracketLeft',
    BracketRight = 'BracketRight',
    Comma = 'Comma',
    Equal = 'Equal',
    IntlRo = 'IntlRo',
    IntlYen = 'IntlYen',
    Minus = 'Minus',
    Period = 'Period',
    Quote = 'Quote',
    Semicolon = 'Semicolon',

    Alt = 'Alt',
    Control = 'Control',
    Shift = 'Shift',

    AltLeft = 'AltLeft',
    AltRight = 'AltRight',
    CapsLock = 'CapsLock',
    ControlLeft = 'ControlLeft',
    ControlRight = 'ControlRight',
    OSLeft = 'OSLeft',
    OSRight = 'OSRight',
    ShiftLeft = 'ShiftLeft',
    ShiftRight = 'ShiftRight',

    ContextMenu = 'ContextMenu',
    Enter = 'Enter',
    Space = 'Space',
    Tab = 'Tab',
    Delete = 'Delete',
    End = 'End',
    Help = 'Help',
    Home = 'Home',
    Insert = 'Insert',
    PageDown = 'PageDown',
    PageUp = 'PageUp',
    ArrowDown = 'ArrowDown',
    ArrowLeft = 'ArrowLeft',
    ArrowRight = 'ArrowRight',
    ArrowUp = 'ArrowUp',
    Escape = 'Escape',
    PrintScreen = 'PrintScreen',
    ScrollLock = 'ScrollLock',
    Pause = 'Pause',

    // FKeys

    NumLock = 'NumLock',
    Numpad0 = 'Numpad0',
    Numpad1 = 'Numpad1',
    Numpad2 = 'Numpad2',
    Numpad3 = 'Numpad3',
    Numpad4 = 'Numpad4',
    Numpad5 = 'Numpad5',
    Numpad6 = 'Numpad6',
    Numpad7 = 'Numpad7',
    Numpad8 = 'Numpad8',
    Numpad9 = 'Numpad9',
    NumpadAdd = 'NumpadAdd',
    NumpadComma = 'NumpadComma',
    NumpadDecimal = 'NumpadDecimal',
    NumpadDivide = 'NumpadDivide',
    NumpadEnter = 'NumpadEnter',
    NumpadEqual = 'NumpadEqual',
    NumpadMultiply = 'NumpadMultiply',
    NumpadSubtract = 'NumpadSubtract',

    MetaLeft = 'MetaLeft',
    MetaRight = 'MetaRight',

    Unknown = 'Unknown',
}

export enum XInputKeyInput {
    A = 'A',
    Add = 'Add',
    Alt = 'Alt',
    Apps = 'Apps',
    Attn = 'Attn',
    B = 'B',
    Back = 'Back',
    BrowserBack = 'BrowserBack',
    BrowserFavorites = 'BrowserFavorites',
    BrowserForward = 'BrowserForward',
    BrowserHome = 'BrowserHome',
    BrowserRefresh = 'BrowserRefresh',
    BrowserSearch = 'BrowserSearch',
    BrowserStop = 'BrowserStop',
    C = 'C',
    Cancel = 'Cancel',
    Capital = 'Capital',
    CapsLock = 'CapsLock',
    Clear = 'Clear',
    Control = 'Control',
    ControlKey = 'ControlKey',
    Crsel = 'Crsel',
    D = 'D',
    D0 = 'D0',
    D1 = 'D1',
    D2 = 'D2',
    D3 = 'D3',
    D4 = 'D4',
    D5 = 'D5',
    D6 = 'D6',
    D7 = 'D7',
    D8 = 'D8',
    D9 = 'D9',
    Decimal = 'Decimal',
    Delete = 'Delete',
    Divide = 'Divide',
    Down = 'Down',
    E = 'E',
    End = 'End',
    Enter = 'Enter',
    EraseEof = 'EraseEof',
    Escape = 'Escape',
    Execute = 'Execute',
    Exsel = 'Exsel',
    F = 'F',
    F1 = 'F1',
    F10 = 'F10',
    F11 = 'F11',
    F12 = 'F12',
    F13 = 'F13',
    F14 = 'F14',
    F15 = 'F15',
    F16 = 'F16',
    F17 = 'F17',
    F18 = 'F18',
    F19 = 'F19',
    F2 = 'F2',
    F20 = 'F20',
    F21 = 'F21',
    F22 = 'F22',
    F23 = 'F23',
    F24 = 'F24',
    F3 = 'F3',
    F4 = 'F4',
    F5 = 'F5',
    F6 = 'F6',
    F7 = 'F7',
    F8 = 'F8',
    F9 = 'F9',
    FinalMode = 'FinalMode',
    G = 'G',
    H = 'H',
    HanguelMode = 'HanguelMode',
    HangulMode = 'HangulMode',
    HanjaMode = 'HanjaMode',
    Help = 'Help',
    Home = 'Home',
    I = 'I',
    IMEAccept = 'IMEAccept',
    IMEAceept = 'IMEAceept',
    IMEConvert = 'IMEConvert',
    IMEModeChange = 'IMEModeChange',
    IMENonconvert = 'IMENonconvert',
    Insert = 'Insert',
    J = 'J',
    JunjaMode = 'JunjaMode',
    K = 'K',
    KanaMode = 'KanaMode',
    KanjiMode = 'KanjiMode',
    KeyCode = 'KeyCode',
    L = 'L',
    LaunchApplication1 = 'LaunchApplication1',
    LaunchApplication2 = 'LaunchApplication2',
    LaunchMail = 'LaunchMail',
    LButton = 'LButton',
    LControlKey = 'LControlKey',
    Left = 'Left',
    LineFeed = 'LineFeed',
    LMenu = 'LMenu',
    LShiftKey = 'LShiftKey',
    LWin = 'LWin',
    M = 'M',
    MButton = 'MButton',
    MediaNextTrack = 'MediaNextTrack',
    MediaPlayPause = 'MediaPlayPause',
    MediaPreviousTrack = 'MediaPreviousTrack',
    MediaStop = 'MediaStop',
    Menu = 'Menu',
    Modifiers = 'Modifiers',
    Multiply = 'Multiply',
    N = 'N',
    Next = 'Next',
    NoName = 'NoName',
    None = 'None',
    NumLock = 'NumLock',
    NumPad0 = 'NumPad0',
    NumPad1 = 'NumPad1',
    NumPad2 = 'NumPad2',
    NumPad3 = 'NumPad3',
    NumPad4 = 'NumPad4',
    NumPad5 = 'NumPad5',
    NumPad6 = 'NumPad6',
    NumPad7 = 'NumPad7',
    NumPad8 = 'NumPad8',
    NumPad9 = 'NumPad9',
    O = 'O',
    Oem1 = 'Oem1',
    Oem102 = 'Oem102',
    Oem2 = 'Oem2',
    Oem3 = 'Oem3',
    Oem4 = 'Oem4',
    Oem5 = 'Oem5',
    Oem6 = 'Oem6',
    Oem7 = 'Oem7',
    Oem8 = 'Oem8',
    OemBackslash = 'OemBackslash',
    OemClear = 'OemClear',
    OemCloseBrackets = 'OemCloseBrackets',
    Oemcomma = 'Oemcomma',
    OemMinus = 'OemMinus',
    OemOpenBrackets = 'OemOpenBrackets',
    OemPeriod = 'OemPeriod',
    OemPipe = 'OemPipe',
    Oemplus = 'Oemplus',
    OemQuestion = 'OemQuestion',
    OemQuotes = 'OemQuotes',
    OemSemicolon = 'OemSemicolon',
    Oemtilde = 'Oemtilde',
    P = 'P',
    Pa1 = 'Pa1',
    Packet = 'Packet',
    PageDown = 'PageDown',
    PageUp = 'PageUp',
    Pause = 'Pause',
    Play = 'Play',
    Print = 'Print',
    PrintScreen = 'PrintScreen',
    Prior = 'Prior',
    ProcessKey = 'ProcessKey',
    Q = 'Q',
    R = 'R',
    RButton = 'RButton',
    RControlKey = 'RControlKey',
    Return = 'Return',
    Right = 'Right',
    RMenu = 'RMenu',
    RShiftKey = 'RShiftKey',
    RWin = 'RWin',
    S = 'S',
    Scroll = 'Scroll',
    Select = 'Select',
    SelectMedia = 'SelectMedia',
    Separator = 'Separator',
    Shift = 'Shift',
    ShiftKey = 'ShiftKey',
    Sleep = 'Sleep',
    Snapshot = 'Snapshot',
    Space = 'Space',
    Subtract = 'Subtract',
    T = 'T',
    Tab = 'Tab',
    U = 'U',
    Up = 'Up',
    V = 'V',
    VolumeDown = 'VolumeDown',
    VolumeMute = 'VolumeMute',
    VolumeUp = 'VolumeUp',
    W = 'W',
    X = 'X',
    XButton1 = 'XButton1',
    XButton2 = 'XButton2',
    Y = 'Y',
    Z = 'Z',
    Zoom = 'Zoom',
}

const KeyNameMap = Object.keys(KeyName).reduce((o: {[key: string]: string}, key) => {
    o[key] = key;
    return o;
}, {})

// const KeyNameToKey: {[key: string]: string} = {
//     [KeyName.Digit1]: '1',
//     [KeyName.Digit2]: '2',
//     [KeyName.Digit3]: '3',
//     [KeyName.Digit4]: '4',
//     [KeyName.Digit5]: '5',
//     [KeyName.Digit6]: '6',
//     [KeyName.Digit7]: '7',
//     [KeyName.Digit8]: '8',
//     [KeyName.Digit9]: '9',
//     [KeyName.Digit0]: '0',
//     [KeyName.KeyA]: 'A',
//     [KeyName.KeyB]: 'B',
//     [KeyName.KeyC]: 'C',
//     [KeyName.KeyD]: 'D',
//     [KeyName.KeyE]: 'E',
//     [KeyName.KeyF]: 'F',
//     [KeyName.KeyG]: 'G',
//     [KeyName.KeyH]: 'H',
//     [KeyName.KeyI]: 'I',
//     [KeyName.KeyJ]: 'J',
//     [KeyName.KeyK]: 'K',
//     [KeyName.KeyL]: 'L',
//     [KeyName.KeyM]: 'M',
//     [KeyName.KeyN]: 'N',
//     [KeyName.KeyO]: 'O',
//     [KeyName.KeyP]: 'P',
//     [KeyName.KeyQ]: 'Q',
//     [KeyName.KeyR]: 'R',
//     [KeyName.KeyS]: 'S',
//     [KeyName.KeyT]: 'T',
//     [KeyName.KeyU]: 'U',
//     [KeyName.KeyV]: 'V',
//     [KeyName.KeyW]: 'W',
//     [KeyName.KeyX]: 'X',
//     [KeyName.KeyY]: 'Y',
//     [KeyName.KeyZ]: 'X',
//     [KeyName.Unknown]: '',
// }

// const KeyToKeyName = Object.keys(KeyNameToKey).reduce((ret: {[key: string]: string}, key) => {
//     ret[KeyNameToKey[key]] = key;
//     return ret;
// }, {});

export const XInputKeyToEventKeyName: {[key: string]: string} = {
    [XInputKeyInput.A]: KeyName.KeyA,
    [XInputKeyInput.Add]: KeyName.NumpadAdd,
    [XInputKeyInput.Alt]: KeyName.Alt,
    [XInputKeyInput.Apps]: KeyName.Unknown,
    [XInputKeyInput.Attn]: KeyName.Unknown,
    [XInputKeyInput.B]: KeyName.KeyB,
    [XInputKeyInput.Back]: KeyName.Unknown,
    [XInputKeyInput.BrowserBack]: KeyName.Unknown,
    [XInputKeyInput.BrowserFavorites]: KeyName.Unknown,
    [XInputKeyInput.BrowserForward]: KeyName.Unknown,
    [XInputKeyInput.BrowserHome]: KeyName.Unknown,
    [XInputKeyInput.BrowserRefresh]: KeyName.Unknown,
    [XInputKeyInput.BrowserSearch]: KeyName.Unknown,
    [XInputKeyInput.BrowserStop]: KeyName.Unknown,
    [XInputKeyInput.C]: KeyName.KeyC,
    [XInputKeyInput.Cancel]: KeyName.Unknown,
    [XInputKeyInput.Capital]: KeyName.Unknown,
    [XInputKeyInput.CapsLock]: KeyName.Unknown,
    [XInputKeyInput.Clear]: KeyName.Unknown,
    [XInputKeyInput.Control]: KeyName.Unknown,
    [XInputKeyInput.ControlKey]: KeyName.Control,
    [XInputKeyInput.Crsel]: KeyName.Unknown,
    [XInputKeyInput.D]: KeyName.KeyD,
    [XInputKeyInput.D0]: KeyName.Digit0,
    [XInputKeyInput.D1]: KeyName.Digit1,
    [XInputKeyInput.D2]: KeyName.Digit2,
    [XInputKeyInput.D3]: KeyName.Digit3,
    [XInputKeyInput.D4]: KeyName.Digit4,
    [XInputKeyInput.D5]: KeyName.Digit5,
    [XInputKeyInput.D6]: KeyName.Digit6,
    [XInputKeyInput.D7]: KeyName.Digit7,
    [XInputKeyInput.D8]: KeyName.Digit8,
    [XInputKeyInput.D9]: KeyName.Digit9,
    [XInputKeyInput.Decimal]: KeyName.Unknown,
    [XInputKeyInput.Delete]: KeyName.Unknown,
    [XInputKeyInput.Divide]: KeyName.NumpadDivide,
    [XInputKeyInput.Down]: KeyName.ArrowDown,
    [XInputKeyInput.E]: KeyName.KeyE,
    [XInputKeyInput.End]: KeyName.Unknown,
    [XInputKeyInput.Enter]: KeyName.Enter,
    [XInputKeyInput.EraseEof]: KeyName.Unknown,
    [XInputKeyInput.Escape]: KeyName.Escape,
    [XInputKeyInput.Execute]: KeyName.Unknown,
    [XInputKeyInput.Exsel]: KeyName.Unknown,
    [XInputKeyInput.F]: KeyName.KeyF,
    [XInputKeyInput.F1]: KeyName.Unknown,
    [XInputKeyInput.F10]: KeyName.Unknown,
    [XInputKeyInput.F11]: KeyName.Unknown,
    [XInputKeyInput.F12]: KeyName.Unknown,
    [XInputKeyInput.F13]: KeyName.Unknown,
    [XInputKeyInput.F14]: KeyName.Unknown,
    [XInputKeyInput.F15]: KeyName.Unknown,
    [XInputKeyInput.F16]: KeyName.Unknown,
    [XInputKeyInput.F17]: KeyName.Unknown,
    [XInputKeyInput.F18]: KeyName.Unknown,
    [XInputKeyInput.F19]: KeyName.Unknown,
    [XInputKeyInput.F2]: KeyName.Unknown,
    [XInputKeyInput.F20]: KeyName.Unknown,
    [XInputKeyInput.F21]: KeyName.Unknown,
    [XInputKeyInput.F22]: KeyName.Unknown,
    [XInputKeyInput.F23]: KeyName.Unknown,
    [XInputKeyInput.F24]: KeyName.Unknown,
    [XInputKeyInput.F3]: KeyName.Unknown,
    [XInputKeyInput.F4]: KeyName.Unknown,
    [XInputKeyInput.F5]: KeyName.Unknown,
    [XInputKeyInput.F6]: KeyName.Unknown,
    [XInputKeyInput.F7]: KeyName.Unknown,
    [XInputKeyInput.F8]: KeyName.Unknown,
    [XInputKeyInput.F9]: KeyName.Unknown,
    [XInputKeyInput.FinalMode]: KeyName.Unknown,
    [XInputKeyInput.G]: KeyName.KeyG,
    [XInputKeyInput.H]: KeyName.KeyH,
    [XInputKeyInput.HanguelMode]: KeyName.Unknown,
    [XInputKeyInput.HangulMode]: KeyName.Unknown,
    [XInputKeyInput.HanjaMode]: KeyName.Unknown,
    [XInputKeyInput.Help]: KeyName.Unknown,
    [XInputKeyInput.Home]: KeyName.Unknown,
    [XInputKeyInput.I]: KeyName.KeyI,
    [XInputKeyInput.IMEAccept]: KeyName.Unknown,
    [XInputKeyInput.IMEAceept]: KeyName.Unknown,
    [XInputKeyInput.IMEConvert]: KeyName.Unknown,
    [XInputKeyInput.IMEModeChange]: KeyName.Unknown,
    [XInputKeyInput.IMENonconvert]: KeyName.Unknown,
    [XInputKeyInput.Insert]: KeyName.Unknown,
    [XInputKeyInput.J]: KeyName.KeyJ,
    [XInputKeyInput.JunjaMode]: KeyName.Unknown,
    [XInputKeyInput.K]: KeyName.KeyK,
    [XInputKeyInput.KanaMode]: KeyName.Unknown,
    [XInputKeyInput.KanjiMode]: KeyName.Unknown,
    [XInputKeyInput.KeyCode]: KeyName.Unknown,
    [XInputKeyInput.L]: KeyName.KeyL,
    [XInputKeyInput.LaunchApplication1]: KeyName.Unknown,
    [XInputKeyInput.LaunchApplication2]: KeyName.Unknown,
    [XInputKeyInput.LaunchMail]: KeyName.Unknown,
    [XInputKeyInput.LButton]: KeyName.Unknown,
    [XInputKeyInput.LControlKey]: KeyName.ControlLeft,
    [XInputKeyInput.Left]: KeyName.ArrowLeft,
    [XInputKeyInput.LineFeed]: KeyName.Unknown,
    [XInputKeyInput.LMenu]: KeyName.AltLeft,
    [XInputKeyInput.LShiftKey]: KeyName.ShiftLeft,
    [XInputKeyInput.LWin]: KeyName.MetaLeft,
    [XInputKeyInput.M]: KeyName.KeyM,
    [XInputKeyInput.MButton]: KeyName.Unknown,
    [XInputKeyInput.MediaNextTrack]: KeyName.Unknown,
    [XInputKeyInput.MediaPlayPause]: KeyName.Unknown,
    [XInputKeyInput.MediaPreviousTrack]: KeyName.Unknown,
    [XInputKeyInput.MediaStop]: KeyName.Unknown,
    [XInputKeyInput.Menu]: KeyName.Unknown,
    [XInputKeyInput.Modifiers]: KeyName.Unknown,
    [XInputKeyInput.Multiply]: KeyName.NumpadMultiply,
    [XInputKeyInput.N]: KeyName.KeyN,
    [XInputKeyInput.Next]: KeyName.Unknown,
    [XInputKeyInput.NoName]: KeyName.Unknown,
    [XInputKeyInput.None]: KeyName.Unknown,
    [XInputKeyInput.NumLock]: KeyName.NumLock,
    [XInputKeyInput.NumPad0]: KeyName.Numpad0,
    [XInputKeyInput.NumPad1]: KeyName.Numpad1,
    [XInputKeyInput.NumPad2]: KeyName.Numpad2,
    [XInputKeyInput.NumPad3]: KeyName.Numpad3,
    [XInputKeyInput.NumPad4]: KeyName.Numpad4,
    [XInputKeyInput.NumPad5]: KeyName.Numpad5,
    [XInputKeyInput.NumPad6]: KeyName.Numpad6,
    [XInputKeyInput.NumPad7]: KeyName.Numpad7,
    [XInputKeyInput.NumPad8]: KeyName.Numpad8,
    [XInputKeyInput.NumPad9]: KeyName.Numpad9,
    [XInputKeyInput.O]: KeyName.KeyO,
    [XInputKeyInput.Oem1]: KeyName.Unknown,
    [XInputKeyInput.Oem102]: KeyName.Unknown,
    [XInputKeyInput.Oem2]: KeyName.Unknown,
    [XInputKeyInput.Oem3]: KeyName.Unknown,
    [XInputKeyInput.Oem4]: KeyName.BracketLeft,
    [XInputKeyInput.Oem5]: KeyName.Unknown,
    [XInputKeyInput.Oem6]: KeyName.BracketRight,
    [XInputKeyInput.Oem7]: KeyName.Unknown,
    [XInputKeyInput.Oem8]: KeyName.Unknown,
    [XInputKeyInput.OemBackslash]: KeyName.Unknown,
    [XInputKeyInput.OemClear]: KeyName.Unknown,
    [XInputKeyInput.OemCloseBrackets]: KeyName.BracketRight,
    [XInputKeyInput.Oemcomma]: KeyName.Comma,
    [XInputKeyInput.OemMinus]: KeyName.Unknown,
    [XInputKeyInput.OemOpenBrackets]: KeyName.BracketLeft,
    [XInputKeyInput.OemPeriod]: KeyName.Period,
    [XInputKeyInput.OemPipe]: KeyName.Unknown,
    [XInputKeyInput.Oemplus]: KeyName.Unknown,
    [XInputKeyInput.OemQuestion]: KeyName.Unknown,
    [XInputKeyInput.OemQuotes]: KeyName.Quote,
    [XInputKeyInput.OemSemicolon]: KeyName.Semicolon,
    [XInputKeyInput.Oemtilde]: KeyName.Unknown,
    [XInputKeyInput.P]: KeyName.KeyP,
    [XInputKeyInput.Pa1]: KeyName.Unknown,
    [XInputKeyInput.Packet]: KeyName.Unknown,
    [XInputKeyInput.PageDown]: KeyName.Unknown,
    [XInputKeyInput.PageUp]: KeyName.Unknown,
    [XInputKeyInput.Pause]: KeyName.Unknown,
    [XInputKeyInput.Play]: KeyName.Unknown,
    [XInputKeyInput.Print]: KeyName.Unknown,
    [XInputKeyInput.PrintScreen]: KeyName.Unknown,
    [XInputKeyInput.Prior]: KeyName.Unknown,
    [XInputKeyInput.ProcessKey]: KeyName.Unknown,
    [XInputKeyInput.Q]: KeyName.KeyQ,
    [XInputKeyInput.R]: KeyName.KeyR,
    [XInputKeyInput.RButton]: KeyName.Unknown,
    [XInputKeyInput.RControlKey]: KeyName.ControlRight,
    [XInputKeyInput.Return]: KeyName.Unknown,
    [XInputKeyInput.Right]: KeyName.ArrowRight,
    [XInputKeyInput.RMenu]: KeyName.AltRight,
    [XInputKeyInput.RShiftKey]: KeyName.ShiftRight,
    [XInputKeyInput.RWin]: KeyName.MetaRight,
    [XInputKeyInput.S]: KeyName.KeyS,
    [XInputKeyInput.Scroll]: KeyName.Unknown,
    [XInputKeyInput.Select]: KeyName.Unknown,
    [XInputKeyInput.SelectMedia]: KeyName.Unknown,
    [XInputKeyInput.Separator]: KeyName.Unknown,
    [XInputKeyInput.Shift]: KeyName.Shift,
    [XInputKeyInput.ShiftKey]: KeyName.Unknown,
    [XInputKeyInput.Sleep]: KeyName.Unknown,
    [XInputKeyInput.Snapshot]: KeyName.Unknown,
    [XInputKeyInput.Space]: KeyName.Space,
    [XInputKeyInput.Subtract]: KeyName.NumpadSubtract,
    [XInputKeyInput.T]: KeyName.KeyT,
    [XInputKeyInput.Tab]: KeyName.Unknown,
    [XInputKeyInput.U]: KeyName.KeyU,
    [XInputKeyInput.Up]: KeyName.ArrowUp,
    [XInputKeyInput.V]: KeyName.KeyV,
    [XInputKeyInput.VolumeDown]: KeyName.Unknown,
    [XInputKeyInput.VolumeMute]: KeyName.Unknown,
    [XInputKeyInput.VolumeUp]: KeyName.Unknown,
    [XInputKeyInput.W]: KeyName.KeyW,
    [XInputKeyInput.X]: KeyName.KeyX,
    [XInputKeyInput.XButton1]: KeyName.Unknown,
    [XInputKeyInput.XButton2]: KeyName.Unknown,
    [XInputKeyInput.Y]: KeyName.KeyY,
    [XInputKeyInput.Z]: KeyName.KeyZ,
    [XInputKeyInput.Zoom]: KeyName.Unknown,
}

export const EventKeyToXInputKey = Object.keys(XInputKeyToEventKeyName).reduce((ret: {[key: string]: string}, key) => {
    ret[XInputKeyToEventKeyName[key]] = key;
    return ret;
}, {});

export const getXInputKeyForEventKey = (eventKeyName: KeyName): string => {
    const xInputKey: string = EventKeyToXInputKey[eventKeyName];
    if (!xInputKey) {
        const message = `Unable to find the XInputKeyInput for ${eventKeyName}`;

        toastStore.add(message, Type.Error);
    }

    return xInputKey;
}

export const resolveKeyName = (keyboardEventCode: string): KeyName => {
    if (KeyNameMap[keyboardEventCode]) {
        return <KeyName> KeyNameMap[keyboardEventCode];
    }

    console.log(`Unknown EventKeyCode ${keyboardEventCode}`);

    return KeyName.Unknown;
}

export const resolveKeyCode = (keyName: KeyName): string | null => {
    if (KeyName[keyName]) {
        return <string> KeyName[keyName];
    }

    console.log(`Unknown KeyName ${keyName}`);

    return null;
}