'use client'
import AboutMe from '@/components/home/AboutMe'
import HeroSection from '@/components/home/HeroSection'
import Projects from '@/components/home/Projects'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'

export default function Home() {
	return (
		<>
			<main className="relative overflow-x-hidden">
				{/* <div className="-z-10 absolute blur-[200px] animate-pulse rounded-full -top-[500px] -left-[100px] h-[200px] w-[1200px] rotate-[40deg] origin-left bg-primary"></div> */}

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
