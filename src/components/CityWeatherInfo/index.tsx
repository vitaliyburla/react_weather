import { Box, Grid, IconButton, Typography } from '@mui/material';
import React, { useCallback, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux';
import { RouteNames } from '../../routes';
import {
    setCurrentCity,
    removeCurrentCity,
} from '../../store/reducers/citiesWeather/actionCreators';
import { timestampToDatetimeUTC, degToCompass } from '../../utils/formatter';
import TemperatureUnits from '../TemperatureUnits';
import { useStyles } from './styles';
import AirIcon from '@mui/icons-material/Air';
import SpeedIcon from '@mui/icons-material/Speed';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import WaterIcon from '@mui/icons-material/Water';
import HourlyWeatherChart from './HourlyWeatherChart';
import BackButton from '../common/BackButton';

const CityWeatherInfo = () => {
    const classes = useStyles();
    const dispatch = useTypedDispatch();
    const { unit, selectedCityWeather, isLoading } = useTypedSelector(
        (state) => state.weatherReducer
    );

    const navigate = useNavigate();
    const { city } = useParams();

    const fetchCityCallback = useCallback(() => {
        city &&
            dispatch(setCurrentCity(city, unit)).catch(() => {
                navigate(RouteNames.WEATHER);
            });
    }, [dispatch, unit, city, navigate]);

    const removeCityCallback = useCallback(() => {
        dispatch(removeCurrentCity());
    }, [dispatch]);

    useEffect(() => {
        fetchCityCallback();
        return () => {
            removeCityCallback();
        };
    }, [fetchCityCallback, removeCityCallback]);

    return (
        <>
            {!isLoading && selectedCityWeather.id && (
                <Box className={classes.weatherInfoContainer}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <BackButton path={RouteNames.WEATHER} />
                        </Grid>
                        <Grid item xs={12}>
                            <Box className={classes.infoCard}>
                                <Box className={classes.infoCardContent}>
                                    <Grid
                                        container
                                        direction='row'
                                        justifyContent='space-between'
                                        sx={{ height: '100%', width: '100%' }}
                                    >
                                        <Grid item>
                                            <Grid container direction='row'>
                                                <Grid item>
                                                    <Box
                                                        component='img'
                                                        sx={{
                                                            margin: '0 auto',
                                                        }}
                                                        alt='weather'
                                                        src={`http://openweathermap.org/img/wn/${selectedCityWeather.weather[0].icon}@2x.png`}
                                                    />
                                                </Grid>
                                                <Grid item>
                                                    <Typography
                                                        variant={'h3'}
                                                        fontWeight={'300'}
                                                    >
                                                        {
                                                            selectedCityWeather.name
                                                        }
                                                    </Typography>
                                                    <Typography
                                                        variant={'h4'}
                                                        fontWeight={'200'}
                                                    >
                                                        {Math.round(
                                                            selectedCityWeather
                                                                .main.temp
                                                        )}
                                                        {unit.badge}
                                                    </Typography>
                                                    <Typography
                                                        variant={'body2'}
                                                        color={'text.disabled'}
                                                    >
                                                        {
                                                            selectedCityWeather
                                                                .weather[0]
                                                                .description
                                                        }
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item>
                                            <Box
                                                sx={{
                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                    }}
                                                >
                                                    <DeviceThermostatIcon />
                                                    &nbsp;
                                                    <Typography
                                                        variant={'body2'}
                                                    >
                                                        Feels like&nbsp;
                                                        {Math.round(
                                                            selectedCityWeather
                                                                .main.feels_like
                                                        )}
                                                        {unit.badge}
                                                    </Typography>
                                                </Box>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                    }}
                                                >
                                                    <AirIcon />
                                                    &nbsp;
                                                    <Typography
                                                        variant={'body2'}
                                                    >
                                                        {
                                                            selectedCityWeather
                                                                .wind.speed
                                                        }
                                                        {unit.speed}
                                                        &nbsp;
                                                        {degToCompass(
                                                            selectedCityWeather
                                                                .wind.deg
                                                        )}
                                                    </Typography>
                                                </Box>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                    }}
                                                >
                                                    <WaterIcon />
                                                    &nbsp;
                                                    <Typography
                                                        variant={'body2'}
                                                    >
                                                        Humidity:&nbsp;
                                                        {
                                                            selectedCityWeather
                                                                .main.humidity
                                                        }
                                                        %
                                                    </Typography>
                                                </Box>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                    }}
                                                >
                                                    <SpeedIcon />
                                                    &nbsp;
                                                    <Typography
                                                        variant={'body2'}
                                                    >
                                                        Pressure:&nbsp;
                                                        {
                                                            selectedCityWeather
                                                                .main.pressure
                                                        }
                                                        hPa
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item>
                                            <Box
                                                sx={{
                                                    width: '100%',
                                                    height: '100%',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                }}
                                            >
                                                <Typography
                                                    variant={'h4'}
                                                    fontWeight={'300'}
                                                >
                                                    Max:&nbsp;
                                                    {Math.round(
                                                        selectedCityWeather.main
                                                            .temp_max
                                                    )}
                                                    {unit.badge}
                                                </Typography>
                                                <Typography
                                                    variant={'h4'}
                                                    fontWeight={'300'}
                                                >
                                                    Min:&nbsp;
                                                    {Math.round(
                                                        selectedCityWeather.main
                                                            .temp_min
                                                    )}
                                                    {unit.badge}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item>
                                            <Grid
                                                container
                                                direction='column'
                                                alignItems='flex-end'
                                            >
                                                <Grid item mb={1}>
                                                    <Typography variant='body2'>
                                                        {timestampToDatetimeUTC(
                                                            selectedCityWeather.timezone,
                                                            'HH:mm'
                                                        )}
                                                        &nbsp;•&nbsp;
                                                        {timestampToDatetimeUTC(
                                                            selectedCityWeather.timezone,
                                                            'DD/MM'
                                                        )}
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <TemperatureUnits />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box className={classes.infoCard}>
                                <Box
                                    className={`${classes.infoCardContent} ${classes.horizontalScrollable}`}
                                >
                                    <HourlyWeatherChart />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            )}
        </>
    );
};

export default CityWeatherInfo;
