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
	name: string
	description: string
	github?: string
	site?: string
	image?: string
	techstack: Tech[]
}

export const projects: IProject[] = [
	// {
	// 	name: 'Simple Finance',
	// 	description: 'An simple finance tracking app for personal use',
	// 	github: 'https://github.com/soumakk/simple-finance',
	// 	site: 'https://simple-finance-app.netlify.app/',
	// 	image: '/images/projects/finance.png',
	// 	techstack: [Tech.React, Tech.Vite, Tech.Hono, Tech.TypeScript, Tech.Tailwind],
	// },
	{
		name: 'Tasks Flow',
		description: "It's is a task management application",
		github: 'https://github.com/soumakk/tasksflow',
		site: 'https://tasks-flow-app.netlify.app/',
		image: '/images/projects/task.png',
		techstack: [Tech.React, Tech.Vite, Tech.TypeScript, Tech.Tailwind],
	},
	{
		name: 'Nova Calendar',
		description: 'A simple calendar app to track events, inspired by Google calender',
		github: 'https://github.com/soumakk/calendar-app',
		site: 'https://nova-calendar.netlify.app/',
		image: '/images/projects/calendar.png',
		techstack: [Tech.React, Tech.Vite, Tech.TypeScript, Tech.Tailwind],
	},
	{
		name: 'Hue Picker',
		description: 'A simple color picker that shows a detailed color options',
		github: 'https://github.com/soumakk/color-picker',
		site: 'https://hue-picker.netlify.app/',
		image: '/images/projects/hue.png',
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
