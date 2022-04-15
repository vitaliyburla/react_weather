import { configureStore, combineReducers } from '@reduxjs/toolkit';
import weatherReducer from './reducers/citiesWeather/weatherSlice';
const rootReducer = combineReducers({
    weatherReducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
