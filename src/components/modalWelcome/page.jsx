"use client"
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Box, Button, Typography, Grow } from '@mui/material';


export default function ModalWelcome({ closeModal, handleModal, setCloseModal }) {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    clearInterval(timer);
                    setTimeout(() => {
                        setCloseModal(true);
                    }, 10);
                    return 100;
                }
                return prevProgress + 10;
            });
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);


    return (
        <Box className='content_modal absolute_100wh'>
            <Grow in={true} timeout={2000}>
                <Box className='title_welcome'>
                    <Typography variant='h1' color='primary.contrastText'>Bienvenidos</Typography>
                    <Typography variant='h5' component='h2' color='primary.contrastText'>a mi espacio</Typography>
                </Box>
            </Grow>
            {closeModal === true ?
                <Grow in={true} timeout={2000}>
                    <Button onClick={handleModal} sx={{ border: '1px solid #fefefe', p: '1em' }}>
                        <Typography variant='h6' component='h3' color='primary.contrastText'>Ingresar</Typography>
                    </Button>
                </Grow>
                :
                <Grow in={true} timeout={2000}>
                    <CircularProgress variant="determinate" color='secondary' value={progress} aria-label="Cargando, 70% completado" />
                </Grow>
            }
        </Box>
    )
}
