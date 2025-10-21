import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, AlertCircle } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms & Conditions</h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            Please read these terms and conditions carefully before using our service.
          </p>

          <div className="gradient-card rounded-lg p-6 bg-accent/10 mb-8 flex gap-4">
            <AlertCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold mb-2">Important Notice</h3>
              <p className="text-muted-foreground">
                By accessing and placing an order with Ayawin, you confirm that you are in agreement 
                with and bound by the terms and conditions contained below.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <section className="gradient-card rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Shield className="h-6 w-6 text-accent" />
                Age Restriction
              </h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  <strong className="text-foreground">You must be 18 years or older</strong> to purchase 
                  alcoholic beverages from Ayawin. By placing an order, you confirm that you are of legal 
                  drinking age.
                </p>
                <p>
                  Valid identification will be required upon delivery. We reserve the right to refuse 
                  delivery if proper identification cannot be provided or if the recipient appears to be 
                  under 18 years of age.
                </p>
              </div>
            </section>

            <section className="gradient-card rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Product Information</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  We strive to provide accurate product descriptions, images, and pricing. However, 
                  we do not warrant that product descriptions or other content is accurate, complete, 
                  reliable, current, or error-free.
                </p>
                <p>
                  All products are subject to availability. We reserve the right to limit quantities 
                  purchased per person, household, or order.
                </p>
              </div>
            </section>

            <section className="gradient-card rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Pricing & Payment</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  All prices are listed in Kenyan Shillings (KSh) and are inclusive of applicable taxes 
                  unless otherwise stated. Prices are subject to change without notice.
                </p>
                <p>
                  We accept payment via M-Pesa and other approved payment methods. Payment must be 
                  completed before dispatch of your order.
                </p>
                <p>
                  In the event of a pricing error, we reserve the right to cancel the order and issue 
                  a full refund.
                </p>
              </div>
            </section>

            <section className="gradient-card rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Delivery</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  Delivery times are estimates and not guaranteed. Ayawin is not liable for delays 
                  caused by circumstances beyond our control.
                </p>
                <p>
                  You must provide accurate delivery information. Additional charges may apply for 
                  failed deliveries due to incorrect information.
                </p>
                <p>
                  Orders containing alcohol must be received by someone 18 years or older with valid 
                  identification. We cannot leave orders unattended.
                </p>
              </div>
            </section>

            <section className="gradient-card rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Returns & Refunds</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  Due to the nature of our products, we cannot accept returns of alcoholic beverages 
                  unless the product is defective or damaged.
                </p>
                <p>
                  If you receive a damaged or defective product, please contact us within 24 hours of 
                  delivery with photographic evidence. We will arrange a replacement or refund.
                </p>
                <p>
                  Non-alcoholic beverages may be returned within 7 days if unopened and in original 
                  condition.
                </p>
              </div>
            </section>

            <section className="gradient-card rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Responsible Drinking</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  Ayawin promotes responsible drinking. We reserve the right to refuse service to anyone 
                  and limit quantities to discourage excessive consumption.
                </p>
                <p>
                  Please drink responsibly and never drink and drive. If you or someone you know has a 
                  drinking problem, please seek help.
                </p>
              </div>
            </section>

            <section className="gradient-card rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Privacy & Data Protection</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  We respect your privacy and are committed to protecting your personal data. Information 
                  collected during the ordering process will be used solely for order fulfillment and 
                  customer service.
                </p>
                <p>
                  We will never share your personal information with third parties without your consent, 
                  except where required by law.
                </p>
              </div>
            </section>

            <section className="gradient-card rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  Ayawin shall not be liable for any indirect, incidental, special, or consequential 
                  damages arising from the use of our service or products.
                </p>
                <p>
                  Our liability is limited to the purchase price of the product in question.
                </p>
              </div>
            </section>

            <section className="gradient-card rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  We reserve the right to modify these terms and conditions at any time. Changes will 
                  be effective immediately upon posting to the website.
                </p>
                <p>
                  Your continued use of our service following any changes constitutes acceptance of 
                  those changes.
                </p>
              </div>
            </section>

            <section className="gradient-card rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  These terms and conditions are governed by and construed in accordance with the laws 
                  of the Republic of Kenya.
                </p>
                <p>
                  Any disputes arising from these terms shall be subject to the exclusive jurisdiction 
                  of the Kenyan courts.
                </p>
              </div>
            </section>

            <section className="gradient-card rounded-lg p-8 bg-accent/10">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about these Terms & Conditions, please contact us:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Email:</strong> <a href="mailto:ayawin.ke@gmail.com" className="text-accent hover:underline">ayawin.ke@gmail.com</a></p>
                <p><strong>Phone:</strong> <a href="tel:+254791259510" className="text-accent hover:underline">+254 791 259 510</a></p>
              </div>
            </section>

            <div className="text-center text-sm text-muted-foreground pt-8">
              <p>Last Updated: {new Date().toLocaleDateString('en-GB')}</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;