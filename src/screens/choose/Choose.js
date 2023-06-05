import { CurrencyExchange, DirectionsCar, MonetizationOn } from '@mui/icons-material'
import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'

export const Choose = () => {
    return (
        <div>
            <Container maxWidth='lg' sx={{ bgcolor: 'yellowgreen' }}>
                <Box sx={{ display: 'flex', p: 5}}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', }}>
                        <Box sx={{ bgcolor: 'ButtonShadow'}}>
                            <Typography variant='h5' component='h1'
                                sx={{
                                    fontFamily: 'Rubik',
                                    fontWeight: 500,
                                    fontSize: 25,
                                    mb: 0.5
                                }}>
                                Why Choose Us
                            </Typography>
                            <Typography variant='h3' component='h1'
                                sx={{
                                    fontFamily: 'Rubik',
                                    fontWeight: 600,
                                    width: '75%'
                                }}>
                                Best valued deals you will ever find
                            </Typography>
                            <Typography variant='p' component='p'
                                sx={{
                                    color: 'grey',
                                    fontFamily: 'Rubik',
                                    fontWeight: 400,
                                    lineHeight: 1.6,
                                    my: 4,
                                    width: '70%'
                                }} >
                                Discover the best deals you'll ever find with our unbeatable offers.
                                We're dedicated to providing you with the best value for your money,
                                so you can enjoy top-quality services and products without breaking the bank.
                                Our deals are designed to give you the ultimate renting experience,
                                so don't miss out on your chance to save big.
                            </Typography>
                            <Button variant='contained' size='large'
                                sx={{
                                    fontFamily: 'Rubik',
                                    fontWeight: '700',
                                    borderRadius: 1,
                                    // height: '18%',
                                }} >
                                Find Details
                            </Button>
                        </Box>
                        <Box sx={{bgcolor: 'yellow',width: '100%', mr: 5,}}>
                            <Box sx={{ display: 'flex', bgcolor: 'blue' }}>
                                <DirectionsCar sx={{ fontSize: '100px' }} />
                                <Box sx={{width: '100%', justifyContent: 'center', bgcolor: 'Background'}}>
                                    <Typography variant='h3' component='h1'
                                        sx={{
                                            fontFamily: 'Rubik',
                                            fontWeight: 700,
                                            fontSize: 25
                                        }}
                                    >
                                        Cross Country Drive
                                    </Typography>
                                    <Typography variant='p' component='p'
                                        sx={{
                                            color: 'grey',
                                            fontFamily: 'Rubik',
                                            fontWeight: 400,
                                            lineHeight: 1.6,
                                        }} >
                                        Take your driving experience to the next level with our
                                        top-notch vehicles for your cross-country adventures.
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', }}>
                                <MonetizationOn sx={{ fontSize: '100px' }} />
                                <Box sx={{width: '100%'}}>
                                    <Typography variant='h3' component='h1'
                                        sx={{
                                            fontFamily: 'Rubik',
                                            fontWeight: 700,
                                            fontSize: 25
                                        }}
                                    >
                                        All Inclusive Pricing
                                    </Typography>
                                    <Typography variant='p' component='p'
                                        sx={{
                                            color: 'grey',
                                            fontFamily: 'Rubik',
                                            fontWeight: 400,
                                            lineHeight: 1.6,
                                        }} >
                                        Get everything you need in one convenient,
                                        transparent price with our all-inclusive pricing policy.
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex' }}>
                                <CurrencyExchange sx={{ fontSize: '100px' }} />
                                <Box sx={{width: '100%'}}>
                                    <Typography variant='h3' component='h1'
                                        sx={{
                                            fontFamily: 'Rubik',
                                            fontWeight: 700,
                                            fontSize: 25,
                                            bgcolor: 'blueviolet'
                                        }}
                                    >
                                        No Hidden Charges
                                    </Typography>
                                    <Typography variant='p' component='p'
                                        sx={{
                                            color: 'grey',
                                            fontFamily: 'Rubik',
                                            fontWeight: 400,
                                            lineHeight: 1.6,
                                            bgcolor: 'ButtonHighlight'
                                        }} >
                                        Enjoy peace of mind with our no hidden charges policy.
                                        We believe in transparent and honest pricing.
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </div>
    )
}
