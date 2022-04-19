import { Box, IconButton } from '@mui/material';
import React, { FC } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useStyles } from './styles';
import { Link } from 'react-router-dom';

interface IBackButtonProps {
    path: string;
}

const BackButton: FC<IBackButtonProps> = ({ path }) => {
    const classes = useStyles();

    return (
        <Box className={classes.backButton}>
            <Link to={path}>
                <IconButton aria-label='back'>
                    <ArrowBackIcon />
                </IconButton>
            </Link>
        </Box>
    );
};

export default BackButton;
