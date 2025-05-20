import React from 'react'

export default function AboutMe() {
	return (
		<section className="my-20 lg:my-32" id="about">
			<h2 className="text-2xl text-muted-foreground">about me</h2>

			<div className="grid grid-cols-1 lg:grid-cols-5 gap-20 my-10">
				<article className="leading-relaxed space-y-5 lg:col-span-3">
					<p>
						Hello, I&apos;m Soumak Dutta, a seasoned Frontend Developer with over 4
						years of experience in creating visually appealing and user-friendly
						websites. I specialize in building high-quality enterprise applications and
						modern e-commerce platforms using React.js, Next.js, Tailwind CSS, and
						TypeScript.
					</p>
					<p>
						My journey in web development began in college. I am passionate about
						crafting websites that are not only aesthetically pleasing but also offer a
						seamless user experience, with a strong belief in the power of simplicity.
					</p>

					<p>
						Outside of my professional life, I enjoy riding my bike and practicing
						boxing. Maintaining a healthy lifestyle, working out, and achieving a
						balanced work-life are essential to me.
					</p>
				</article>

				<figure className="lg:col-span-2 col-start-1 row-start-1 lg:col-start-auto lg:row-start-auto">
					<img src="/images/me.jpg" alt="me" className="rounded-3xl" />
				</figure>
			</div>
		</section>
	)
}
