import { Box, Typography, Link, TextField, Button } from '@mui/material'
import { Container } from '@mui/system'
import { Navbar } from '../Navbar/Navbar'
import bgImage from '../../images/bg.png'
import { Footer } from '../footer/Footer'
import React from 'react'
import './Contact.css'
import { ForwardToInbox } from '@mui/icons-material'

export const Contact = () => {
    return (
        <div>
            <Navbar />
            <Container maxWidth='lg' sx={{ mb: 10, textAlign: { xs: 'center', md: 'left' } }} >
                <img className="bg-image" src={bgImage} alt="bg-shape" />
                <Box sx={{ pt: 16 }}>
                    <Typography varinat='h4' color='primary'
                        sx={{
                            fontFamily: 'Rubik',
                            fontWeight: 700,
                            fontSize: 42
                        }}
                    >
                        Contact
                    </Typography>
                    <Typography varinat='h4' color='primary'
                        sx={{
                            fontWeight: 500,
                            fontSize: 18
                        }}
                    >
                        Home / Contact
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: { xs: 'block', md: 'grid' },
                        gridTemplateColumns: '0.5fr 1fr',
                        mt: { xs: 7, md: 14 },
                        p: { xs: 8, md: 0 },
                    }}>
                    <Box sx={{ pr: 0 }}>
                        <Typography varinat='h4'
                            sx={{
                                fontFamily: 'Rubik',
                                fontWeight: 700,
                                fontSize: 42
                            }}
                        >
                            Need additional information?
                        </Typography>
                        <Typography variant='p' component='p'
                            sx={{
                                color: 'grey',
                                fontFamily: 'Rubik',
                                fontWeight: 500,
                                lineHeight: 1.6,
                                my: '1.5rem'
                            }} >
                            A multifaceted professional skilled in multiple fields of research,
                            development as well as a learning specialist. Over 15 years of experience.
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                            <Link sx={{ textDecoration: 'none', mb: 1.5, fontFamily: 'Rubik', mt: 1, fontWeight: 700, color: 'black', ':hover': { color: '#c3073f', transition: '0.3s' }, cursor: 'pointer' }}>
                                +92-1520-1700
                            </Link>
                            <Link sx={{ textDecoration: 'none', mb: 1.5, fontFamily: 'Rubik', fontWeight: 700, color: 'black', ':hover': { color: '#c3073f', transition: '0.3s' }, cursor: 'pointer' }}>
                                carrental@gmail.com
                            </Link>
                            <Link sx={{ textDecoration: 'none', mb: 1.5, color: 'black', fontSize: 14, fontWeight: 400, ':hover': { color: '#c3073f', transition: '0.3s' }, cursor: 'pointer' }}>
                                Website by umarAnsar
                            </Link>
                        </Box>
                    </Box>
                    <Box component='form' sx={{ ml: { xs: 0, md: 14 }, mt: { xs: 5, md: 0 } }} >
                        <Typography variant='h5' component='h5'
                            sx={{
                                fontFamily: 'Rubik',
                                fontSize: 16,
                                fontWeight: 500,
                                my: 1.5
                            }}>
                            Full Name<span style={{ color: '#c3073f' }}> *</span>
                        </Typography>
                        <TextField
                            label='e.g. "Umar Ansar"'
                            id="fullName"
                            name="fullName"
                            fullWidth
                            autoComplete="full-name"
                            variant="outlined"
                        />
                        <Typography variant='h5' component='h5'
                            sx={{
                                fontFamily: 'Rubik',
                                fontSize: 16,
                                fontWeight: 500,
                                my: 1.5
                            }}>
                            Email<span style={{ color: '#c3073f' }}> *</span>
                        </Typography>
                        <TextField
                            label='youremail@example.com'
                            id="email"
                            name="email"
                            fullWidth
                            autoComplete="email"
                            variant="outlined"
                        />
                        <Typography variant='h5' component='h5'
                            sx={{
                                fontFamily: 'Rubik',
                                fontSize: 16,
                                fontWeight: 500,
                                my: 1.5
                            }}>
                            How can we help you<span style={{ color: '#c3073f' }}> *</span>
                        </Typography>
                        <textarea className='textArea' placeholder="Write Here.."></textarea>
                        <Button variant="contained" fullWidth size="large" ><ForwardToInbox sx={{ mr: 0.5 }} /> Send Message</Button>
                    </Box>
                </Box>
            </Container>
            <Footer />
        </div>
    )
}
