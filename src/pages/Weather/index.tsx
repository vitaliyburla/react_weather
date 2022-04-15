import React, { FC } from 'react';
import { Container, Box } from '@mui/material';
import { useStyles } from './styles';
import CityCardsList from '../../components/CityCardsList';

const WeatherPage: FC = () => {
    const classes = useStyles();

    return (
        <Container maxWidth='lg'>
            <Box className={classes.cardsSection}>
                <CityCardsList />
            </Box>
        </Container>
    );
};

export default WeatherPage;
