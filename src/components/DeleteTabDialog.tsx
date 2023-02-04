import { Button, Dialog, DialogActions, DialogBody, DialogContent, DialogSurface, DialogTitle } from "@fluentui/react-components";

interface DeleteTabDialogProps {
    show: boolean;
    onCancel: () => void;
    onDelete: () => void;
}

const RemoveTabDialog: React.FC<DeleteTabDialogProps> = (props: DeleteTabDialogProps) => {
    return (
        <Dialog modalType="alert" open={props.show}>
            <DialogSurface>
                <DialogBody>
                    <DialogTitle>Delete Controller</DialogTitle>
                    <DialogContent>
                        Are you sure you want to delete this controller?  All mapped inputs will be lost!
                    </DialogContent>
                    <DialogActions>
                        <Button appearance="primary" onClick={props.onCancel}>Cancel</Button>
                        <Button appearance="secondary" onClick={props.onDelete}>Delete</Button>
                    </DialogActions>
                </DialogBody>
            </DialogSurface>
        </Dialog>
    );
};

export default RemoveTabDialog;