import { cn } from '@/lib/utils'
import { GoogleAnalytics } from '@next/third-parties/google'
import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { Arapey, Noto_Sans } from 'next/font/google'
import './globals.css'
import LenisScroll from '@/components/custom/LenisScroll'

const sans = Noto_Sans({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-sans',
	weight: ['300', '400', '500', '600', '700'],
})

const serif = Arapey({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-serif',
	weight: ['400'],
})

export const metadata: Metadata = {
	title: 'Soumak Dutta',
	description: 'Frontend Developer trying to build the web',
	keywords: [
		'Soumak',
		'Dutta',
		'Soumak Dutta',
		'soumak dev',
		'soumakk',
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
	authors: [{ name: 'soumak', url: 'https://github.com/soumakk' }],
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
				<GoogleAnalytics gaId="G-W52Q294D1Z" />
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
