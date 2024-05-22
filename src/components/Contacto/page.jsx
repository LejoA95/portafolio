"use client"
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Box, Grow } from '@mui/material';
import TextField from '@mui/material/TextField';
import { ButtonPpal, InputLight } from '../actions/page';

export default function Contact({ home }) {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        case: '',
        message: '',
    });
    const [sendForm, setSendForm] = useState(false);
    const [error, setError] = useState('');
    const [emailErr, setEmailErr] = useState(false)

    const handleValueInput = (e) => {
        const { name, value } = e.target;

        if (name === 'email') {
            const errorMessage = validateEmail(value);
            if (errorMessage) {
                setError(errorMessage);
            } else {
                setError('');
            }
        }
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const validateEmail = (email) => {
        if (!/\S+@\S+\.\S+/.test(email)) {
           setEmailErr(true)
        } else if (!email) {
            setEmailErr(true)
        } else {
            setEmailErr(false)
        }
    };

    const contactForm = (event) => {
        event.preventDefault();
        const errorMessage = validateEmail(formValues.email);
        if (errorMessage) {
            setError(errorMessage);
            setEmailErr(true)
        } else {
            setError('');
            setSendForm(false);
        }
    };


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
            <Grow in={home === 'contacto'} timeout={1000}>
                <Box
                    sx={{
                        width: '100%',
                        maxWidth: { xs: '100%', xm: '450px' },
                        p: '1em',
                        border: '1px solid #70707079',
                        background: '#01203060',
                        borderRadius: '.5em',
                        WebkitBackdropFilter: 'blur(80px)',
                        backdropFilter: 'blur(80px)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1em',
                    }}
                >
                    <Grid container direction='row' spacing={2} p={{ xs: '1em', sm: '2em', md: '3em 2em' }} borderRadius={5} bgcolor='tertiaryGlass.main'>
                        <Grid item xs={12}>
                            <Typography variant='h5' textAlign='center' fontSize={{ md: '32px' }} color='primary.contrastText'>Contacto</Typography>
                            <Typography variant='p' sx={{ fontSize: '14px', m: '1em 0' }} textAlign='center' color='primary.contrastText'>¿Quieres contactarme? Completa el siguiente formulario y me pondré en contacto contigo lo antes posible.</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            {sendForm === false ? <form onSubmit={contactForm}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <InputLight
                                            name='Nombre'
                                            nameValue='name'
                                            required={true}
                                            color='grey'
                                            maxLength={50}
                                            onChange={handleValueInput}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <InputLight
                                            color='grey'
                                            name='E-mail'
                                            nameValue='email'
                                            required={true}
                                            error={emailErr}
                                            helperText='prueba@prueba.com '
                                            maxLength={50}
                                            onChange={handleValueInput}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <InputLight
                                            color='grey'
                                            name='Asunto'
                                            nameValue='case'
                                            required={true}
                                            onChange={handleValueInput}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            label="Mensaje"
                                            color='grey'
                                            name='message'
                                            variant="outlined"
                                            fullWidth
                                            multiline
                                            onChange={handleValueInput}
                                            rows={4}
                                            focused
                                            required={true}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <ButtonPpal
                                            colorButton="terciario"
                                            typeButton='submit'
                                            textButton="Enviar mensaje"
                                            fullWidth
                                        />
                                    </Grid>
                                </Grid>
                            </form> : null}
                        </Grid>
                    </Grid>
                </Box>
            </Grow>
        </Box>
    );
}
