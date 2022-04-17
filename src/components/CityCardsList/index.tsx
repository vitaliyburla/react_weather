import React, { FC, useCallback, useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import CityCard, { CityCardSkeleton } from './CityCard';
import { useStyles } from './styles';
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux';
import { fetchCities } from '../../store/reducers/citiesWeather/actionCreators';
import { getCitiesFromLocalStorage } from '../../services/cityService';
import AddCityCard from './AddCityCard';

const CityCardsList: FC = () => {
    const classes = useStyles();
    const dispatch = useTypedDispatch();
    const { citiesWeather, isLoading, unit } = useTypedSelector(
        (state) => state.weatherReducer
    );

    const fetchCitiesCallback = useCallback(() => {
        dispatch(fetchCities(unit));
    }, [dispatch, unit]);

    useEffect(() => {
        fetchCitiesCallback();
    }, [fetchCitiesCallback]);

    return (
        <Box className={classes.cardsSection}>
            <Grid container className={classes.cardsGrid} spacing={2}>
                {isLoading &&
                    getCitiesFromLocalStorage().map((city) => (
                        <Grid
                            item
                            lg={4}
                            md={6}
                            xs={12}
                            className={classes.cardsGridItem}
                            key={city.id}
                        >
                            <CityCardSkeleton name={city.name} />
                        </Grid>
                    ))}
                {!isLoading &&
                    citiesWeather.map((cityWeather) => (
                        <Grid
                            item
                            lg={4}
                            md={6}
                            xs={12}
                            key={cityWeather.id}
                            className={classes.cardsGridItem}
                        >
                            <CityCard cityWeather={cityWeather} />
                        </Grid>
                    ))}
                <Grid
                    item
                    lg={4}
                    md={6}
                    xs={12}
                    className={classes.cardsGridItem}
                >
                    <AddCityCard />
                </Grid>
            </Grid>
        </Box>
    );
};

export default CityCardsList;
