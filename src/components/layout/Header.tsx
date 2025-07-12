'use client'
import { Menu, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import Logo from '../home/Logo'

export default function Header() {
	const { setTheme, theme } = useTheme()

	function toggleTheme() {
		setTheme(theme === 'light' ? 'dark' : 'light')
	}
	return (
		<header className="flex items-center justify-between py-5">
			<Link href="/">
				<Logo />
			</Link>

			<div className="block lg:hidden">
				<Menu />
			</div>

			<nav className="hidden lg:flex items-center gap-10">
				<ul className="flex items-center gap-8">
					{/* <li className="hover:underline">
						<Link href="/blog">blog</Link>
					</li> */}
					<li className="hover:underline">
						<Link href="/#about">about</Link>
					</li>
					<li className="hover:underline">
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
