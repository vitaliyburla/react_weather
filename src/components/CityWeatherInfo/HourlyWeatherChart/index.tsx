import { Box, Grid, Typography } from '@mui/material';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { unitValue } from '../../../constants/temperatureUnits';
import { useTypedSelector } from '../../../hooks/redux';
import { ICityWeatherHourly } from '../../../models/ICityWeather';
import { getCityWeatherHourly } from '../../../services/cityWeatherService';
import {
    timestampToDatetime,
    timestampFromUTC,
    filterByDay,
} from '../../../utils/formatter';
import { useStyles } from './styles';

const HourlyWeatherChart = () => {
    const classes = useStyles();
    const { selectedCityWeather, unit } = useTypedSelector(
        (state) => state.weatherReducer
    );

    const [data, setData] = useState<ICityWeatherHourly>(
        {} as ICityWeatherHourly
    );

    const fetchWeatherHourly = useCallback(async () => {
        const weatherHourly = await getCityWeatherHourly(
            selectedCityWeather.coord.lon,
            selectedCityWeather.coord.lat,
            unit.value
        );
        setData(weatherHourly);
    }, [
        selectedCityWeather.coord.lon,
        selectedCityWeather.coord.lat,
        unit.value,
    ]);

    useEffect(() => {
        fetchWeatherHourly();
    }, [fetchWeatherHourly]);

    const cityTime = useMemo(
        () => timestampFromUTC(selectedCityWeather.timezone),
        [selectedCityWeather.timezone]
    );

    const hourlyData = useMemo(() => {
        const hours = data?.hourly
            ?.filter((time) => time.dt > cityTime)
            ?.filter((time) =>
                filterByDay(time.dt, selectedCityWeather.timezone)
            )
            ?.map((hour) => ({
                time: timestampToDatetime(hour.dt, 'HH'),
                temperature: Math.round(hour.temp),
            }));
        const temperatureArray = hours?.map((hour) => {
            return hour.temperature;
        });
        const minTemp = temperatureArray && Math.min(...temperatureArray);
        const maxTemp = temperatureArray && Math.max(...temperatureArray);
        return { minTemp, maxTemp, hours };
    }, [data.hourly, cityTime]);

    const hourPercentage = useMemo(
        () => 100 / (hourlyData?.maxTemp - hourlyData?.minTemp),
        [hourlyData]
    );

    const temperatureToGraphHeight = (temp: number) => {
        const diff = hourlyData?.maxTemp - temp;
        return (diff * hourPercentage) / 15;
    };

    const isTemperatureAboveZero = (temp: number) => {
        if (unit.value === unitValue.FAHRENHEIT) {
            return ((temp - 32) * 5) / 9 > 0;
        } else {
            return temp > 0;
        }
    };

    const temperatureIndicatorPercentage = (temp: number) => {
        if (unit.value === unitValue.FAHRENHEIT) {
            if (isTemperatureAboveZero(temp)) {
                return (((temp - 32) * 5) / 9 / 100) * 3;
            } else {
                return (((temp - 32) * 5) / 9 / 100) * -3;
            }
        } else {
            return (temp / 100) * 3.3;
        }
    };

    const coldToHotIndicator = (temp: number) => {
        return `rgba(${
            isTemperatureAboveZero(temp) ? '255, 0, 0' : '0, 0, 255'
        },${temperatureIndicatorPercentage(temp > 0 ? temp : temp * -1)})`;
    };

    return (
        <Grid
            container
            direction='row'
            columnSpacing={2}
            wrap={'nowrap'}
            sx={{ height: '100%' }}
        >
            {hourlyData?.hours?.map((item, index) => (
                <Grid item key={index}>
                    <Grid container direction='column' sx={{ height: '100%' }}>
                        <Grid item>
                            <Typography variant={'body1'} textAlign='center'>
                                {item.time}
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            sx={{
                                mt: `${
                                    temperatureToGraphHeight(item.temperature) +
                                    1
                                }rem`,
                            }}
                        >
                            <Box className={classes.coldIndicator}>
                                <Box
                                    className={classes.hotIndicator}
                                    sx={{
                                        background: coldToHotIndicator(
                                            item.temperature
                                        ),
                                    }}
                                >
                                    <Typography variant={'body2'}>
                                        {item.temperature}
                                        {unit.badge}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            ))}
        </Grid>
    );
};

export default HourlyWeatherChart;
