export type Mapping_ = Record<string, unknown>;

export enum XInput {
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

export interface Mapping {
    [XInput.LeftTrigger]: string;
    [XInput.LeftBumper]: string;
    [XInput.LeftStickX]: string;    // Right (Analog)
    [XInput.LeftStickXI]: string;   // Left (Analog)
    [XInput.LeftStickY]: string;    // Up (Analog)
    [XInput.LeftStickYI]: string;   // Down (Analog)
    [XInput.RightTrigger]: string;
    [XInput.RightBumper]: string;
    [XInput.RightStickX]: string;   // Right (Analog)
    [XInput.RightStickXI]: string;  // Left (Analog)
    [XInput.RightStickY]: string;   // Up (Analog)
    [XInput.RightStickYI]: string;  // Down (Analog)
    [XInput.Up]: string;            // D-Pad
    [XInput.Down]: string;          // D-Pad
    [XInput.Left]: string;          // D-Pad
    [XInput.Right]: string;         // D-Pad
    [XInput.Y]: string;             // Top Button
    [XInput.B]: string;             // Right Button
    [XInput.A]: string;             // Bottom Button
    [XInput.X]: string;             // Left Button
    [XInput.Start]: string;
    [XInput.Back]: string;
    [XInput.Logo]: string;
}
