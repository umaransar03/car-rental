import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import appStore from '../../images/6.png'
import mobile from '../../images/8.png'
import { useState, useEffect } from 'react';



export const DownloadApp = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <div>
            <Container maxWidth='xl'>
                <Box sx={{
                    display: 'flex',
                }}>
                    <Box sx={{
                        p:{ xs: 8, md: '120px 0 0 0' }, display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'center',
                        alignItems: 'center'
                    }}>
                        <Box>
                            <Typography variant='h3' component='h1'
                                sx={{
                                    fontFamily: 'Rubik',
                                    fontWeight: 700,
                                    fontSize: 45,
                                    // width: '75%'
                                }}>
                                Download our app to get most out of it
                            </Typography>
                            <Typography variant='p' component='p'
                                sx={{
                                    color: 'grey',
                                    fontFamily: 'Rubik',
                                    fontWeight: 400,
                                    lineHeight: 1.6,
                                    my: 4,
                                    // width: '70%'
                                }} >
                                Thrown shy denote ten ladies though ask saw. Or by to he going think order event music.
                                Incommode so intention defective at convinced. Led income months itself and houses you.
                            </Typography>
                        </Box>
                        <img src={appStore} alt="appStore" style={{width: '60%', cursor: 'pointer'}} />
                    </Box>
                    <img src={mobile} alt="mobile" style={{ width: '50%', display: windowWidth > 900 ? 'block' : 'none' }} />
                </Box>
            </Container>
        </div >
    )
}
