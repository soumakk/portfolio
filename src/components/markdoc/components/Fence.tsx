'use client'
import { shiki, shikiTheme } from '@/lib/shiki'

type FenceProps = {
	content: string
	language: string
}

export function Fence({ content, language }: FenceProps) {
	const html = shiki.codeToHtml(content, { lang: language, theme: shikiTheme })

	return <div dangerouslySetInnerHTML={{ __html: html }} />
}
