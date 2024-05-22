import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Box, Grow } from '@mui/material';
import TextField from '@mui/material/TextField';
import { ButtonPpal, InputLight } from '../../components/actions/page';

export default function Contact({ home }) {
    const [formValues, setFormValues] = useState({
        nombre: '',
        email: '',
        asunto: '',
        mensaje: '',
    });
    const [sendForm, setSendForm] = useState(false);
    const [error, setError] = useState('');

    const handleValueInput = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });

        if (name === 'email') {
            validateEmail(value);
        }
    };

    const validateEmail = (email) => {
        if (!email) {
            setError("Campo e-mail no debe estar en blanco o vacío.");
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setError("Debe estar en formato e-mail conteniendo el caracter especial @ seguido de un dominio o proveedor seguido de un punto(.). Ejemplo: texto@texto.com");
        } else {
            setError('');
        }
    };

    const contactForm = (event) => {
        event.preventDefault();
        const errorMessage = validateEmail(formValues.email);
        if (errorMessage) {
            setError(errorMessage);
        } else {
            setError('');
            setSendForm(true);
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
                        maxWidth: { xs: '100%', xm: '400px' },
                        p: '1em',
                        border: '1px solid #70707079',
                        background: '#ffffff60',
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
                            <Typography variant='h5' textAlign='center' fontSize={{ md: '32px' }}>Contacto</Typography>
                            <Typography variant='p' sx={{ fontSize: '14px', m: '1em 0' }} textAlign='center'>¿Quieres contactarme? Completa el siguiente formulario y me pondré en contacto contigo lo antes posible.</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            {sendForm === false ? <form onSubmit={contactForm}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <InputLight
                                            label='Nombre'
                                            name='Nombre' required={true}
                                            color='primary'
                                            maxLength={50}
                                            onClickButton={handleValueInput}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <InputLight
                                            label='E-mail'
                                            color='primary'
                                            name='E-mail' required={true}
                                            error={error}
                                            onClickButton={handleValueInput}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <InputLight
                                            label='Asunto'
                                            color='primary'
                                            name='Asunto' required={true}
                                            onClickButton={handleValueInput}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            id="mensaje"
                                            label="Mensaje"
                                            color='primary'
                                            variant="outlined"
                                            fullWidth multiline
                                            onClick={handleValueInput}
                                            rows={4}
                                            required={true} />
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
