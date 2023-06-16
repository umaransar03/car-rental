import { React, useState } from 'react'
import { Container, Typography, FormControl, InputLabel, MenuItem, Select, Paper, Grid, Button } from '@mui/material'
import styled from '@emotion/styled';
import Dialogue from '../Dialog/Dialog';
import CarAudi from '../../images/audi.jpg'
import CarGolf from '../../images/golf.jpg'
import CarToyota from '../../images/camry.jpg'
import CarBmw from '../../images/bmw.jpg'
import CarMercedes from '../../images/benz.jpg'
import CarPassat from '../../images/vw.jpg'
import { useGeneralContext } from '../Context/GeneralContext';
import './bookCar.css';

export const BookCar = () => {

    const { pickTime, setPickTime, dropTime, setDropTime } = useGeneralContext();

    // bookCar 
    const [carType, setCarType] = useState("");
    const [carImg, setCarImg] = useState("");
    const [pickUp, setPickUp] = useState("");
    const [dropOff, setDropOff] = useState("");

    const handleCar = (e) => {
        setCarType(e.target.value);
        setCarImg(e.target.value);
    };
    const handlePick = (e) => {
        setPickUp(e.target.value);
    };

    const handleDrop = (e) => {
        setDropOff(e.target.value);
    };

    const handlePickTime = (e) => {
        setPickTime(e.target.value);
    };

    const handleDropTime = (e) => {
        setDropTime(e.target.value);
    };


    // based on value show car image 
    let imgUrl;
    switch (carImg) {
        case "Audi A1 S-Line":
            imgUrl = CarAudi;
            break;
        case "VW Golf 6":
            imgUrl = CarGolf;
            break;
        case "Toyota Camry":
            imgUrl = CarToyota;
            break;
        case "BMW 320 ModernLine":
            imgUrl = CarBmw;
            break;
        case "Mercedes-Benz GLK":
            imgUrl = CarMercedes;
            break;
        case "VW Passat CC":
            imgUrl = CarPassat;
            break;
        default:
            imgUrl = "";
    }

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const StyledButton = styled(Button)(() => ({
        width: '100%',
        height: 56
    }))


    return (
        <div id="bookCarSection">
            <Container maxWidth='xl' sx={{ bgcolor: '', p: 2, }}>
                <Paper elevation={15} sx={{ p: 2.5, }}>
                    <Typography variant='h4' component='h4'
                        sx={{
                            fontFamily: 'Rubik',
                            fontSize: '20',
                            fontWeight: 500,
                            textAlign: { xs: 'center', md: 'left' },
                            pt: 4,
                            pl: { xs: 0, md: 2 },
                            pb: { xs: 4, md: 2 }
                        }}>
                        Book a car
                    </Typography>
                    <Grid container spacing>
                        <Grid xs={12} md={3.5} sx={{ m: { md: 2, lg: 3 }, width: '100%', }}>
                            <Typography variant='h5' component='h5'
                                sx={{
                                    fontFamily: 'Rubik',
                                    fontSize: 16,
                                    fontWeight: 500,
                                    my: 1.5
                                }}>
                                Select Your Car Type<span style={{ color: '#c3073f' }}> *</span>
                            </Typography>
                            <FormControl fullWidth>
                                <InputLabel id="type">Select your car type</InputLabel>
                                <Select labelId="type"
                                    id="type"
                                    label="Select your car type"
                                    value={carType}
                                    onChange={handleCar}
                                >
                                    <MenuItem value={'Audi A1 S-Line'}>Audi A1 S-Line</MenuItem>
                                    <MenuItem value={'VW Golf 6'}>VW Golf 6</MenuItem>
                                    <MenuItem value={'Toyota Camry'}>Toyota Camry</MenuItem>
                                    <MenuItem value={'BMW 320 ModernLine'}>BMW 320 ModernLine</MenuItem>
                                    <MenuItem value={'Mercedes-Benz GLK'}>Mercedes-Benz GLK</MenuItem>
                                    <MenuItem value={'VW Passat CC'}>VW Passat CC</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid xs={12} md={3.5} sx={{ m: { md: 2, lg: 3 }, width: '100%' }}>
                            <Typography variant='h5' component='h5'
                                sx={{
                                    fontFamily: 'Rubik',
                                    fontSize: 16,
                                    fontWeight: 500,
                                    my: 1.5
                                }}
                            >
                                Pick-up<span style={{ color: '#c3073f' }}> *</span>
                            </Typography>
                            <FormControl fullWidth>
                                <InputLabel id="type">Select pick up location</InputLabel>
                                <Select value={pickUp} onChange={handlePick} labelID="type" id="items" label="Select pick up location">
                                    <MenuItem value={'Islamabad'}>Islamabad</MenuItem>
                                    <MenuItem value={'Lahore'}>Lahore</MenuItem>
                                    <MenuItem value={'Mandi Bahauddin'}>Mandi Bahauddin</MenuItem>
                                    <MenuItem value={'Multan'}>Multan</MenuItem>
                                    <MenuItem value={'Faislabad'}>Faislabad</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid xs={12} md={3.5} sx={{ m: { md: 2, lg: 3 }, width: '100%' }}>
                            <Typography variant='h5' component='h5'
                                sx={{
                                    fontFamily: 'Rubik',
                                    fontSize: 16,
                                    fontWeight: 500,
                                    my: 1.5
                                }}
                            >
                                Drop-of<span style={{ color: '#c3073f' }}> *</span>
                            </Typography>
                            <FormControl fullWidth>
                                <InputLabel id="type">Select drop off location</InputLabel>
                                <Select value={dropOff} onChange={handleDrop} labelID="type" id="items" label="Select drop off location">
                                    <MenuItem value={'Islamabad'}>Islamabad</MenuItem>
                                    <MenuItem value={'Lahore'}>Lahore</MenuItem>
                                    <MenuItem value={'Mandi Bahauddin'}>Mandi Bahauddin</MenuItem>
                                    <MenuItem value={'Multan'}>Multan</MenuItem>
                                    <MenuItem value={'Faislabad'}>Faislabad</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid xs={12} md={3.5} sx={{ m: { md: 2, lg: 3 }, width: '100%' }}>
                            <Typography variant='h5' component='h5'
                                sx={{
                                    fontFamily: 'Rubik',
                                    fontSize: 16,
                                    fontWeight: 500,
                                    my: 1.5
                                }}
                            >
                                Pick-up<span style={{ color: '#c3073f' }}> *</span>
                            </Typography>
                            <input
                                className='carTime'
                                id="picktime"
                                value={pickTime}
                                onChange={handlePickTime}
                                type="date"                            
                            ></input>
                    </Grid>
                    <Grid xs={12} md={3.5} sx={{ m: { md: 2, lg: 3 }, width: '100%', }}>
                        <Typography variant='h5' component='h5'
                            sx={{
                                fontFamily: 'Rubik',
                                fontSize: 16,
                                fontWeight: 500,
                                my: 1.5
                            }}
                        >
                            Drop-of<span style={{ color: '#c3073f' }}> *</span>
                        </Typography>
                        <input
                            className='carTime'
                            id="droptime"
                            value={dropTime}
                            onChange={handleDropTime}
                            type="date"
                        ></input>
                    </Grid>
                    <Grid xs={12} md={3.5} sx={{ m: { md: 2, lg: 3 }, width: '100%', bgcolor: '', pt: 5.5 }}>

                        <StyledButton fullWidth variant='contained' size='large'
                            sx={{ fontWeight: 700, fontSize: 18 }}
                            onClick={handleClickOpen}
                        >
                            Book Ride
                        </StyledButton>
                        <Dialogue
                            open={open}
                            handleClose={handleClose}
                            imgUrl={imgUrl}
                            carType={carType}
                            pickUp={pickUp}
                            dropOff={dropOff}
                        />
                    </Grid>
                </Grid>
            </Paper>
        </Container>
        </div >
    )
}
