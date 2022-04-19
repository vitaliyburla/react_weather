import WeatherPage from '../pages/Weather';
import WeatherInCityPage from '../pages/WeatherInCity';

export interface IRoute {
    path: string;
    component: React.ComponentType;
}

export enum RouteNames {
    WEATHER = '/weather',
    WEATHER_IN_CITY = '/weather/:city',
}

export const publicRoutes: IRoute[] = [
    { path: RouteNames.WEATHER, component: WeatherPage },
    {
        path: RouteNames.WEATHER_IN_CITY,
        component: WeatherInCityPage,
    },
];
