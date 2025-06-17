import Link from 'next/link'
import { SocialLinks } from '../layout/Footer'

export default function HeroSection() {
	return (
		<div className="max-w-lg my-20 relative">
			<h1 className="text-4xl font-semibold mb-4">Hi 👋, I’m Soumak</h1>
			<h1 className="text-2xl mb-6">Frontend Developer crafting web experiences</h1>

			<p className="text-lg leading-relaxed mb-12 text-muted-foreground">
				I’m specializing in creating visually appealing and highly functional web
				experiences. With a keen eye for design, I bring both creativity and precision to
				every project.
			</p>

			<div className="flex gap-6">
				<Link href={SocialLinks.LinkedIn} target="_blank" rel="noreferrer">
					<p className="hover:text-primary">LinkedIn</p>
				</Link>
				<Link href={SocialLinks.Github} target="_blank" rel="noreferrer">
					<p className="hover:text-primary">GitHub</p>
				</Link>
			</div>
		</div>
	)
}
