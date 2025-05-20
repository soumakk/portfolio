export default function HeroSection() {
	return (
		<div className="max-w-lg my-20 relative">
			<h1 className="text-4xl font-semibold mb-4">Hi I’m Soumak.</h1>
			<h1 className="text-2xl mb-6">Frontend Developer crafting web experiences</h1>

			<p className="text-lg leading-relaxed mb-12 text-muted-foreground">
				I’m specializing in creating visually appealing and highly functional web
				experiences. With a keen eye for design, I bring both creativity and precision to
				every project.
			</p>

			{/* <div className="flex gap-2 flex-wrap">
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
				</div> */}
		</div>
	)
}
