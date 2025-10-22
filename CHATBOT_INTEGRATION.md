# Chatbot Integration Instructions

## Quick Start (Environment Variable Method - Recommended)

Your Demo County website uses environment variables for easy chatbot configuration. 

**Default Behavior:** If no environment variable is set, the chatbot will load from:
`https://app.ja-staging.net/frontdesk/chatbot.min.js`

### Step 1: Update the Environment Variable (Optional)

Open the file: `.env.local`

### Step 2: Set Your Custom Chatbot URL

Update the `NEXT_PUBLIC_CHATBOT_URL` value with your chatbot script URL:

```bash
# Chatbot Configuration
NEXT_PUBLIC_CHATBOT_URL=https://your-chatbot-domain.com/widget.js
```

**Note:** If you don't set this variable, the default staging URL will be used automatically.

### Step 3: Restart the Development Server

Stop the current server (Ctrl+C) and restart:
```bash
npm run dev
```

### Step 4: Verify

- Open http://localhost:3000
- Your chatbot widget should now appear on all pages (typically bottom-right corner)
- Check the browser console for any errors

## Alternative Method: Direct Code Edit

If you prefer to hardcode the URL directly in the code:

### Step 1: Open Layout File

Open the file: `app/layout.tsx`

### Step 2: Modify the Script Section

Find this section (around line 34-40):

```tsx
{/* Modern React Chatbot Widget */}
{process.env.NEXT_PUBLIC_CHATBOT_URL && (
  <Script
    src={process.env.NEXT_PUBLIC_CHATBOT_URL}
    strategy="afterInteractive"
  />
)}
```

### Step 3: Replace with Hardcoded URL

Replace it with:
```tsx
{/* Chatbot Widget Script */}
<Script
  src="https://your-chatbot-domain.com/widget.js"
  strategy="afterInteractive"
/>
```

### Step 4: Save and Refresh

- Save the file
- The development server will automatically reload

## Advanced Configuration

### Multiple Scripts

If your chatbot requires multiple script tags:

```tsx
{/* Chatbot Widget Scripts */}
<Script
  src="https://your-chatbot-domain.com/config.js"
  strategy="beforeInteractive"
/>
<Script
  src="https://your-chatbot-domain.com/widget.js"
  strategy="afterInteractive"
  onLoad={() => {
    // Optional: Initialize your chatbot here
    if (window.ChatBot) {
      window.ChatBot.init({ /* config */ });
    }
  }}
/>
```

### Script Loading Strategies

- `beforeInteractive`: Loads before page becomes interactive (critical scripts)
- `afterInteractive`: Loads after page becomes interactive (default, recommended)
- `lazyOnload`: Loads during idle time (non-critical scripts)

### Inline Configuration

If you need to add inline configuration:

```tsx
<Script id="chatbot-config" strategy="beforeInteractive">
  {`
    window.chatbotConfig = {
      apiKey: 'your-api-key',
      position: 'bottom-right',
      theme: 'light'
    };
  `}
</Script>
<Script
  src="https://your-chatbot-domain.com/widget.js"
  strategy="afterInteractive"
/>
```

## Testing

1. Open your browser to `http://localhost:3000`
2. Check the browser console for any errors
3. Look for the chatbot widget (usually bottom-right)
4. Test the chatbot functionality on different pages

## Troubleshooting

### Chatbot Not Appearing

- Check browser console for errors
- Verify the script URL is correct
- Ensure the script is uncommented
- Try clearing browser cache

### Chatbot Appears on Wrong Pages

The chatbot is configured to appear on all pages by default. To show it only on specific pages, you'll need to add conditional logic in the layout or create page-specific layouts.

### Script Conflicts

If you experience conflicts with other scripts:
- Try changing the `strategy` prop
- Check for JavaScript errors in the console
- Contact your chatbot provider for support

## Need Help?

- Check the Next.js Script component documentation: https://nextjs.org/docs/app/api-reference/components/script
- Consult your chatbot provider's documentation
- Contact your development team

## Example Integration

Here's a complete example with a hypothetical chatbot service:

```tsx
{/* Chatbot Widget Integration */}
<Script
  id="chatbot-config"
  strategy="beforeInteractive"
>
  {`
    window.chatbotSettings = {
      projectId: 'demo-county-123',
      theme: 'government',
      primaryColor: '#1e3a8a',
      position: 'bottom-right',
      greeting: 'Welcome to Demo County! How can I help you today?'
    };
  `}
</Script>
<Script
  src="https://chatbot-service.com/embed/v2/widget.js"
  strategy="afterInteractive"
  onLoad={() => console.log('Chatbot loaded successfully')}
  onError={(e) => console.error('Chatbot loading error:', e)}
/>
```

This setup will display your chatbot widget on all pages of the Demo County website.

