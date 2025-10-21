import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, Globe, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          
          <p className="text-xl text-muted-foreground mb-12">
            We're here to help! Get in touch with us for any inquiries, orders, or support.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="gradient-card rounded-lg p-8">
              <Mail className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <a 
                href="mailto:ayawin.ke@gmail.com" 
                className="text-accent hover:underline text-lg"
              >
                ayawin.ke@gmail.com
              </a>
              <p className="text-muted-foreground mt-2 text-sm">
                We typically respond within 24 hours
              </p>
            </div>

            <div className="gradient-card rounded-lg p-8">
              <Phone className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <a 
                href="tel:+254791259510" 
                className="text-accent hover:underline text-lg"
              >
                +254 791 259 510
              </a>
              <p className="text-muted-foreground mt-2 text-sm">
                Available Mon-Sat, 8am-8pm EAT
              </p>
            </div>

            <div className="gradient-card rounded-lg p-8">
              <Globe className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Inventory Management</h3>
              <a 
                href="http://ayawin.co.ke" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline text-lg"
              >
                ayawin.co.ke
              </a>
              <p className="text-muted-foreground mt-2 text-sm">
                Business inventory solutions
              </p>
            </div>

            <div className="gradient-card rounded-lg p-8">
              <MapPin className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-lg">Kenya</p>
              <p className="text-muted-foreground mt-2 text-sm">
                Nationwide delivery available
              </p>
            </div>
          </div>

          <div className="gradient-card rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Business Hours</h2>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex justify-between">
                <span>Monday - Friday:</span>
                <span className="font-semibold">8:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span className="font-semibold">9:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span className="font-semibold">10:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

          <div className="mt-8 gradient-card rounded-lg p-8 bg-accent/10">
            <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
            <p className="text-muted-foreground mb-4">
              Whether you have questions about products, need help with an order, or want to inquire 
              about bulk purchases, our friendly team is ready to assist you.
            </p>
            <p className="text-muted-foreground">
              For urgent matters, please call us directly. For general inquiries, email works best 
              and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;