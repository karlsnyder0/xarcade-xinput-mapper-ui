import React, { MouseEventHandler, useState } from 'react';
import { v4 } from 'uuid';
import { makeStyles, Button, Input, Label, InputProps, InputOnChangeData, ButtonProps } from '@fluentui/react-components';
import { RecordRegular, DismissRegular } from '@fluentui/react-icons';

import { XInput } from '../models/Mapping';

import './MapXInput.scss';
import KeyUtil from '../KeyUtil';

interface MapXInputProps {
    className?: string;
    label: string;
    mappingKey: XInput;
    mappingIndex: number;
    mappingValue: string;
}

const useStyles = makeStyles({
    input: {
        paddingRight: '0'
    }
});

const onChange = (ev: React.ChangeEvent<HTMLInputElement>, data: InputOnChangeData, props: MapXInputProps) => {
    console.log(ev);
    console.log(data);
    console.log(props);

    const value = data.value;
};

const MapXInput: React.FC<MapXInputProps> = (props: MapXInputProps) => {
    const id = v4();
    const classes = useStyles();

    const [recording, setRecording] = useState(false);

    const _onChange: InputProps['onChange'] = (ev, data) => {
        onChange(ev, data, props);
    };

    const _onClickRecord: MouseEventHandler = () => {
        setRecording(true);

        // Wait for next key key press.
        KeyUtil.waitForNext(onWaitForNextCancel);
    }

    const _onClickDismiss: MouseEventHandler = () => {
        // Stop waiting.
        KeyUtil.waitForNext(true);
    }

    const onWaitForNextCancel = () => {
        setRecording(false);
    }

    return (
        <div className={props.className}>
            <Input id={id} size="medium" className={classes.input} defaultValue={props.mappingValue}
            onChange={_onChange}
            input={{ size: 10 /*, readOnly: true*/ }}
            contentAfter={
                <>
                    <Button appearance="transparent" size="small" icon={<RecordRegular />} onClick={_onClickRecord} />
                    <Button appearance="transparent" size="small" icon={<DismissRegular />} disabled={recording ? false : true} onClick={_onClickDismiss} />
                </>
            } />
            <Label htmlFor={id} className="pl-2">
                {props.label}
            </Label>
        </div>
    );
};

export default MapXInput;