import { Container, Box, Typography, Card, CardContent, Avatar } from '@mui/material'
import React from 'react'
import avt1 from '../../images/4.png'
import avt2 from '../../images/5.png'



export const Testimonials = (props) => {
    return (
        <div>
            <Container maxWidth='xl' sx={{ bgcolor: props.white === 'white' ? 'none' : '#f8f8f8' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 10 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                        <Box sx={{ width: {xs: 'auto', md: '60%'}, textAlign: 'center' }}>
                            <Typography variant='h5' component='h1'
                                sx={{
                                    fontFamily: 'Rubik',
                                    fontWeight: 500,
                                    fontSize: 22,
                                    mb: 0.5
                                }}>
                                Reviewed by People
                            </Typography>
                            <Typography variant='h3' component='h1'
                                sx={{
                                    fontFamily: 'Rubik',
                                    fontWeight: 700,
                                    fontSize: 45,
                                    // width: '75%'
                                }}>
                                Client's Testimonials
                            </Typography>
                            <Typography variant='p' component='p'
                                sx={{
                                    color: 'grey',
                                    fontFamily: 'Rubik',
                                    fontWeight: 400,
                                    lineHeight: 1.6,
                                    my: 1,
                                    // width: '70%'
                                }} >
                                Discover the positive impact we've made on the our clients by
                                reading through their testimonials. Our clients have experienced
                                our service and results, and they're eager to share their
                                positive experiences with you.
                            </Typography>
                        </Box>
                        <Box sx={{display: 'flex', flexDirection: {xs: 'column', md: 'row'}, mt: 5}}>
                            <Card elevation={20} sx={{p: {xs: 1, md: 3}, m: {xs: 0, md: 3}, width: '100%'}}>
                                <CardContent>
                                    <Typography variant='h5' sx={{fontWeight: 500}}>
                                    <span style={{color: '#c3073f'}}>"</span>We rented a car from this website and had an amazing experience!
                                        The booking was easy and the rental rates were very affordable.<span style={{color: '#c3073f'}}>"</span>
                                    </Typography>
                                    <Box sx={{display: 'flex', mt: 4}}>
                                        <Avatar alt="umar" sx={{width: 70, height: 70}} src={avt1} />
                                        <Box sx={{p: 1, ml: 1}}>
                                            <Typography variant='h6' sx={{ fontSize: 20, fontWeight: 700, fontFamily: 'Rubik', }} >Umar Ansar</Typography>
                                            <Typography variant='p' sx={{fontFamily: 'Rubik',}}>Mandi Bahauddin</Typography>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                            <Card elevation={20} sx={{p: {xs: 1, md: 3}, m: {xs: '40px 0 0 0', md: 3}, width: '100%'}}>
                                <CardContent>
                                    <Typography variant='h5' sx={{fontWeight: 500}}>
                                    <span style={{color: '#c3073f'}}>"</span>The car was in great condition and made our trip even better. 
                                    Highly recommend for this car rental website!<span style={{color: '#c3073f'}}>"</span>
                                    </Typography>
                                    <Box sx={{display: 'flex', mt: 4}}>
                                        <Avatar alt="umar" sx={{width: 70, height: 70}} src={avt2} />
                                        <Box sx={{ p: 1, ml: 1}}>
                                            <Typography variant='h6' sx={{ fontSize: 20, fontWeight: 700, fontFamily: 'Rubik', }} >Umar Ansar</Typography>
                                            <Typography variant='p' sx={{fontFamily: 'Rubik',}}>Islamabad</Typography>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </div>
    )
}
