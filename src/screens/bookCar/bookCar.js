import React from 'react'
import { Container, Typography, FormControl, InputLabel, MenuItem, Select, Paper, Grid, Button } from '@mui/material'
import styled from '@emotion/styled';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

export const BookCar = () => {

    const StyledButton = styled(Button)(() => ({
        width: '100%',
        height: 56
    }))


    return (
        <div>
            <Container maxWidth='xl' sx={{ bgcolor: '', p: 2, }}>
                <Paper elevation={5} sx={{ p: 2.5, backgroundColor: 'rgba(255, 0, 0, 0)', }}>
                    <Typography variant='h4' component='h4'
                        sx={{
                            fontFamily: 'Rubik',
                            fontSize: '20',
                            fontWeight: 500,
                            textAlign: {xs: 'center', md: 'left'},
                            pt: 4,
                            pl: {xs: 0, md: 2},
                            pb: {xs: 4, md: 2}
                        }}>
                        Book a car
                    </Typography>
                    <Grid container spacing>
                        <Grid xs={12} md={3.5} sx={{ m: {md: 2, lg: 3}, width: '100%', }}>
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
                                    label="Select your car type">
                                    <MenuItem value={1}>Audi A1 S-Line</MenuItem>
                                    <MenuItem value={2}>VW Golf 6</MenuItem>
                                    <MenuItem value={3}>Toyota Camry</MenuItem>
                                    <MenuItem value={4}>BMW 320 ModernLine</MenuItem>
                                    <MenuItem value={5}>Mercedes-Benz GLK</MenuItem>
                                    <MenuItem value={6}>VW Passat CC</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid xs={12} md={3.5} sx={{ m: { md: 2, lg: 3}, width: '100%' }}>
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
                                <Select labelID="type" id="items" label="Select pick up location">
                                    <MenuItem value={1}>Islamabad</MenuItem>
                                    <MenuItem value={2}>Lahore</MenuItem>
                                    <MenuItem value={3}>Mandi Bahauddin</MenuItem>
                                    <MenuItem value={4}>Multan</MenuItem>
                                    <MenuItem value={5}>Faislabad</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid xs={12} md={3.5} sx={{ m: { md: 2, lg: 3}, width: '100%' }}>
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
                                <Select labelID="type" id="items" label="Select drop off location">
                                <MenuItem value={1}>Islamabad</MenuItem>
                                    <MenuItem value={2}>Lahore</MenuItem>
                                    <MenuItem value={3}>Mandi Bahauddin</MenuItem>
                                    <MenuItem value={4}>Multan</MenuItem>
                                    <MenuItem value={5}>Faislabad</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid xs={12} md={3.5} sx={{ m: { md: 2, lg: 3}, width: '100%' }}>
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
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker sx={{ width: '100%' }} />
                            </LocalizationProvider>
                        </Grid>
                        <Grid xs={12} md={3.5} sx={{ m: { md: 2, lg: 3}, width: '100%', }}>
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
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <TimePicker sx={{ width: '100%' }} />
                            </LocalizationProvider>
                        </Grid>
                        <Grid xs={12} md={3.5} sx={{ m: { md: 2, lg: 3}, width: '100%', bgcolor: '', pt: 5.5 }}>

                            <StyledButton fullWidth variant='contained' size='large'
                                sx={{ fontWeight: 700, fontSize: 18 }}
                            >
                                Book Ride
                            </StyledButton>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </div>
    )
}
