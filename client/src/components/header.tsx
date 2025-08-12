import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Mail, Clock, Car } from "lucide-react";

export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Tyres", href: "/tyres" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top Contact Bar */}
        <div className="bg-automotive-red text-white py-2 -mx-4 px-4">
          <div className="container mx-auto flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <span className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:01923710323" className="hover:text-automotive-yellow transition-colors">
                  01923 710 323
                </a>
              </span>
              <span className="hidden md:flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:croxleytyres@gmail.com" className="hover:text-automotive-yellow transition-colors">
                  croxleytyres@gmail.com
                </a>
              </span>
            </div>
            <div className="hidden md:flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>Mon-Fri: 8:30am-5:30pm | Sat: 8:30am-3pm</span>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-automotive-red flex items-center">
              <img 
                src="@assets/IMG_3342_1755015352143.jpeg" 
                alt="Croxley Tyres Logo" 
                className="h-12 w-12 mr-3 rounded-full object-cover"
              />
              Croxley Tyres
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-colors font-medium ${
                    isActive(item.href)
                      ? "text-automotive-red"
                      : "text-automotive-dark-red hover:text-automotive-red"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium transition-colors ${
                        isActive(item.href)
                          ? "text-automotive-red"
                          : "text-automotive-dark-red hover:text-automotive-red"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="pt-4 border-t">
                    <div className="space-y-2">
                      <a href="tel:01923710323" className="flex items-center text-automotive-red">
                        <Phone className="h-4 w-4 mr-2" />
                        01923 710 323
                      </a>
                      <a href="mailto:croxleytyres@gmail.com" className="flex items-center text-automotive-red">
                        <Mail className="h-4 w-4 mr-2" />
                        croxleytyres@gmail.com
                      </a>
                    </div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
}
