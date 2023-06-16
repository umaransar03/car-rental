import { Container, Box, Typography, Button, Stack } from '@mui/material'
import React from 'react'
import carImage from '../../images/car.png'
import bgImage from '../../images/bg.png'
import './Landing.css';
import styled from '@emotion/styled';
import { BookCar } from '../bookCar/bookCar'
import { useGeneralContext } from '../Context/GeneralContext';
import { Link } from 'react-scroll';


export const Landing = () => {

    const StyledButton = styled(Button)(() => ({
        width: 150,
        height: 50
    }))

    const { handleAbout } = useGeneralContext();


    return (
        <div>
            <Container maxWidth='xl'>
                <img className="bg-image" src={bgImage} alt="bg-shape" />
                <Box
                    sx={{
                        width: '100%',
                        height: '100vh',
                        display: 'flex',
                        alignItems: 'center',
                        position: 'relative',
                        justifyContent: {
                            xs: 'center', md: 'left'
                        }
                    }}>
                    <Box
                        component='div'
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            maxWidth: {
                                xs: '35rem',
                                md: '30rem'
                            },
                            mt: 2,
                            zIndex: 3,
                            textAlign: 'center',
                            alignItems: 'center',
                        }}>
                        <Typography variant='h5' component='h1'
                            sx={{
                                fontFamily: 'Rubik',
                                fontWeight: 500,
                                fontSize: 28,
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
                        <Typography variant='p' component='p'
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
                        <Stack component='div' direction='row' spacing={2}>
                            <Link to="bookCarSection" smooth={true} duration={1000}>
                                <StyledButton variant='contained' size='large' sx={{ fontWeight: 700, }}>Book Ride</StyledButton>
                            </Link>
                            <StyledButton variant='contained' color='secondary' onClick={handleAbout}
                                sx={{
                                    ':hover': {
                                        bgcolor: 'transparent',
                                        color: 'black',
                                        borderColor: 'black',
                                        border: 2,
                                    },
                                    fontWeight: 700
                                }} >
                                Learn More
                            </StyledButton>
                        </Stack>
                    </Box>
                    <img className='mainCar' src={carImage} alt='car' />
                </Box>
                <Box sx={{ zIndex: 2, position: 'relative', width: '100%' }}>
                    <BookCar />
                </Box>
            </Container>
        </div>
    )
}
