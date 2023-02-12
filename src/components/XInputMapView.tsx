import React from 'react';
import { Text } from '@fluentui/react-components';

import { Mapping, XInputControllerInput } from '../models/Mapping';
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
                    <XInputMap className="pt-2" label="Trigger" mappingIndex={index} mappingKey={XInputControllerInput.LeftTrigger} mappingValue={mapping[XInputControllerInput.LeftTrigger]} />
                    <XInputMap className="pt-2" label="Bumper" mappingIndex={index} mappingKey={XInputControllerInput.LeftBumper} mappingValue={mapping[XInputControllerInput.LeftBumper]} />
                    <XInputMap className="pt-2" label="Up" mappingIndex={index} mappingKey={XInputControllerInput.LeftStickY} mappingValue={mapping[XInputControllerInput.LeftStickY]} />
                    <XInputMap className="pt-2" label="Down" mappingIndex={index} mappingKey={XInputControllerInput.LeftStickYI} mappingValue={mapping[XInputControllerInput.LeftStickYI]} />
                    <XInputMap className="pt-2" label="Left" mappingIndex={index} mappingKey={XInputControllerInput.LeftStickXI} mappingValue={mapping[XInputControllerInput.LeftStickXI]} />
                    <XInputMap className="pt-2" label="Right" mappingIndex={index} mappingKey={XInputControllerInput.LeftStickX} mappingValue={mapping[XInputControllerInput.LeftStickX]} />
                </div>
                <div className="p-4">
                    <Text block={true}><span className="font-bold uppercase text-xl">D-Pad</span></Text>
                    <XInputMap className="pt-2" label="Up" mappingIndex={index} mappingKey={XInputControllerInput.Up} mappingValue={mapping[XInputControllerInput.Up]} />
                    <XInputMap className="pt-2" label="Down" mappingIndex={index} mappingKey={XInputControllerInput.Down} mappingValue={mapping[XInputControllerInput.Down]} />
                    <XInputMap className="pt-2" label="Left" mappingIndex={index} mappingKey={XInputControllerInput.Left} mappingValue={mapping[XInputControllerInput.Left]} />
                    <XInputMap className="pt-2" label="Right" mappingIndex={index} mappingKey={XInputControllerInput.Right} mappingValue={mapping[XInputControllerInput.Right]} />
                </div>
            </div>
            <div className="flex flex-col flex-1 pt-8">
                <div className="grow-0">
                    <img className="dpad" />
                </div>
                <div className="flex-1 mr-auto ml-auto">
                    <XInputMap className="pt-2" label="Start" mappingIndex={index} mappingKey={XInputControllerInput.Start} mappingValue={mapping[XInputControllerInput.Start]} />
                    <XInputMap className="pt-2" label="Back" mappingIndex={index} mappingKey={XInputControllerInput.Back} mappingValue={mapping[XInputControllerInput.Back]} />
                    <XInputMap className="pt-2" label="Logo" mappingIndex={index} mappingKey={XInputControllerInput.Logo} mappingValue={mapping[XInputControllerInput.Logo]} />
                </div>
            </div>
            <div className="flex-1">
                <div className="p-4">
                    <Text block={true} align="end"><span className="font-bold uppercase text-xl">Right</span></Text>
                    <XInputMap className="pt-2" label="Trigger" labelAlign={LabelPosition.Left} mappingIndex={index} mappingKey={XInputControllerInput.RightTrigger} mappingValue={mapping[XInputControllerInput.RightTrigger]} />
                    <XInputMap className="pt-2" label="Bumper" labelAlign={LabelPosition.Left} mappingIndex={index} mappingKey={XInputControllerInput.RightBumper} mappingValue={mapping[XInputControllerInput.RightBumper]} />
                    <XInputMap className="pt-2" label="Up" labelAlign={LabelPosition.Left} mappingIndex={index} mappingKey={XInputControllerInput.RightStickY} mappingValue={mapping[XInputControllerInput.RightStickY]} />
                    <XInputMap className="pt-2" label="Down" labelAlign={LabelPosition.Left} mappingIndex={index} mappingKey={XInputControllerInput.RightStickYI} mappingValue={mapping[XInputControllerInput.RightStickYI]} />
                    <XInputMap className="pt-2" label="Left" labelAlign={LabelPosition.Left} mappingIndex={index} mappingKey={XInputControllerInput.RightStickXI} mappingValue={mapping[XInputControllerInput.RightStickXI]} />
                    <XInputMap className="pt-2" label="Right" labelAlign={LabelPosition.Left} mappingIndex={index} mappingKey={XInputControllerInput.RightStickX} mappingValue={mapping[XInputControllerInput.RightStickX]} />
                </div>
                <div className="p-4">
                    <Text block={true} align="end"><span className="font-bold uppercase text-xl">Buttons</span></Text>
                    <XInputMap className="pt-2" label="A" labelAlign={LabelPosition.Left} mappingIndex={index} mappingKey={XInputControllerInput.A} mappingValue={mapping[XInputControllerInput.A]} />
                    <XInputMap className="pt-2" label="B" labelAlign={LabelPosition.Left} mappingIndex={index} mappingKey={XInputControllerInput.B} mappingValue={mapping[XInputControllerInput.B]} />
                    <XInputMap className="pt-2" label="X" labelAlign={LabelPosition.Left} mappingIndex={index} mappingKey={XInputControllerInput.X} mappingValue={mapping[XInputControllerInput.X]} />
                    <XInputMap className="pt-2" label="Y" labelAlign={LabelPosition.Left} mappingIndex={index} mappingKey={XInputControllerInput.Y} mappingValue={mapping[XInputControllerInput.Y]} />
                </div>
            </div>
        </div>
    );
};

export default XInputMapView;