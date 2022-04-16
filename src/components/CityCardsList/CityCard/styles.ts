import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    card: {
        background: theme.palette.secondary.light,
        width: '100%',
        height: '100%',
        boxShadow: '1px 1px 5px rgba(0, 0, 0, 0.1)',
        position: 'relative',
        borderRadius: '0.2rem',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
            cursor: 'pointer',
            boxShadow: '1px 1px 5px rgba(0, 0, 0, 0.2)',
        },
        '&:hover #delete-button': {
            opacity: 1,
        },
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
        color: theme.palette.text.primary,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    deleteCardButton: {
        position: 'absolute',
        top: '0.25rem',
        right: '0.25rem',
        opacity: 0,
        transition: 'all 0.2s ease-in-out',
    },
}));
