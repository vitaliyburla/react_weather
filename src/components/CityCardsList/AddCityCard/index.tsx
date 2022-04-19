import { Box, Grid, IconButton, Input, Typography } from '@mui/material';
import React, { FC, useState } from 'react';
import { useStyles } from './styles';
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';
import useInput from '../../../hooks/useInput';
import { useTypedDispatch, useTypedSelector } from '../../../hooks/redux';
import { addCity } from '../../../store/reducers/citiesWeather/actionCreators';
const AddCityCard: FC = () => {
    const classes = useStyles();
    const dispatch = useTypedDispatch();
    const { unit } = useTypedSelector((state) => state.weatherReducer);
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const cityName = useInput('');

    const addCardHandler = (
        event:
            | React.FormEvent<HTMLFormElement>
            | React.MouseEvent<HTMLButtonElement>
    ) => {
        event.stopPropagation();
        setIsOpened(true);
        if (cityName.value.length > 0) {
            dispatch(addCity(cityName.value, unit));
            setIsOpened(false);
            cityName.reset();
        }
    };

    const closeAddCardHandler = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.stopPropagation();
        setIsOpened(false);
        cityName.reset();
    };
    return (
        <Box
            className={classes.card}
            onClick={() => {
                setIsOpened(true);
            }}
        >
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
                            <form onSubmit={addCardHandler}>
                                <Grid container direction='row'>
                                    <Grid item xs={10}>
                                        <Input
                                            placeholder='Enter city name'
                                            color='primary'
                                            inputRef={(input) =>
                                                input && input.focus()
                                            }
                                            onChange={cityName.onChange}
                                            value={cityName.value}
                                        />
                                    </Grid>
                                    <Grid item xs={2}>
                                        <IconButton onClick={addCardHandler}>
                                            <ArrowForwardIcon />
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </form>
                        </Box>
                    </>
                )}
            </Box>
        </Box>
    );
};

export default AddCityCard;
