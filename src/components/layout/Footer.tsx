import LinkButton from '../custom/LinkButton'

export const SocialLinks = {
	Github: 'https://github.com/soumakk',
	LinkedIn: 'https://www.linkedin.com/in/soumakkdutta/',
}

export default function Footer() {
	return (
		<section className="mt-20 mb-12">
			<h2 className="text-2xl text-muted-foreground mb-8">get in touch</h2>

			<div className="flex justify-between flex-col gap-5 lg:flex-row">
				<div className="flex gap-8">
					<LinkButton
						hideArrow
						href={SocialLinks.Github}
						target="_blank"
						rel="noreferrer"
						text="Github"
					/>
					<LinkButton
						hideArrow
						href={SocialLinks.LinkedIn}
						target="_blank"
						rel="noreferrer"
						text="LinkedIn"
					/>
					<LinkButton hideArrow href="mailto:soumakkdutta@gmail.com" text="Email me" />
				</div>

				<p className="text-sm text-muted-foreground">
					&copy; {new Date().getFullYear()} Soumak
				</p>
			</div>
		</section>
	)
}
