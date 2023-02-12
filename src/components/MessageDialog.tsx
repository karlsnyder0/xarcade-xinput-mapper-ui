import { Button, Dialog, DialogActions, DialogBody, DialogContent, DialogSurface, DialogTitle } from "@fluentui/react-components";

interface DeleteTabDialogProps {
    title: string;
    message: string;
    show: boolean;
    cancelButtonText: string;
    onCancel: () => void;
    okButtonText: string;
    onOk: () => void;
}

const MessageDialog: React.FC<DeleteTabDialogProps> = (props: DeleteTabDialogProps) => {
    return (
        <Dialog modalType="alert" open={props.show}>
            <DialogSurface>
                <DialogBody>
                    <DialogTitle>{props.title}</DialogTitle>
                    <DialogContent>{props.message}</DialogContent>
                    <DialogActions>
                        <Button appearance="primary" onClick={props.onCancel}>{props.cancelButtonText}</Button>
                        <Button appearance="secondary" onClick={props.onOk}>{props.okButtonText}</Button>
                    </DialogActions>
                </DialogBody>
            </DialogSurface>
        </Dialog>
    );
};

export default MessageDialog;