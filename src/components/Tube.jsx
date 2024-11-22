import * as THREE from 'three';
import React, { useEffect, useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";


function Model(props) {
  const { nodes, materials } = useGLTF('/models/Pot_12cm.glb');
  const texture = useTexture(props.item.img);

  useEffect(() => {
    Object.entries(materials).map((material) => {
      
      if (
        material[0] !== "zFdeDaGNRwzccye" &&
        material[0] !== "ujsvqBWRMnqdwPx" &&
        material[0] !== "hUlRcbieVuIiOXG" &&
        material[0] !== "jlzuBkUzuJqgiAK" &&
        material[0] !== "xNrofRCqOXXHVZt"
      ) {
        material[1].color = new THREE.Color(props.item.color[0]);
      }
      material[1].needsUpdate = true;
    });
  }, [materials, props.item]);

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
      />
    </group>
  );
}

export default Model; 

useGLTF.preload('/models/Pot_12cm.glb');

