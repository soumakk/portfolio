import About from '@/components/home/About'
import Background from '@/components/home/Background'
import BlogsList from '@/components/home/BlogsList'
import Contact from '@/components/home/Contact'
import HeroSection from '@/components/home/HeroSection'
import Projects from '@/components/home/Projects'
import ScrollEffect from '@/components/home/ScrollEffect'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { fetchBlogs } from '@/lib/blogs'

export default async function Home() {
	const blogsList = await fetchBlogs()

	return (
		<>
			<Background />
			<main className="relative overflow-x-hidden">
				<div className="max-w-[1400px] mx-auto px-6">
					<Header />
					<HeroSection />
					<About />
					<Projects />
					<BlogsList blogsList={blogsList} />
					<Contact />
					<Footer />
				</div>
			</main>
			<ScrollEffect />
		</>
	)
}
