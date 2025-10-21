import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Truck, Package, Clock, MapPin, CheckCircle } from "lucide-react";

const Delivery = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Delivery Information</h1>
          
          <p className="text-xl text-muted-foreground mb-12">
            Fast, reliable, and secure delivery across Kenya. Here's everything you need to know 
            about our delivery service.
          </p>

          <div className="gradient-card rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6">How It Works</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-xl font-bold text-accent">1</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Place Your Order</h3>
                  <p className="text-muted-foreground">
                    Browse our collection, add items to your cart, and complete the checkout process. 
                    We accept M-Pesa and other payment methods.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-xl font-bold text-accent">2</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Order Confirmation</h3>
                  <p className="text-muted-foreground">
                    You'll receive an immediate order confirmation via email/SMS with your order details 
                    and estimated delivery time.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-xl font-bold text-accent">3</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Preparation & Dispatch</h3>
                  <p className="text-muted-foreground">
                    Our team carefully prepares your order and assigns it to a delivery driver. 
                    You'll be notified when your order is dispatched.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-xl font-bold text-accent">4</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Delivery</h3>
                  <p className="text-muted-foreground">
                    Your order will be delivered to your specified address. Our drivers will contact you 
                    upon arrival. Age verification is required for alcohol purchases.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="gradient-card rounded-lg p-6">
              <Clock className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Delivery Times</h3>
              <div className="text-muted-foreground space-y-2">
                <p><strong>Nairobi & Suburbs:</strong> 2-4 hours</p>
                <p><strong>Major Cities:</strong> Same day / Next day</p>
                <p><strong>Other Areas:</strong> 1-3 business days</p>
              </div>
            </div>

            <div className="gradient-card rounded-lg p-6">
              <Package className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Delivery Fees</h3>
              <div className="text-muted-foreground space-y-2">
                <p><strong>Orders over KSh 5,000:</strong> FREE</p>
                <p><strong>Nairobi CBD:</strong> KSh 200</p>
                <p><strong>Nairobi Suburbs:</strong> KSh 300-500</p>
                <p><strong>Other Areas:</strong> Calculated at checkout</p>
              </div>
            </div>

            <div className="gradient-card rounded-lg p-6">
              <MapPin className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Coverage Areas</h3>
              <p className="text-muted-foreground">
                We deliver nationwide across Kenya. Major cities include Nairobi, Mombasa, Kisumu, 
                Nakuru, Eldoret, and many more locations.
              </p>
            </div>

            <div className="gradient-card rounded-lg p-6">
              <CheckCircle className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Order Tracking</h3>
              <p className="text-muted-foreground">
                Track your order in real-time. Receive SMS/email updates at every stage - from order 
                confirmation to delivery completion.
              </p>
            </div>
          </div>

          <div className="gradient-card rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Delivery Requirements</h2>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex gap-3">
                <Truck className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Age Verification</h4>
                  <p>
                    A valid ID must be presented upon delivery for orders containing alcohol. 
                    Customer must be 18 years or older.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Truck className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Signature Required</h4>
                  <p>
                    Orders must be received and signed for by an adult. We cannot leave packages unattended.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Truck className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Safe Packaging</h4>
                  <p>
                    All products are carefully packaged to prevent damage during transit. Glass bottles 
                    are wrapped with protective materials.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="gradient-card rounded-lg p-8 bg-accent/10">
            <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
            <p className="text-muted-foreground mb-4">
              If you have questions about delivery or need to modify your delivery details, 
              please contact us:
            </p>
            <div className="space-y-2">
              <p><strong>Phone:</strong> <a href="tel:+254791259510" className="text-accent hover:underline">+254 791 259 510</a></p>
              <p><strong>Email:</strong> <a href="mailto:ayawin.ke@gmail.com" className="text-accent hover:underline">ayawin.ke@gmail.com</a></p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Delivery;