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
		<div className="max-w-4xl mx-auto px-6">
			<Header />

			<section className="my-10">
				<h2 className="text-2xl font-semibold mb-6">blogs</h2>

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
