# Email Setup Guide for Contact Form

## 🚀 Quick Setup (Gmail - Recommended for Start)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Set Up Gmail App Password

1. **Enable 2-Factor Authentication** on your Gmail account:
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Turn on 2-Step Verification if not already enabled

2. **Generate App Password**:
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Click "App passwords" (under 2-Step Verification)
   - Select "Mail" and "Other (custom name)"
   - Enter "Excellary Health Website"
   - Copy the 16-character password (e.g., `abcd efgh ijkl mnop`)

### Step 3: Create Environment File

Create a `.env.local` file in your project root:

```env
# Email Configuration
EMAIL_TO=your-email@gmail.com
EMAIL_FROM=your-email@gmail.com
EMAIL_PASSWORD=your_16_character_app_password
```

**Replace:**
- `your-email@gmail.com` with your actual Gmail address
- `your_16_character_app_password` with the app password from Step 2

### Step 4: Test the Setup

1. **Start your development server:**
   ```bash
   npm run dev
   ```

2. **Test the contact form:**
   - Go to http://localhost:3000/contact
   - Fill out and submit the form
   - Check your email inbox

## 📧 Professional Setup (SendGrid - Recommended for Production)

### Step 1: Create SendGrid Account
1. Go to [SendGrid](https://sendgrid.com/)
2. Sign up for a free account (100 emails/day free)
3. Verify your account

### Step 2: Create API Key
1. Go to Settings → API Keys
2. Click "Create API Key"
3. Choose "Restricted Access"
4. Give it a name like "Excellary Health Website"
5. Grant "Mail Send" permissions
6. Copy the API key

### Step 3: Update Environment Variables
```env
# Email Configuration
EMAIL_TO=your-email@gmail.com
EMAIL_FROM=noreply@excellaryhealth.com
SENDGRID_API_KEY=your_sendgrid_api_key_here
```

### Step 4: Update API Route (Optional)
If using SendGrid, you can update the API route to use SendGrid instead of Gmail by replacing the transporter configuration in `pages/api/contact.ts`:

```typescript
const transporter = nodemailer.createTransporter({
  host: 'smtp.sendgrid.net',
  port: 587,
  secure: false,
  auth: {
    user: 'apikey',
    pass: process.env.SENDGRID_API_KEY,
  },
})
```

## 🔧 Troubleshooting

### Common Issues:

1. **"Invalid login" error:**
   - Make sure you're using an App Password, not your regular Gmail password
   - Ensure 2-Factor Authentication is enabled

2. **"Less secure app access" error:**
   - Use App Passwords instead of regular passwords
   - App Passwords are more secure and required for Gmail

3. **Emails not received:**
   - Check spam/junk folder
   - Verify EMAIL_TO address is correct
   - Check console logs for error messages

4. **Build errors:**
   - Make sure `.env.local` is in your project root
   - Restart your development server after adding environment variables

## 📱 Email Template Features

Your contact form emails will include:
- ✅ Professional HTML formatting with your brand colors
- ✅ All form fields (name, email, phone, reason, insurance, notes)
- ✅ Timestamp of submission
- ✅ Clean, readable format
- ✅ Fallback text version for all email clients

## 🚀 Deployment

### For Vercel (Recommended):
1. Add environment variables in Vercel dashboard:
   - Go to your project → Settings → Environment Variables
   - Add: `EMAIL_TO`, `EMAIL_FROM`, `EMAIL_PASSWORD`
2. Deploy your site

### For Other Platforms:
- Add the same environment variables to your hosting platform
- Make sure your platform supports Node.js

## 📞 Support

If you need help:
1. Check the console logs for error messages
2. Verify your environment variables are correct
3. Test with a simple email first
4. Contact support if issues persist

---

**Security Note:** Never commit your `.env.local` file to version control. It's already included in `.gitignore`.
