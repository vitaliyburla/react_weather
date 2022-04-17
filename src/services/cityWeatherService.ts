import axios from 'axios';
import { ICityWeather, ICityWeatherHourly } from '../models/ICityWeather';

const API = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
    params: {
        appid: process.env.REACT_APP_OPENWEATHERMAP_API_KEY,
    },
});

export const getCityWeather = async (city: string, units: string) => {
    try {
        const response = await API.get('/weather', {
            params: {
                q: city,
                units,
            },
        });
        return response.data as ICityWeather;
    } catch (error: any) {
        throw new Error(error);
    }
};

export const getCityWeatherHourly = async (
    lon: number,
    lat: number,
    units: string
) => {
    try {
        const response = await API.get('/onecall', {
            params: {
                lon,
                lat,
                exclude: 'minutely,daily,alerts,current',
                units,
            },
        });
        return response.data as ICityWeatherHourly;
    } catch (error: any) {
        throw new Error(error);
    }
};
