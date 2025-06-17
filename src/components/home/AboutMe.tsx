import React from 'react'

export default function AboutMe() {
	return (
		<section className="my-20 lg:my-32" id="about">
			<h2 className="text-2xl text-muted-foreground">about me</h2>

			<div className="grid grid-cols-1 lg:grid-cols-5 gap-20 my-10">
				<article className="leading-relaxed space-y-5 lg:col-span-3">
					<p>
						My web development journey began in college during the PHP era, starting
						with HTML, CSS, and jQuery before diving deep into JavaScript and the React
						ecosystem. After mastering React, I expanded into Node.js through freelance
						work, which taught me valuable client collaboration skills.
					</p>

					<p>
						This foundation led to my first company role working with React and
						TypeScript on diverse projects, where I also developed a strong
						understanding of UI/UX design. I learned to bridge the gap between beautiful
						interfaces and seamless functionality.
					</p>

					<p>
						Today, I&apos;m constantly evolving – exploring AI tools to enhance my
						development workflow and experimenting with WebGL to create interactive 3D
						web experiences. Check out my projects and blog where I share insights from
						my development journey.
					</p>
				</article>

				<figure className="lg:col-span-2 col-start-1 row-start-1 lg:col-start-auto lg:row-start-auto">
					<img src="/images/me.jpg" alt="me" className="rounded-3xl" />
				</figure>
			</div>
		</section>
	)
}
