import LenisScroll from "@/components/custom/LenisScroll";
import About from "@/components/home/About";
import Background from "@/components/home/background/Background";
import Contact from "@/components/home/Contact";
import HeroSection from "@/components/home/HeroSection";
import Projects from "@/components/home/Projects";
import ScrollEffect from "@/components/home/ScrollEffect";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default async function Home() {
  // const blogsList = await fetchBlogs()

  return (
    <>
      <LenisScroll />
      <Background />
      {/*<SmokeyFluidCursor
        config={{
          shading: true,
          // colorUpdateSpeed: 2,
          densityDissipation: 2.5,
          velocityDissipation: 0.45,
          pressure: 0.6,
          splatRadius: 0.2,
          vorticity: 14,
        }}
      />*/}

      <main className="relative overflow-x-hidden pointer-even">
        <div className="max-w-[1400px] mx-auto px-6">
          <Header />
          <HeroSection />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </main>
      <ScrollEffect />
    </>
  );
}
