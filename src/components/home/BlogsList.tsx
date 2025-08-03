'use client'

import { IBlogListData } from '@/lib/types'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

export default function BlogsList({ blogsList }: { blogsList: IBlogListData[] }) {
	return (
		<section className="my-20 lg:my-32 max-w-2xl mx-auto">
			<h2 className="text-4xl text-center font-serif">Few articles I wrote</h2>

			<div className="my-6 space-y-3">
				{blogsList?.map((blog, idx) => (
					<div
						key={idx}
						className="p-5 group/post bg-gray-500/25 backdrop-blur-sm rounded-2xl border border-white/10"
					>
						<Link
							href={`/blog/${blog.slug}`}
							className="flex justify-between items-center"
						>
							<div>
								<h3 className="text-2xl font-serif hover:underline">
									{blog.title}
								</h3>
								<p className="text-sm font-light">{blog.date}</p>
							</div>

							<button className="h-10 w-10 grid place-content-center bg-white/50 backdrop-blur-sm rounded-full hover:scale-110 group-hover/post:-rotate-45 transition-transform duration-150">
								<ArrowRight className="h-4 w-4 text-gray-900" />
							</button>
						</Link>
					</div>
				))}
			</div>

			<div className="flex justify-center">
				<Link href="/blog">
					<Button variant="glass" className="rounded-full shadow-none" size="lg">
						See more
					</Button>
				</Link>
			</div>
		</section>
	)
}
