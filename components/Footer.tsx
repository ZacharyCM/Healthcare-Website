import Link from 'next/link'
import { HeartIcon, PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Policies', href: '/policies' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'HIPAA Notice', href: '/hipaa' },
  ]
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="container-custom">
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">EH</span>
                </div>
                <span className="font-semibold text-xl">Excellary Health LLC</span>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Compassionate psychiatric care tailored for you. Serving teens, adults, and all communities 
                across DC, MD & VA with telehealth.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-100 uppercase tracking-wider mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 focus-visible"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-sm font-semibold text-gray-100 uppercase tracking-wider mb-4">
                Contact
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-gray-300">
                  <EnvelopeIcon className="h-4 w-4" />
                  <span className="text-sm">contact@excellaryhealth.com</span>
                </div>
                <div className="flex items-start space-x-2 text-gray-300">
                  <MapPinIcon className="h-4 w-4 mt-0.5" />
                  <span className="text-sm">
                    1717 N St Nw Ste 1<br />Washington, DC 20036
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-gray-400">
                <p>© {new Date().getFullYear()} Excellary Health LLC. All rights reserved.</p>
                <p className="mt-1">
                  Orin Greene, AGNP-C, PMHNP-BC • Licensed in DC, MD, VA
                </p>
              </div>
              
              <div className="flex space-x-6">
                {navigation.legal.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-gray-300 transition-colors duration-200 focus-visible"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="container-custom py-4">
          <p className="text-xs text-gray-500 text-center">
            <strong>Medical Disclaimer:</strong> The information on this website is for educational purposes only and 
            is not intended to replace professional medical advice, diagnosis, or treatment. Always seek the advice 
            of your physician or other qualified health provider with any questions you may have regarding a medical condition.
            In case of a medical emergency, call 911 immediately.
          </p>
        </div>
      </div>
    </footer>
  )
}
