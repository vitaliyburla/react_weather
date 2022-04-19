import React, { FC } from 'react';
import { useStyles } from './styles';
import { Box, Typography, Skeleton, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import RefreshIcon from '@mui/icons-material/Refresh';
import { ICityWeather } from '../../../models/ICityWeather';
import { timezoneToDatetimeUTC } from '../../../utils/formatter';
import {
    deleteCity,
    updateCity,
} from '../../../store/reducers/citiesWeather/actionCreators';
import { useTypedDispatch, useTypedSelector } from '../../../hooks/redux';
import { useNavigate } from 'react-router-dom';

export interface ICityCard {
    cityWeather: ICityWeather;
}

const CityCard: FC<ICityCard> = ({ cityWeather }) => {
    const classes = useStyles();
    const dispatch = useTypedDispatch();
    const { unit } = useTypedSelector((state) => state.weatherReducer);

    const navigate = useNavigate();

    const deleteCityHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        dispatch(deleteCity(cityWeather.id));
    };

    const updateCityWeatherHandler = (
        e: React.MouseEvent<HTMLButtonElement>
    ) => {
        e.stopPropagation();
        dispatch(updateCity(cityWeather.name, unit));
    };

    const openCity = () => navigate(cityWeather.name.toLowerCase());

    return (
        <Box className={classes.card} onClick={openCity}>
            <Box className={classes.deleteCardButton} id='popup-button'>
                <IconButton onClick={deleteCityHandler}>
                    <DeleteIcon />
                </IconButton>
            </Box>
            <Box className={classes.refreshCardButton} id='popup-button'>
                <IconButton onClick={updateCityWeatherHandler}>
                    <RefreshIcon />
                </IconButton>
            </Box>
            <Box className={classes.cardContent}>
                <Box className={classes.cardContentText}>
                    <Box>
                        <Typography variant='h5'>{cityWeather.name}</Typography>
                        <Typography variant='subtitle2'>
                            {timezoneToDatetimeUTC(
                                cityWeather.timezone,
                                'HH:mm'
                            )}
                            &nbsp;•&nbsp;
                            {timezoneToDatetimeUTC(
                                cityWeather.timezone,
                                'DD/MM'
                            )}
                        </Typography>
                    </Box>
                    <Typography variant='h2' sx={{ fontWeight: '300' }}>
                        {Math.round(cityWeather.main.temp)}
                        {unit.badge}
                    </Typography>
                </Box>
                <Box
                    component='img'
                    alt='weather'
                    src={`http://openweathermap.org/img/wn/${cityWeather.weather[0].icon}@2x.png`}
                />
            </Box>
        </Box>
    );
};

interface ICityCardSkeleton {
    name: string;
}

export const CityCardSkeleton: FC<ICityCardSkeleton> = ({ name }) => {
    const classes = useStyles();

    return (
        <Box className={classes.card}>
            <Box className={classes.cardContent}>
                <Box className={classes.cardContentText}>
                    <Box>
                        <Typography variant='h5'>{name}</Typography>
                        <Skeleton variant='text' width='7rem' />
                    </Box>
                    <Typography variant='h2' sx={{ fontWeight: '300' }}>
                        <Skeleton variant='text' width='4rem' />
                    </Typography>
                </Box>
                <Skeleton variant='rectangular' width='40%' height='100%' />
            </Box>
        </Box>
    );
};

export default CityCard;
