import { Bebas } from '@/app/themes/fonts';
import { Html } from '@react-three/drei';
import { List, ListItem, Typography } from '@mui/material';

export default function SkillsText() {
    return (
        <>
            <Html rotation-y={-Math.PI / 2} position={[-2.23, 17, -13]} transform occlude>
                <List sx={{ display: 'flex', flexDirection: 'column', gap: 2, position:'relative', zIndex:'1' }}>
                    <ListItem>
                        <Typography variant='h2' sx={{ fontWeight: 500, fontSize:'7em' }} color='#014141' className={`${Bebas.className}`}>Skills</Typography>
                    </ListItem>
                    <ListItem sx={{ mt: 2 }}>
                        <Typography variant='p' color='#013047' sx={{ fontSize: 40, fontWeight: 600 }}>Html, CSS, Javascript.</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant='p' color='#013047' sx={{ fontSize: 40, fontWeight: 600 }}>React, Next.js, Redux.</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant='p' color='#013047' sx={{ fontSize: 40, fontWeight: 600 }}>Node js, Express js, Axios.</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant='p' color='#013047' sx={{ fontSize: 40, fontWeight: 600 }}>Git, NPM, Webpack.</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant='p' color='#013047' sx={{ fontSize: 40, fontWeight: 600 }}>Photoshop, Illustrator, Blender.</Typography>
                    </ListItem>
                </List>
            </Html>
            <Html rotation-y={-Math.PI / 1} position={[-26, 15, -0.5]} transform occlude>
                <Typography variant='h3' color='#013047' sx={{ fontWeight: 400 }}>¡Hello world!</Typography>
            </Html>
        </>
    )
}
