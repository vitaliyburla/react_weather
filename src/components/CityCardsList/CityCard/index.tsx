import React, { FC } from 'react';
import { useStyles } from './styles';
import { Box, Typography, Skeleton } from '@mui/material';
import { ICityWeather } from '../../../models/ICityWeather';
import { timestampToDatetime } from '../../../utils/dateFormat';

interface ICityCard {
    cityWeather: ICityWeather;
}

const CityCard: FC<ICityCard> = ({ cityWeather }) => {
    const classes = useStyles();
    return (
        <Box className={classes.card}>
            <Box className={classes.cardContent}>
                <Box className={classes.cardContentText}>
                    <Box>
                        <Typography variant='h5'>{cityWeather.name}</Typography>
                        <Typography variant='subtitle2'>
                            {timestampToDatetime(cityWeather.timezone, 'HH:mm')}
                            &nbsp;•&nbsp;
                            {timestampToDatetime(cityWeather.timezone, 'DD/MM')}
                        </Typography>
                    </Box>
                    <Typography variant='h2' sx={{ fontWeight: '300' }}>
                        {Math.round(cityWeather.main.temp)}&#0176;C
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