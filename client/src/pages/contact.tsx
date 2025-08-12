import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "@/components/contact-form";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

export default function Contact() {
  const openingHours = [
    { day: "Monday", hours: "8:30 AM - 5:30 PM" },
    { day: "Tuesday", hours: "8:30 AM - 5:30 PM" },
    { day: "Wednesday", hours: "8:30 AM - 5:30 PM" },
    { day: "Thursday", hours: "8:30 AM - 5:30 PM" },
    { day: "Friday", hours: "8:30 AM - 5:30 PM" },
    { day: "Saturday", hours: "8:30 AM - 3:00 PM" },
    { day: "Sunday", hours: "Closed", closed: true },
  ];

  return (
    <>
      <title>Contact Croxley Tyres | Get In Touch | Rickmansworth</title>
      <meta name="description" content="Contact Croxley Tyres for tyre services and quotes. Located at 174-176 New Rd, Croxley Green. Call 01923710323 or email croxleytyres@gmail.com" />
      
      <section className="py-16 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-automotive-dark-red mb-4">Get In Touch</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Contact us for tyre services, quotes, or any questions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-white shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-automotive-dark-red mb-4 flex items-center">
                    <MapPin className="text-automotive-red mr-3 h-6 w-6" />
                    Our Location
                  </h3>
                  <p className="text-gray-600 text-lg mb-4">
                    174-176 New Rd<br />
                    Croxley Green<br />
                    Rickmansworth WD33HD
                  </p>
                  <div className="flex flex-col gap-3">
                    <a
                      href="https://www.google.com/maps/place/174-176+New+Rd,+Croxley+Green,+Rickmansworth+WD3+3HD,+UK"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-automotive-red hover:text-red-800 transition-colors font-medium"
                    >
                      <MapPin className="h-4 w-4 mr-2" />
                      View on Google Maps
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                    <a
                      href="https://www.google.com/maps/dir//174-176+New+Rd,+Croxley+Green,+Rickmansworth+WD3+3HD,+UK"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-automotive-yellow hover:text-yellow-600 transition-colors font-medium"
                    >
                      <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21.71 11.29l-9-9a1 1 0 00-1.42 0l-9 9 .71.71L12 3.59 20.29 12l.71-.71z"/>
                        <path d="M19 13v6a1 1 0 01-1 1H6a1 1 0 01-1-1v-6H3v6a3 3 0 003 3h12a3 3 0 003-3v-6h-2z"/>
                        <path d="M12 15l-3-3h2V9h2v3h2l-3 3z"/>
                      </svg>
                      Get Directions
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-automotive-dark-red mb-4 flex items-center">
                    <Phone className="text-automotive-red mr-3 h-6 w-6" />
                    Call Us
                  </h3>
                  <a
                    href="tel:01923710323"
                    className="text-lg text-automotive-red hover:text-red-800 font-medium"
                  >
                    01923 710 323
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-automotive-dark-red mb-4 flex items-center">
                    <Mail className="text-automotive-red mr-3 h-6 w-6" />
                    Email Us
                  </h3>
                  <a
                    href="mailto:croxleytyres@gmail.com"
                    className="text-lg text-automotive-red hover:text-red-800 font-medium"
                  >
                    croxleytyres@gmail.com
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-automotive-dark-red mb-4 flex items-center">
                    <Clock className="text-automotive-red mr-3 h-6 w-6" />
                    Opening Hours
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    {openingHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between">
                        <span>{schedule.day}</span>
                        <span className={schedule.closed ? "text-red-500" : ""}>
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
          
          {/* Google Maps Section */}
          <div className="mt-12">
            <Card className="bg-white shadow-md overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-automotive-red text-white p-4">
                  <h3 className="text-xl font-semibold flex items-center">
                    <MapPin className="text-automotive-yellow mr-3 h-6 w-6" />
                    Find Us Here
                  </h3>
                </div>
                <div className="relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2473.8234567890123!2d-0.4424567890123456!3d51.6467890123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487651234567890a%3A0x1234567890abcdef!2s174-176%20New%20Rd%2C%20Croxley%20Green%2C%20Rickmansworth%20WD3%203HD%2C%20UK!5e0!3m2!1sen!2suk!4v1234567890123"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full"
                  />
                  <div className="absolute top-4 right-4">
                    <a
                      href="https://www.google.com/maps/dir//174-176+New+Rd,+Croxley+Green,+Rickmansworth+WD3+3HD,+UK"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-automotive-yellow text-black px-3 py-2 rounded-md font-medium hover:bg-yellow-600 transition-colors inline-flex items-center text-sm shadow-lg"
                    >
                      <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21.71 11.29l-9-9a1 1 0 00-1.42 0l-9 9 .71.71L12 3.59 20.29 12l.71-.71z"/>
                        <path d="M19 13v6a1 1 0 01-1 1H6a1 1 0 01-1-1v-6H3v6a3 3 0 003 3h12a3 3 0 003-3v-6h-2z"/>
                        <path d="M12 15l-3-3h2V9h2v3h2l-3 3z"/>
                      </svg>
                      Directions
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
