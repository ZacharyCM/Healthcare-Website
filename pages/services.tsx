import Image from 'next/image'
import Layout from '../components/Layout'
import { 
  ClipboardDocumentListIcon,
  BeakerIcon,
  ChatBubbleLeftRightIcon,
  VideoCameraIcon,
  HeartIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  SunIcon,
  CpuChipIcon,
  CloudIcon,
  SparklesIcon,
  HomeIcon
} from '@heroicons/react/24/outline'

const services = [
  {
    title: 'Psychiatric Evaluations',
    description: 'Comprehensive assessments to understand your mental health needs and develop personalized treatment plans.',
    icon: ClipboardDocumentListIcon,
    features: ['Initial consultations', 'Diagnostic assessments', 'Treatment planning', 'Follow-up evaluations']
  },
  {
    title: 'Medication Management',
    description: 'Expert medication prescribing and monitoring to optimize your treatment while minimizing side effects.',
    icon: BeakerIcon,
    features: ['Prescription management', 'Dosage optimization', 'Side effect monitoring', 'Medication education']
  },
  {
    title: 'Supportive Psychotherapy',
    description: 'During routine follow-ups, brief therapeutic conversations may address',
    icon: ChatBubbleLeftRightIcon,
    features: ['Daily challenges', 'Personal objectives', 'Stress management', 'Coping strategies']
  },
  {
    title: 'Telepsychiatry / Video Sessions',
    description: 'Convenient, secure virtual appointments from the comfort and privacy of your own space.',
    icon: VideoCameraIcon,
    features: ['HIPAA-compliant platform', 'Flexible scheduling', 'Same quality care', 'Reduced travel time']
  }
]

const conditions = [
  { name: 'Depression', icon: CloudIcon },
  { name: 'Anxiety', icon: HeartIcon },
  { name: 'PTSD', icon: ShieldCheckIcon },
  { name: 'ADHD', icon: CpuChipIcon },
  { name: 'Sleep Disorders', icon: SunIcon },
  { name: 'Mood Disorders', icon: SparklesIcon },
  { name: 'Stress Management', icon: UserGroupIcon },
  { name: 'Life Transitions', icon: HomeIcon }
]

const specialties = [
  {
    title: 'Military/Veteran Support',
    description: 'Specialized care for service members and veterans, understanding the unique challenges of military life.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Holistic Care Approach',
    description: 'Integrating mental, physical, and spiritual wellness for comprehensive healing and growth.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'LGBTQIA+ Affirming Care',
    description: 'Creating safe, inclusive spaces where all identities are celebrated and supported.',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
]

const insuranceProviders = [
  'Aetna',
  'Blue Cross Blue Shield',
  'CareFirst',
  'Surest',
  'Anthem',
  'AvMed',
  'Evernorth',
  'Golden Rule',
  'Oxford',
  'Oscar',
  'Cigna',
  'United Healthcare',
  'Kaiser Permanente',
  'Optum',
  'Humana-Medicare and Humana Dual- Medicare/Medicaid',
  'Self-Pay Options'
]

export default function Services() {
  return (
    <Layout
      title="Mental Health Services"
      description="Comprehensive psychiatric services including evaluations, medication management, therapy, and telehealth. Serving DC, MD & VA with LGBTQIA+ affirming care."
      keywords="psychiatric services, mental health treatment, medication management, therapy, telehealth, ADHD treatment, anxiety therapy, depression care"
    >
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-warm-50 via-primary-50 to-secondary-50">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              Mental Health Services
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Personalized, evidence-based care designed to support your mental wellness journey 
            with compassion, expertise, and respect for your unique needs.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white/80 backdrop-blur-sm">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Services & Treatment Options
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card p-8 hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-primary-600" />
                </div>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-700">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions Treated */}
      <section className="section-padding bg-gradient-to-br from-warm-50 to-earth-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Conditions We Treat
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {conditions.map((condition, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mx-auto mb-3 hover:scale-110 transition-transform duration-200">
                  <condition.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="font-medium text-gray-900">
                  {condition.name}
                </h3>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              Don't see your specific concern? We treat a wide range of mental health conditions.
            </p>
            <a href="/contact" className="btn-primary">
              Contact Us to Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Specialty Areas */}
      <section className="section-padding bg-white/80 backdrop-blur-sm">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Specialty Care Areas
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <div key={index} className="card group overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={specialty.image}
                    alt={specialty.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {specialty.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {specialty.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section id="insurance" className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-700">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Insurance & Payment Options
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              We work with most major insurance providers and offer flexible payment options 
              to make mental health care accessible.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            {insuranceProviders.map((provider, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <span className="text-white font-medium">{provider}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="font-semibold text-white mb-2">Questions About Coverage?</h3>
              <p className="text-primary-100 mb-4">
                We're happy to verify your insurance benefits and discuss payment options 
                during your consultation.
              </p>
              <a href="/contact" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
                Contact Us for Benefits Verification
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
