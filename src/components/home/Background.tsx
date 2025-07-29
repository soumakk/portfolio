'use client'

import { Canvas } from '@react-three/fiber'
import React from 'react'
import Plane, { CameraController } from './Plane'

export default function Background() {
	return (
		<div className="h-full w-full fixed inset-0 -z-10">
			<Canvas camera={{ position: [0, 0, 5], fov: 35 }}>
				<CameraController />
				{/* <OrbitControls /> */}
				<ambientLight intensity={Math.PI / 2} />
				<spotLight
					position={[10, 10, 10]}
					angle={0.15}
					penumbra={1}
					decay={0}
					intensity={Math.PI}
				/>
				<pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
				<Plane />
			</Canvas>
		</div>
	)
}
