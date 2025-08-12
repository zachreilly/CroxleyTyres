import { Button } from "@/components/ui/button";
import { Phone, Car, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-automotive-red text-white py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-automotive-red to-automotive-dark-red opacity-90"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Professional Tyre Services
            <span className="block text-automotive-yellow">You Can Trust</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-red-100">
            Quality Rodex tyres, expert fitting, and reliable service in Croxley Green, Rickmansworth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-automotive-yellow hover:bg-yellow-600 text-black px-8 py-4 text-lg font-semibold"
            >
              <a href="tel:01923710323">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: 01923 710 323
              </a>
            </Button>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="bg-white text-automotive-red hover:bg-gray-100 px-8 py-4 text-lg"
            >
              <a href="/tyres">
                <Car className="mr-2 h-5 w-5" />
                View Our Tyres
              </a>
            </Button>
          </div>
          <div className="mt-6 text-center">
            <a
              href="https://www.google.com/maps/dir//174-176+New+Rd,+Croxley+Green,+Rickmansworth+WD3+3HD,+UK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-red-100 hover:text-automotive-yellow transition-colors text-lg"
            >
              <MapPin className="mr-2 h-5 w-5" />
              174-176 New Rd, Croxley Green - Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
