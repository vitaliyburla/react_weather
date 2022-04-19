import { ICity } from '../models/ICityWeather';

export const getCitiesFromLocalStorage = (): ICity[] => {
    return localStorage.getItem('cities')
        ? JSON.parse(localStorage.getItem('cities') as string)
        : [];
};

export const addCityToLocalStorage = async (city: ICity) => {
    const cities = getCitiesFromLocalStorage();
    cities.push({
        id: city.id,
        name: city.name,
        sys: {
            country: city.sys.country,
        },
        coord: {
            lon: city.coord.lon,
            lat: city.coord.lat,
        },
    });
    localStorage.setItem('cities', JSON.stringify(cities));
};

export const removeCityFromLocalStorage = (id: number): void => {
    const cities = getCitiesFromLocalStorage();
    const index = cities.findIndex((c) => c.id === id);
    cities.splice(index, 1);
    localStorage.setItem('cities', JSON.stringify(cities));
};
