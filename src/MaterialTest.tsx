import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useControls } from "leva";

type Props = {};

export default function MaterialTest({}: Props) {
    const meshRef = useRef<THREE.Mesh>(null);
    const groupRef = useRef<THREE.Mesh>(null);
    //   const meshCopyRef1 = useRef<THREE.Mesh>(null);
    //   const meshCopyRef2 = useRef<THREE.Mesh>(null);
    //   const meshCopyRef3 = useRef<THREE.Mesh>(null);
    useEffect(() => {
        for (let i = 0; i < groupRef.current!.children.length; i++) {
            const mesh = groupRef.current!.children[i] as THREE.Mesh;
            mesh.geometry = meshRef.current?.geometry;
            mesh.position.x = i * 2;
        }
    }, []);

    return (
        <>
            <directionalLight position={[5, 5, 5]} />
            {/* <fog attach={"fog"} args={["blue", 3, 10]} /> */}
            <mesh ref={meshRef}>
                <sphereGeometry />
                <meshBasicMaterial depthWrite={true} visible={false} />
            </mesh>

            <group ref={groupRef}>
                <mesh>
                    <meshBasicMaterial wireframe />
                </mesh>
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
                        specular={"#fff"}
                        shininess={40}
                        flatShading={true}
                    />
                </mesh>
                <mesh>
                    <meshNormalMaterial />
                </mesh>
            </group>
        </>
    );
}
