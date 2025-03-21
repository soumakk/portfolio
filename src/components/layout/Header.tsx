import Link from 'next/link'

export default function Header() {
	// const { setTheme, theme } = useTheme()

	// function toggleTheme() {
	// 	setTheme(theme === 'light' ? 'dark' : 'light')
	// }
	return (
		<header className="max-w-6xl mx-auto px-6 flex items-center justify-between py-10">
			<Link href="/">
				<p className="font-semibold text-lg">soumak.</p>
			</Link>

			{/* <button
				className="h-10 w-10 rounded-full border grid place-content-center hover:bg-muted"
				onClick={toggleTheme}
			>
				{theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
			</button> */}

			{/* <nav>
				<ul className="flex items-center gap-8">
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/blog">Blog</Link>
					</li>
				</ul>
			</nav> */}
		</header>
	)
}
