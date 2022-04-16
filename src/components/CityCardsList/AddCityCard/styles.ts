import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    card: {
        width: '100%',
        height: '100%',
        boxShadow: '1px 1px 5px rgba(0, 0, 0, 0.1)',
        background: theme.palette.primary.light,
        transition: 'all 0.2s ease-in-out',
        color: theme.palette.text.primary,
        borderRadius: '0.2rem',
        '&:hover': {
            boxShadow: '1px 1px 5px rgba(0, 0, 0, 0.2)',
            cursor: 'pointer',
        },
        position: 'relative',
    },
    cardContent: {
        padding: '1rem',
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeAddCardButton: {
        position: 'absolute',
        top: '0.25rem',
        left: '0.25rem',
    },
}));
