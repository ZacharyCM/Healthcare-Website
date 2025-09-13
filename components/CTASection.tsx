import Link from 'next/link'
import { PhoneIcon, EnvelopeIcon, CalendarDaysIcon } from '@heroicons/react/24/outline'

export default function CTASection() {
  return (
    <section id="contact-form" className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-700">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Take the First Step?
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Your mental health journey begins with a single conversation. 
            We're here to listen, support, and guide you toward wellness.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Options */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Get Started Today
            </h3>
            
              <div className="flex items-center space-x-4 text-white">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <EnvelopeIcon className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-primary-100">contact@excellaryhealthLLC.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-white">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <CalendarDaysIcon className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium">Response Time</p>
                  <p className="text-primary-100">Within 48 hours</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-6 mt-8">
              <h4 className="font-semibold text-white mb-2">Crisis Support</h4>
              <p className="text-primary-100 text-sm">
                If you're experiencing a mental health emergency, please call <strong>988</strong> (Suicide & Crisis Lifeline) 
                or <strong>911</strong> immediately. For non-emergency crisis support, text <strong>HOME</strong> to <strong>741741</strong>.
              </p>
            </div>
          </div>

          {/* Contact Form Placeholder */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Book Now
            </h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
                  Reason for Seeking Care
                </label>
                <select
                  id="reason"
                  name="reason"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select a reason...</option>
                  <option value="depression">Depression</option>
                  <option value="anxiety">Anxiety</option>
                  <option value="adhd">ADHD</option>
                  <option value="medication-refill">Medication Refill</option>
                  <option value="life-transitions">Life Transitions</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="insurance" className="block text-sm font-medium text-gray-700 mb-1">
                  Insurance Provider
                </label>
                <input
                  type="text"
                  id="insurance"
                  name="insurance"
                  placeholder="Type 'Self-Pay' if no insurance"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-3 px-6 rounded-md font-medium hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
            
            <p className="text-sm text-gray-500 mt-4 text-center">
              We'll get back to you within 48 hours. Your information is kept confidential.
            </p>
          </div>
        </div>
    </section>
  )
}