import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { Button } from '@/components/ui/button'
import { getBlogContent } from '@/lib/blogs'
import { getMDXComponents } from '@/lib/mdx-components'
import { mdxOptions } from '@/lib/mdx-plugins'
import { ArrowLeft, Loader } from 'lucide-react'
import { MDXRemote } from 'next-mdx-remote-client/rsc'
import Link from 'next/link'
import React, { Suspense } from 'react'

export default async function BlogPost({ params }: any) {
	const { slug } = await params
	const { content, metadata, readingTime } = await getBlogContent(slug)

	return (
		<div className="max-w-4xl mx-auto px-6">
			<Header />

			<section className="my-10">
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

				<figure className="flex justify-center my-8">
					<img
						className="max-h-[25rem]"
						src={`/blogs/${metadata.poster}`}
						alt={metadata.title}
					/>
				</figure>

				<h2 className="text-3xl font-semibold mt-4 mb-2">{metadata.title}</h2>
				<p className="text-muted-foreground">
					<span>{metadata.date}</span>
					<span> &bull; </span>
					<span>{readingTime}</span>
				</p>

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
			</section>

			<Footer />
		</div>
	)
}
