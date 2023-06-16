import React, { useState, useEffect } from 'react';
import {
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TableContainer,
  Box,
  Container,
  Typography
} from '@mui/material';
import { CarDataArray } from './carDataArray';



export const CarData = () => {
  const [selectedCarIndex, setSelectedCarIndex] = useState(null);

  const handleCarButtonClick = (index) => {
    setSelectedCarIndex(index);
  };

  useEffect(() => {
    // Code to execute when the component mounts
    setSelectedCarIndex(0); // Set the first car as the selected car
  }, []);

  return (
    <div id="detailsSection" >
      <Container maxWidth='xl' sx={{ mb: 20 }}>
        <Box sx={{ textAlign: 'center', mb: 10, }}>
          <Typography variant='h5' component='h1'
            sx={{
              fontFamily: 'Rubik',
              fontWeight: 500,
              mb: 1
            }}>
            Vehicle Models
          </Typography>
          <Typography variant='h3' component='h1'
            sx={{
              fontFamily: 'Rubik',
              fontWeight: 700
            }}>
            Our rental fleet
          </Typography>
          <Typography variant='p' component='p'
            sx={{
              color: 'grey',
              fontFamily: 'Rubik',
              fontWeight: 400,
              lineHeight: 1.6,
              m: 2,
            }} >
            Choose from a variety of our amazing
            vehicles to rent for your next adventure or business trip.
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, justifyContent: { xs: 'center', lg: 'space-between' }, alignItems: { xs: 'center', lg: 'none' } }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', width: { xs: '100%', lg: 'auto', bgcolor: 'red' } }}>
            {CarDataArray.map((car, index) => (
              <Button fullWidth size='large' key={index} variant="contained" onClick={() => handleCarButtonClick(index)}
                sx={{
                  mb: 1.5,
                  width: { xs: 'auto', lg: '16rem' },
                  height: '3.85rem',
                  bgcolor: '#f8f8f8',
                  color: '#c3073f',
                  fontWeight: 700,
                  fontSize: { xs: 22, lg: 16 },
                  borderColor: '#c3073f',
                  border: 1,
                  ':hover': { bgcolor: '#c3073f', color: 'white', }
                }}
              >
                {car.name}
              </Button>
            ))}
          </Box>
          <Box sx={{ my: 8 }}>
            {CarDataArray.map((car, index) => (
              <img
                key={index}
                src={car.imageSrc}
                alt={`Car ${index + 1}`}
                style={{ display: selectedCarIndex === index ? 'block' : 'none', width: '100%' }}
              />
            ))}
          </Box>
          {selectedCarIndex !== null && (
            <Box sx={{ width: { xs: '100%', lg: '16rem' }, mb: 1.5, bgcolor: 'yellow' }}>
              <Paper
                sx=
                {{
                  padding: '10px',
                  borderRadius: 0,
                  backgroundColor: '#c3073f',
                  fontSize: 25,
                  fontWeight: 700,
                  color: 'white',
                  textAlign: 'center'
                }}>
                ${CarDataArray[selectedCarIndex].price} <span style={{ fontWeight: 400 }}>/ rent per day</span>
              </Paper>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {Object.entries(CarDataArray[selectedCarIndex]).map(([key, value]) => {
                      if (key !== 'imageSrc' && key !== 'name' && key !== 'price') {
                        return (
                          <TableRow key={key}>
                            <TableCell sx={{ fontWeight: 500 }}>{key}</TableCell>
                            <TableCell sx={{ fontWeight: 700 }}>
                              {value}
                            </TableCell>
                          </TableRow>
                        );
                      }
                      return null;
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          )}
        </Box>
      </Container>
    </div>
  );
};
