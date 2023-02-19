import React, { MouseEventHandler, Ref, useState } from 'react';
import { v4 } from 'uuid';
import { makeStyles, Button, Input, Label } from '@fluentui/react-components';
import { RecordRegular, RecordStopRegular, DismissFilled } from '@fluentui/react-icons';

import KeyUtil from '../util/KeyUtil';
import { getXInputKeyForEventKey, Mapping, resolveKeyName, XInputControllerInput } from '../models/Mapping';
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
    mappingKey: XInputControllerInput;
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

    const {read, update} = useMappingStore();
    const [value] = useState<string>(props.mappingValue || '');
    const [recording, setRecording] = useState<boolean>(false);

    const inputRef: Ref<HTMLInputElement> = React.createRef();

    const onChange = (ev: KeyboardEvent) => {
        const keyName = resolveKeyName(ev.code);

        const xInputKeyInput: string = getXInputKeyForEventKey(keyName);
        if (!xInputKeyInput) {
            return;
        }

        const mapping: Mapping = read(props.mappingIndex);
        mapping[props.mappingKey] = keyName;

        update(mapping, props.mappingIndex);
    };

    const onClickClear: MouseEventHandler = () => {
        const mapping: Mapping = read(props.mappingIndex);
        delete mapping[props.mappingKey];

        update(mapping, props.mappingIndex);
    }

    const _onClickRecord: MouseEventHandler = () => {
        if (recording) {
            setRecording(false);

            KeyUtil.cancelWaitForNext();
        } else {
            setRecording(true);
    
            // Wait for next key key press.
            KeyUtil.waitForNext({
                keydownCallback: onWaitForNext,
                cancelCallback: onWaitForNextCancel,
            });
        }
    }

    const onWaitForNext = (ev: KeyboardEvent) => {
        // console.log('_handleKeyDown_waitForNext', ev);
        // console.log('_handleKeyDown_waitForNext', ev.code);

        setRecording(false);
        onChange(ev);
    }

    const onWaitForNextCancel = () => {
        setRecording(false);
    }

    return (
        <>
            <div className={`${className} ${labelAlign === LabelPosition.Left ? 'text-right' : ''}`}>
                { labelAlign === LabelPosition.Left ? 
                    <Label htmlFor={id} className="pr-2">
                        {props.label}
                    </Label> : null 
                }
                <Input className={styles.input} id={id} size="medium" value={value} ref={inputRef} readOnly={true}
                    placeholder={recording ? 'Press a Key' : ''} input={{ size: 10, style: {cursor: 'default'}}}
                    contentAfter={
                        <>
                            <Button appearance="transparent" size="small" icon={recording ? <RecordStopRegular style={{fontSize: '.85em'}} /> : <RecordRegular style={{fontSize: '.85em'}} />} onClick={_onClickRecord} style={Object.assign({ maxWidth: '22px', minWidth: '22px' }, recording ? { color: 'red' } : {})} />
                            <Button appearance="transparent" size="small" icon={<DismissFilled style={{fontSize: '.85em'}} />} disabled={value && !recording ? false : true} onClick={onClickClear} style={Object.assign({ maxWidth: '22px', minWidth: '22px' }, value && !recording ? {} : { cursor: 'default' })} />
                        </>
                    } style={{cursor: 'default'}}
                />
                { labelAlign === LabelPosition.Right ? 
                    <Label htmlFor={id} className="pl-2">
                        {props.label}
                    </Label> : null
                }
            </div>
        </>
    );
};

export default XInputMap;
