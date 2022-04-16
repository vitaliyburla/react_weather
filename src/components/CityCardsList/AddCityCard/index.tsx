import { Box, IconButton, Input, TextField, Typography } from '@mui/material';
import React, { FC, useState } from 'react';
import { useStyles } from './styles';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

import { useTypedDispatch } from '../../../hooks/redux';
import { addCity } from '../../../store/reducers/citiesWeather/actionCreators';
const AddCityCard: FC = () => {
    const classes = useStyles();
    const dispatch = useTypedDispatch();

    const [isOpened, setIsOpened] = useState(false);
    const [cityName, setCityName] = useState('');

    const addCardHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        setIsOpened(true);
        if (cityName.length > 0) {
            dispatch(addCity(cityName));
            setIsOpened(false);
            setCityName('');
        }
    };

    const closeAddCardHandler = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.stopPropagation();
        setIsOpened(false);
        setCityName('');
    };

    return (
        <Box className={classes.card} onClick={() => setIsOpened(true)}>
            <Box className={classes.cardContent}>
                {!isOpened ? (
                    <>
                        <AddIcon />
                        <Typography variant={'body1'}>Add city</Typography>
                    </>
                ) : (
                    <>
                        <Box
                            className={classes.closeAddCardButton}
                            id='delete-button'
                        >
                            <IconButton onClick={closeAddCardHandler}>
                                <CloseIcon />
                            </IconButton>
                        </Box>
                        <Box>
                            <Input
                                placeholder='Enter city name'
                                color='primary'
                                onChange={(e) => setCityName(e.target.value)}
                                value={cityName}
                            />
                            <IconButton onClick={addCardHandler}>
                                <AddIcon />
                            </IconButton>
                        </Box>
                    </>
                )}
            </Box>
        </Box>
    );
};

export default AddCityCard;
