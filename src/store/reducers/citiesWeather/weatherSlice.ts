import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICityWeather } from '../../../models/ICityWeather';

interface IWeatherState {
    citiesWeather: ICityWeather[];
    isLoading: boolean;
    error: string;
}

const initialState: IWeatherState = {
    citiesWeather: [],
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
    },
});

export default weatherSlice.reducer;
