import Link from 'next/link'
import { Button } from '../ui/button'
import { SocialLinks } from '../layout/Footer'

export default function HeroSection() {
	return (
		<div className="max-w-6xl mx-auto px-6 py-8 relative">
			<div className="max-w-3xl my-20">
				<h1 className="text-5xl lg:text-6xl leading-tight font-semibold mb-6">
					<span className="text-primary">Frontend Developer</span> crafting web
					experiences
				</h1>

				<p className="lg:text-xl leading-relaxed mb-12 text-muted-foreground">
					I’m Soumak, a frontend developer based in India, specializing in creating
					visually appealing and highly functional web experiences. With a keen eye for
					design, I bring both creativity and precision to every project.
				</p>

				<div className="flex gap-2 flex-wrap">
					<Link href="/resume.pdf" target="_blank" rel="noreferrer">
						<Button
							size="lg"
							className="rounded-full h-10 md:h-12 text-base px-6 md:px-7 font-semibold cursor-pointer"
						>
							View resume
						</Button>
					</Link>
					<Link href={SocialLinks.LinkedIn} target="_blank" rel="noreferrer">
						<Button
							size="lg"
							className="rounded-full h-10 md:h-12 text-base px-6 md:px-7 font-semibold cursor-pointer bg-[#0b65c3] hover:bg-[#0b65c3] text-white"
						>
							LinkedIn
						</Button>
					</Link>
					<Link href={SocialLinks.Github} target="_blank" rel="noreferrer">
						<Button
							size="lg"
							className="rounded-full h-10 md:h-12 text-base px-6 md:px-7 font-semibold cursor-pointer bg-[#e8ebee] hover:bg-[#e8ebee] text-[#1f2328]"
						>
							GitHub
						</Button>
					</Link>
				</div>
			</div>
		</div>
	)
}
