import React from 'react';
import { Text } from '@fluentui/react-components';

import { Mapping, XInput } from '../models/Mapping';
import XInputMap, { LabelPosition } from './XInputMap';

import './XInputMapView.scss';

interface XInputMapViewProps {
    hide: boolean;
    mappingIndex: number;
    mapping: Mapping;
}

const XInputMapView: React.FC<XInputMapViewProps> = (props: XInputMapViewProps) => {
    const index = props.mappingIndex;
    const mapping = props.mapping;

    return (
        <div className={`
            ${props.hide ? 'block' : 'hidden'}
            p-4 grow flex-1 flex
        `}>
            <div className="flex-1">
                <div className="p-4">
                    <Text block={true}><span className="font-bold uppercase text-xl">Left</span></Text>
                    <XInputMap className="pt-2" label="Trigger" mappingIndex={index} mappingKey={XInput.LeftTrigger} mappingValue={mapping[XInput.LeftTrigger]} />
                    <XInputMap className="pt-2" label="Bumper" mappingIndex={index} mappingKey={XInput.LeftBumper} mappingValue={mapping[XInput.LeftBumper]} />
                    <XInputMap className="pt-2" label="Up" mappingIndex={index} mappingKey={XInput.LeftStickY} mappingValue={mapping[XInput.LeftStickY]} />
                    <XInputMap className="pt-2" label="Down" mappingIndex={index} mappingKey={XInput.LeftStickYI} mappingValue={mapping[XInput.LeftStickYI]} />
                    <XInputMap className="pt-2" label="Left" mappingIndex={index} mappingKey={XInput.LeftStickXI} mappingValue={mapping[XInput.LeftStickXI]} />
                    <XInputMap className="pt-2" label="Right" mappingIndex={index} mappingKey={XInput.LeftStickX} mappingValue={mapping[XInput.LeftStickX]} />
                </div>
                <div className="p-4">
                    <Text block={true}><span className="font-bold uppercase text-xl">D-Pad</span></Text>
                    <XInputMap className="pt-2" label="Up" mappingIndex={index} mappingKey={XInput.Up} mappingValue={mapping[XInput.Up]} />
                    <XInputMap className="pt-2" label="Down" mappingIndex={index} mappingKey={XInput.Down} mappingValue={mapping[XInput.Down]} />
                    <XInputMap className="pt-2" label="Left" mappingIndex={index} mappingKey={XInput.Left} mappingValue={mapping[XInput.Left]} />
                    <XInputMap className="pt-2" label="Right" mappingIndex={index} mappingKey={XInput.Right} mappingValue={mapping[XInput.Right]} />
                </div>
            </div>
            <div className="flex flex-col flex-1 pt-8">
                <div className="grow-0">
                    <img className="dpad" />
                </div>
                <div className="flex-1 mr-auto ml-auto">
                    <XInputMap className="pt-2" label="Start" mappingIndex={index} mappingKey={XInput.Start} mappingValue={mapping[XInput.Start]} />
                    <XInputMap className="pt-2" label="Back" mappingIndex={index} mappingKey={XInput.Back} mappingValue={mapping[XInput.Back]} />
                    <XInputMap className="pt-2" label="Logo" mappingIndex={index} mappingKey={XInput.Logo} mappingValue={mapping[XInput.Logo]} />
                </div>
            </div>
            <div className="flex-1">
                <div className="p-4">
                    <Text block={true} align="end"><span className="font-bold uppercase text-xl">Right</span></Text>
                    <XInputMap className="pt-2" label="Trigger" labelAlign={LabelPosition.Left} mappingIndex={index} mappingKey={XInput.RightTrigger} mappingValue={mapping[XInput.RightTrigger]} />
                    <XInputMap className="pt-2" label="Bumper" labelAlign={LabelPosition.Left} mappingIndex={index} mappingKey={XInput.RightBumper} mappingValue={mapping[XInput.RightBumper]} />
                    <XInputMap className="pt-2" label="Up" labelAlign={LabelPosition.Left} mappingIndex={index} mappingKey={XInput.RightStickY} mappingValue={mapping[XInput.RightStickY]} />
                    <XInputMap className="pt-2" label="Right" labelAlign={LabelPosition.Left} mappingIndex={index} mappingKey={XInput.RightStickX} mappingValue={mapping[XInput.RightStickX]} />
                    <XInputMap className="pt-2" label="Down" labelAlign={LabelPosition.Left} mappingIndex={index} mappingKey={XInput.RightStickYI} mappingValue={mapping[XInput.RightStickYI]} />
                    <XInputMap className="pt-2" label="Left" labelAlign={LabelPosition.Left} mappingIndex={index} mappingKey={XInput.RightStickXI} mappingValue={mapping[XInput.RightStickXI]} />
                </div>
                <div className="p-4">
                    <Text block={true} align="end"><span className="font-bold uppercase text-xl">Buttons</span></Text>
                    <XInputMap className="pt-2" label="A" labelAlign={LabelPosition.Left} mappingIndex={index} mappingKey={XInput.A} mappingValue={mapping[XInput.A]} />
                    <XInputMap className="pt-2" label="B" labelAlign={LabelPosition.Left} mappingIndex={index} mappingKey={XInput.B} mappingValue={mapping[XInput.B]} />
                    <XInputMap className="pt-2" label="X" labelAlign={LabelPosition.Left} mappingIndex={index} mappingKey={XInput.X} mappingValue={mapping[XInput.X]} />
                    <XInputMap className="pt-2" label="Y" labelAlign={LabelPosition.Left} mappingIndex={index} mappingKey={XInput.Y} mappingValue={mapping[XInput.Y]} />
                </div>
            </div>
        </div>
    );
};

export default XInputMapView;