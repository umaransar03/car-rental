import { Button, Dialog, DialogActions, DialogContentText, DialogTitle, Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Close, Info, LocationCity, LocationOn } from '@mui/icons-material';

const Dialogue = (props) => {

    return (
        <div>
            <Dialog
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth='md'
            >
                <DialogTitle id="alert-dialog-title"
                    sx={{
                        bgcolor: '#c3073f',
                        color: 'white',
                    }}>
                    <Box variant='h3' sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography
                            sx={{
                                fontSize: 22,
                                fontFamily: 'Rubik',
                                fontWeight: 600
                            }}
                        >
                            Complete Reservation
                        </Typography>
                        <Close sx={{ fontSize: 30, cursor: 'pointer' }} onClick={props.handleClose} />
                    </Box>
                </DialogTitle>
                <Box sx={{ p: 3 }}>
                    <Typography color={'primary.main'} variant='h4' sx={{ fontSize: 30, fontWeight: 600, fontFamily: 'Rubik' }}>
                        <Info /> Upon completing this reservation enquiry, you will receive:
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                        <Typography variant='p' sx={{ fontFamily: 'Rubik', color: 'grey', fontWeight: 500 }}>
                            Your rental voucher to produce on arrival at the rental desk and a
                            toll-free customer support number.
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', px: 3 }}>
                    <Box>
                        <Typography variant='h5' color={'primary'}
                            sx={{
                                fontSize: 20,
                                fontFamily: 'Rubik',
                                fontWeight: 700,
                            }}
                        >
                            Location & Date
                        </Typography>
                        <Box sx={{ mb: 2 }}>
                            <Box sx={{ display: 'flex', mb: 0.8 }}>
                                <LocationOn sx={{ fontSize: 18, mt: 0.4 }} />
                                <Typography variant='h6' sx={{ fontSize: 16, fontFamily: 'Rubik', fontWeight: 600 }}>
                                    Pick-Up Date & Time
                                </Typography>
                            </Box>
                            <Typography variant='p'
                                sx={{
                                    color: 'grey',
                                    fontSize: 16,
                                    fontFamily: 'Rubik',
                                    fontWeight: 600,
                                    p: 2.3
                                }}>
                                {props.pickTime} /{" "}
                                <input type="time" className="input-time"></input>
                            </Typography>
                        </Box>
                        <Box sx={{ mb: 2 }}>
                            <Box sx={{ display: 'flex', mb: 0.8 }}>
                                <LocationOn sx={{ fontSize: 18, mt: 0.4 }} />
                                <Typography variant='h6' sx={{ fontSize: 16, fontFamily: 'Rubik', fontWeight: 600 }}>
                                    Drop-Off Date & Time
                                </Typography>
                            </Box>
                            <Typography variant='p'
                                sx={{
                                    color: 'grey',
                                    fontSize: 16,
                                    fontFamily: 'Rubik',
                                    fontWeight: 600,
                                    p: 2.3
                                }}>
                                {props.dropTime} /{" "}
                                <input type="time" className="input-time"></input>
                            </Typography>
                        </Box>
                        <Box sx={{ mb: 2 }}>
                            <Box sx={{ display: 'flex', mb: 0.8 }}>
                                <LocationCity sx={{ fontSize: 20, mt: 0.4 }} />
                                <Typography variant='h6' sx={{ fontSize: 16, fontFamily: 'Rubik', fontWeight: 600 }}>
                                    Pick-Up Location
                                </Typography>
                            </Box>
                            <Typography variant='p'
                                sx={{
                                    color: 'grey',
                                    fontSize: 16,
                                    fontFamily: 'Rubik',
                                    fontWeight: 600,
                                    p: 2.4
                                }}>
                                {props.pickUp}
                            </Typography>
                        </Box>
                        <Box sx={{ bgcolor: '' }}>
                            <Box sx={{ display: 'flex', mb: 0.8 }}>
                                <LocationCity sx={{ fontSize: 20, mt: 0.4 }} />
                                <Typography variant='h6' sx={{ fontSize: 16, fontFamily: 'Rubik', fontWeight: 600 }}>
                                    Drop-Off Location
                                </Typography>
                            </Box>
                            <Typography variant='p'
                                sx={{
                                    color: 'grey',
                                    fontSize: 16,
                                    fontFamily: 'Rubik',
                                    fontWeight: 600,
                                    p: 2.4
                                }}>
                                {props.dropOff}
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{textAlign: 'center'}}>
                        <Typography variant='h5' sx={{ fontSize: 20, fontFamily: 'Rubik', fontWeight: 500 }}>
                            Car-<span style={{ color: '#c3073f', fontWeight: 700 }}>{props.carType}</span>
                        </Typography>
                        {props.imgUrl && <img src={props.imgUrl} alt="car_img" />}
                    </Box>
                </Box>
                <DialogContentText sx={{ p: 5 }}>
                    <Typography variant="h6" gutterBottom>
                        Personal Information
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="firstName"
                                name="firstName"
                                label="First name"
                                fullWidth
                                autoComplete="given-name"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="lastName"
                                name="lastName"
                                label="Last name"
                                fullWidth
                                autoComplete="family-name"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="address1"
                                name="address1"
                                label="Address line 1"
                                fullWidth
                                autoComplete="shipping address-line1"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="address2"
                                name="address2"
                                label="Address line 2"
                                fullWidth
                                autoComplete="shipping address-line2"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="city"
                                name="city"
                                label="Phone Number"
                                fullWidth
                                autoComplete="shipping address-level2"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="state"
                                name="state"
                                label="Email"
                                fullWidth
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="zip"
                                name="zip"
                                label="City"
                                fullWidth
                                autoComplete="shipping postal-code"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="country"
                                name="country"
                                label="Zip / Postal code"
                                fullWidth
                                autoComplete="shipping country"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                                label="Please send me latest news and updates"
                            />
                        </Grid>
                    </Grid>
                </DialogContentText>
                <DialogActions sx={{ pr: 4 }}>
                    <Button variant='contained' size='large' sx={{ mb: 2 }}>Register</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Dialogue;