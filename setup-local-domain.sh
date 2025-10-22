#!/bin/bash

# Setup Local Domain for Demo County Website
# This script helps you set up a custom local domain

echo "🏛️  Demo County - Local Domain Setup"
echo "===================================="
echo ""

# Check if running with sudo for hosts file modification
if [ "$EUID" -ne 0 ]; then 
    echo "⚠️  This script needs sudo access to modify /etc/hosts"
    echo ""
    echo "Please run with: sudo ./setup-local-domain.sh"
    echo ""
    echo "Or manually add this line to /etc/hosts:"
    echo "127.0.0.1    democounty.local www.democounty.local"
    exit 1
fi

echo "Choose your preferred local domain:"
echo ""
echo "1) democounty.local (recommended)"
echo "2) democounty.gov.local (more realistic)"
echo "3) custom domain"
echo ""
read -p "Enter choice (1-3): " choice

case $choice in
    1)
        DOMAIN="democounty.local"
        ;;
    2)
        DOMAIN="democounty.gov.local"
        ;;
    3)
        read -p "Enter custom domain: " DOMAIN
        ;;
    *)
        echo "Invalid choice"
        exit 1
        ;;
esac

# Check if entry already exists
if grep -q "$DOMAIN" /etc/hosts; then
    echo "✅ Domain $DOMAIN already exists in /etc/hosts"
else
    # Backup hosts file
    cp /etc/hosts /etc/hosts.backup
    echo "📋 Backed up /etc/hosts to /etc/hosts.backup"
    
    # Add entry
    echo "127.0.0.1    $DOMAIN www.$DOMAIN" >> /etc/hosts
    echo "✅ Added $DOMAIN to /etc/hosts"
fi

echo ""
echo "✨ Setup complete!"
echo ""
echo "Your website will be accessible at:"
echo "  → http://$DOMAIN:3000"
echo "  → http://www.$DOMAIN:3000"
echo ""
echo "To run without port number (port 80):"
echo "  sudo npm run dev -- -p 80"
echo "  Then visit: http://$DOMAIN"
echo ""
echo "To remove the domain later:"
echo "  sudo nano /etc/hosts"
echo "  (Delete the line with $DOMAIN)"
echo ""

