import css from '@shikijs/langs/css'
import html from '@shikijs/langs/html'
import js from '@shikijs/langs/javascript'
import jsx from '@shikijs/langs/jsx'
import theme from '@shikijs/themes/vitesse-dark'
import { createHighlighterCoreSync, createJavaScriptRegexEngine } from 'shiki'

export const shiki = createHighlighterCoreSync({
	themes: [theme],
	langs: [html, css, js, jsx],
	engine: createJavaScriptRegexEngine(),
})

export const shikiTheme = 'vitesse-dark'
