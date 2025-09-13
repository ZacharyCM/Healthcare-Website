import Image from 'next/image'
import { 
  HeartIcon, 
  VideoCameraIcon, 
  UserGroupIcon,
  ShieldCheckIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline'

const highlights = [
  {
    id: 1,
    title: 'Inclusive & Affirming Care',
    description: 'Creating a safe, welcoming space for all identities, orientations, and backgrounds. Your authentic self is celebrated here.',
    icon: HeartIcon,
    image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    gradient: 'from-primary-500 to-warm-500'
  },
  {
    id: 2,
    title: 'Convenient Virtual Care',
    description: 'Access quality psychiatric care from the comfort of your home with secure, HIPAA-compliant video sessions.',
    icon: VideoCameraIcon,
    image: '/images/convient.PNG',
    gradient: 'from-secondary-500 to-primary-500'
  },
  {
    id: 3,
    title: 'Comprehensive Mental Wellness',
    description: 'From anxiety and depression to ADHD and life transitions, we provide holistic care for your mental health journey.',
    icon: ShieldCheckIcon,
    image: '/images/comprehensive.PNG',
    gradient: 'from-warm-500 to-secondary-500'
  }
]

const features = [
  {
    icon: UserGroupIcon,
    title: 'Ages 14+',
    description: 'Serving teens and adults'
  },
  {
    icon: ClockIcon,
    title: 'Flexible Scheduling',
    description: 'Evening and weekend appointments'
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: '48 Hour Response',
    description: 'Quick communication and support'
  }
]

export default function FeaturedHighlights() {
  return (
    <section className="section-padding bg-gradient-to-b from-warm-50 to-earth-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mental Health Care That{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              Puts You First
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience personalized, compassionate care designed to support your unique mental health journey
          </p>
        </div>

        {/* Main Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <div key={highlight.id} className="card group hover:scale-105 transition-transform duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={highlight.image}
                  alt={highlight.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  unoptimized={true}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${highlight.gradient} rounded-full flex items-center justify-center shadow-lg`}>
                  <highlight.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Features */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
