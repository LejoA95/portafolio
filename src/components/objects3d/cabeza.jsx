
import * as React from 'react';
import { useGLTF, useAnimations } from '@react-three/drei'
import { Float } from '@react-three/drei'

export function Cabeza({ section }) {
    const group = React.useRef()
    const { nodes, materials, animations } = useGLTF('/experience.glb')
    const { actions } = useAnimations(animations, group)

    // Estado para manejar la posición del Float
    const [floatPosition, setFloatPosition] = React.useState([0, -4, 0]);
    const [scaleHead, setScaleHead] = React.useState(0.92)

    // Efecto para actualizar la posición del Float según el tamaño de la pantalla
    React.useEffect(() => {
        const updateFloatPosition = () => {
            const width = window.innerWidth;

            if (width > 1024) {
                setFloatPosition([0, -4, 0]); // Pantalla grande
                setScaleHead(0.92)
            } else if (width > 500) {
                setFloatPosition([3, -4, 0]); // Pantalla tablet
                setScaleHead(0.90)
            } else {
                setFloatPosition([8, -10, 0]); // Pantalla móvil
                setScaleHead(0.90)
            }
        };

        // Agrega un event listener para el resize
        window.addEventListener('resize', updateFloatPosition);

        // Actualiza la posición al montar el componente
        updateFloatPosition();

        // Limpia el event listener al desmontar el componente
        return () => {
            window.removeEventListener('resize', updateFloatPosition);
        };
    }, []);

    return (
        <>
            {/* Cabeza */}
            <Float position={floatPosition} speed={10} rotationIntensity={0} floatIntensity={6}>
                <group scale={scaleHead}>
                    <mesh name="parpado_inferior" geometry={nodes.parpado_inferior.geometry} material={materials.orejas} position={[53.518, 18.062, -128.009]} rotation={[-3.103, 0.335, -0.014]} scale={[0.716, 1.596, 0.549]} />
                    <mesh name="parpado_superior" geometry={nodes.parpado_superior.geometry} material={materials.orejas} position={[53.514, 18.081, -128.01]} rotation={[-3.103, 0.335, 3.128]} scale={[0.716, 1.596, 0.549]} />
                    <mesh name="cejas" geometry={nodes.cejas.geometry} material={materials.cabello} position={[54.619, 20.559, -127.124]} rotation={[-2.936, 0.117, -3.121]} scale={[1.966, 0.303, 0.225]} />
                    <group name="cabeza" position={[56.343, 27.58, -117.251]} rotation={[1.867, 1.113, -1.735]} scale={[5.349, 2.494, 4.18]}>
                        <mesh name="NurbsPath012" geometry={nodes.NurbsPath012.geometry} material={materials.cabello} />
                        <mesh name="NurbsPath012_1" geometry={nodes.NurbsPath012_1.geometry} material={materials.cabello2} />
                        <mesh name="NurbsPath012_2" geometry={nodes.NurbsPath012_2.geometry} material={materials.orejas} />
                        <mesh name="NurbsPath012_3" geometry={nodes.NurbsPath012_3.geometry} material={materials.ojos} />
                    </group>
                </group>
            </Float>
            {/* luces */}
            {section !== 0 ? null :
                <>
                    <spotLight position={[60, 50, -60]} intensity={100} color='#f7f6bb' />
                    <spotLight position={[80, 50, -120]} intensity={80} color='#f7f6bb' />
                    <spotLight position={[80, 20, -200]} intensity={300} color='#f7f6bb' />
                    <spotLight position={[60, -10, -170]} intensity={100} color='red' />
                    <spotLight position={[100, 1, -100]} intensity={120} color='red' />
                </>
            }
        </>
    )
}


useGLTF.preload('/experience.glb')