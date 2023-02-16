import { Button, Dialog, DialogActions, DialogBody, DialogContent, DialogSurface, DialogTitle, Input } from "@fluentui/react-components";
import { useState } from "react";
import { resolveKeyName } from "../models/Mapping";
import KeyUtil from "../util/KeyUtil";

interface DeleteTabDialogProps {
    show: boolean;
    onClose: () => void;
}

const TestInputDialog: React.FC<DeleteTabDialogProps> = (props: DeleteTabDialogProps) => {
    const [ keyName, setKeyName ] = useState<string>('');
    const [ keyCode, setKeyCode ] = useState<string>('');
    const [ code, setCode ] = useState<string>('');
    const [ key, setKey ] = useState<string>('');

    // Wait for next key key press.
    KeyUtil.waitForNext({
        keydownCallback: (ev: KeyboardEvent) => {
            const code = ev.code;
            setCode(code);

            const keyCode = ev.keyCode;
            setKeyCode(`${keyCode}`);

            const key = ev.key;
            setKey(key);

            const keyName = resolveKeyName(code);
            setKeyName(keyName);
        },
    });

    const onClick = () => {
        KeyUtil.cancelWaitForNext();

        setCode('');
        setKeyCode('');
        setKey('');
        setKeyName('');
        
        props.onClose();
    }

    return (
        <Dialog modalType="alert" open={props.show}>
            <DialogSurface>
                <DialogBody>
                    <DialogTitle>Input Diagnostic Tester</DialogTitle>
                    <DialogContent>
                            <strong>Code: </strong>{code}<br/>
                            <strong>Key Code: </strong>{keyCode}<br/>
                            <strong>Key: </strong>{key}<br/>
                            <br/>
                            <Input size="medium" value={keyName} readOnly={true}
                                placeholder="Press a Key" 
                                input={{ size: 10, style: {cursor: 'default'} }}
                                style={{ width: '100%' }}
                            />
                    </DialogContent>
                    <DialogActions>
                        <Button appearance="primary" onClick={onClick}>Close</Button>
                    </DialogActions>
                </DialogBody>
            </DialogSurface>
        </Dialog>
    );
};

export default TestInputDialog;