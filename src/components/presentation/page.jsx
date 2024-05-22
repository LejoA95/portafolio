import React from 'react';
import { Box, Typography, Grow } from '@mui/material';
import { Bebas } from '@/app/themes/fonts';

export default function Presentation({ home }) {
    return (
        <Grow in={home === 'home'} {...(home === 'home' ? { timeout: 2000 } : {})}>
            <Box
                sx={{
                    position: 'absolute',
                    left: '0',
                    top: { xs: '15%', sm: 'auto' },
                    p: '1em',
                    width: { xs: '100%', sm: '50%' },
                    display: 'flex',
                    justifyContent: 'flex-end',
                    zIndex: '8000000',
                }}
            >
                <Box sx={{ width: '100%', maxWidth: { xs: '100%', sm: '400px' } }}>
                    <Typography
                        variant="h3"
                        color="primary.contrastText"
                        fontSize={{ xs: '38px', sm: '38px' }}
                        sx={{ textAlign: { xs: 'center', sm: 'inherit' } }}
                    >
                        Hola, mi nombre es
                    </Typography>
                    <Typography
                        variant="h1"
                        fontSize={{ xs: '50px', sm: '50px' }}
                        sx={{
                            bgcolor: '#45C4B0',
                            p: '0 .5em',
                            textAlign: { xs: 'center', sm: 'inherit' },
                        }}
                        className={`${Bebas.className}`}
                    >
                        Alejandro Achicanoy
                    </Typography>
                    <Typography
                        variant="h3"
                        color="primary.contrastText"
                        fontSize={{ xs: '34px', sm: '34px' }}
                        sx={{ textAlign: { xs: 'center', sm: 'inherit' } }}
                    >
                        Desarrollador Web
                    </Typography>
                </Box>
            </Box>
        </Grow>
    );
}
