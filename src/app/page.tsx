import About from '@/components/home/About'
import Background from '@/components/home/Background'
import Contact from '@/components/home/Contact'
import HeroSection from '@/components/home/HeroSection'
import Projects from '@/components/home/Projects'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'

export default async function Home() {
	return (
		<>
			<Background />
			<main className="relative overflow-x-hidden">
				<div className="max-w-[1400px] mx-auto px-6">
					<Header />
					<HeroSection />
					<About />
					<Projects />
					<Contact />
					<Footer />
				</div>
			</main>
		</>
	)
}
