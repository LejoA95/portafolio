import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { Suspense } from 'react';
import { motion } from 'framer-motion-3d';
import { Cabeza } from './cabeza';
import { Plane } from './plane';
import { Skills } from './skills';
import { Projects } from './projects';
import { Formation } from './formation';
import { Redes } from './redes';
import Fondo from './fondo';

export function World({ section }) {
    const group = useRef();
    const { nodes, animations } = useGLTF('/experience.glb');
    const { actions, names } = useAnimations(animations, group);

    useEffect(() => {
        if (section === 0) {
            actions[names[0]].reset().play();
            actions[names[2]].reset().play();
        }
    }, [section]);

    const sectionConfig = {
        0: { rotateY: 3.59, rotateX: 0.08, y: -0.4, x: 0.2, z: -12 },
        1: { rotateY: 1.7, rotateX: 0.24, y: -0.3, x: 0.9, z: -2.5 },
        2: { rotateY: 0.3, rotateX: 0.25, y: -0.4, x: 1.3, z: -2.5 },
        3: { rotateY: -1.4, rotateX: 0.27, y: -0.4, x: 1, z: -2.5 },
        4: { rotateY: -3, rotateX: 0.3, y: -0.3, x: 1.5, z: -3.5 }
    };

    const { rotateY, rotateX, y, x, z } = sectionConfig[section] || {};

    return (
        <group ref={group} dispose={null}>
            <Suspense>
                <motion.group
                    position={[0, -0.4, -12]}
                    scale={[0.1, 0.1, 0.1]}
                    rotation-y={-Math.PI / 1.18}
                    rotation-x={-Math.PI / 0.508}
                    animate={{
                        rotateY: rotateY || 0,
                        rotateX: rotateX || 0,
                        y: y || -0.4,
                        x: x || 0.2,
                        z: z || -1
                    }}
                >
                    <Cabeza section={section} />
                    <Skills section={section} />
                    <Projects section={section} />
                    <Formation section={section} />
                    <Redes section={section} />
                    <Plane section={section} />
                    <Fondo section={section} />
                </motion.group>
            </Suspense>
        </group>
    );
}

useGLTF.preload('/experience.glb');
