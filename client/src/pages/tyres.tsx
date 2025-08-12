import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Phone } from "lucide-react";

export default function Tyres() {
  const tyres = [
    {
      size: "20s/55x16",
      type: "Mid-range performance",
      price: "£66.00",
    },
    {
      size: "19s/65x15",
      type: "Mid-range performance",
      price: "£72.00",
    },
    {
      size: "22s/45x17",
      type: "Mid-range performance",
      price: "£80.00",
    },
    {
      size: "22s/44x18",
      type: "Mid-range performance",
      price: "£80.00",
    },
  ];

  return (
    <>
      <title>Rodex Tyres - Croxley Tyres | Mid-Range Performance Tyres</title>
      <meta name="description" content="Quality Rodex mid-range tyres available at Croxley Tyres. Various sizes from £66-£80. Part worn tyres also available at discounted prices." />
      
      <section className="py-16 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-automotive-gray mb-4">Our Tyre Range</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quality Rodex mid-range tyres available in various sizes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tyres.map((tyre, index) => (
              <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <Car className="h-12 w-12 text-automotive-blue mx-auto mb-3" />
                    <h3 className="text-lg font-semibold text-automotive-gray">Rodex Mid-Range</h3>
                  </div>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-gray-600">
                      Size: <span className="font-medium">{tyre.size}</span>
                    </p>
                    <p className="text-sm text-gray-600">Type: {tyre.type}</p>
                  </div>
                  <div className="text-center">
                    <span className="text-2xl font-bold text-automotive-orange">{tyre.price}</span>
                    <p className="text-sm text-gray-500">per tyre</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12">
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-automotive-gray mb-3">
                    Part Worn Tyres Available
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Quality part worn tyres at discounted prices - perfect for budget-conscious customers
                  </p>
                  <Button 
                    asChild
                    className="bg-automotive-blue hover:bg-blue-800 text-white"
                  >
                    <a href="tel:01923710323">
                      <Phone className="mr-2 h-4 w-4" />
                      Call for Part Worn Pricing
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
