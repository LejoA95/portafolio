import * as React from 'react';
import { Box, Typography } from '@mui/material';
import Grow from '@mui/material/Grow';

export default function About({ home }) {
    return (
        <Box
            sx={{
                position: 'absolute',
                left: '0',
                top: { xs: '15%', xm: 'auto' },
                p: '1em',
                width: { xs: '100%', xm: '50%' },
                display: 'flex',
                justifyContent: 'flex-end',
                zIndex: 8000000,
            }}
        >
            <Grow in={home === 'about'} timeout={2000}>
                <Box
                    sx={{
                        width: '100%',
                        maxWidth: { xs: '100%', xm: '450px' },
                        p: '1em',
                        border: '1px solid #70707079',
                        background: '#01203060',
                        borderRadius: '.5em',
                        WebkitBackdropFilter: 'blur(60px)',
                        backdropFilter: 'blur(60px)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1em',
                    }}
                >
                    <Typography variant='h4' color='primary.contrastText' fontSize={{ xs: '25px', xm: '32px' }}>Sobre mí</Typography>
                    <Typography variant='body1' color='primary.contrastText' fontSize={{ xs: '15px', xm: '16px' }}>
                        A inicios de 2023, una dificultad económica y mi curiosidad me llevaron a descubrir una nueva pasión: la programación. Comencé de manera autodidacta y, con la ayuda de un amigo programador, fui desarrollando mis habilidades. Ahora, estoy certificándome con ONE Oracle Next Education y Alura en Front-end. <br /><br />Este portafolio muestra los conocimientos que he adquirido en desarrollo web, diseño y creación de objetos 3D. Si te gusta lo que ves y quieres acompañarme en este viaje, sígueme en mis redes sociales o contáctame. Estoy abierto a nuevas oportunidades y proyectos emocionantes.
                    </Typography>
                </Box>
            </Grow>
        </Box>
    );
}
