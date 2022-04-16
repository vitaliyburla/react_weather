import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    cardsGrid: {
        width: '100%',
    },
    cardsGridItem: {
        minWidth: '18rem',
        minHeight: '11rem',
    },
    cardsSection: {
        width: '90%',
        margin: '0 auto',
        [theme.breakpoints.down('lg')]: {
            width: '70%',
        },
        [theme.breakpoints.down('md')]: {
            width: '50%',
        },
        [theme.breakpoints.down('sm')]: {
            width: '80%',
        },
    },
}));
