import { Link } from "wouter";
import { Car, MapPin, Phone, Mail, Facebook } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-automotive-gray text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4 flex items-center">
              <Car className="h-8 w-8 mr-2 text-automotive-orange" />
              Croxley Tyres
            </div>
            <p className="text-gray-300 mb-4">
              Professional tyre services in Croxley Green, Rickmansworth. Quality Rodex tyres with expert installation and competitive pricing.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-automotive-orange transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-automotive-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-automotive-orange transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/tyres" className="text-gray-300 hover:text-automotive-orange transition-colors">
                  Our Tyres
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-automotive-orange transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-automotive-orange flex-shrink-0" />
                <span>174-176 New Rd, Croxley Green, Rickmansworth WD33HD</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-automotive-orange flex-shrink-0" />
                <a href="tel:01923710323" className="hover:text-automotive-orange transition-colors">
                  01923 710 323
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-automotive-orange flex-shrink-0" />
                <a href="mailto:croxleytyres@gmail.com" className="hover:text-automotive-orange transition-colors">
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
        </div>
      </div>
    </footer>
  );
}
