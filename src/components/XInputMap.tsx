import React, { MouseEventHandler, useState } from 'react';
import { v4 } from 'uuid';
import { makeStyles, Button, Input, Label, InputProps, InputOnChangeData } from '@fluentui/react-components';
import { RecordFilled, DismissFilled } from '@fluentui/react-icons';

import KeyUtil from '../KeyUtil';
import { Mapping, XInput } from '../models/Mapping';
import { useMappingStore } from '../stores/MappingStore';

import './XInputMap.scss';

export enum LabelPosition {
    Left = 'left',
    Right = 'right',
}

interface XInputMapProps {
    className?: string;
    label: string;
    labelAlign?: LabelPosition.Left | LabelPosition.Right;
    mappingKey: XInput;
    mappingIndex: number;
    mappingValue: string;
}

const useStyles = makeStyles({
    input: {
        paddingRight: '0'
    }
});

const XInputMap: React.FC<XInputMapProps> = (props: XInputMapProps) => {
    const labelAlign = props.labelAlign || LabelPosition.Right;
    const className = props.className || '';

    const id = v4();
    const styles = useStyles();

    const { read, update } = useMappingStore();
    const [value, setValue] = useState<string>(props.mappingValue || '');
    const [recording, setRecording] = useState<boolean>(false);

    const _onChange: InputProps['onChange'] = (ev, data) => {
        onChange(ev, data, props);
    };

    const onChange = (ev: React.ChangeEvent<HTMLInputElement>, data: InputOnChangeData, props: XInputMapProps) => {
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
        <div className={`${className} ${labelAlign === LabelPosition.Left ? 'text-right' : ''}`}>
            { labelAlign === LabelPosition.Left ? 
                <Label htmlFor={id} className="pr-2">
                    {props.label}
                </Label> : null 
            }
            <Input className={styles.input} id={id} size="medium" defaultValue="" value={value} readOnly={true}
                placeholder={recording ? 'Press a Key' : ''} onChange={_onChange} input={{ size: 10, style: {cursor: 'default'}}}
                contentAfter={
                    <>
                        <Button appearance="transparent" size="small" icon={<RecordFilled />} disabled={recording ? true : false} onClick={_onClickRecord} style={recording ? {color: 'red', cursor: 'default'} : undefined} />
                        <Button appearance="transparent" size="small" icon={<DismissFilled />} disabled={recording ? false : true} onClick={_onClickDismiss} style={recording ?  undefined : {cursor: 'default'}} />
                    </>
                } style={{cursor: 'default'}}
            />
            { labelAlign === LabelPosition.Right ? 
                <Label htmlFor={id} className="pl-2">
                    {props.label}
                </Label> : null
            }
        </div>
    );
};

export default XInputMap;