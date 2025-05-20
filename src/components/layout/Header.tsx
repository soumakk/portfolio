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
		<header className="flex items-center justify-between py-10">
			<Link href="/">
				<p className="font-semibold text-xl">soumak.</p>
			</Link>

			<nav className="flex items-center gap-10">
				<ul className="flex items-center gap-8">
					<li>
						<Link href="/blog">blog</Link>
					</li>
					<li>
						<Link href="/#about">about</Link>
					</li>
					<li>
						<Link href="/resume.pdf" target="_blank" rel="noreferrer">
							resume
						</Link>
					</li>
				</ul>

				<button
					className="h-10 w-10 rounded-full border grid place-content-center hover:bg-muted"
					onClick={toggleTheme}
				>
					{theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
				</button>
			</nav>
		</header>
	)
}
