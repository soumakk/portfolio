import Link from 'next/link'
import { Button } from '../ui/button'

export default function HeroSection() {
	return (
		<div className="max-w-6xl mx-auto px-6 py-8 relative">
			<div className="max-w-3xl my-20">
				<h1 className="text-5xl lg:text-[4.1rem] leading-tight font-semibold mb-6">
					<span className="text-primary">Frontend Developer</span> crafting web
					experiences
				</h1>

				<p className="lg:text-xl leading-relaxed mb-12 text-muted-foreground">
					I’m Soumak, a frontend developer based in India, specializing in creating
					visually appealing and highly functional web experiences. With a keen eye for
					design, I bring both creativity and precision to every project.
				</p>

				<Link href="/resume.pdf" target="_blank" rel="noreferrer">
					<Button
						size="lg"
						className="rounded-full h-14 text-base px-8 font-semibold cursor-pointer"
					>
						View resume
					</Button>
				</Link>
			</div>
		</div>
	)
}
