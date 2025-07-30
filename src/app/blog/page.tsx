import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { Badge } from '@/components/ui/badge'
import { fetchBlogs } from '@/lib/blogs'
import Link from 'next/link'

export default async function BlogsList() {
	const blogsList = await fetchBlogs()

	return (
		<div className="max-w-4xl mx-auto px-6">
			<Header />

			<section className="my-5">
				<h2 className="text-2xl font-semibold mb-6">blogs</h2>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
					{blogsList?.map((blog, idx) => (
						<div key={idx} className="py-2">
							<Link href={`/blog/${blog.slug}`} className="group/post">
								<figure className="overflow-hidden rounded-4xl bg-muted border p-2">
									<img
										className="group-hover/post:scale-110 rounded-3xl transition-discrete duration-300 w-full"
										src={`/blogs/${blog.poster}`}
										alt={blog.title}
									/>
								</figure>
								<h3 className="text-xl font-medium group-hover/post:underline mt-4 mb-2">
									{blog.title}
								</h3>
								<p className="text-base text-muted-foreground">
									<span>{blog?.date}</span>
									<span> &bull; </span>
									<span>{blog?.readingTime}</span>
								</p>
								<div className="flex flex-wrap gap-2 mt-4">
									{blog?.tags?.map((tag) => (
										<Badge
											className="px-4 py-2 rounded-full"
											variant="outline"
											key={tag}
										>
											{tag}
										</Badge>
									))}
								</div>
							</Link>
						</div>
					))}
				</div>
			</section>

			<Footer />
		</div>
	)
}
