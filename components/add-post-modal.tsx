import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
} from '@mui/material';
import { AddPostForm } from 'api/post';
import { useState } from 'react';

interface AddPostModalProps {
    onSubmit: (values: AddPostForm) => void;
}

export const AddPostModal = ({ onSubmit }: AddPostModalProps) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (event: any) => {
        event.preventDefault();
        onSubmit({ title, body });
        setTitle('');
        setBody('');
        setModalOpen(false);
    };

    return (
        <>
            <Button onClick={() => setModalOpen(true)}>Add post</Button>
            <Dialog
                open={isModalOpen}
                onClose={() => setModalOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <form onSubmit={handleSubmit}>
                    <DialogTitle>{'Add new post'}</DialogTitle>
                    <DialogContent>
                        <Box display="grid" gap={2}>
                            <TextField
                                required
                                id="title"
                                label="Title"
                                variant="outlined"
                                margin="normal"
                                onChange={({ target }) =>
                                    setTitle(target.value)
                                }
                            />
                            <textarea
                                required
                                id="body"
                                style={{ resize: 'none', minHeight: 100 }}
                                onChange={({ target }) => setBody(target.value)}
                                placeholder="Content"
                            />
                        </Box>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setModalOpen(false)}>
                            Cancel
                        </Button>
                        <Button type="submit" autoFocus>
                            Add
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    );
};
