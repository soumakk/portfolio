import Markdoc from '@markdoc/markdoc'
import React, { Suspense } from 'react'
import { PageProps } from '../../../../.next/types/app/page'
import { promises as fs } from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default async function BlogPost({ params }: PageProps) {
	const { slug } = await params

	const file = await fs.readFile(path.join(process.cwd(), 'blogs', `${slug}.md`), 'utf8')

	const { data: metadata } = matter(file)

	const ast = Markdoc.parse(file)
	const content = Markdoc.transform(ast)

	return (
		<div className="max-w-4xl mx-auto px-6">
			<Header />

			<section className="my-10">
				<h2 className="text-3xl font-semibold mb-2">{metadata.title}</h2>
				<p className="text-muted-foreground">{metadata.date}</p>

				<Suspense fallback={<>Loading...</>}>
					<div id="markdown" className="mt-16">
						{Markdoc.renderers.react(content, React)}
					</div>
				</Suspense>
			</section>

			<Footer />
		</div>
	)
}
