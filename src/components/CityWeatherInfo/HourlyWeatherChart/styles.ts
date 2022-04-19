import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    coldIndicator: {
        background: 'rgba(0, 255, 0, 0.5)',
        width: '3rem',
        height: '1.5rem',
        borderRadius: '0.2rem',
    },
    hotIndicator: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '0.2rem',
    },
}));
