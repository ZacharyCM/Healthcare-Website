import { useState } from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'

const policies = [
  {
    id: 1,
    question: 'Telehealth Policy',
    answer: 'We offer secure, HIPAA-compliant video sessions through our telehealth platform. Virtual appointments provide the same quality of care as in-person visits and are available for most services including psychiatric evaluations, medication management, and therapy sessions. This allows you to receive care from the comfort and privacy of your own home.'
  },
  {
    id: 2,
    question: 'Ages',
    answer: 'We provide care for individuals aged 14 and older, including teens, adults, and older adults. Our services are tailored to meet the unique developmental and mental health needs of each age group, with specialized approaches for adolescents transitioning to adulthood and adults navigating various life stages.'
  },
  
  {
    id: 3,
    question: 'Appointment Scheduling Policy',
    answer: 'You can schedule your initial consultation by filling out our online contact form. We typically respond within 48 hours and will work with you to find an appointment time that fits your schedule. All accounts and appointments are managed through Alma or Grow platforms. We will help create your profile for a seamless process to conduct sessions.'
  },
  {
    id: 4,
    question: 'Initial Consultation Process',
    answer: 'Your first appointment will be a comprehensive psychiatric evaluation, typically lasting 30-60 minutes. We\'ll discuss your mental health history, current concerns, goals for treatment, and any questions you have. This collaborative session helps us develop a personalized treatment plan that aligns with your needs and preferences.'
  },
  {
    id: 5,
    question: 'Insurance & Payment Policy',
    answer: (
      <>
        Yes, we work with most major commercial insurance providers. Click{' '}
        <Link href="/services#insurance" className="text-blue-600 hover:text-blue-800 underline">
          here
        </Link>{' '}
        to see our list of insurance providers. We also offer self-pay options. We recommend contacting us to verify your specific benefits and coverage details.
      </>
    )
  },
  {
    id: 6,
    question: 'Follow-up Appointment Guidelines',
    answer: 'The frequency of follow-up appointments varies based on your individual needs and treatment plan. Initially, you may need more frequent visits (every 2-4 weeks) to establish your treatment. Once stabilized, appointments typically occur every 1-3 months for medication management, depending on need.'
  },
  {
    id: 7,
    question: 'Privacy & Confidentiality Policy',
    answer: 'Absolutely. We strictly adhere to HIPAA privacy regulations and maintain the highest standards of confidentiality. Your personal health information is protected and will only be shared with your explicit consent or as required by law in very specific circumstances (such as imminent safety concerns).'
  },
  {
    id: 8,
    question: 'Emergency & Crisis Policy',
    answer: 'If you\'re experiencing a mental health emergency or having thoughts of self-harm, please call 988 (Suicide & Crisis Lifeline) or 911 immediately. For non-emergency crisis support, you can text HOME to 741741. Our practice is designed for ongoing care rather than emergency situations.'
  },
  {
    id: 9,
    question: 'Controlled Substance Policy',
    answer: 'Yes, when clinically appropriate and as part of a comprehensive treatment plan, we can prescribe controlled substances including ADHD medications (stimulants) and certain anxiety medications (benzodiazepines). All prescriptions are carefully monitored and follow best practice guidelines for safety and effectiveness. Please note that all controlled substance prescriptions require an appointment for refills and the maximum prescribed at one time is a 30 day supply. This is to ensure safe monitoring and adherence to treatment per federal and state guidelines.'
  }
]

interface PolicyItemProps {
  policy: typeof policies[0]
  isOpen: boolean
  onToggle: () => void
}

function PolicyItem({ policy, isOpen, onToggle }: PolicyItemProps) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900 pr-4">
            {policy.question}
          </h3>
          <div className="flex-shrink-0">
            {isOpen ? (
              <ChevronUpIcon className="h-5 w-5 text-gray-500" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 text-gray-500" />
            )}
          </div>
        </div>
      </button>
      
      {isOpen && (
        <div className="px-6 pb-4 bg-gray-50">
          <div className="text-gray-700 leading-relaxed">
            {policy.answer}
          </div>
        </div>
      )}
    </div>
  )
}

export default function Policies() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <Layout
      title="Policies & Information"
      description="Learn about our practice policies, procedures, and important information for patients. Includes privacy policies, appointment guidelines, and practice standards."
      keywords="mental health policies, practice procedures, patient information, privacy policy, appointment guidelines, practice standards"
    >
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-warm-50 via-primary-50 to-secondary-50">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Practice{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              Policies
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Important information about our practice policies, procedures, and guidelines 
            to help you understand how we provide care at Excellary Health.
          </p>
        </div>
      </section>

      {/* Policies Section */}
      <section className="section-padding bg-white/80 backdrop-blur-sm">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {policies.map((policy) => (
                <PolicyItem
                  key={policy.id}
                  policy={policy}
                  isOpen={openItems.includes(policy.id)}
                  onToggle={() => toggleItem(policy.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-700">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need More Information?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            We're here to help! Don't hesitate to reach out if you need clarification 
            on any policies or want to discuss your specific situation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
