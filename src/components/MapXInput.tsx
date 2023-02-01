import React from 'react';
import { v4 } from 'uuid';
import { makeStyles, Button, Input, Label } from '@fluentui/react-components';
import { RecordRegular, DismissRegular } from '@fluentui/react-icons';

import './MapXInput.scss';

interface MapXInputProps {
    label: string;
    className?: string;
}

const useStyles = makeStyles({
    input: {
        paddingRight: '0'
    }
});

const MapXInput: React.FC<MapXInputProps> = (props: MapXInputProps) => {
    const id = v4();
    const classes = useStyles();

    return (
        <div className={props.className}>
            <Input id={id} size="medium" input={{ size: 10, readOnly: true }} className={classes.input}
            contentAfter={
                <>
                    <Button appearance="transparent" size="small" icon={<RecordRegular />} />
                    <Button appearance="transparent" size="small" icon={<DismissRegular />} />
                </>
            } />
            <Label htmlFor={id} className="pl-2">
                {props.label}
            </Label>
        </div>
    );
};

export default MapXInput;