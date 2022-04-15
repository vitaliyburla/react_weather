import { ICity } from '../models/ICityWeather';

export const getCities = (): ICity[] => {
    return localStorage.getItem('cities')
        ? JSON.parse(localStorage.getItem('cities') as string)
        : [];
};

export const addCity = (city: string): void => {
    const cities = getCities();
    cities.push({ name: city });
    localStorage.setItem('cities', JSON.stringify(cities));
};

export const removeCity = (city: string): void => {
    const cities = getCities();
    const index = cities.findIndex((c) => c.name === city);
    cities.splice(index, 1);
    localStorage.setItem('cities', JSON.stringify(cities));
};
