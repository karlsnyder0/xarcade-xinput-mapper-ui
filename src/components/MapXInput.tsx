import React, { MouseEventHandler, useState } from 'react';
import { v4 } from 'uuid';
import { makeStyles, Button, Input, Label, InputProps, InputOnChangeData } from '@fluentui/react-components';
import { RecordRegular, DismissRegular } from '@fluentui/react-icons';

import KeyUtil from '../KeyUtil';
import { Mapping, XInput } from '../models/Mapping';
import { useMappingStore } from '../stores/MappingStore';

import './MapXInput.scss';

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

const MapXInput: React.FC<MapXInputProps> = (props: MapXInputProps) => {
    const id = v4();
    const classes = useStyles();

    const { read, update } = useMappingStore();
    const [value, setValue] = useState<string>(props.mappingValue || '');
    const [recording, setRecording] = useState<boolean>(false);

    const _onChange: InputProps['onChange'] = (ev, data) => {
        onChange(ev, data, props);
    };

    const onChange = (ev: React.ChangeEvent<HTMLInputElement>, data: InputOnChangeData, props: MapXInputProps) => {
        console.log(ev);
        console.log(data);
        console.log(props);

        const mapping: Mapping = read(props.mappingIndex);
        mapping[props.mappingKey] = data.value;

        update(mapping, props.mappingIndex);
    };

    const _onClickRecord: MouseEventHandler = () => {
        setRecording(true);

        // Wait for next key key press.
        KeyUtil.waitForNext({
            keydownCallback: onWaitForNext,
            cancelCallback: onWaitForNextCancel,
        });
    }

    const _onClickDismiss: MouseEventHandler = () => {
        // Stop waiting.
        KeyUtil.waitForNext(true);
    }

    const onWaitForNext = (ev: KeyboardEvent) => {
        console.log('_handleKeyDown_waitForNext', ev);
        console.log('_handleKeyDown_waitForNext', ev.code);

        setRecording(false);
        setValue(ev.key);
    }

    const onWaitForNextCancel = () => {
        setRecording(false);
    }

    return (
        <div className={props.className}>
            <Input id={id} size="medium" defaultValue="" value={value} readOnly={true} className={classes.input}
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