import Header from '@/components/layout/Header'
import { fetchBlogs } from '@/lib/blogs'
import Link from 'next/link'

export default async function BlogsList() {
	const blogsList = await fetchBlogs()

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
