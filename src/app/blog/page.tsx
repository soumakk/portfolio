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

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
					{[...blogsList, ...blogsList, ...blogsList]?.map((blog, idx) => (
						<div key={idx} className="py-2">
							<Link href={`/blog/${blog.slug}`}>
								<figure className="overflow-hidden rounded-4xl bg-muted border p-2">
									<img
										className="hover:scale-110 rounded-3xl transition-discrete duration-150 w-full"
										src={`/blogs/${blog.poster}`}
										alt={blog.title}
									/>
								</figure>
								<h3 className="text-xl font-medium hover:underline mt-4 mb-2">
									{blog.title}
								</h3>
								<p className="text-base text-muted-foreground">
									<span>{blog?.date}</span>
									<span> &bull; </span>
									<span>{blog?.readingTime}</span>
								</p>
							</Link>
						</div>
					))}
				</div>
			</section>
		</div>
	)
}
