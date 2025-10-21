import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Wine, Shield, Truck, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Ayawin</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              Welcome to Ayawin - Kenya's premier destination for premium liquors, beverages, and everyday essentials.
            </p>

            <div className="gradient-card rounded-lg p-8 mb-8">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded with a passion for excellence, Ayawin has grown to become one of Kenya's most trusted suppliers 
                of premium spirits and beverages. We understand that our customers appreciate quality, authenticity, 
                and reliable service.
              </p>
              <p className="text-muted-foreground">
                From the finest imported whiskies and cognacs to everyday essentials like water and energy drinks, 
                we've curated a diverse selection to meet every need and occasion.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="gradient-card rounded-lg p-6">
                <Wine className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">Premium Selection</h3>
                <p className="text-muted-foreground">
                  We carefully curate our collection from the world's finest distilleries and producers, 
                  ensuring authenticity and quality in every bottle.
                </p>
              </div>

              <div className="gradient-card rounded-lg p-6">
                <Truck className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
                <p className="text-muted-foreground">
                  Quick and reliable delivery across Kenya. We ensure your order reaches you safely 
                  and in perfect condition.
                </p>
              </div>

              <div className="gradient-card rounded-lg p-6">
                <Shield className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">100% Authentic</h3>
                <p className="text-muted-foreground">
                  Every product we sell is guaranteed authentic. We work directly with authorized 
                  distributors and importers.
                </p>
              </div>

              <div className="gradient-card rounded-lg p-6">
                <Users className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">Customer First</h3>
                <p className="text-muted-foreground">
                  Our dedicated team is committed to providing exceptional service and ensuring 
                  your complete satisfaction.
                </p>
              </div>
            </div>

            <div className="gradient-card rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-4">Our Commitment</h2>
              <p className="text-muted-foreground mb-4">
                At Ayawin, we believe in responsible business practices. We strictly adhere to all 
                legal requirements regarding the sale and distribution of alcoholic beverages. All our 
                customers must be 18 years or older.
              </p>
              <p className="text-muted-foreground">
                We're not just a store - we're your trusted partner for quality beverages and essentials. 
                Whether you're stocking your bar, planning a celebration, or simply need everyday drinks, 
                Ayawin has you covered.
              </p>
            </div>

            <div className="mt-8 gradient-card rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Inventory Management</h2>
              <p className="text-muted-foreground mb-4">
                We also provide comprehensive inventory management solutions for businesses.
              </p>
              <a 
                href="http://ayawin.co.ke" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:underline font-semibold"
              >
                Visit ayawin.co.ke →
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;