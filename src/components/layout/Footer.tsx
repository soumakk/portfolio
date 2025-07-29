export const SocialLinks = {
	Github: 'https://github.com/soumakk',
	LinkedIn: 'https://www.linkedin.com/in/soumakkdutta/',
}

export default function Footer() {
	return (
		<footer className="my-8">
			<p className="text-sm text-center opacity-50">
				&copy; {new Date().getFullYear()} Soumak. All rights reserved.
			</p>
		</footer>
	)
}
