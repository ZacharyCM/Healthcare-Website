# Excellary Health LLC Website

A professional, accessible, and emotionally uplifting website for **Orin Greene, AGNP-C, PMHNP-BC**, a dual certified adult primary care and psychiatric mental health nurse practitioner serving patients in DC, Maryland, and Virginia.

## 🌟 Features

- **5 Professional Pages**: Home, About, Services, FAQs, Contact
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation
- **SEO Optimized**: Meta tags, structured data, and OpenGraph support
- **Contact Form**: Firebase-powered with email notifications
- **Modern Stack**: Next.js 15, TypeScript, Tailwind CSS

## 🎨 Design Theme

- **Colors**: Warm, uplifting theme with orange and green hues
- **Typography**: Inter font for clean, friendly readability
- **Imagery**: High-quality stock photos representing mental wellness and inclusivity
- **Accessibility**: Designed for users who may be depressed, anxious, or neurodivergent

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Firebase account (for contact form)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd excellary-health-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   # For development, the contact form logs to console
   # For production, configure these for Firebase Functions:
   
   EMAIL_TO=contact@excellaryhealth.com
   EMAIL_FROM=noreply@excellaryhealth.com
   
   # Option 1: Gmail SMTP (requires app-specific password)
   EMAIL_PASSWORD=your_gmail_app_password
   
   # Option 2: SendGrid
   SENDGRID_API_KEY=your_sendgrid_api_key
   
   # Option 3: Custom SMTP
   SMTP_HOST=smtp.yourdomain.com
   SMTP_PORT=587
   SMTP_USER=your_smtp_user
   SMTP_PASS=your_smtp_password
   SMTP_SECURE=false
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000)

## 📧 Contact Form Setup

The contact form is designed to work with Firebase Functions for production deployment.

### Development
- Form submissions are logged to the console
- No actual emails are sent in development mode

### Production Setup

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Initialize Firebase project**
   ```bash
   firebase init
   ```

4. **Deploy functions**
   ```bash
   cd functions
   npm install
   cd ..
   firebase deploy --only functions
   ```

5. **Configure environment variables in Firebase**
   ```bash
   firebase functions:config:set email.to="contact@excellaryhealth.com"
   firebase functions:config:set email.from="noreply@excellaryhealth.com"
   firebase functions:config:set email.password="your_email_password"
   ```

## 🏗️ Project Structure

```
excellary-health-website/
├── components/           # Reusable React components
│   ├── Navigation.tsx   # Main navigation
│   ├── Layout.tsx       # Page layout wrapper
│   ├── Footer.tsx       # Site footer
│   ├── HeroSection.tsx  # Home page hero
│   ├── IntroSection.tsx # About intro
│   ├── FeaturedHighlights.tsx
│   └── CTASection.tsx   # Contact call-to-action
├── pages/               # Next.js pages
│   ├── api/            # API routes
│   │   └── contact.ts  # Contact form handler
│   ├── _app.tsx        # App wrapper
│   ├── _document.tsx   # HTML document
│   ├── index.tsx       # Home page
│   ├── about.tsx       # About page
│   ├── services.tsx    # Services page
│   ├── faqs.tsx        # FAQ page
│   └── contact.tsx     # Contact page
├── functions/           # Firebase Functions
│   └── src/
│       └── index.ts    # Contact form email handler
├── styles/             # CSS files
│   └── globals.css     # Global styles
├── public/             # Static assets
└── package.json        # Dependencies
```

## 🎯 Page Details

### Home Page (`/`)
- Hero section with call-to-action
- Introduction to Orin Greene
- Featured highlights (3 image blocks)
- Contact form section

### About Page (`/about`)
- Professional biography (placeholder)
- Timeline of credentials and experience
- Core values section
- Professional credentials

### Services Page (`/services`)
- 4 main service offerings with icons
- Conditions treated (8 common conditions)
- Specialty areas (Military/Veteran, Holistic, LGBTQIA+)
- Insurance providers section

### Policies Page (`/policies`)
- 10 common questions and answers
- Collapsible interface for easy navigation
- Contact CTA for additional questions

### Contact Page (`/contact`)
- Contact information and office hours
- Crisis support resources
- Functional contact form with validation
- Privacy and confidentiality information

## 🔧 Customization

### Update Content
1. Replace placeholder text in About page with actual biography
2. Update contact information in Footer and Contact components
3. Replace placeholder images with actual photos
4. Customize colors in `tailwind.config.ts` if needed

### Email Configuration
1. Choose email service (Gmail, SendGrid, or custom SMTP)
2. Update Firebase Functions environment variables
3. Test contact form thoroughly before production

### SEO Optimization
1. Update meta descriptions for each page
2. Add Google Analytics tracking code
3. Submit sitemap to search engines
4. Set up Google My Business listing

## 🎨 Design System

### Colors
- **Primary**: Orange shades (`#f97316`)
- **Secondary**: Green shades (`#22c55e`)
- **Warm**: Warm yellow/orange tints
- **Gray**: Professional grays for text

### Typography
- **Font**: Inter (Google Fonts)
- **Sizes**: Responsive scale from text-sm to text-6xl
- **Weights**: 300, 400, 500, 600, 700

### Components
- **Buttons**: `.btn-primary`, `.btn-secondary`
- **Cards**: `.card` with hover effects
- **Sections**: `.section-padding` for consistent spacing
- **Container**: `.container-custom` for max-width and padding

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Firebase Hosting
1. Build the static export: `npm run build && npm run export`
2. Deploy: `firebase deploy`

### Other Platforms
The site is built with Next.js and can be deployed to any platform that supports Node.js applications.

## 📞 Support

For technical support or customization requests, please contact the development team.

## 📄 License

This project is proprietary and confidential. All rights reserved by Excellary Health LLC.

---

**Medical Disclaimer**: This website is for educational purposes only and is not intended to replace professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
