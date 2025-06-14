import { config } from '@/components/markdoc/config'
import Markdoc from '@markdoc/markdoc'
import { promises as fs } from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { IBlogListData } from './types'

export async function fetchBlogs(): Promise<IBlogListData[]> {
	const allFiles = await fs.readdir(path.join(process.cwd(), 'blogs'), 'utf8')

	const promises = allFiles.map(async (file) => {
		const doc = await fs.readFile(path.join(process.cwd(), 'blogs', `${file}`), 'utf8')
		const { data: metadata } = matter(doc)
		return {
			title: metadata?.title,
			date: metadata?.date,
			publish: metadata?.publish,
			slug: file?.split('.md')[0],
		}
	})

	const blogsList = await Promise.all(promises)
	return blogsList?.filter((b) => Boolean(b.publish))
}

export async function getBlogContent(slug: string) {
	const file = await fs.readFile(path.join(process.cwd(), 'blogs', `${slug}.md`), 'utf8')

	const { data: metadata } = matter(file)

	const ast = Markdoc.parse(file)
	const content = Markdoc.transform(ast, config)

	return {
		metadata,
		content,
	}
}
