import { Button, Dialog, DialogActions, DialogContentText, DialogTitle, Box, Divider } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Close, Info, LocationCity, LocationOn } from '@mui/icons-material';
import { useGeneralContext } from '../Context/GeneralContext';
import { Information } from './Information';

const Dialogue = (props) => {

    const { pickTime, dropTime } = useGeneralContext();

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
                <Divider/>
                <Box sx={{ display: {xs: 'block', md: 'flex'}, mt: 3, textAlign: {xs: 'center', md: 'left'}, justifyContent: 'space-between', px: 3 }}>
                    <Box>
                        <Typography variant='h5' color={'primary'}
                            sx={{
                                fontSize: 20,
                                fontFamily: 'Rubik',
                                fontWeight: 700,
                                mb: 2
                            }}
                        >
                            Location & Date
                        </Typography>
                        <Box sx={{ mb: 2}}>
                            <Box sx={{ display: 'flex', mb: 0.8, justifyContent: {xs: 'center', md: 'left'}  }}>
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
                                {pickTime} /{" "}
                                <input type="time" className="input-time"></input>
                            </Typography>
                        </Box>
                        <Box sx={{ mb: 2 }}>
                            <Box sx={{ display: 'flex', mb: 0.8, justifyContent: {xs: 'center', md: 'left'} }}>
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
                                {dropTime} /{" "}
                                <input type="time" className="input-time"></input>
                            </Typography>
                        </Box>
                        <Box sx={{ mb: 2 }}>
                            <Box sx={{ display: 'flex', mb: 0.8, justifyContent: {xs: 'center', md: 'left'} }}>
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
                            <Box sx={{ display: 'flex', mb: 0.8, justifyContent: {xs: 'center', md: 'left'} }}>
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
                    <Divider sx={{display: {xs: 'block', md: 'none'}, mt: {xs: 3, md: 0}}} />
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant='h5' sx={{ fontSize: 20, mb: 2, mt: {xs: 5, md: 0}, fontFamily: 'Rubik', fontWeight: 500 }}>
                            Car-<span style={{ color: '#c3073f', fontWeight: 700 }}>{props.carType}</span>
                        </Typography>
                            {props.imgUrl && <img src={props.imgUrl} alt="car_img" style={{width:'100%'}} />}
                    </Box>
                </Box>
                <DialogContentText sx={{ p: 5 }}>
                    <Information/>
                </DialogContentText>
                <DialogActions sx={{ pr: 4 }}>
                    <Button variant='contained' size='large' sx={{ mb: 2 }}>Register</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Dialogue;