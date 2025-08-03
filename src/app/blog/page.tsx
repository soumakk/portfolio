import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { fetchBlogs } from '@/lib/blogs'
import Link from 'next/link'

export default async function BlogsList() {
	const blogsList = await fetchBlogs()

	return (
		<div className="max-w-4xl mx-auto px-6">
			<Header />

			<section className="my-12">
				<h2 className="text-3xl text-center font-serif font-semibold mb-6">Articles</h2>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
					{blogsList?.map((blog, idx) => (
						<div key={idx} className="py-2">
							<Link href={`/blog/${blog.slug}`} className="group/post">
								<h3 className="text-2xl font-serif font-medium group-hover/post:underline mt-4 mb-2">
									{blog.title}
								</h3>
								<p className="text-sm font-light">
									<span>{blog?.date}</span>
									<span> &bull; </span>
									<span>{blog?.readingTime}</span>
								</p>
							</Link>
						</div>
					))}
				</div>
			</section>

			<Footer />
		</div>
	)
}
