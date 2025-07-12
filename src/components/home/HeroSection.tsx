'use client'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Plane, { CameraController } from './Plane'
import { Button } from '../ui/button'

export default function HeroSection() {
	return (
		<div className="relative w-full min-h-[85dvh] p-12 flex items-end">
			<div className="h-full absolute inset-0 z-0 rounded-3xl overflow-hidden">
				<Canvas style={{ height: '100%' }} camera={{ position: [0, 0, 5], fov: 35 }}>
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

			<div className="max-w-2xl z-10">
				<h1 className="text-5xl mb-6">Hey, I’m Soumak and welcome to my creative space</h1>

				<p className="text-lg leading-relaxed mb-12 text-muted-foreground">
					I’m a passionate Frontend Developer building products that provides beautiful
					digital experience that combines with ui ux. I like to build emmersive worlds
					and express my creativity through web platform.
				</p>

				<Button variant="secondary" className="rounded-full shadow-none" size="lg">
					Explore
				</Button>
			</div>

			{/* <div className="flex gap-6">
				<Link href={SocialLinks.LinkedIn} target="_blank" rel="noreferrer">
					<p className="hover:text-primary">LinkedIn</p>
				</Link>
				<Link href={SocialLinks.Github} target="_blank" rel="noreferrer">
					<p className="hover:text-primary">GitHub</p>
				</Link>
			</div> */}
		</div>
	)
}
