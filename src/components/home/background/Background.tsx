'use client'

import { Canvas } from '@react-three/fiber'
import Plane, { CameraController } from './Plane'
import { OrbitControls, Stats } from '@react-three/drei'

export default function Background() {
	return (
		<div id="background" className="h-full w-full fixed inset-0 -z-10">
			<Canvas camera={{ position: [0, 0, 10], fov: 35 }}>
				<CameraController />
				{/* <OrbitControls /> */}
				<ambientLight intensity={Math.PI / 2} />
				<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
				<pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
				<Plane />
				<Stats />
			</Canvas>
		</div>
	)
}
