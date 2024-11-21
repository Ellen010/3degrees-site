import * as THREE from 'three';
import React from 'react';
import { useGLTF } from '@react-three/drei';

function Model(props) {
  const { nodes, materials } = useGLTF('../models/Pot_12cm.glb');
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

useGLTF.preload('../models/Pot_12cm.glb');
