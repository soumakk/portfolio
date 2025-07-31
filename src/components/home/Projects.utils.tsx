import { ReactNode } from 'react'

enum Tech {
	'React' = 'react',
	'Next' = 'next',
	'Tailwind' = 'tailwind',
	'MUI' = 'mui',
	'Vite' = 'vite',
	'TypeScript' = 'typescript',
	'Hono' = 'hono',
}

export interface IProject {
	title: string
	subtitle: string
	description: ReactNode
	github?: string
	site?: string
	image?: string
	techstack: Tech[]
}

export const projects: IProject[] = [
	{
		title: 'Flow',
		subtitle: 'A local & secure task manager',
		description: (
			<span>
				Flow is a simple, secure task manager app that runs entirely in your browser—no
				account needed. With a modern, customizable UI, all your data stays private on your
				device, stored locally using a PostgreSQL database via Pglite and IndexedDB. Enjoy
				effortless task management with complete privacy and convenience.
			</span>
		),
		github: 'https://github.com/soumakk/flow',
		site: 'https://flow-task.netlify.app/',
		image: '/images/projects/flow.png',
		techstack: [Tech.React, Tech.Vite, Tech.TypeScript, Tech.Tailwind],
	},
	{
		title: 'Shader Playground',
		subtitle: 'Play & Preview Shaders Instantly',
		description: (
			<span>
				Shader Editor is a simple, browser-based tool for instantly experimenting with
				vertex and fragment shaders. Powered by Three.js, it lets you write and preview
				shaders in real time, switch between 3D models, and use built-in controls to easily
				test and tweak your effects—no setup required.
			</span>
		),
		github: 'https://github.com/soumakk/shader-editor',
		site: 'https://shader-editor.netlify.app/',
		image: '/images/projects/editor.png',
		techstack: [Tech.React, Tech.Vite, Tech.TypeScript, Tech.Tailwind],
	},
	{
		title: 'Nova Calendar',
		subtitle: 'Simple Private Event Tracker',
		description: (
			<span>
				Nova Calendar is a simple calendar app inspired by Google Calendar. Track events in
				your browser with an elegant UI—no account needed. All data stays private, stored
				and synced locally on your device for easy, secure scheduling.
			</span>
		),
		github: 'https://github.com/soumakk/calendar-app',
		site: 'https://nova-calendar.netlify.app/',
		image: '/images/projects/calendar.png',
		techstack: [Tech.React, Tech.Vite, Tech.TypeScript, Tech.Tailwind],
	},
	{
		title: 'Hue Picker',
		subtitle: 'Simple GLSL Color Selector',
		description: (
			<span>
				Hue Picker is a simple browser color picker that provides detailed options and
				outputs colors in GLSL format—ideal for shader and graphics work. Quickly select and
				copy colors with an easy-to-use interface designed for creative coding.
			</span>
		),
		github: 'https://github.com/soumakk/color-picker',
		site: 'https://hue-picker.netlify.app/',
		image: '/images/projects/picker.png',
		techstack: [Tech.React, Tech.Vite, Tech.TypeScript],
	},
]

export const techStackInfo: Record<
	Tech,
	{
		icon: string
		link: string
		title: string
	}
> = {
	[Tech.React]: {
		icon: '/icons/react.svg',
		link: 'https://react.dev/',
		title: 'React',
	},
	[Tech.Next]: {
		icon: '/icons/next.svg',
		link: 'https://nextjs.org/',
		title: 'Next.js',
	},
	[Tech.Tailwind]: {
		icon: '/icons/tailwind.svg',
		link: 'https://tailwindcss.com/',
		title: 'Tailwind CSS',
	},
	[Tech.MUI]: {
		icon: '/icons/mui.svg',
		link: 'https://mui.com/',
		title: 'Material UI',
	},
	[Tech.Vite]: {
		icon: '/icons/vite.svg',
		link: 'https://vitejs.dev/',
		title: 'Vite',
	},
	[Tech.TypeScript]: {
		icon: '/icons/typescript.svg',
		link: 'https://www.typescriptlang.org/',
		title: 'TypeScript',
	},
	[Tech.Hono]: {
		icon: '/icons/hono.svg',
		link: 'https://hono.dev/',
		title: 'Hono',
	},
}
