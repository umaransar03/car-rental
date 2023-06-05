import { Container, Typography, Box } from '@mui/material'
import React from 'react'
import image1 from '../../images/1.png'
import image2 from '../../images/2.png'
import image3 from '../../images/3.png'


export const Trip = () => {
    return (
        <div>
            <Container maxWidth='xl' sx={{ my: 15,}}>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant='h5' component='h1'
                        sx={{
                            fontFamily: 'Rubik',
                            fontWeight: 500,
                            mb: 1
                        }}>
                        Plan your trip now
                    </Typography>
                    <Typography variant='h3' component='h1'
                        sx={{
                            fontFamily: 'Rubik',
                            fontWeight: 700
                        }}>
                        Quick & easy car rental
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mt: 10,
                    }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            justifyContent: { xs: 'block', md: 'space-between' },
                            alignItems: { xs: 'center', md: 'block' },
                            mx: 10,
                            my: 3,
                        }}>
                        <Box sx={{textAlign: 'center', width: {xs: 'auto', md: '30%'} }}>
                            <img src={image1} alt='1' style={{ width: '10rem', height: 'auto' }} />
                            <Typography variant='h3' component='h1'
                                sx={{
                                    fontFamily: 'Rubik',
                                    fontWeight: 700,
                                    fontSize: 25
                                }}
                            >
                                Select Car
                            </Typography>
                            <Typography variant='p' component='p'
                                sx={{
                                    color: 'grey',
                                    fontFamily: 'Rubik',
                                    fontWeight: 400,
                                    lineHeight: 1.6,
                                    m: 2,
                                }} >
                                We offers a big range of vehicles for all your driving needs.
                                We have the perfect car to meet your needs
                            </Typography>
                        </Box>
                        <Box sx={{textAlign: 'center', width: {xs: 'auto', md: '30%'} }}>
                            <img src={image2} alt='1' style={{ width: '10rem', height: 'auto' }} />
                            <Typography variant='h3' component='h1'
                                sx={{
                                    fontFamily: 'Rubik',
                                    fontWeight: 700,
                                    fontSize: 25
                                }}
                            >
                                Contact Operator
                            </Typography>
                            <Typography variant='p' component='p'
                                sx={{
                                    color: 'grey',
                                    fontFamily: 'Rubik',
                                    fontWeight: 400,
                                    lineHeight: 1.6,
                                    m: 2,
                                }} >
                                Our knowledgeable and friendly operators are always
                                ready to help with any questions or concerns
                            </Typography>
                        </Box>
                        <Box sx={{textAlign: 'center', width: {xs: 'auto', md: '30%'} }}>
                            <img src={image3} alt='1' style={{ width: '10rem', height: 'auto' }} />
                            <Typography variant='h3' component='h1'
                                sx={{
                                    fontFamily: 'Rubik',
                                    fontWeight: 700,
                                    fontSize: 25
                                }}
                            >
                                Let's Drive
                            </Typography>
                            <Typography variant='p' component='p'
                                sx={{
                                    color: 'grey',
                                    fontFamily: 'Rubik',
                                    fontWeight: 400,
                                    lineHeight: 1.6,
                                    m: 2,
                                }} >
                                Whether you're hitting the open road,
                                we've got you covered with our wide range of cars
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </div>
    )
}
