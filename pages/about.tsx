import Image from 'next/image'
import Layout from '../components/Layout'
import { useState } from 'react'

export default function About() {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  const handleImageError = () => {
    setImageError(true)
  }

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

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
                Orin earned his Master of Science in Adult-Gerontology Primary Care from The Johns Hopkins University and completed a Post-Master’s Certificate in Psychiatric Mental Health at Wilkes University. Since 2013 he has been caring for patients in a variety of settings, including a Level I trauma hospital, primary care, neurology, orthopedics, psychiatry, and pain management. Orin values the strong connection between mind and body, and he believes mental health plays a vital role in every aspect of wellness. His passion is helping patients feel supported, understood, and empowered to live healthier, more fulfilling lives. 

                </p>
                
                <p>
                His approach combines evidence-based psychiatric care with a warm, inclusive environment where every individual feels heard and respected in their healing journey.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
                {!imageError ? (
                  <Image
                    src="/images/ProfOrinPhoto.JPG"
                    alt="Professional portrait of Orin Greene, AGNP-C, PMHNP-BC"
                    fill
                    className="object-contain"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    unoptimized={true}
                    onError={handleImageError}
                    onLoad={handleImageLoad}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-100 to-secondary-100">
                    <div className="text-center p-8">
                      <div className="w-24 h-24 mx-auto mb-4 bg-primary-200 rounded-full flex items-center justify-center">
                        <svg className="w-12 h-12 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-600 font-medium">Professional Photo</p>
                      <p className="text-sm text-gray-500">Orin Greene, AGNP-C, PMHNP-BC</p>
                    </div>
                  </div>
                )}
                {!imageLoaded && !imageError && (
                  <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                    <div className="text-gray-400">Loading...</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
