# Demo County Website

A professional demo website for local government services, designed for presentations at the ICMA conference. This website provides a realistic county government portal experience with pages for property assessments, services, resources, and contact information.

## Features

- **Modern Next.js Application**: Built with Next.js 14+ using the App Router
- **Responsive Design**: Mobile-friendly design using Tailwind CSS
- **5 Main Pages**:
  - Home - Welcome page with quick links and department highlights
  - Property & Assessments - Property search and tax information
  - Services & Departments - County services and department directory
  - Resources & FAQs - Helpful resources and frequently asked questions
  - Contact & About - Contact information and about the county
- **Chatbot Integration Ready**: Pre-configured to easily add your chatbot widget

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd demo-county
```

2. Install dependencies (already done):
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:3000
```

## Adding Your Chatbot Widget

The chatbot is pre-configured with a default staging URL: `https://app.ja-staging.net/frontdesk/chatbot.min.js`

**The chatbot will work immediately without any configuration!** 

### To Use a Different Chatbot URL (Optional)

1. Open the file `.env.local`

2. Update the `NEXT_PUBLIC_CHATBOT_URL` variable:
```bash
NEXT_PUBLIC_CHATBOT_URL=https://your-chatbot-url.com/widget.js
```

3. Restart the development server:
```bash
# Stop current server (Ctrl+C), then:
npm run dev
```

4. Your custom chatbot will now appear on all pages.

### Alternative: Direct Code Edit

If you prefer to hardcode the URL:

1. Open `app/layout.tsx`
2. Find the Script section (around line 34-40)
3. Replace the environment variable with your hardcoded URL

See `CHATBOT_INTEGRATION.md` for detailed instructions.

### Alternative Method: Multiple Scripts

If your chatbot requires multiple script tags or additional configuration, you can add them like this:

```tsx
{/* Chatbot Widget Scripts */}
<Script
  src="https://your-chatbot-url.com/config.js"
  strategy="beforeInteractive"
/>
<Script
  src="https://your-chatbot-url.com/widget.js"
  strategy="afterInteractive"
/>
```

## Building for Production

To create an optimized production build:

```bash
npm run build
```

To run the production build locally:

```bash
npm start
```

## Deployment

This Next.js application can be deployed to:

- **Vercel** (recommended): Connect your repository and deploy automatically
- **Netlify**: Deploy using the Netlify CLI or Git integration
- **AWS, Azure, Google Cloud**: Deploy as a containerized application
- **Static Export**: Run `npm run build` and deploy the `out` folder to any static hosting

### Quick Deploy to Vercel

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

## Customization

### Changing County Name

To change "Demo County" to your desired county name:

1. Search and replace "Demo County" in all files
2. Update the metadata in `app/layout.tsx`
3. Update the navigation branding in `app/components/Navigation.tsx`

### Modifying Colors

The site uses a blue color scheme typical of government websites. To change colors:

1. Open any page file
2. Look for Tailwind classes like `bg-blue-900`, `text-blue-600`, etc.
3. Replace with your desired color (e.g., `bg-green-900`, `text-green-600`)

### Adding or Removing Pages

To add a new page:

1. Create a new folder in the `app` directory (e.g., `app/new-page/`)
2. Create a `page.tsx` file inside that folder
3. Add a link to the new page in `app/components/Navigation.tsx`

## Technology Stack

- **Framework**: Next.js 14+ (React)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Font**: Inter (Google Fonts)

## Support

For questions or issues, please contact your development team.

## License

This is a demo project created for presentation purposes.
