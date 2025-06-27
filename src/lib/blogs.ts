import { promises as fs } from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { IBlogListData } from './types'
import readingTime from 'reading-time'

export async function fetchBlogs(): Promise<IBlogListData[]> {
	const allFiles = await fs.readdir(path.join(process.cwd(), 'blogs'), 'utf8')

	const promises = allFiles.map(async (file) => {
		const doc = await fs.readFile(path.join(process.cwd(), 'blogs', `${file}`), 'utf8')
		const { data: metadata, content } = matter(doc)
		const readingTimeResult = readingTime(content)
		return {
			title: metadata?.title,
			date: metadata?.date,
			publish: metadata?.publish,
			tags: metadata?.tags?.split(','),
			slug: file?.split('.mdx')[0],
			readingTime: readingTimeResult.text,
			poster: metadata?.poster,
		}
	})

	const blogsList = await Promise.all(promises)
	return blogsList?.filter((b) => Boolean(b.publish))?.map((b, idx) => ({ ...b, index: idx }))
}

export async function getBlogContent(slug: string) {
	const file = await fs.readFile(path.join(process.cwd(), 'blogs', `${slug}.mdx`), 'utf8')

	const { data: metadata, content } = matter(file)
	const readingTimeResult = readingTime(content)

	return {
		metadata,
		content,
		readingTime: readingTimeResult.text,
	}
}
