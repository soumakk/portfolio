'use client'

import { Button } from '../ui/button'

export default function HeroSection() {
	return (
		<div className="relative w-full flex justify-center py-32">
			<div className="max-w-lg z-10 text-center flex flex-col items-center">
				<figure className="">
					<img
						src="/images/me.jpg"
						alt="It's me, Soumak"
						className="h-28 w-28 rounded-full"
					/>
				</figure>

				<h1 className="text-5xl mb-6 mt-8 font-serif">
					Hey, I’m Soumak & welcome to my creative space
				</h1>

				<p className="leading-relaxed mb-12">
					I’m a passionate Frontend Developer building products that provides beautiful
					digital experience that combines with ui ux. I like to build emmersive worlds
					and express my creativity through web platform.
				</p>

				<Button variant="glass" className="rounded-full shadow-none" size="lg">
					Explore
				</Button>
			</div>
		</div>
	)
}
