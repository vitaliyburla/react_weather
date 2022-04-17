import React, { useCallback, useEffect, useState } from 'react';
import { useTypedSelector } from '../../../hooks/redux';
import { ICityWeatherHourly } from '../../../models/ICityWeather';
import { getCityWeatherHourly } from '../../../services/cityWeatherService';

const HourlyWeatherChart = () => {
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
    return <div>HourlyWeatherChart</div>;
};

export default HourlyWeatherChart;
