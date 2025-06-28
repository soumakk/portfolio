import React, { useRef } from 'react'
import gsap from 'gsap'
import SplitText from 'gsap/SplitText'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(SplitText)

export default function Logo() {
	const textRef = useRef<HTMLHeadingElement>(null)

	useGSAP(
		() => {
			if (textRef.current) {
				SplitText.create(textRef.current, {
					type: 'chars',
					charsClass: 'chars++',
				})

				gsap.set('.chars2,.chars3,.chars4,.chars5,.chars6', {
					x: 0,
					opacity: 1,
				})

				const tl = gsap.timeline()
				tl.to('.chars2,.chars3,.chars4,.chars5,.chars6', {
					x: -78,
					opacity: 0,
					duration: 0.5,
					ease: 'expo.in',
					delay: 1,
					// stagger: 0.2
				})
				tl.to(
					'.chars7',
					{
						x: -78,
						duration: 0.5,
						ease: 'expo.in',
					},
					'<'
				)

				textRef.current.addEventListener('mouseenter', () => {
					tl.reverse()
				})
				textRef.current.addEventListener('mouseleave', () => {
					tl.play()
				})
			}
		},
		{
			scope: textRef,
		}
	)

	return (
		<h2
			ref={textRef}
			className="logo font-semibold text-2xl overflow-hidden bg-background pr-5"
		>
			soumak.
		</h2>
	)
}
