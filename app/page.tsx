import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { BuildFutureSection } from "@/components/build-future-section"
import { ServicesSection } from "@/components/services-section"
import { CommunitySection } from "@/components/community-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <BuildFutureSection />
        <ServicesSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  )
}
