import React, { FC } from 'react';
import { Box, Container, Typography } from '@mui/material';
import CityCardsList from '../../components/CityCardsList';
import { useStyles } from './styles';
import TemperatureUnits from '../../components/TemperatureUnits';

const WeatherPage: FC = () => {
    const classes = useStyles();
    return (
        <Container maxWidth='lg' sx={{ pt: '2rem' }}>
            <Box className={classes.headerSection}>
                <Box className={classes.headerText}>
                    <Typography variant={'h1'}>Get the latest</Typography>
                    <Typography variant={'h1'} sx={{ color: 'text.flaring' }}>
                        weather information
                    </Typography>
                </Box>
                <Box className={classes.headerUnits}>
                    <TemperatureUnits />
                </Box>
            </Box>
            <CityCardsList />
        </Container>
    );
};

export default WeatherPage;
