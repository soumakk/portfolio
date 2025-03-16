import Header from '@/components/layout/Header'
import { promises as fs } from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import path from 'path'

export default async function BlogsList() {
	const allFiles = await fs.readdir(path.join(process.cwd(), 'blogs'), 'utf8')

	const promises = allFiles.map(async (file) => {
		const doc = await fs.readFile(path.join(process.cwd(), 'blogs', `${file}`), 'utf8')
		const { data: metadata } = matter(doc)
		return {
			title: metadata?.title,
			date: metadata?.date,
			slug: file?.split('.md')[0],
		}
	})

	const blogsList = await Promise.all(promises)

	return (
		<div>
			<Header />

			<section className="max-w-3xl mx-auto px-6">
				<h2 className="text-3xl font-bold mb-6">Blogs</h2>

				{blogsList?.map((blog, idx) => (
					<div key={idx} className="py-2">
						<Link href={`/blog/${blog.slug}`}>
							<h3 className="text-xl font-medium hover:underline">{blog.title}</h3>
							<p className="text-base text-muted-foreground">{blog.date}</p>
						</Link>
					</div>
				))}
			</section>
		</div>
	)
}
