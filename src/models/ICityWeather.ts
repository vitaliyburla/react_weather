export interface ICityWeather {
    coord: {
        lon: number;
        lat: number;
    };
    weather: IWeather[];
    base: string;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
    };
    visibility: number;
    wind: {
        speed: number;
        deg: number;
        gust: number;
    };
    clouds: {
        all: number;
    };
    dt: number;
    sys: {
        type: number;
        id: number;
        country: string;
        sunrise: number;
        sunset: number;
    };
    timezone: number;
    id: number;
    name: string;
    cod: number;
}

interface IWeather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface ICity {
    id: number;
    name: string;
    sys: {
        country: string;
    };
    coord: {
        lon: number;
        lat: number;
    };
}

export interface ICityWeatherHourly {
    lat: number;
    lon: number;
    timezone: string;
    timezone_offset: number;
    hourly: IWeatherHour[];
}

export interface IWeatherHour {
    dt: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust: number;
    weather: IWeather[];
    pop: number;
}
