import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Demo County</h3>
            <p className="text-sm">
              Committed to serving our community with excellence, transparency, and accessibility.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/property-assessments" className="hover:text-white transition-colors">
                  Property Search
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  County Services
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-white transition-colors">
                  FAQs & Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Pay Property Taxes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Apply for Permits
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Vital Records
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Business Licenses
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>123 County Building Way</li>
              <li>Demo City, DC 12345</li>
              <li className="mt-3">Phone: (555) 123-4567</li>
              <li>Email: info@democounty.gov</li>
              <li className="mt-3">
                <strong>Hours:</strong> Mon-Fri, 8am-5pm
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Demo County. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

