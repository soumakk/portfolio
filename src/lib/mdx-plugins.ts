import { EvaluateOptions } from 'next-mdx-remote-client/rsc'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'

export const mdxOptions: EvaluateOptions<Record<string, unknown>> = {
	mdxOptions: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [
			rehypeSlug,
			[
				rehypeAutolinkHeadings,
				{
					behavior: 'prepend',
					properties: {
						className: ['anchor-link'],
						title: 'Link to this section',
					},
					content: {
						type: 'element',
						tagName: 'span',
						properties: { className: ['anchor-icon'] },
						children: [{ type: 'text', value: '# ' }],
					},
				},
			],
			[
				rehypePrettyCode,
				{
					theme: 'one-dark-pro',
					keepBackground: false,
					onVisitLine(node) {
						if (node.children.length === 0) {
							node.children = [{ type: 'text', value: ' ' }]
						}
					},
					onVisitHighlightedLine(node) {
						node.properties.className.push('highlighted')
					},
					onVisitHighlightedWord(node) {
						node.properties.className = ['word-highlighted']
					},
				},
			],
		],
	},
}
