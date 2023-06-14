import React from 'react'
import { Testimonials } from '../Testimonials/Testimonials'
import { Box, Typography } from '@mui/material'
import { Container } from '@mui/system'
import { Navbar } from '../Navbar/Navbar'
import bgImage from '../../images/map.jpg'
import { Footer } from '../footer/Footer'
import './TestimonialsPage.css'


export const TestimonialsPage = () => {
    return (
        <div>
            <Navbar />
            <Container maxWidth='lg' sx={{ mb: 10, textAlign: { xs: 'center', md: 'left' } }} >
                <img className="Map" src={bgImage} alt="map" />
                <Box sx={{ pt: 16 }}>
                    <Typography varinat='h4' color='primary'
                        sx={{
                            fontFamily: 'Rubik',
                            fontWeight: 700,
                            fontSize: 42
                        }}
                    >

                        Testimonials
                    </Typography>
                    <Typography varinat='h4' color='primary'
                        sx={{
                            fontWeight: 500,
                            fontSize: 18
                        }}
                    >
                        Home / Testimonials
                    </Typography>
                </Box>
            </Container>
            <Testimonials white='white' />
            <Footer />
        </div>
    )
}
