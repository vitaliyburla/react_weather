import { Alert, Snackbar } from '@mui/material';
import React, { FC, useState } from 'react';

interface IPopupErrorProps {
    error: string;
}
const PopupError: FC<IPopupErrorProps> = ({ error }) => {
    const [open, setOpen] = useState(error);
    return (
        <Snackbar
            open={open.length > 0}
            autoHideDuration={10000}
            onClose={() => setOpen('')}
        >
            <Alert
                onClose={() => setOpen('')}
                severity='error'
                sx={{ width: '100%' }}
            >
                Oops... Something went wrong.
            </Alert>
        </Snackbar>
    );
};

export default PopupError;
