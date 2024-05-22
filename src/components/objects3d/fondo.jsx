import React from 'react';
import { motion } from 'framer-motion-3d';
import { Float, MeshWobbleMaterial, RoundedBox } from '@react-three/drei';

export default function Fondo({ section }) {
    const boxPositions = [
        { x: section === 0 ? -5 : -200, y: section === 0 ? 3 : -80, z: section === 0 ? 40 : 50, color: "#DAFDBA" },
        { x: section === 0 ? -5 : -5, y: section === 0 ? 3 : 180, z: section === 0 ? 40 : 80, color: "#45C4B0" },
        { x: section === 0 ? -5 : 180, y: section === 0 ? 3 : -50, z: section === 0 ? 40 : 80, color: "#9cf44a" }
    ];

    return (
        <motion.group>
            {boxPositions.map((position, index) => (
                <motion.group key={index} animate={position}>
                    <Float speed={0.5} rotationIntensity={4} floatIntensity={1} floatingRange={[1]} position={[0, 0, -40]} dispose={[1]}>
                        <RoundedBox args={[80, 80, 80]} radius={0.05} smoothness={4} bevelSegments={4} creaseAngle={0.4}>
                            <MeshWobbleMaterial color={position.color} roughness={20} />
                        </RoundedBox>
                    </Float>
                </motion.group>
            ))}
        </motion.group>
    );
}