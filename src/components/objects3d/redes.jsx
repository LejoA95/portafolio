import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import RedSocialText from '../redSocial/page';

export function Redes({ section }) {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF('/experience.glb');
    const { actions } = useAnimations(animations, group);

    return (
        <>
            {section === 4 && (
                <>
                    <RedSocialText />
                    <spotLight position={[44, 40, -40]} intensity={250} color='#01b9ba' />
                    <pointLight position={[11, 10, -13.2]} intensity={5} color='#00caff' distance={1} />
                    <pointLight position={[11, 5, -20]} intensity={5} color='#00caff' distance={1} />
                    <pointLight position={[11, 2, -28]} intensity={5} color='#00caff' distance={1} />
                </>
            )}
            <mesh
                name="esfera_2_redes"
                geometry={nodes.esfera_2_redes.geometry}
                material={materials['paredes formation']}
                position={[1.387, 15.389, -17.613]}
                scale={1.005}
            />
        </>
    );
}

useGLTF.preload('/experience.glb');