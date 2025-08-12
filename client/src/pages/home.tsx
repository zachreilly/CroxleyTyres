import Hero from "@/components/hero";
import Features from "@/components/features";
import { Card, CardContent } from "@/components/ui/card";
import BackgroundSlideshow from "@/components/background-slideshow";

export default function Home() {
  return (
    <>
      <title>Croxley Tyres - Professional Tyre Services | Rickmansworth</title>
      <meta name="description" content="Croxley Tyres offers professional tyre services in Rickmansworth. Mid-range Rodex tyres, part worn options. Contact us at 01923710323" />
      <Hero />
      <Features />
      
      {/* Workshop Slideshow Section */}
      <section className="py-0">
        <BackgroundSlideshow className="h-96 flex items-center justify-center" interval={4000}>
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Professional Workshop
            </h2>
            <p className="text-xl text-red-100 max-w-2xl mx-auto">
              State-of-the-art facilities and expert technicians ensuring quality service
            </p>
          </div>
        </BackgroundSlideshow>
      </section>
    </>
  );
}
