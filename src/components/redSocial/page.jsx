"use client"
import { Box, Button, Typography } from '@mui/material';
import { Html } from '@react-three/drei';
import { Bebas } from '@/app/themes/fonts';
import Image from 'next/image'
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import hojaVida from '../../assets/curriculum/hoja de vida.png'
import Link from 'next/link';

export default function RedScocialText() {


    const handleDownload = () => {
        const url = '../../assets/pdf/Hoja de vida AP.pdf';
        const a = document.createElement('a');
        a.href = url;
        a.download = 'curriculo.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    return (
        <>
            <Html rotation-y={-Math.PI / 1} position={[15, 19, -1]} transform occlude>
                <Typography variant='h2' sx={{ fontWeight: 500, fontSize: '10em' }} color='#002a67' className={`${Bebas.className}`}>Redes sociales</Typography>
            </Html>
            <Html rotation-y={-Math.PI / -1.4} rotation-x={-Math.PI / 0.501} rotation-z={-Math.PI / 0.505} position={[11, 12.5, -13]} transform occlude>
                <Link href='https://github.com/LejoA95' target='_blank' style={{ fontWeight: 500, fontSize: '10em', position:'relative', zIndex:'9888888' }} color='#002a67'>
                    <Box sx={{ width: '200px', height: '200px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    </Box>
                </Link>
            </Html>
            <Html rotation-y={-Math.PI / -1.4} rotation-x={-Math.PI / 0.501} rotation-z={-Math.PI / 0.505} position={[10.7, 10.3, -20]} transform occlude>
                <Link href='https://www.linkedin.com/in/alejandro-achicanoy-rodr%C3%ADguez-047427161/' target='_blank' style={{ fontWeight: 500, fontSize: '10em', position:'relative', zIndex:'9999999' }} color='#002a67'>
                    <Box sx={{ width: '200px', height: '200px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    </Box>
                </Link>
            </Html>
            <Html rotation-y={-Math.PI / -1.4} rotation-x={-Math.PI / 0.501} rotation-z={-Math.PI / 0.505} position={[11.4, 7.8, -27]} transform occlude>
                <Link href='https://www.instagram.com/alejo.ar958/' target='_blank' style={{ fontWeight: 500, fontSize: '10em', position:'relative', zIndex:'1000000' }} color='#002a67'>
                    <Box sx={{ width: '200px', height: '200px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    </Box>
                </Link>
            </Html>
            <Html rotation-y={-Math.PI / 1.11} rotation-x={-Math.PI / 0.516} rotation-z={-Math.PI / 0.5056} position={[23.7, 9.5, -18.1]} transform occlude>
                <Button onClick={handleDownload}>
                    <SystemUpdateAltIcon sx={{ fontWeight: 500, fontSize: '7em', position: 'relative', top: '.3em', zIndex: '5000000' }} color='#002a67' />
                    <Image src={hojaVida} alt='image' style={{ position: 'absolute', top: '-0.8em', left: '-6.5em', width: '315px', height: 'auto' }} priority />
                </Button>
            </Html>
            <Html rotation-y={-Math.PI / -160} rotation-x={-Math.PI / 2} rotation-z={-Math.PI / 1.1} position={[22.5, 2.2, -21]} transform occlude>
                <Typography variant='h2' sx={{ fontWeight: 500, fontSize: '3em' }} color='#fff'>Descargar <br /> currículo</Typography>
            </Html>
            <Html rotation-y={-Math.PI / 1} position={[15, 1.2, -37.8]} transform occlude>
                <Typography variant='h3' sx={{ fontWeight: 500, fontSize: '.9em' }} color='#bebebe' textAlign='center'>Creado por Alejandro Achicanoy <br />
                    (2024)</Typography>
            </Html>
        </>
    )
}
