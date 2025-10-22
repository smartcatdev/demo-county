# Quick Start Guide - Demo County Website

## 🚀 Get Started in 3 Steps

### Step 1: Run the Website
```bash
cd /Users/bilalhassan/work-projects/demo-county
npm run dev
```
Then open: **http://localhost:3000**

### Step 2: Chatbot (Already Configured!)
The chatbot is pre-configured with a default URL and will work immediately.

**To use a different chatbot:**
1. Open `.env.local`
2. Update the chatbot URL:
```bash
NEXT_PUBLIC_CHATBOT_URL=https://your-chatbot-url.com/widget.js
```
3. Restart the dev server (Ctrl+C, then `npm run dev`)

**Default:** `https://app.ja-staging.net/frontdesk/chatbot.min.js`

### Step 3: Deploy for Conference
```bash
# Build for production
npm run build

# Deploy to Vercel (easiest)
# 1. Push to GitHub
# 2. Go to vercel.com
# 3. Import your repository
# Done!
```

## 📱 What You Get

✅ **5 Professional Pages**
- Home - Welcome & quick links
- Property & Assessments - Search & tax info
- Services - Department directory
- Resources - FAQs & forms
- Contact - Contact form & about

✅ **Fully Responsive** - Works on desktop, tablet, mobile

✅ **Chatbot Ready** - Pre-configured for easy integration

✅ **Production Ready** - Optimized and tested

## 📝 Quick Commands

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm start           # Run production build

# Linting
npm run lint        # Check for errors
```

## 🎯 For Your ICMA Demo

**The chatbot will appear on all pages** as a bottom-right widget (standard placement).

**Test these flows during your demo:**
1. Property search (home → property page)
2. Service lookup (services page → department info)
3. FAQ answers (resources page)
4. Contact form (contact page)
5. **Chatbot interaction** (ask questions on any page)

## 📚 More Information

- **Full Setup**: See `README.md`
- **Chatbot Details**: See `CHATBOT_INTEGRATION.md`
- **Project Overview**: See `PROJECT_SUMMARY.md`

## 🆘 Need Help?

**Common Issues:**

**Port 3000 already in use?**
```bash
lsof -ti:3000 | xargs kill -9
npm run dev
```

**Changes not showing?**
- Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
- Clear cache and reload

**Build errors?**
```bash
rm -rf node_modules .next
npm install
npm run build
```

---

**You're all set! 🎉**

The website is ready for your ICMA conference demonstration. Just add your chatbot script and you're good to go!

