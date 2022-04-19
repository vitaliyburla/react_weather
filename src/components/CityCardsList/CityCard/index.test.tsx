import { render, screen } from '@testing-library/react';
import CityCard from '.';
import { ICityWeather } from '../../../models/ICityWeather';
import SetupTests from '../../../setupTests';
import React from 'react';

describe('card content', () => {
    let weather = {} as ICityWeather;
    beforeEach(() => {
        weather = {
            coord: {
                lon: 2.159,
                lat: 41.3888,
            },
            weather: [
                {
                    id: 803,
                    main: 'Clouds',
                    description: 'broken clouds',
                    icon: '04d',
                },
            ],
            base: 'stations',
            main: {
                temp: 16.83,
                feels_like: 16.47,
                temp_min: 14.71,
                temp_max: 20.66,
                pressure: 1012,
                humidity: 73,
            },
            visibility: 9000,
            wind: {
                speed: 2.06,
                deg: 110,
            },
            clouds: {
                all: 75,
            },
            dt: 1650365862,
            sys: {
                type: 2,
                id: 18549,
                country: 'ES',
                sunrise: 1650344741,
                sunset: 1650393296,
            },
            timezone: 7200,
            id: 3128760,
            name: 'Barcelona',
            cod: 200,
        } as ICityWeather;
    });
    test('city card content', () => {
        render(
            <SetupTests>
                <CityCard cityWeather={weather as ICityWeather} />
            </SetupTests>
        );
        const cityName = screen.getByText(/barcelona/i);
        const cityTemperature = screen.getByText(/17°C/);
        const cityWeatherImg = screen.getByAltText(
            /weather/
        ) as HTMLImageElement;
        expect(cityName).toBeInTheDocument();
        expect(cityTemperature).toBeInTheDocument();
        expect(cityWeatherImg.src).toBe(
            `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
        );
    });
});
