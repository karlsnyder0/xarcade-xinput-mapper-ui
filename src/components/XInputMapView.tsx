import React, { useState } from 'react';
import { Text } from '@fluentui/react-components';

import { Mapping, XInputControllerInput } from '../models/Mapping';
import XInputMap, { LabelPosition } from './XInputMap';
import DPad from './DPad';

interface XInputMapViewProps {
    hide: boolean;
    mappingIndex: number;
    mapping: Mapping;
}

const XInputMapView: React.FC<XInputMapViewProps> = (props: XInputMapViewProps) => {
    const index = props.mappingIndex;
    const mapping = props.mapping;

    const [activeInput, setActiveInput] = useState<XInputControllerInput | null>(null);
    const onXInputMapActive = (key: XInputControllerInput, active: boolean) => {
        if (active) {
            setActiveInput(key);
        } else {
            setActiveInput(null);
        }
    }

    return (
        <div className={`
            ${props.hide ? 'block' : 'hidden'}
            p-4 grow flex-1 flex
        `}>
            <div className="flex-1">
                <div className="p-4">
                    <Text block={true}><span className="font-bold uppercase text-xl">Left</span></Text>
                    <XInputMap className="pt-2" label="Trigger" index={index} xInputName={XInputControllerInput.LeftTrigger} value={mapping[XInputControllerInput.LeftTrigger]} onActive={onXInputMapActive} />
                    <XInputMap className="pt-2" label="Bumper" index={index} xInputName={XInputControllerInput.LeftBumper} value={mapping[XInputControllerInput.LeftBumper]} onActive={onXInputMapActive} />
                    <XInputMap className="pt-2" label="Up" index={index} xInputName={XInputControllerInput.LeftStickY} value={mapping[XInputControllerInput.LeftStickY]} onActive={onXInputMapActive} />
                    <XInputMap className="pt-2" label="Down" index={index} xInputName={XInputControllerInput.LeftStickYI} value={mapping[XInputControllerInput.LeftStickYI]} onActive={onXInputMapActive} />
                    <XInputMap className="pt-2" label="Left" index={index} xInputName={XInputControllerInput.LeftStickXI} value={mapping[XInputControllerInput.LeftStickXI]} onActive={onXInputMapActive} />
                    <XInputMap className="pt-2" label="Right" index={index} xInputName={XInputControllerInput.LeftStickX} value={mapping[XInputControllerInput.LeftStickX]} onActive={onXInputMapActive} />
                </div>
                <div className="p-4">
                    <Text block={true}><span className="font-bold uppercase text-xl">D-Pad</span></Text>
                    <XInputMap className="pt-2" label="Up" index={index} xInputName={XInputControllerInput.Up} value={mapping[XInputControllerInput.Up]} onActive={onXInputMapActive} />
                    <XInputMap className="pt-2" label="Down" index={index} xInputName={XInputControllerInput.Down} value={mapping[XInputControllerInput.Down]} onActive={onXInputMapActive} />
                    <XInputMap className="pt-2" label="Left" index={index} xInputName={XInputControllerInput.Left} value={mapping[XInputControllerInput.Left]} onActive={onXInputMapActive} />
                    <XInputMap className="pt-2" label="Right" index={index} xInputName={XInputControllerInput.Right} value={mapping[XInputControllerInput.Right]} onActive={onXInputMapActive} />
                </div>
            </div>
            <div className="flex flex-col flex-1 pt-8">
                <DPad className="grow-0" activeInput={activeInput} />
                <div className="flex-1 mr-auto ml-auto">
                    <XInputMap className="pt-2" label="Start" index={index} xInputName={XInputControllerInput.Start} value={mapping[XInputControllerInput.Start]} onActive={onXInputMapActive} />
                    <XInputMap className="pt-2" label="Back" index={index} xInputName={XInputControllerInput.Back} value={mapping[XInputControllerInput.Back]} onActive={onXInputMapActive} />
                    <XInputMap className="pt-2" label="Logo" index={index} xInputName={XInputControllerInput.Logo} value={mapping[XInputControllerInput.Logo]} onActive={onXInputMapActive} />
                </div>
            </div>
            <div className="flex-1">
                <div className="p-4">
                    <Text block={true} align="end"><span className="font-bold uppercase text-xl">Right</span></Text>
                    <XInputMap className="pt-2" label="Trigger" labelAlign={LabelPosition.Left} index={index} xInputName={XInputControllerInput.RightTrigger} value={mapping[XInputControllerInput.RightTrigger]} onActive={onXInputMapActive} />
                    <XInputMap className="pt-2" label="Bumper" labelAlign={LabelPosition.Left} index={index} xInputName={XInputControllerInput.RightBumper} value={mapping[XInputControllerInput.RightBumper]} onActive={onXInputMapActive} />
                    <XInputMap className="pt-2" label="Up" labelAlign={LabelPosition.Left} index={index} xInputName={XInputControllerInput.RightStickY} value={mapping[XInputControllerInput.RightStickY]} onActive={onXInputMapActive} />
                    <XInputMap className="pt-2" label="Down" labelAlign={LabelPosition.Left} index={index} xInputName={XInputControllerInput.RightStickYI} value={mapping[XInputControllerInput.RightStickYI]} onActive={onXInputMapActive} />
                    <XInputMap className="pt-2" label="Left" labelAlign={LabelPosition.Left} index={index} xInputName={XInputControllerInput.RightStickXI} value={mapping[XInputControllerInput.RightStickXI]} onActive={onXInputMapActive} />
                    <XInputMap className="pt-2" label="Right" labelAlign={LabelPosition.Left} index={index} xInputName={XInputControllerInput.RightStickX} value={mapping[XInputControllerInput.RightStickX]} onActive={onXInputMapActive} />
                </div>
                <div className="p-4">
                    <Text block={true} align="end"><span className="font-bold uppercase text-xl">Buttons</span></Text>
                    <XInputMap className="pt-2" label="A" labelAlign={LabelPosition.Left} index={index} xInputName={XInputControllerInput.A} value={mapping[XInputControllerInput.A]} onActive={onXInputMapActive} />
                    <XInputMap className="pt-2" label="B" labelAlign={LabelPosition.Left} index={index} xInputName={XInputControllerInput.B} value={mapping[XInputControllerInput.B]} onActive={onXInputMapActive} />
                    <XInputMap className="pt-2" label="X" labelAlign={LabelPosition.Left} index={index} xInputName={XInputControllerInput.X} value={mapping[XInputControllerInput.X]} onActive={onXInputMapActive} />
                    <XInputMap className="pt-2" label="Y" labelAlign={LabelPosition.Left} index={index} xInputName={XInputControllerInput.Y} value={mapping[XInputControllerInput.Y]} onActive={onXInputMapActive} />
                </div>
            </div>
        </div>
    );
};

export default XInputMapView;