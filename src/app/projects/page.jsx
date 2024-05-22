"use client"
import Typography from '@mui/material/Typography';
import { Html } from '@react-three/drei';
import Image from 'next/image'
import Link from 'next/link'
import encriptador from './../../assets/images experience/encriptador.png'
import { Pixelify } from '@/app/themes/fonts';
import { Bebas } from '@/app/themes/fonts';


export default function ProjectsText({ ...props }) {
    const { section } = props;
    return (
        <>
            <Html rotation-y={-Math.PI / 180} position={[-15.51, 20, 2.5]} transform occlude>
                <Typography variant='h2' sx={{ fontWeight: 500, fontSize: '10em' }} color='#bfbfbf' className={`${Bebas.className}`}>Proyectos</Typography>
            </Html>
            <Html rotation-y={-Math.PI / 5.7} rotation-X={-Math.PI / 3} position={[-6.51, 11, 26.51]} transform occlude>
                <Typography variant='h5' sx={{ fontWeight: 500, fontSize: '28px', p: '0 .5em' }} className={`${Pixelify.className}`} color='#15c700'>En Proceso...</Typography>
            </Html>

            <Html rotation-y={-Math.PI / 5.7} rotation-X={-Math.PI / 3} position={[-8.5, 11.7, 17.2]} transform occlude>
                <Typography variant='h5' sx={{ fontWeight: 500, fontSize: '28px', p: '0 .5em' }} className={`${Pixelify.className}`} color='#15c700'>En Proceso...</Typography>
            </Html>
            <Html rotation-y={-Math.PI / 5.7} rotation-X={-Math.PI / 3} position={[-10.8, 12.8, 8.1]} transform occlude>
                <Image src={encriptador} alt='image' style={{ width: '245px', height: 'auto' }} priority />
            </Html>
            <Html rotation-y={-Math.PI / 5.7} rotation-X={-Math.PI / 3} position={[-10.8, 15.8, 8.1]} transform occlude>
                <Typography variant='p' sx={{ fontWeight: 500, fontSize:'35px'  }} color='#fff'>EncripBox</Typography>
            </Html>
            <Html rotation-y={-Math.PI / 5.7} rotation-X={-Math.PI / 3} position={[-12.3, 10.1, 7.1]} transform occlude>
                <Link href='https://lejoa95.github.io/Encrypt-box/' target='_blank'>
                    <Typography variant='p' sx={{ fontWeight: 500, p: '0 .5em', fontSize:'20px' }} color='#00e0ff'>DEMO</Typography>
                </Link>
            </Html>
            <Html rotation-y={-Math.PI / 5.7} rotation-X={-Math.PI / 3} position={[-9.25, 10.1, 9.1]} transform occlude>
                <Link href='https://github.com/LejoA95/Encrypt-box' target='_blank'>
                    <Typography variant='p' sx={{ fontWeight: 500, p: '0 .5em', fontSize:'20px' }} color='#00e0ff'>GITHUB</Typography>
                </Link>
            </Html>
        </>
    )
}