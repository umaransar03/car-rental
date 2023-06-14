import React from 'react'
import { AppBar, GlobalStyles, CssBaseline, Toolbar, Typography, Button } from '@mui/material'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useGeneralContext } from '../Context/GeneralContext';
import { MobileNav } from './MobileNav';

export const Navbar = () => {

    const {
        handleContact,
        handleAbout,
        handleHome,
        handleTestimonials
    } = useGeneralContext();

    const drawerWidth = 240;

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const mobileNav = (
        <MobileNav handleDrawerToggle={handleDrawerToggle} />
    );


    return (
        <div>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
            <CssBaseline />
            <AppBar
                component='nav'
                posittion='static'
                color='default'
                elevation={0}
                sx={{ background: 'none' }}
            >
                <Toolbar sx={{ flexWrap: 'wrap' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ display: { md: 'none' }, px: 1.5 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box sx={{ display: { md: 'none', } }}>
                            <Button
                                color='primary'
                                variant='button'
                                sx={{ my: 1, fontFamily: 'Rubik', color: '#c3073f', fontWeight: 700 }}
                            >
                                Sign In
                            </Button>
                            <Button
                                color='primary'
                                variant='contained'
                                sx={{ my: 1, mx: 1, fontFamily: 'Rubik', fontWeight: 700 }}
                            >
                                Register
                            </Button>
                        </Box>
                    </Box>
                    <Typography variant='h5' component='h1' color='primary' noWrap onClick={handleHome}
                        sx={{
                            display: { xs: 'none', md: 'block' },
                            flexGrow: 1,
                            fontFamily: "Rubik",
                            cursor: 'pointer'
                        }} >
                        <span style={{ fontWeight: 700, }}>Car</span>Rental
                    </Typography>
                    <nav>
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, my: 1, mx: 1, fontFamily: 'Rubik' }}>
                            <Box sx={{ my: 1, }}>
                                <Button onClick={handleHome} sx={{ color: '#000000', fontWeight: 700 }}>
                                    Home
                                </Button>
                                <Button onClick={handleContact} sx={{ color: '#000000', fontWeight: 700 }}>
                                    Contact
                                </Button>
                                <Button onClick={handleTestimonials} sx={{ color: '#000000', fontWeight: 700 }}>
                                    Testimonials
                                </Button>
                                <Button onClick={handleAbout} sx={{ color: '#000000', fontWeight: 700 }}>
                                    About
                                </Button>
                            </Box>
                            <Button
                                color='primary'
                                variant='button'
                                sx={{ my: 1, fontFamily: 'Rubik', color: '#c3073f', fontWeight: 700 }}
                            >
                                Sign In
                            </Button>
                            <Button
                                color='primary'
                                variant='contained'
                                sx={{ my: 1, mx: 1, fontFamily: 'Rubik', fontWeight: 700 }}
                            >
                                Register
                            </Button>
                        </Box>
                    </nav>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {mobileNav}
                </Drawer>
            </Box>
        </div>
    )
}


