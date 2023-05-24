import { Container, Box, Typography, Button, Stack } from '@mui/material'
import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import Image from '../../images/car.png'
import './Landing.css';
import styled from '@emotion/styled';


export const Landing = () => {

    const StyledButton = styled(Button)(() => ({
        width: 150,
        height: 50
    }))


    return (
        <div>
            <Navbar />
            <Container maxWidth='xl' sx={{ backgroundColor: 'white' }}>
                <Box
                    sx={{
                        width: '100%',
                        height: '100vh',
                        display: 'flex',
                        alignItems: 'center',
                        position: 'relative',

                    }}>
                    <Box fullWidth
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            maxWidth: '35rem',
                            mt: 2,
                            zIndex: 3,
                        }}>
                        <Typography variant='h5' component='h1'
                            sx={{
                                fontFamily: 'Rubik',
                                fontWeight: 500
                            }}>
                            Plan your trip now
                        </Typography>
                        <Typography variant='h2' component='h1'
                            sx={{
                                fontFamily: 'Rubik',
                                fontWeight: 700,
                                lineHeight: 1.2,
                                mt: '0.5rem',
                                mb: '0.8rem'
                            }}>
                            Save <span style={{ color: '#c3073f' }}>big</span> with our car rental
                        </Typography>
                        <Typography variant='subtitle1' component='p'
                            sx={{
                                color: 'grey',
                                fontFamily: 'Rubik',
                                fontWeight: 500,
                                lineHeight: 1.6,
                                mb: '4rem'
                            }} >
                            Rent the car of your dreams. Unbeatable prices,
                            unlimited miles, flexible pick-up options and much more.
                        </Typography>
                        <Stack direction='row' spacing={2}>
                            <StyledButton variant='contained' size='large'>Book Ride</StyledButton>
                            <StyledButton variant='contained' color='secondary'
                                sx={{
                                    ':hover': {
                                        bgcolor: 'transparent', 
                                        color: 'black',
                                        borderColor: 'black',
                                        border: 2
                                    }
                                }} >
                                Learn More
                            </StyledButton>
                        </Stack>
                    </Box>
                    <img className='mainCar' src={Image} alt='car' />
                </Box>

            </Container>
        </div>
    )
}
