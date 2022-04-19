import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import React, { FC } from 'react';
import { temperatureUnits } from '../../constants/temperatureUnits';
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux';
import { ITemperatureUnit } from '../../models/ITemperatureUnit';
import { updateUnit } from '../../store/reducers/citiesWeather/actionCreators';

const TemperatureUnits: FC = () => {
    const { unit } = useTypedSelector((state) => state.weatherReducer);
    const dispatch = useTypedDispatch();
    const handleAlignment = (
        event: React.MouseEvent<HTMLElement>,
        newUnits: ITemperatureUnit
    ) => {
        newUnits.value !== unit.value && dispatch(updateUnit(newUnits));
    };
    return (
        <div>
            <ToggleButtonGroup
                value={unit}
                exclusive
                size={'small'}
                onChange={handleAlignment}
                aria-label='text alignment'
            >
                <ToggleButton
                    value={temperatureUnits.celsius}
                    aria-label='left aligned'
                >
                    {temperatureUnits.celsius.badge}
                </ToggleButton>
                <ToggleButton
                    value={temperatureUnits.fahrenheit}
                    aria-label='centered'
                >
                    {temperatureUnits.fahrenheit.badge}
                </ToggleButton>
            </ToggleButtonGroup>
        </div>
    );
};

export default TemperatureUnits;
