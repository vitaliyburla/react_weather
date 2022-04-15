import { AppDispatch } from '../..';
import { weatherSlice } from './weatherSlice';
import { ICityWeather } from '../../../models/ICityWeather';
import { getCities } from '../../../services/cityService';
import { getCityWeather } from '../../../services/cityWeatherService';

export const fetchCities = () => async (dispatch: AppDispatch) => {
    dispatch(weatherSlice.actions.fetchCitiesStart());
    try {
        const cities = getCities();
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
    } catch (error: any) {}
};
