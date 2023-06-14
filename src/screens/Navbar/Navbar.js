import React from 'react'
import { AppBar, GlobalStyles, CssBaseline, Toolbar, Typography, Button, Divider, Link } from '@mui/material'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {

    const drawerWidth = 240;
    const navItems = ['Home', 'Contact', 'Testimonials', 'About'];


    const navigate = useNavigate();


    const handleHome = () => {
        navigate("/")
    };
    const handleContact = () => {
        navigate("/contact")
    };
    const handleAbout = () => {
        navigate("/about")
    };
    const handleTestimonials = () => {
        navigate("/testimonials")
    };

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant='h5' component='h1' color='primary' noWrap sx={{ color: '#c3073f', my: 2 }}>
                <span style={{ fontWeight: 700, }}>Car</span>Rental
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center', fontFamily: 'Rubik' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
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
                    <Typography variant='h5' component='h1' color='primary' noWrap
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
                                <Link onClick={handleHome} sx={{ textDecoration: 'none', mb: 1.5, fontFamily: 'Rubik', mt: 1, fontWeight: 700, color: 'black', ':hover': { color: '#c3073f', transition: '0.3s' }, cursor: 'pointer' }}>
                                    Home
                                </Link>
                                <Link onClick={handleContact} sx={{ textDecoration: 'none', mb: 1.5, fontFamily: 'Rubik', fontWeight: 700, color: 'black', ':hover': { color: '#c3073f', transition: '0.3s' }, cursor: 'pointer' }}>
                                    Contact
                                </Link>
                                <Link onClick={handleTestimonials} sx={{ textDecoration: 'none', mb: 1.5, fontFamily: 'Rubik', fontWeight: 700, color: 'black', ':hover': { color: '#c3073f', transition: '0.3s' }, cursor: 'pointer' }}>
                                    Testimonials
                                </Link>
                                <Link onClick={handleAbout} sx={{ textDecoration: 'none', mb: 1.5, fontFamily: 'Rubik', fontWeight: 700, color: 'black', ':hover': { color: '#c3073f', transition: '0.3s' }, cursor: 'pointer' }}>
                                    About
                                </Link>
                                
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
                    {drawer}
                </Drawer>
            </Box>
        </div>
    )
}


