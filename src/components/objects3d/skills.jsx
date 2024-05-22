import React, { useRef } from 'react';
import { useGLTF, useAnimations, Float } from '@react-three/drei';
import SkillsText from '../skills/page';

export function Skills({ section }) {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF('/experience.glb');
    const { actions } = useAnimations(animations, group);

    return (
        <>
            <mesh name="code1" geometry={nodes.code1.geometry} material={materials['Material.015']} position={[-30, 6, -14]} rotation={[-2.186, -0.4, 2.715]} scale={0.232} />
            <mesh name="code2" geometry={nodes.code2.geometry} material={materials['Material.016']} position={[-15, 8, -15.64]} rotation={[0.423, 0.486, 1.314]} scale={0.276} />

            <Float position={[0, 0, 0]} speed={10} rotationIntensity={0.01} floatIntensity={3}>
                <group name="bombillo" position={[-11.279, 9.845, -4.054]} rotation={[-2.33, 0.68, 0.126]} scale={3.569}>
                    <mesh name="group1975563690" geometry={nodes.group1975563690.geometry} material={materials.mat23} />
                    <mesh name="group1975563690_1" geometry={nodes.group1975563690_1.geometry} material={materials['mat24.001']} />
                    <mesh name="group1975563690_2" geometry={nodes.group1975563690_2.geometry} material={materials.mat22} />
                    <mesh name="group1975563690_3" geometry={nodes.group1975563690_3.geometry} material={materials.mat21} />
                    <mesh name="group1975563690_4" geometry={nodes.group1975563690_4.geometry} material={materials['mat25.002']} />
                </group>
            </Float>

            {section === 1 && (
                <>
                    <SkillsText />
                    {/* Luces específicas para la sección de habilidades */}
                    <spotLight position={[-42, 30, -40]} intensity={20} color='#fff' />
                    <pointLight position={[-11.7, 10.3, -4.9]} intensity={2} color='#ffd600' />
                    <pointLight position={[-11.9, 10.3, -3.5]} intensity={2} color='#ffd600' />
                    <pointLight position={[-30, 6, -14]} intensity={0.8} color='#00caff' decay={3} distance={5} castShadow />
                    <pointLight position={[-30, 8, -14]} intensity={1.1} color='#00caff' decay={3} distance={5} castShadow />
                    <pointLight position={[-15, 5, -16.8]} intensity={1.1} color='#5bff00' decay={3} distance={5} castShadow />
                    <pointLight position={[-15, 13, -16.8]} intensity={1.1} color='#5bff00' decay={3} distance={5} castShadow />
                </>
            )}
        </>
    );
}

useGLTF.preload('/experience.glb');
