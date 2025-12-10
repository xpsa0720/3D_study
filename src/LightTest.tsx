import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useControls } from "leva";

type Props = {};

export default function LightTest({}: Props) {
    const meshRef = useRef<THREE.Mesh>(null);
    const groupRef = useRef<THREE.Mesh>(null);
    useEffect(() => {
        const count = groupRef.current!.children.length;
        for (let i = 0; i < count; i++) {
            const mesh = groupRef.current!.children[i] as THREE.Mesh;
            mesh.geometry = meshRef.current?.geometry;
            mesh.position.x = i * 2 - count;
            mesh.position.z = (i * 2) % 4;
        }
    }, []);

    return (
        <>
            {/* <directionalLight position={[5, 5, 5]} /> */}
            {/* <ambientLight color={"yellow"} intensity={5} /> */}
            <hemisphereLight args={["blue", "yellow", 2]} />
            <mesh
                rotation={[THREE.MathUtils.degToRad(-90), 0, 0]}
                position-y={-1}
            >
                <planeGeometry args={[15, 15]} />
                <meshStandardMaterial
                    color={"#020059"}
                    side={THREE.DoubleSide}
                />
            </mesh>
            {/* <fog attach={"fog"} args={["blue", 3, 10]} /> */}
            <mesh ref={meshRef}>
                <torusKnotGeometry args={[0.5, 0.2]} />
                <meshBasicMaterial depthWrite={true} visible={false} />
            </mesh>

            <group ref={groupRef}>
                <mesh>
                    <meshLambertMaterial
                        color={"red"}
                        transparent={true}
                        opacity={1}
                        side={THREE.FrontSide}
                        depthTest={true}
                    />
                </mesh>
                <mesh>
                    <meshPhongMaterial
                        color={"red"}
                        transparent={true}
                        opacity={1}
                        side={THREE.FrontSide}
                        depthTest={true}
                        shininess={40}
                        flatShading={true}
                    />
                </mesh>
                <mesh>
                    <meshStandardMaterial />
                </mesh>
                <mesh>
                    <meshPhongMaterial />
                </mesh>
            </group>
        </>
    );
}
