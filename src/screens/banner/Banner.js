import { Container, Typography, Box } from '@mui/material'
import React from 'react'
import banner from '../../images/banner.png'


export const Banner = () => {
    return (
        <div>
            <Container maxWidth='xl' sx={{ bgcolor: '#2d2d2d', mt: 5, p: 8 }}>
                <Typography variant='h2' component='h1'
                    sx={{
                        fontFamily: 'Rubik',
                        fontWeight: 700,
                        textAlign: 'center',
                        color: 'white',
                        fontSize: 55
                    }}>
                    Save big with our cheap car rental!
                </Typography>
                <Typography variant='h5' component='h1'
                    sx={{
                        fontFamily: 'Rubik',
                        fontWeight: 500,
                        textAlign: 'center',
                        mt: 2,
                        color: 'white'
                    }}>
                    Top Airports. Local Suppliers. <span style={{ color: '#c3073f' }}>24/7</span> Support.
                </Typography>
            </Container>
            <Box sx={{m: '5rem'}}>
                <img src={banner} alt='banner' style={{width: '100%', height: '100%'}} />
            </Box>
        </div>
    )
}
