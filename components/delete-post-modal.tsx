import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    ListItemButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';

interface DeletePostModal {
    onDelete: (id: number) => void;
    id: number;
}

export const DeletePostModal = ({ onDelete, id }: DeletePostModal) => {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <>
            <ListItemButton
                style={{
                    display: 'flex',
                    backgroundColor: 'silver',
                }}
                onClick={() => setModalOpen(true)}
            >
                <DeleteIcon />
            </ListItemButton>
            <Dialog
                open={isModalOpen}
                onClose={() => setModalOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle>{'Delete post'}</DialogTitle>
                <DialogContent>Do you want to delete the post?</DialogContent>
                <DialogActions>
                    <Button onClick={() => setModalOpen(false)}>Cancel</Button>
                    <Button autoFocus onClick={() => onDelete(id)}>
                        Remove
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};
