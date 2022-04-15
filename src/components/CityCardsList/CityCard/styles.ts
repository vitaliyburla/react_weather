import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    card: {
        width: '100%',
        height: '100%',
        boxShadow: '1px 1px 5px rgba(0, 0, 0, 0.1)',
    },
    cardContent: {
        padding: '1rem',
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardContentText: {
        color: theme.palette.primary.main,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
}));
