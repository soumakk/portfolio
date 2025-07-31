import { shaderMaterial } from '@react-three/drei'
import { extend, ThreeElement, useFrame, useThree } from '@react-three/fiber'
import colors from 'nice-color-palettes'
import { useRef } from 'react'
import * as THREE from 'three'
import fragmentShader from './shaders/fragment.glsl'
import vertexShader from './shaders/vertex.glsl'

const pallete = ['#02050A', '#3C7E8C', '#67A1AD', '#3C4E8C', '#3C8C6A']
// let r = Math.floor(Math.random() * colors.length - 1)
// console.log(r)
// r = 15

function getTrueRandomInt(min, max) {
	const range = max - min + 1
	const array = new Uint32Array(1)
	crypto.getRandomValues(array)
	return Math.floor((array[0] / (0xffffffff + 1)) * range) + min
}

const GradientMaterial = shaderMaterial(
	{
		uTime: 0,
		uColors: colors[15]?.map((c) => new THREE.Color(c)),
		uCoord: new THREE.Vector2(getTrueRandomInt(0.1, 0.2), getTrueRandomInt(0.3, 0.5)),
	},
	vertexShader,
	fragmentShader
)

declare module '@react-three/fiber' {
	interface ThreeElements {
		gradientMaterial: ThreeElement<typeof GradientMaterial>
	}
}

extend({ GradientMaterial })

export default function Plane() {
	const matRef = useRef<any>(null)

	useFrame(({ clock }) => {
		if (matRef.current) {
			matRef.current.uTime = clock.elapsedTime * 0.1
		}
	})

	return (
		<mesh position={[0, 0, 0]}>
			<planeGeometry args={[5, 5, 500, 500]} />
			<gradientMaterial ref={matRef} wireframe={false} />
		</mesh>
	)
}

export function CameraController() {
	const { camera } = useThree()

	// const { position } = useControls({
	// 	position: {
	// 		value: [0, -1.2, 1.4],
	// 		step: 0.1,
	// 	},
	// })

	useFrame(() => {
		// camera.position.set(...position)
		camera.position.set(0, -1.2, 1.4)
		camera.lookAt(0, 0, 0)
	})

	return null
}
