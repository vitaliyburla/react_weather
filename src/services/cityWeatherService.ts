import axios from 'axios';
import { ICityWeather } from '../models/ICityWeather';

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
                units: units,
            },
        });
        return response.data as ICityWeather;
    } catch (error: any) {
        throw new Error(error);
    }
};
