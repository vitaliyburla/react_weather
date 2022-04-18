import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    weatherInfoContainer: {
        width: '90%',
        margin: '0 auto',
    },
    infoCard: {
        width: '100%',
        borderRadius: '1rem',
        background: theme.palette.secondary.light,
        boxShadow: '1px 1px 5px rgba(0, 0, 0, 0.1)',
    },
    infoCardContent: {
        padding: '1.5rem',
        height: '100%',
        width: '100%',
    },
    horizontalScrollable: {
        overflowX: 'scroll',
        '-ms-overflow-style': 'none',
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    },
}));
