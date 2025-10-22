# Local Domain Setup Guide

Make your demo website accessible at a realistic county government URL like `democounty.local` instead of `localhost:3000`.

## Quick Setup (Automated)

Run the provided setup script:

```bash
sudo ./setup-local-domain.sh
```

This will guide you through setting up a custom local domain.

## Manual Setup

### Option 1: Simple Local Domain

**1. Edit hosts file:**
```bash
sudo nano /etc/hosts
```

**2. Add this line:**
```
127.0.0.1    democounty.local www.democounty.local
```

**3. Save and exit** (Ctrl+X, Y, Enter)

**4. Access your site:**
- Visit: `http://democounty.local:3000`

### Option 2: Realistic Government Domain

Use `.gov.local` for a more realistic demo:

**1. Edit hosts file:**
```bash
sudo nano /etc/hosts
```

**2. Add this line:**
```
127.0.0.1    democounty.gov.local www.democounty.gov.local
```

**3. Access at:**
- `http://democounty.gov.local:3000`

### Option 3: Remove Port Number (Clean URL)

To access without `:3000`:

**1. Stop current server** (Ctrl+C)

**2. Run on port 80:**
```bash
sudo npm run dev -- -p 80
```

**3. Access at:**
- `http://democounty.local` (no port!)
- `http://democounty.gov.local`

## Popular Domain Options

Choose what works best for your demo:

| Domain | URL | Best For |
|--------|-----|----------|
| `democounty.local` | `http://democounty.local:3000` | Quick demos |
| `democounty.gov.local` | `http://democounty.gov.local:3000` | Realistic government feel |
| `yourcounty.gov.local` | `http://yourcounty.gov.local:3000` | Customized to your county |

## For Remote Demos (ngrok)

If you need to share your demo over the internet:

### 1. Install ngrok:
```bash
# macOS (using Homebrew)
brew install ngrok

# Or download from https://ngrok.com
```

### 2. Start your dev server:
```bash
npm run dev
```

### 3. In a new terminal, start ngrok:
```bash
ngrok http 3000
```

### 4. Share the URL:
You'll get a public URL like:
```
https://abc123-def456.ngrok-free.app
```

Share this URL with conference attendees - they can access your demo from anywhere!

## HTTPS Support (Optional)

For local HTTPS (useful if your chatbot requires it):

### 1. Install mkcert:
```bash
brew install mkcert
mkcert -install
```

### 2. Create certificates:
```bash
cd /Users/bilalhassan/work-projects/demo-county
mkcert democounty.local localhost 127.0.0.1
```

### 3. Update Next.js to use HTTPS:
Create a `server.js` file with HTTPS support (advanced setup).

## Troubleshooting

### Domain not working?

**Clear DNS cache:**
```bash
# macOS
sudo dscacheutil -flushcache
sudo killall -HUP mDNSResponder
```

**Verify hosts file:**
```bash
cat /etc/hosts | grep democounty
```

### Permission denied on port 80?

Port 80 requires sudo:
```bash
sudo npm run dev -- -p 80
```

### Reset to default:

**Remove custom domain:**
```bash
sudo nano /etc/hosts
# Delete the line with your custom domain
```

## Best Practices for ICMA Demo

1. **Use a realistic domain**: `democounty.gov.local` makes the demo more authentic
2. **Run on port 80**: Removes `:3000` from URL for cleaner appearance
3. **Test beforehand**: Verify everything works at your custom domain
4. **Have a backup**: Keep `localhost:3000` working as a fallback

## Example Demo Workflow

```bash
# 1. Setup domain (one-time)
sudo ./setup-local-domain.sh

# 2. Start server on port 80
sudo npm run dev -- -p 80

# 3. Open browser to:
http://democounty.gov.local

# 4. Present to conference attendees!
```

## Remove Setup Later

To remove the custom domain:

```bash
sudo nano /etc/hosts
# Delete the line(s) you added
# Save and exit
```

Or restore from backup:
```bash
sudo cp /etc/hosts.backup /etc/hosts
```

---

**Pro Tip:** Set this up before your demo day and test everything at the custom URL to ensure a smooth presentation!

