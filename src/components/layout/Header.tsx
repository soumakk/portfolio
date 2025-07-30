'use client'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import Link from 'next/link'

export default function Header() {
	const { setTheme, theme } = useTheme()

	function toggleTheme() {
		setTheme(theme === 'light' ? 'dark' : 'light')
	}
	return (
		<header className="flex items-center justify-center py-8">
			<nav className="flex items-center gap-10 border border-white/25 px-5 py-2.5 rounded-full backdrop-blur-sm bg-white/25">
				<ul className="flex items-center gap-6 text-sm">
					<li className="">
						<Link href="/">Home</Link>
					</li>
					<li className="">
						<Link href="/#projects">Projects</Link>
					</li>
					<li className="">
						<Link href="/blog">Blog</Link>
					</li>
					<li className="">
						<Link href="/#contact">Contact</Link>
					</li>
					{/* <li className="">
						<Link href="/resume.pdf" target="_blank" rel="noreferrer">
							resume
						</Link>
					</li> */}
				</ul>

				{/* <button
					className="h-10 w-10 rounded-full border grid place-content-center hover:bg-muted"
					onClick={toggleTheme}
				>
					{theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
				</button> */}
			</nav>
		</header>
	)
}
