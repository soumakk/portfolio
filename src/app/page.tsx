import AboutMe from '@/components/home/AboutMe'
import HeroSection from '@/components/home/HeroSection'
import Projects from '@/components/home/Projects'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'

export default async function Home() {
	return (
		<>
			<main className="relative overflow-x-hidden">
				<div className="max-w-4xl mx-auto px-6">
					<Header />
					<HeroSection />
					<Projects />
					<AboutMe />
					<Footer />
				</div>
			</main>
		</>
	)
}
