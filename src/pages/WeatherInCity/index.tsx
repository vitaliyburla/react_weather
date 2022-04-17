import { Container } from '@mui/material';
import React, { FC } from 'react';
import CityWeatherInfo from '../../components/CityWeatherInfo';

const WeatherInCityPage: FC = () => {
    return (
        <Container maxWidth='lg' sx={{ pt: '2rem' }}>
            <CityWeatherInfo />
        </Container>
    );
};

export default WeatherInCityPage;
