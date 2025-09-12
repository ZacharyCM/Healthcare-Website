import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'
import FeaturedHighlights from '../components/FeaturedHighlights'
import CTASection from '../components/CTASection'

export default function Home() {
  return (
    <Layout
      title="Compassionate Psychiatric Care | Excellary Health LLC"
      description="Orin Greene, AGNP-C, PMHNP-BC provides compassionate psychiatric care for teens and adults across DC, MD & VA. LGBTQIA+ friendly with virtual visits available."
      keywords="mental health, psychiatric care, Washington DC, Maryland, Virginia, ADHD, anxiety, depression, telehealth, LGBTQIA+ therapist, nurse practitioner, Orin Greene"
    >
      <HeroSection />
      <FeaturedHighlights />
      <CTASection />
    </Layout>
  )
}
