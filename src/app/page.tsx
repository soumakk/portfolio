import AboutMe from '@/components/home/AboutMe'
import Blogs from '@/components/home/Blogs'
import HeroSection from '@/components/home/HeroSection'
import Projects from '@/components/home/Projects'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { fetchBlogs } from '@/lib/blogs'

export default async function Home() {
	const blogsList = await fetchBlogs()

	return (
		<>
			<main className="relative overflow-x-hidden">
				<div className="max-w-4xl mx-auto px-6">
					<Header />
					<HeroSection />
					<Projects />
					<Blogs blogsList={blogsList} />
					<AboutMe />
					<Footer />
				</div>
			</main>
		</>
	)
}
