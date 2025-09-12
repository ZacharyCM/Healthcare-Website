# Excellary Health Website - Quick Setup Guide

## 🚀 Immediate Next Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Visit http://localhost:3000 to see your website!

## 📧 Contact Form Configuration

### Development Mode
- Contact form currently logs submissions to console
- No actual emails are sent in development

### Production Email Setup
Choose one of these options:

#### Option A: Gmail SMTP (Easiest for testing)
1. Enable 2-factor authentication on Gmail account
2. Generate app-specific password
3. Add to `.env.local`:
```env
EMAIL_TO=your-email@gmail.com
EMAIL_FROM=your-email@gmail.com
EMAIL_PASSWORD=your_app_specific_password
```

#### Option B: SendGrid (Recommended for production)
1. Create SendGrid account
2. Generate API key
3. Add to `.env.local`:
```env
EMAIL_TO=contact@excellaryhealth.com
EMAIL_FROM=noreply@excellaryhealth.com
SENDGRID_API_KEY=your_sendgrid_api_key
```

## 🎨 Customization Checklist

### Content Updates
- [ ] Replace "Insert Orin Greene's background here" in About page
- [ ] Update phone number: (555) 123-4567
- [ ] Update email: contact@excellaryhealth.com
- [ ] Add actual office address
- [ ] Update insurance providers list

### Images to Replace
- [ ] Add Orin Greene's professional photo
- [ ] Replace hero section placeholder image
- [ ] Add company logo and favicon
- [ ] Update OpenGraph image (public/images/og-default.jpg)

### Legal Pages (Create these)
- [ ] Privacy Policy (/privacy)
- [ ] Terms of Service (/terms)
- [ ] HIPAA Notice (/hipaa)

## 🔧 Technical Configuration

### Firebase Setup (for production email)
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Create new project at https://console.firebase.google.com/
4. Initialize: `firebase init functions`
5. Deploy: `firebase deploy --only functions`

### Environment Variables
Copy `env.example` to `.env.local` and configure:
```env
EMAIL_TO=contact@excellaryhealth.com
EMAIL_FROM=noreply@excellaryhealth.com
# Add your email service credentials
```

## 🌐 Deployment Options

### Vercel (Recommended)
1. Push code to GitHub
2. Connect GitHub repo to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Firebase Hosting
```bash
npm run build
firebase deploy
```

### Other Platforms
- Netlify: Connect GitHub repo
- AWS Amplify: Connect GitHub repo
- Traditional hosting: Build static files with `npm run export`

## 📱 Testing Checklist

### Functionality
- [ ] Navigation works on all pages
- [ ] Contact form submits successfully
- [ ] FAQ accordion toggles work
- [ ] Mobile navigation menu works
- [ ] All links work correctly

### Accessibility
- [ ] Test with screen reader
- [ ] Check keyboard navigation
- [ ] Verify color contrast
- [ ] Test with reduced motion

### Performance
- [ ] Check page load speeds
- [ ] Test on mobile devices
- [ ] Verify image optimization
- [ ] Test contact form submission

## 🎯 SEO Setup

### Google Analytics
1. Create GA4 property
2. Add tracking code to `_document.tsx`

### Search Console
1. Verify domain ownership
2. Submit sitemap.xml
3. Monitor search performance

### Local SEO
1. Create Google My Business listing
2. Add location schema markup
3. List in healthcare directories

## 📞 Support

The website includes:
- ✅ 5 professional pages (Home, About, Services, FAQs, Contact)
- ✅ Responsive design with accessibility features
- ✅ Contact form with Firebase integration
- ✅ SEO optimization and structured data
- ✅ Professional healthcare styling
- ✅ LGBTQIA+ inclusive design
- ✅ Crisis support information

## 🏥 Healthcare Compliance Notes

- HIPAA: Contact form uses secure transmission
- Crisis Resources: Emergency numbers prominently displayed
- Disclaimers: Medical disclaimers included in footer
- Licensing: State licensing information displayed

---

**Ready to launch?** Follow the checklist above and your professional mental health website will be ready to serve patients across DC, Maryland, and Virginia!
