import { AppDispatch } from '../..';
import { weatherSlice } from './weatherSlice';
import { ICity, ICityWeather } from '../../../models/ICityWeather';
import {
    addCityToLocalStorage,
    getCitiesFromLocalStorage,
    removeCityFromLocalStorage,
} from '../../../services/cityService';
import { getCityWeather } from '../../../services/cityWeatherService';

export const fetchCities = () => async (dispatch: AppDispatch) => {
    dispatch(weatherSlice.actions.fetchCitiesStart());
    try {
        const cities = getCitiesFromLocalStorage();
        if (cities.length === 0) {
            dispatch(weatherSlice.actions.fetchCitiesError('No cities'));
            return;
        }
        const citiesWeather = await Promise.all(
            cities.map((city) => getCityWeather(city.name))
        );
        dispatch(
            weatherSlice.actions.fetchCitiesSuccess(
                citiesWeather as ICityWeather[]
            )
        );
    } catch (error: any) {
        dispatch(weatherSlice.actions.fetchCitiesError(error.message));
    }
};

export const updateCity = (city: string) => async (dispatch: AppDispatch) => {
    try {
        const weather = await getCityWeather(city);
        dispatch(weatherSlice.actions.updateCityWeather(weather));
    } catch (error: any) {
        throw new Error(error);
    }
};

export const addCity = (name: string) => async (dispatch: AppDispatch) => {
    try {
        const city = await getCityWeather(name);
        dispatch(weatherSlice.actions.addCity(city));
        addCityToLocalStorage(city as ICity);
    } catch (error: any) {
        throw new Error(error);
    }
};

export const deleteCity = (id: number) => async (dispatch: AppDispatch) => {
    dispatch(weatherSlice.actions.deleteCity(id));
    removeCityFromLocalStorage(id);
};
