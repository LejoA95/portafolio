"use client"
import * as React from 'react';
import { Box, IconButton, List, ListItem, ListItemButton, Typography } from '@mui/material';
import Grow from '@mui/material/Grow';
import { Close } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';


function MobileMenuButton({ onClick, navActive }) {
    return (
        <Grow in={true} {...(true ? { timeout: 2000 } : {})}>
            <Box className='content_button-menu' sx={{ position: 'absolute', top: '1em', right: '1em', border: '1px solid #70707079', background: '#ffffff17', borderRadius: '.5em', WebkitBackdropFilter: 'blur(20px)', backdropFilter: 'blur(50px)', overflow: 'hidden', display: { xs: 'flex', sm: 'none' } }} zIndex='90000000'>
                <IconButton onClick={onClick}>
                    {navActive ? <Close color='blanco' /> : <MenuIcon color='blanco' />}
                </IconButton>
            </Box>
        </Grow>
    );
}

function NavListItem({ onClick, selected, text }) {
    return (
        <ListItem disablePadding sx={{ width: 'auto' }}>
            <ListItemButton onClick={onClick}>
                <Typography variant='h6Small' color={selected ? '#5b3700' : 'primary.contrastText'} sx={{ minWidth: '100%', textAlign: 'center', padding: '.5em 0' }}>
                    {text}
                </Typography>
            </ListItemButton>
        </ListItem>
    );
}



export default function Navbar({ handleListItemClick, section, handleMenuMobile, navMobile }) {

    return (
        <>
            <MobileMenuButton
                onClick={handleMenuMobile}
                navActive={navMobile}
            />
            {/* menu mobile */}
            {navMobile ?
                <>
                    <Grow in={navMobile} {...(navMobile ? { timeout: 1000 } : {})}>
                        <div style={{ position: 'absolute', top: '0', left: '0', width: '100vw', height: '100vh', zIndex: '80000000', backgroundColor: '#01304754' }}></div>
                    </Grow>
                    <Grow in={navMobile} {...(navMobile ? { timeout: 1000 } : {})}>
                        <Box sx={{ position: 'absolute', border: '1px solid #70707079', background: '#ffffff17', borderRadius: '.5em', WebkitBackdropFilter: 'blur(20px)', backdropFilter: 'blur(50px)', display: { xs: 'flex', sm: 'none' }, maxWidth: { xs: '300px', xm: ' 500px', sm: '800px' }, overflow: 'hidden' }} zIndex='80000000'>
                            <List>
                                <NavListItem onClick={() => handleListItemClick(0, 'home')} text='Home' />
                                <NavListItem onClick={() => handleListItemClick(0, 'about')} text='Sobre mí' />
                                <NavListItem onClick={() => handleListItemClick(1, 'skills')} text='Skills' />
                                <NavListItem onClick={() => handleListItemClick(2, 'proyectos')} text='Proyectos' />
                                <NavListItem onClick={() => handleListItemClick(3, 'formación')} text='Formación' />
                                <NavListItem onClick={() => handleListItemClick(4, 'info')} text='Info' />
                                <NavListItem onClick={() => handleListItemClick(0, 'contato')} text='Contacto' />
                            </List>
                        </Box>
                    </Grow>
                </> : null
            }
            {/* menu escritorio */}
            <Grow in={true} {...(true ? { timeout: 2000 } : {})}>
                <Box sx={{ position: 'absolute', bottom: { xs: '1.5em', sm: '3em' }, border: '1px solid #70707079', background: '#ffffff17', borderRadius: '.5em', WebkitBackdropFilter: 'blur(20px)', backdropFilter: 'blur(50px)', maxWidth: '800px', display: { xs: 'none', sm: 'flex' } }} zIndex='90000000'>
                    <List sx={{ display: 'flex', p: '0', flexWrap: 'no-wrap' }}>
                        <NavListItem onClick={() => handleListItemClick(0, 'home')} selected={section === 3} text='Home' />
                        <NavListItem onClick={() => handleListItemClick(0, 'about')} selected={section === 3} text='Sobre mí' />
                        <NavListItem onClick={() => handleListItemClick(1, 'skills')} selected={section === 3} text='Skills' />
                        <NavListItem onClick={() => handleListItemClick(2, 'proyectos')} selected={section === 3} text='Proyectos' />
                        <NavListItem onClick={() => handleListItemClick(3, 'formación')} selected={section === 3} text='Formación' />
                        <NavListItem onClick={() => handleListItemClick(4, 'info')} selected={section === 3} text='Info' />
                        <NavListItem onClick={() => handleListItemClick(0, 'contacto')} selected={section === 3} text='Contacto' />
                    </List>
                </Box>
            </Grow>
        </>
    )
}
