import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">SkinGlow</h3>
            <p className="text-sm mb-4">Discover your natural beauty with our organic skincare products.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-200" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-blue-200" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-blue-200" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="mailto:contact@skinglow.com" className="hover:text-blue-200" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="hover:text-blue-200">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-blue-200">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="hover:text-blue-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-blue-200">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-blue-200">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-blue-200">
                  Returns & Refunds
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="text-sm not-italic">
              123 Skincare Lane<br />
              Beauty City, ST 12345<br />
              <a href="tel:+15551234567" className="hover:text-blue-200">
                (555) 123-4567
              </a><br />
              <a href="mailto:contact@skinglow.com" className="hover:text-blue-200">
                contact@skinglow.com
              </a>
            </address>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-blue-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">&copy; 2025 SkinGlow. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <img src="/placeholder.svg" alt="Visa" width={40} height={25} className="h-6" />
              <img src="/placeholder.svg" alt="Mastercard" width={40} height={25} className="h-6" />
              <img src="/placeholder.svg" alt="PayPal" width={40} height={25} className="h-6" />
              <img src="/placeholder.svg" alt="Apple Pay" width={40} height={25} className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}