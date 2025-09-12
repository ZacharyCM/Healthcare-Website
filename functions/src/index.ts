import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import * as nodemailer from 'nodemailer'

// Initialize Firebase Admin
admin.initializeApp()

interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone?: string
  reason: string
  insurance?: string
  notes?: string
}

// Email configuration
const createTransporter = () => {
  // Option 1: Gmail SMTP (recommended for development)
  // Requires app-specific password if using Gmail
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.EMAIL_PASSWORD, // Use app-specific password for Gmail
    },
  })

  // Option 2: SendGrid SMTP (recommended for production)
  // Uncomment below and comment out Gmail config above
  /*
  return nodemailer.createTransport({
    host: 'smtp.sendgrid.net',
    port: 587,
    secure: false,
    auth: {
      user: 'apikey',
      pass: process.env.SENDGRID_API_KEY,
    },
  })
  */

  // Option 3: Custom SMTP
  // Uncomment below and configure with your SMTP provider
  /*
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
  */
}

export const sendContactForm = functions.https.onRequest(async (req, res) => {
  // Set CORS headers
  res.set('Access-Control-Allow-Origin', '*')
  res.set('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.set('Access-Control-Allow-Headers', 'Content-Type')

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(204).send('')
    return
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  try {
    const formData: ContactFormData = req.body

    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email) {
      res.status(400).json({ error: 'Missing required fields' })
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      res.status(400).json({ error: 'Invalid email format' })
      return
    }

    const transporter = createTransporter()

    // Email content
    const emailSubject = `New Contact Form Submission - ${formData.firstName} ${formData.lastName}`
    
    const emailHTML = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #f97316, #22c55e); padding: 20px; border-radius: 8px 8px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 5px 0 0 0;">Excellary Health LLC</p>
        </div>
        
        <div style="background: #ffffff; padding: 30px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb;">
          <h2 style="color: #374151; margin-top: 0;">Contact Information</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 120px;">Name:</td>
              <td style="padding: 8px 0; color: #6b7280;">${formData.firstName} ${formData.lastName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
              <td style="padding: 8px 0; color: #6b7280;">${formData.email}</td>
            </tr>
            ${formData.phone ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Phone:</td>
              <td style="padding: 8px 0; color: #6b7280;">${formData.phone}</td>
            </tr>
            ` : ''}
            ${formData.reason ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Reason:</td>
              <td style="padding: 8px 0; color: #6b7280;">${formData.reason}</td>
            </tr>
            ` : ''}
            ${formData.insurance ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Insurance:</td>
              <td style="padding: 8px 0; color: #6b7280;">${formData.insurance}</td>
            </tr>
            ` : ''}
          </table>
          
          ${formData.notes ? `
          <div style="margin-top: 20px;">
            <h3 style="color: #374151; margin-bottom: 10px;">Additional Notes:</h3>
            <div style="background: #f9fafb; padding: 15px; border-radius: 6px; border-left: 4px solid #f97316;">
              <p style="margin: 0; color: #6b7280; line-height: 1.5;">${formData.notes}</p>
            </div>
          </div>
          ` : ''}
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="margin: 0; color: #9ca3af; font-size: 14px;">
              Submitted on ${new Date().toLocaleString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                timeZoneName: 'short'
              })}
            </p>
          </div>
        </div>
      </div>
    `

    const emailText = `
New Contact Form Submission - Excellary Health LLC

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
${formData.phone ? `Phone: ${formData.phone}` : ''}
${formData.reason ? `Reason: ${formData.reason}` : ''}
${formData.insurance ? `Insurance: ${formData.insurance}` : ''}

${formData.notes ? `Additional Notes:\n${formData.notes}` : ''}

Submitted on ${new Date().toLocaleString()}
    `

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: emailSubject,
      text: emailText,
      html: emailHTML,
    })

    // Log successful submission (optional)
    console.log('Contact form submitted:', {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      timestamp: new Date().toISOString(),
    })

    res.status(200).json({ 
      success: true, 
      message: 'Message sent successfully' 
    })

  } catch (error) {
    console.error('Error sending contact form:', error)
    res.status(500).json({ 
      error: 'Failed to send message. Please try again.' 
    })
  }
})

// Health check endpoint
export const healthCheck = functions.https.onRequest((req, res) => {
  res.status(200).json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    service: 'Excellary Health Contact Form'
  })
})
