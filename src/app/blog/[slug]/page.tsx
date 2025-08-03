import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { Button } from '@/components/ui/button'
import { fetchBlogs, getBlogContent } from '@/lib/blogs'
import { getMDXComponents } from '@/lib/mdx-components'
import { mdxOptions } from '@/lib/mdx-plugins'
import { ArrowLeft, ArrowRight, Loader } from 'lucide-react'
import { MDXRemote } from 'next-mdx-remote-client/rsc'
import Link from 'next/link'
import { Suspense } from 'react'

export default async function BlogPost({ params }: any) {
	const { slug } = await params
	const blogsList = await fetchBlogs()
	const { content, metadata, readingTime } = await getBlogContent(slug)

	const currentBlog = blogsList?.find((blog) => blog.slug === slug)

	const hasPrevBlog = currentBlog && currentBlog.index > 0
	const prevBlog = hasPrevBlog ? blogsList?.[currentBlog.index - 1] : null

	const hasNextBlog = currentBlog && currentBlog.index < blogsList.length - 1
	const nextBlog = hasNextBlog ? blogsList?.[currentBlog.index + 1] : null

	return (
		<div className="max-w-4xl mx-auto px-6">
			<Header />

			<section className="my-5">
				<Link href="/blog">
					<Button
						variant="secondary"
						size="sm"
						className="rounded-full px-4 cursor-pointer"
					>
						<ArrowLeft />
						Back to blogs
					</Button>
				</Link>

				<div className="mt-10">
					<h2 className="text-3xl font-semibold mb-2">{metadata.title}</h2>
					<p className="text-muted-foreground">
						<span>{metadata.date}</span>
						<span> &bull; </span>
						<span>{readingTime}</span>
					</p>
				</div>

				<Suspense
					fallback={
						<div className="grid place-content-center py-40">
							<Loader className="size-5 animate-spin" />
						</div>
					}
				>
					<MDXRemote
						source={content}
						components={getMDXComponents()}
						options={mdxOptions}
					/>
				</Suspense>

				<div className="flex items-center justify-between">
					{prevBlog ? (
						<Link href={`/blog/${prevBlog.slug}`}>
							<Button
								variant="secondary"
								size="lg"
								className="rounded-full px-4 cursor-pointer"
							>
								<ArrowLeft />
								Prev blog
							</Button>
						</Link>
					) : (
						<div></div>
					)}

					{nextBlog ? (
						<Link href={`/blog/${nextBlog.slug}`}>
							<Button
								variant="secondary"
								size="lg"
								className="rounded-full px-4 cursor-pointer"
							>
								Next blog
								<ArrowRight />
							</Button>
						</Link>
					) : (
						<div></div>
					)}
				</div>
			</section>

			<Footer />
		</div>
	)
}
