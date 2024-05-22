"use client"
import React, { useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Canvas } from 'react-three-fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { MotionConfig } from 'framer-motion';
import { World } from '@/components/objects3d/world';
import { Box, Typography, Grow } from '@mui/material';
// import About from '@/components/about/page';
import About from '../components/about/page'
import Presentation from '@/components/presentation/page';
import ModalWelcome from '@/components/modalWelcome/page';
import Navbar from '@/components/navbar/page';
import Contact from '../components/Contacto/page';

export default function Home() {
    const [section, setSection] = useState(1);
    const [home, setHome] = useState('home');
    const [modal, setModal] = React.useState(true)
    const [closeModal, setCloseModal] = React.useState(false)
    const [navMobile, setNavMobile] = useState(false);

    const text = '<Alejandro Achicanoy />';

    // secciones del menu de navegacion
    const handleListItemClick = (section, name) => {
        setHome(name);
        setSection(section);
        setNavMobile(false);
    };

    // cerrar modal de bienvenida
    const handleModal = () => {
        setModal(false)
        setSection(0)
    };

    // menu mobile
    const handleMenuMobile = () => {
        setNavMobile(prev => !prev);
    };

    return (
        <Grid container>
            <Grid xs={12} sm={12} className='content_page'>
                <MotionConfig transition={{ type: "spring", mass: 5, stiffness: 50, damping: 50, restDelta: 0.0001 }}>
                    {modal && (
                        <ModalWelcome
                            closeModal={closeModal}
                            handleModal={handleModal}
                            setCloseModal={setCloseModal}
                        />
                    )}
                    <Navbar
                        handleListItemClick={handleListItemClick}
                        section={section}
                        handleMenuMobile={handleMenuMobile}
                        navMobile={navMobile}
                    />
                    <Grow in={true} timeout={2000}>
                        <Box
                            className="caja_titulo"
                            sx={{
                                top: { xs: '1.6em', sm: '2em' },
                                p: { xs: '0 1em', sm: '0 2em' }
                            }}>
                            <Typography variant='h6' component='span' color='primary.contrastText'>
                                {text}
                            </Typography>
                        </Box>
                    </Grow>
                    {section === 0 && (
                        <>
                            <Presentation home={home} />
                            <About home={home} />
                            <Contact home={home} />
                        </>
                    )}
                    <Canvas shadows camera={{ zoom: 2, position: [0, 0, 5] }}>
                        <World section={section} />
                        <ambientLight intensity={0.5} />
                        <Stars factor={1.5} />
                        <color attach='background' args={["#002"]} />
                    </Canvas>
                </MotionConfig>
            </Grid>
        </Grid>
    );
}