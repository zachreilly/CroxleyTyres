import { Link } from "wouter";
import { Car, MapPin, Phone, Mail, Facebook, ExternalLink } from "lucide-react";
import Logo from "./logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-automotive-dark-red text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4 flex items-center">
              <Logo size="sm" variant="footer" className="mr-2" />
              Croxley Tyres
            </div>
            <p className="text-gray-300 mb-4">
              Professional tyre services in Croxley Green, Rickmansworth. Quality Rodex tyres with expert installation and competitive pricing.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-automotive-yellow transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-automotive-yellow transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-automotive-yellow transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/tyres" className="text-gray-300 hover:text-automotive-yellow transition-colors">
                  Our Tyres
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-automotive-yellow transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-automotive-yellow flex-shrink-0 mt-0.5" />
                <div>
                  <span>174-176 New Rd, Croxley Green, Rickmansworth WD33HD</span>
                  <br />
                  <a
                    href="https://www.google.com/maps/dir//174-176+New+Rd,+Croxley+Green,+Rickmansworth+WD3+3HD,+UK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-automotive-yellow hover:text-yellow-300 transition-colors inline-flex items-center mt-1"
                  >
                    Get Directions
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-automotive-yellow flex-shrink-0" />
                <a href="tel:01923710323" className="hover:text-automotive-yellow transition-colors">
                  01923 710 323
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-automotive-yellow flex-shrink-0" />
                <a href="mailto:croxleytyres@gmail.com" className="hover:text-automotive-yellow transition-colors">
                  croxleytyres@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            &copy; {currentYear} Croxley Tyres. All rights reserved. | Professional tyre services in Rickmansworth
          </p>
          <p className="text-gray-400 text-xs mt-2">
            Made by{" "}
            <a 
              href="https://wrwebsites.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-automotive-yellow transition-colors"
            >
              wrwebsites.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
