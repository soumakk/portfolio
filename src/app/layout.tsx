import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { Domine, Livvic } from 'next/font/google'
import './globals.css'

const sans = Livvic({
	subsets: ['latin'],
	display: 'swap',
	weight: ['400', '500', '600', '700'],
	variable: '--font-sans',
})

const serif = Domine({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-serif',
})

export const metadata: Metadata = {
	title: 'Soumak Dutta',
	description: 'Frontend Developer trying to build the web',
	keywords: [
		'Soumak',
		'Dutta',
		'Soumak Dutta',
		'soumak dev',
		'soumakkdev',
		'soumak.dev',
		'frontend',
		'developer',
		'frontend developer',
		'react.js',
		'next.js',
		'javascript',
		'typescript',
		'css',
		'tailwind.css',
	],
	authors: [{ name: 'soumakkdev', url: 'https://github.com/soumakkdev' }],
	openGraph: {
		title: 'Soumak Dutta | Frontend Developer Portfolio',
		description:
			'Portfolio of Soumak Dutta, an experienced web developer specializing in creating visually appealing and highly functional web experiences',
		url: 'https://soumak.dev',
		type: 'website',
	},
	robots: 'index, follow',
	manifest: '/manifest.json',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="canonical" href="https://soumak.dev" />
			</head>
			<body className={cn(sans.variable, serif.variable)}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					storageKey="theme"
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
