import { Card, CardContent } from "@/components/ui/card";
import { Car, Settings, PoundSterling } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Car,
      title: "Quality Rodex Tyres",
      description: "Mid-range Rodex tyres offering excellent performance and value for money",
      bgColor: "bg-automotive-blue",
    },
    {
      icon: Settings,
      title: "Expert Installation",
      description: "Professional fitting service ensuring your tyres are mounted and balanced correctly",
      bgColor: "bg-automotive-orange",
    },
    {
      icon: PoundSterling,
      title: "Competitive Pricing",
      description: "Great value tyres with part worn options available for budget-conscious customers",
      bgColor: "bg-automotive-blue",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-automotive-gray mb-4">
            Why Choose Croxley Tyres?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional tyre services with quality products and expert installation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="text-center bg-light-gray hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-automotive-gray">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
