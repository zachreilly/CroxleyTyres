import { Card, CardContent } from "@/components/ui/card";
import { Car, Scale, Search, Wrench, RefreshCw, Clock } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Car,
      title: "Tyre Fitting",
      description: "Professional tyre mounting and installation with proper balancing",
      bgColor: "bg-automotive-red",
    },
    {
      icon: Scale,
      title: "Wheel Balancing",
      description: "Precision wheel balancing for smooth and safe driving",
      bgColor: "bg-automotive-yellow",
    },
    {
      icon: Search,
      title: "Tyre Inspection",
      description: "Comprehensive tyre health checks and safety assessments",
      bgColor: "bg-automotive-red",
    },
    {
      icon: Wrench,
      title: "Puncture Repair",
      description: "Quick and reliable puncture repairs to get you back on the road",
      bgColor: "bg-automotive-yellow",
    },
    {
      icon: RefreshCw,
      title: "Part Worn Tyres",
      description: "Quality pre-owned tyres at discounted prices",
      bgColor: "bg-automotive-red",
    },
    {
      icon: Clock,
      title: "Quick Service",
      description: "Fast turnaround times to minimize your downtime",
      bgColor: "bg-automotive-yellow",
    },
  ];

  return (
    <>
      <title>Tyre Services - Croxley Tyres | Professional Installation & Repair</title>
      <meta name="description" content="Complete tyre services at Croxley Tyres: fitting, balancing, inspection, puncture repair, and part worn tyres. Expert service in Rickmansworth." />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-automotive-dark-red mb-4">Our Services</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete tyre services for all your automotive needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="bg-light-gray hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-automotive-dark-red mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
