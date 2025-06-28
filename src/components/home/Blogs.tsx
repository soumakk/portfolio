'use client'

import { IBlogListData } from '@/lib/types'
import Link from 'next/link'
import React from 'react'

export default function Blogs({ blogsList }: { blogsList: IBlogListData[] }) {
	return (
		<section className="my-20 lg:my-32">
			<h2 className="text-2xl text-muted-foreground">blogs</h2>
			<div className="my-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
				{blogsList?.map((blog, idx) => (
					<div key={idx} className="py-2 group/post">
						<Link href={`/blog/${blog.slug}`}>
							<figure className="overflow-hidden rounded-xl">
								<img
									className="group-hover/post:scale-110 rounded-xl transition-discrete duration-300 w-full"
									src={`/blogs/${blog.poster}`}
									alt={blog.title}
								/>
							</figure>

							<h3 className="text-xl font-medium hover:underline mb-1 mt-4">
								{blog.title}
							</h3>
							<p className="text-base text-muted-foreground">{blog.date}</p>
						</Link>
					</div>
				))}
			</div>
		</section>
	)
}
