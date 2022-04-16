import React, { FC, useEffect } from 'react';
import { Grid } from '@mui/material';
import CityCard, { CityCardSkeleton } from './CityCard';
import { useStyles } from './styles';
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux';
import { fetchCities } from '../../store/reducers/citiesWeather/actionCreators';
import { getCitiesFromLocalStorage } from '../../services/cityService';
import AddCityCard from './AddCityCard';

const CityCardsList: FC = () => {
    const classes = useStyles();
    const dispatch = useTypedDispatch();
    const { citiesWeather, isLoading, error } = useTypedSelector(
        (state) => state.weatherReducer
    );

    useEffect(() => {
        dispatch(fetchCities());
    }, []);

    return (
        <Grid container className={classes.cardsGrid} spacing={2}>
            {isLoading &&
                getCitiesFromLocalStorage().map((city) => (
                    <Grid
                        item
                        xs={4}
                        className={classes.cardsGridItem}
                        key={city.id}
                    >
                        <CityCardSkeleton name={city.name} />
                    </Grid>
                ))}
            {citiesWeather.map((cityWeather) => (
                <Grid
                    item
                    xs={4}
                    key={cityWeather.id}
                    className={classes.cardsGridItem}
                >
                    <CityCard cityWeather={cityWeather} />
                </Grid>
            ))}
            <Grid item xs={4} className={classes.cardsGridItem}>
                <AddCityCard />
            </Grid>
        </Grid>
    );
};

export default CityCardsList;
