import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { temperatureUnits } from '../../../constants/temperatureUnits';
import { ICityWeather } from '../../../models/ICityWeather';
import { ITemperatureUnit } from '../../../models/ITemperatureUnit';

interface IWeatherState {
    unit: ITemperatureUnit;
    citiesWeather: ICityWeather[];
    selectedCityWeather: ICityWeather;
    isLoading: boolean;
    error: string;
}

const initialState: IWeatherState = {
    unit: temperatureUnits.celsius,
    citiesWeather: [],
    selectedCityWeather: {} as ICityWeather,
    isLoading: false,
    error: '',
};

export const weatherSlice = createSlice({
    name: 'cityWeather',
    initialState,
    reducers: {
        fetchCitiesStart: (state) => {
            state.isLoading = true;
        },
        fetchCitiesSuccess: (state, action: PayloadAction<ICityWeather[]>) => {
            state.isLoading = false;
            state.error = '';
            state.citiesWeather = action.payload;
        },
        fetchCitiesError: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        updateCityWeather: (state, action: PayloadAction<ICityWeather>) => {
            state.citiesWeather = state.citiesWeather.map((cityWeather) =>
                cityWeather.name === action.payload.name
                    ? action.payload
                    : cityWeather
            );
        },
        deleteCity: (state, action: PayloadAction<number>) => {
            state.citiesWeather = state.citiesWeather.filter(
                (cityWeather) => cityWeather.id !== action.payload
            );
        },
        addCity: (state, action: PayloadAction<ICityWeather>) => {
            state.citiesWeather.push(action.payload);
        },
        updateTemperatureUnits: (
            state,
            action: PayloadAction<ITemperatureUnit>
        ) => {
            state.unit = action.payload;
            state.citiesWeather = [];
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setSelectedCity: (state, action: PayloadAction<ICityWeather>) => {
            state.selectedCityWeather = action.payload;
        },
        removeSelectedCity: (state) => {
            state.selectedCityWeather = {} as ICityWeather;
        },
    },
});

export default weatherSlice.reducer;
