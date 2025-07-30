'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ScrollEffect() {
	useGSAP(() => {
		gsap.to('#background', {
			// opacity: 0,
			scrollTrigger: {
				trigger: '#about',
				scrub: true,
				markers: false,
				start: 'top center',
				end: 'bottom bottom',
			},
		})
	})
	return null
}
