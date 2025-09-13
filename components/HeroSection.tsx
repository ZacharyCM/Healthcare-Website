import Link from 'next/link'
import Image from 'next/image'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

export default function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-form')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative bg-[#00827F] overflow-hidden">
      <div className="relative container-custom section-padding">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Hero Image - moved to left */}
          <div className="relative max-w-2xl w-full lg:order-1">
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/famila.png"
                  alt="Black mother and white father with their biracial children, representing diverse and inclusive mental health care"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized={true}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

          {/* Content - moved to right */}
          <div className="text-center lg:text-left lg:order-2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-['Source_Sans_3'] font-bold text-white mb-6 leading-tight">
              Compassionate{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-orange-200">
                Psychiatric Care
              </span>{' '}
              Tailored for Anyone
            </h1>
            {/* Key Features */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
                <span className="text-sm font-medium font-['Source_Sans_3'] text-gray-700">Ages 14+</span>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
                <span className="text-sm font-medium font-['Source_Sans_3'] text-gray-700">LGBTQIA+ Friendly</span>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
                <span className="text-sm font-medium font-['Source_Sans_3'] text-gray-700">Military & Veteran Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <button
            onClick={scrollToContact}
            className="animate-bounce text-gray-200 hover:text-white transition-colors duration-200"
            aria-label="Scroll down to learn more"
          >
            <ChevronDownIcon className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  )
}