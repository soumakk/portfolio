import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { components } from '@/components/markdoc/components'
import { getBlogContent } from '@/lib/blogs'
import Markdoc from '@markdoc/markdoc'
import React, { Suspense } from 'react'

export default async function BlogPost({ params }: any) {
	const { slug } = await params
	const { content, metadata } = await getBlogContent(slug)

	return (
		<div className="max-w-4xl mx-auto px-6">
			<Header />

			<section className="my-10">
				<h2 className="text-3xl font-semibold mb-2">{metadata.title}</h2>
				<p className="text-muted-foreground">{metadata.date}</p>

				<Suspense fallback={<>Loading...</>}>
					<div id="markdown" className="mt-16">
						{Markdoc.renderers.react(content, React, { components: components })}
					</div>
				</Suspense>
			</section>

			<Footer />
		</div>
	)
}
