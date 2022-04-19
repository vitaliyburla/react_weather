import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    backButton: {
        background: '#FFF',
        width: 'fit-content',
        borderRadius: '50%',
        boxShadow: '1px 1px 5px rgba(0, 0, 0, 0.1)',
    },
}));
