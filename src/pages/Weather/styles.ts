import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    headerSection: {
        margin: '0 auto 2rem auto',
        width: '70%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        [theme.breakpoints.down('lg')]: {
            flexDirection: 'column',
            width: '100%',
        },
    },
    headerText: {},
    headerUnits: {
        [theme.breakpoints.down('lg')]: {
            marginTop: '1rem',
        },
    },
}));
