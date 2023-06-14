import React from 'react'
import {Typography, Divider} from '@mui/material'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useGeneralContext } from '../Context/GeneralContext';

export const MobileNav = (props) => {

    const {
        handleContact,
        handleAbout,
        handleHome,
        handleTestimonials
    } = useGeneralContext();

  return (
    <div>
        <Box onClick={props.handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography onClick={handleHome} variant='h5' component='h1' color='primary' noWrap
            sx={{ color: '#c3073f', my: 2, cursor: 'pointer' }}>
                <span style={{ fontWeight: 700, }}>Car</span>Rental
            </Typography>
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={handleHome} sx={{ textAlign: 'center', fontFamily: 'Rubik' }}>
                        <ListItemText primary={"Home"} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={handleContact} sx={{ textAlign: 'center', fontFamily: 'Rubik' }}>
                        <ListItemText primary={"Contact"} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={handleTestimonials} sx={{ textAlign: 'center', fontFamily: 'Rubik' }}>
                        <ListItemText primary={"Testimonials"} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={handleAbout} sx={{ textAlign: 'center', fontFamily: 'Rubik' }}>
                        <ListItemText primary={'About'} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    </div>
  )
}
