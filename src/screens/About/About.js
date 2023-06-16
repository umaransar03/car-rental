import React from 'react';
import { Trip } from '../trip/trip';
import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import bgImage from '../../images/bg.png'
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../footer/Footer';
import about from '../../images/about.jpg';
import { AirportShuttle, Garage, Warehouse } from '@mui/icons-material';
import './About.css'

export const About = () => {
    return (
        <div>
            <Navbar />
            <Container maxWidth='lg' sx={{ mb: 10, textAlign: { xs: 'center', md: 'left' } }} >
            <img className="about" src={bgImage} alt="bg-shape" />
                <Box sx={{ pt: 16 }}>
                    <Typography varinat='h4' color='primary'
                        sx={{
                            fontFamily: 'Rubik',
                            fontWeight: 700,
                            fontSize: 42
                        }}
                    >
                        About
                    </Typography>
                    <Typography varinat='h4' color='primary'
                        sx={{
                            fontWeight: 500,
                            fontSize: 18
                        }}
                    >
                        Home / About
                    </Typography>
                </Box>
                <Box sx={{
                    display: { xs: 'block', md: 'flex' },
                    justifyContent: 'center',
                    m: { xs: '4rem auto', md: '7rem auto' },
                    gap: 8
                }}>
                    <Box sx={{ width: {xs: '100%', md: '26rem'}, height: '26rem', m: { xs: '0 auto', md: 0 } }}>
                        <img className="" src={about} alt="map" style={{ width: '100%' }} />
                    </Box>
                    <Box sx={{ width: { xs: 'auto', md: '45%' }, mt: { xs: 8, md: 0 } }}>
                        <Typography variant='h5' component='h5'
                            sx={{
                                fontFamily: 'Rubik',
                                fontSize: 18,
                                fontWeight: 500,
                                my: 1.5
                            }}>
                            About Company
                        </Typography>
                        <Typography varinat='h4'
                            sx={{
                                fontFamily: 'Rubik',
                                fontWeight: 700,
                                fontSize: 42,
                                lineHeight: 1.3
                            }}
                        >
                            You start the engine and your adventure begins
                        </Typography>
                        <Typography variant='p' component='p'
                            sx={{
                                color: 'grey',
                                fontFamily: 'Rubik',
                                fontWeight: 500,
                                lineHeight: 1.6,
                                my: '2rem'
                            }} >
                            Certain but she but shyness why cottage.
                            Guy the put instrument sir entreaties affronting.
                            Pretended exquisite see cordially the you.
                            Weeks quiet do vexed or whose. Motionless if no to
                            affronting imprudence no precaution.
                            My indulged as disposal strongly attended.
                        </Typography>
                        <Box sx={{ display: { xs: 'block', md: 'flex' }, gap: 6}}>
                            <Box sx={{ display: { xs: 'block', md: 'flex' }, mb: 6 }}>
                                <AirportShuttle sx={{ fontSize: {xs: '100px', md: '60px'}, mr: 1.5, color: '#c3073f' }} />
                                <Box>
                                    <Typography variant='h3' component='h1'
                                        sx={{
                                            fontFamily: 'Rubik',
                                            fontWeight: 700,
                                            fontSize: 45,
                                        }}
                                    >
                                        20
                                    </Typography>
                                    <Typography variant='p' component='p'
                                        sx={{
                                            color: 'grey',
                                            fontFamily: 'Rubik',
                                            fontWeight: 400,
                                            lineHeight: 1.6,
                                            margin: 'auto 0',
                                        }} >
                                        Car Types
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: { xs: 'block', md: 'flex' }, mb: 6 }}>
                                <Warehouse sx={{ fontSize: {xs: '100px', md: '60px'}, mr: 1.5, color: '#c3073f' }} />
                                <Box>
                                    <Typography variant='h3' component='h1'
                                        sx={{
                                            fontFamily: 'Rubik',
                                            fontWeight: 700,
                                            fontSize: 45,
                                        }}
                                    >
                                        85
                                    </Typography>
                                    <Typography variant='p' component='p'
                                        sx={{
                                            color: 'grey',
                                            fontFamily: 'Rubik',
                                            fontWeight: 400,
                                            lineHeight: 1.6,
                                            margin: 'auto 0',
                                        }} >
                                        Rental Outlets
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: { xs: 'block', md: 'flex' }, mb: 6 }}>
                                <Garage sx={{ fontSize: {xs: '100px', md: '60px'}, mr: 1.5, color: '#c3073f' }} />
                                <Box>
                                    <Typography variant='h3' component='h1'
                                        sx={{
                                            fontFamily: 'Rubik',
                                            fontWeight: 700,
                                            fontSize: 45,
                                        }}
                                    >
                                        75
                                    </Typography>
                                    <Typography variant='p' component='p'
                                        sx={{
                                            color: 'grey',
                                            fontFamily: 'Rubik',
                                            fontWeight: 400,
                                            lineHeight: 1.6,
                                            margin: 'auto 0',
                                        }} >
                                        Repair Shops
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
            <Trip white='white' />
            <Footer />
        </div>
    )
}
