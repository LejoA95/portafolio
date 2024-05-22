import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import ProjectsText from '../projects/page';
import { Float } from '@react-three/drei';

export function Projects(props) {
    const { section } = props;
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/experience.glb')
    const { actions, names } = useAnimations(animations, group)
    return (
        <>
            <group name="islas" position={[-8.478, 19.365, 13.818]} rotation={[Math.PI / 2, 0, 0]} scale={5.654}>
                <mesh name="group1651290667001" geometry={nodes.group1651290667001.geometry} material={materials['mat20.001']} />
                <mesh name="group1651290667001_1" geometry={nodes.group1651290667001_1.geometry} material={materials['mat9.001']} />
            </group>
            <Float position={[0, 0, 0]} speed={10} rotationIntensity={0.01} floatIntensity={3}>
                <group name="energy_float" position={[-22.306, 7.1, 22.354]} rotation={[-0.58, -0.005, 0.798]} scale={236.441}>
                    <mesh name="Pickup_Sphere" geometry={nodes.Pickup_Sphere.geometry} material={materials.Atlas} />
                    <mesh name="Pickup_Sphere_1" geometry={nodes.Pickup_Sphere_1.geometry} material={materials['Material.022']} />
                    <mesh name="Pickup_Sphere_2" geometry={nodes.Pickup_Sphere_2.geometry} material={materials['Material.021']} />
                    <mesh name="Pickup_Sphere_3" geometry={nodes.Pickup_Sphere_3.geometry} material={materials['Material.023']} />
                </group>
            </Float>
            {section === 2 ? <>
                <ProjectsText section={section} />
                {/* energy */}
                <pointLight position={[-22, 6, 22]} intensity={1} color='#45c4b0' distance={30} />
                <pointLight position={[-22.5, 8.5, 22.5]} intensity={1} color='#45c4b0' distance={30} />
                <pointLight position={[-22.5, 7, 23.5]} intensity={1} color='#45c4b0' distance={30} />
                <pointLight position={[-22.5, 7.5, 21.1]} intensity={1} color='#45c4b0' distance={30} />
                <pointLight position={[-23.5, 7.1, 22.3]} intensity={1} color='#45c4b0' distance={30} />
                <pointLight position={[-21, 7.4, 22.3]} intensity={1} color='#45c4b0' distance={30} />
                <spotLight position={[-42, 30, 40]} intensity={30} color='#fff' />
                {/* diamantes */}
                <pointLight position={[-30, 6, 5]} intensity={2} color='#00caff' distance={10} />
                <pointLight position={[-5, 8, 5]} intensity={2} color='#00caff' distance={10} />
                <pointLight position={[-5, 8, 35]} intensity={2} color='#00caff' distance={10} />
                <pointLight position={[-35, 6, 29]} intensity={2} color='#00caff' distance={10} />
                {/* Projects */}
                <pointLight position={[-3, 10, 5]} intensity={2} color='#fff' distance={30} />
                <pointLight position={[-27, 20, 11]} intensity={2} color='#5e00ff' distance={30} />
                <pointLight position={[-32, 24, 11]} intensity={2} color='#bb0099' distance={30} />
                <pointLight position={[-32, 2, 11]} intensity={2} color='blue' distance={30} />
                <pointLight position={[-10.8, 10, 8.1]} intensity={2.5} color='#00a8d4' distance={30} />

            </> : null}
        </>
    )
}


useGLTF.preload('/experience.glb')