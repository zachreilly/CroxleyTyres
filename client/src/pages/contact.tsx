import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "@/components/contact-form";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

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
            <h1 className="text-3xl md:text-4xl font-bold text-automotive-gray mb-4">Get In Touch</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Contact us for tyre services, quotes, or any questions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-white shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-automotive-gray mb-4 flex items-center">
                    <MapPin className="text-automotive-blue mr-3 h-6 w-6" />
                    Our Location
                  </h3>
                  <p className="text-gray-600 text-lg">
                    174-176 New Rd<br />
                    Croxley Green<br />
                    Rickmansworth WD33HD
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-automotive-gray mb-4 flex items-center">
                    <Phone className="text-automotive-blue mr-3 h-6 w-6" />
                    Call Us
                  </h3>
                  <a
                    href="tel:01923710323"
                    className="text-lg text-automotive-blue hover:text-blue-800 font-medium"
                  >
                    01923 710 323
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-automotive-gray mb-4 flex items-center">
                    <Mail className="text-automotive-blue mr-3 h-6 w-6" />
                    Email Us
                  </h3>
                  <a
                    href="mailto:croxleytyres@gmail.com"
                    className="text-lg text-automotive-blue hover:text-blue-800 font-medium"
                  >
                    croxleytyres@gmail.com
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-automotive-gray mb-4 flex items-center">
                    <Clock className="text-automotive-blue mr-3 h-6 w-6" />
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
        </div>
      </section>
    </>
  );
}
