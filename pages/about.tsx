import Image from 'next/image'
import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout
      title="About Orin Greene, AGNP-C, PMHNP-BC"
      description="Learn about Orin Greene's background, certifications, and mission to provide compassionate, inclusive psychiatric care across DC, Maryland, and Virginia."
      keywords="Orin Greene, AGNP-C, PMHNP-BC, nurse practitioner, psychiatric care, mental health provider, board certified, Washington DC"
    >
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-warm-50 via-primary-50 to-secondary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Meet our{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                  Provider
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Orin Greene AGNP-C, PMHNP-BC
                <br />
                <i>Adult-Gerontology Primary Care & Psychiatric Mental Health Nurse Practitioner</i>
              </p>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  Orin brings a unique dual certification 
                  in both adult primary care and psychiatric mental health, offering comprehensive 
                  care that understands the whole person.
                </p>
                
                <p>
                  With years of experience in healthcare, Orin believes that mental wellness is 
                  deeply connected to overall health. Their approach combines evidence-based 
                  psychiatric care with a warm, inclusive environment where every individual 
                  feels heard, respected, and empowered in their healing journey.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/ProfOrinPhoto.JPG"
                    alt="Professional portrait of Orin Greene, AGNP-C, PMHNP-BC"
                    fill
                    className="object-contain"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
