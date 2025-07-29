import Background from '@/components/home/Background'
import HeroSection from '@/components/home/HeroSection'
import Header from '@/components/layout/Header'

export default async function Home() {
	return (
		<>
			<Background />
			<main className="relative overflow-x-hidden">
				<div className="max-w-[1400px] mx-auto px-6">
					<Header />
					<HeroSection />
				</div>
			</main>
		</>
	)
}
