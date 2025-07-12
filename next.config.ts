import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	experimental: {
		turbo: {
			rules: {
				'*.{glsl,vs,fs,vert,frag}': {
					loaders: ['raw-loader', 'glslify-loader'],
					as: '*.js',
				},
			},
		},
	},
}

export default nextConfig
