import { AppDispatch } from '../..';
import { weatherSlice } from './weatherSlice';
import { ICity, ICityWeather } from '../../../models/ICityWeather';
import {
    addCityToLocalStorage,
    getCitiesFromLocalStorage,
    removeCityFromLocalStorage,
} from '../../../services/cityService';
import { getCityWeather } from '../../../services/cityWeatherService';
import { ITemperatureUnit } from '../../../models/ITemperatureUnit';

export const fetchCities =
    (unit: ITemperatureUnit) => async (dispatch: AppDispatch) => {
        dispatch(weatherSlice.actions.fetchCitiesStart());
        try {
            const cities = getCitiesFromLocalStorage();
            if (cities.length === 0) {
                dispatch(weatherSlice.actions.fetchCitiesError('No cities'));
                return;
            }
            const citiesWeather = await Promise.all(
                cities.map((city) => getCityWeather(city.name, unit.value))
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

export const updateCity =
    (city: string, unit: ITemperatureUnit) => async (dispatch: AppDispatch) => {
        try {
            const weather = await getCityWeather(city, unit.value);
            dispatch(weatherSlice.actions.updateCityWeather(weather));
        } catch (error: any) {
            throw new Error(error);
        }
    };

export const addCity =
    (name: string, unit: ITemperatureUnit) => async (dispatch: AppDispatch) => {
        try {
            const cities = getCitiesFromLocalStorage();
            const city = await getCityWeather(name, unit.value);
            if (!cities.find((c) => c.name === city.name)) {
                dispatch(weatherSlice.actions.addCity(city));
                addCityToLocalStorage(city as ICity);
            }
        } catch (error: any) {
            throw new Error(error);
        }
    };

export const deleteCity = (id: number) => async (dispatch: AppDispatch) => {
    dispatch(weatherSlice.actions.deleteCity(id));
    removeCityFromLocalStorage(id);
};

export const updateUnit = (unit: ITemperatureUnit) => {
    return weatherSlice.actions.updateTemperatureUnits(unit);
};
