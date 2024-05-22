import { Html } from '@react-three/drei';
import { Typography } from '@mui/material';
import { Bebas } from '@/app/themes/fonts';

export default function FormationText() {
    return (
        <>
            <Html rotation-y={-Math.PI / -2} position={[0.7, 21, 12.5]} transform occlude>
                <Typography variant='h2' sx={{ fontWeight: 500, fontSize: '10em' }} color='#5b370050' className={`${Bebas.className}`}>Formación</Typography>
            </Html>
            <Html rotation-y={-Math.PI / -2} position={[6.3, 15.8, 10.8]} transform occlude>
                <Typography variant='h4' sx={{ fontWeight: 500 }} color='#5b3700'>Lógica de <br />programación</Typography>
                <Typography variant='h5' sx={{ fontWeight: 500 }} color='#5b3700'>Alura - 2024  (Finalizado)</Typography>
            </Html>
            <Html rotation-y={-Math.PI / -2} position={[13.5, 10.5, 10.8]} transform occlude>
                <Typography variant='h4' sx={{ fontWeight: 500 }} color='#5b3700'>Programación</Typography>
                <Typography variant='h5' sx={{ fontWeight: 500 }} color='#5b3700'>Alura - 2024  (Finalizado)</Typography>
            </Html>
            <Html rotation-y={-Math.PI / -2} position={[20.6, 6.5, 10.8]} transform occlude>
                <Typography variant='h4' sx={{ fontWeight: 500 }} color='#5b3700'>Git y Github</Typography>
                <Typography variant='h5' sx={{ fontWeight: 500 }} color='#5b3700'>Alura - 2024  (Finalizado)</Typography>
            </Html>
        </>
    );
}
