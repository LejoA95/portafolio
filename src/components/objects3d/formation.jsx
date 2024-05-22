import * as React from 'react';
import { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import FormationText from '../formation/page';

export function Formation(props) {
    const { section } = props;
    const group = useRef();
    const { nodes, materials, animations } = useGLTF('/experience.glb');
    const { actions } = useAnimations(animations, group);

    return (
        <>
            {section === 3 && (
                <>
                    <FormationText />
                    <spotLight position={[44, 30, 40]} intensity={120} color='orange' />
                </>
            )}
            <group name="esferas_formation" position={[21.278, 19, 12.921]} scale={0.427} ref={group}>
                <mesh name="Sphere004" geometry={nodes.Sphere004.geometry} material={materials['formation ']} />
                <mesh name="Sphere004_1" geometry={nodes.Sphere004_1.geometry} material={materials['paredes formation']} />
            </group>
        </>
    );
}

useGLTF.preload('/experience.glb');
