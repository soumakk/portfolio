import type { MDXComponents } from 'mdx/types'

export function getMDXComponents(): MDXComponents {
	return {
		h1: ({ children, ...props }) => (
			<h1
				className="group/heading text-3xl font-semibold text-gray-900 dark:text-white mb-6 pt-4"
				{...props}
			>
				{children}
			</h1>
		),
		h2: ({ children, ...props }) => (
			<h2
				className="group/heading text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4 mt-8 pt-4"
				{...props}
			>
				{children}
			</h2>
		),
		h3: ({ children, ...props }) => (
			<h3
				className="group/heading text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3 mt-6 pt-4"
				{...props}
			>
				{children}
			</h3>
		),
		p: ({ children, ...props }) => (
			<p className="text-gray-700 dark:text-gray-300 mb-4 text-lg leading-relaxed" {...props}>
				{children}
			</p>
		),
		ul: ({ children, ...props }) => (
			<ul
				className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2"
				{...props}
			>
				{children}
			</ul>
		),
		ol: ({ children, ...props }) => (
			<ol
				className="list-decimal list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2"
				{...props}
			>
				{children}
			</ol>
		),
		blockquote: ({ children, ...props }) => (
			<blockquote
				className="border-l-4 border-blue-500 pl-4 italic text-gray-600 dark:text-gray-400 mb-4"
				{...props}
			>
				{children}
			</blockquote>
		),
		code: ({ children, ...props }) => (
			<code className="bg-muted rounded px-1 py-0.5 text-base font-mono" {...props}>
				{children}
			</code>
		),
		pre: ({ children, ...props }) => (
			<pre className="bg-muted rounded-lg p-4 overflow-x-auto mb-4 relative" {...props}>
				<div className="absolute top-4 right-4">
					<span className="text-muted-foreground">{props['data-language']}</span>
				</div>
				{children}
			</pre>
		),
		a: ({ children, href, ...props }) => (
			<a href={href} className="text-blue-600 dark:text-blue-400 hover:underline" {...props}>
				{children}
			</a>
		),
		wrapper: ({ children }) => <div className="my-10 mdx-wrapper">{children}</div>,
	}
}
