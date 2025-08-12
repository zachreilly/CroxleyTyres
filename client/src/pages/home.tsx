import Hero from "@/components/hero";
import Features from "@/components/features";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <title>Croxley Tyres - Professional Tyre Services | Rickmansworth</title>
      <meta name="description" content="Croxley Tyres offers professional tyre services in Rickmansworth. Mid-range Rodex tyres, part worn options. Contact us at 01923710323" />
      <Hero />
      <Features />
      
      {/* Gallery Section */}
      <section className="py-16 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-automotive-dark-red mb-4">
              Our Workshop
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional facilities and quality service you can trust
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <img 
                  src="@assets/IMG_3343_1755015352143.jpeg" 
                  alt="Croxley Tyres Workshop - Professional tyre fitting equipment"
                  className="w-full h-64 object-cover"
                />
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <img 
                  src="@assets/IMG_3349_1755015352143.jpeg" 
                  alt="Croxley Tyres - Quality tyres and professional service"
                  className="w-full h-64 object-cover"
                />
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <CardContent className="p-0">
                <img 
                  src="@assets/IMG_3342_1755015352143.jpeg" 
                  alt="Croxley Tyres storefront - Located in Croxley Green, Rickmansworth"
                  className="w-full h-64 object-cover"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
