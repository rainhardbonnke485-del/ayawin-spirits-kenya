import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/ayawin-logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <img src={logo} alt="Ayawin Logo" className="h-12 w-auto" />
            </div>
            <p className="text-muted-foreground text-sm">
              Kenya's premier destination for premium liquors, beverages, and essentials. Delivered with care across the country.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products?category=whisky" className="text-muted-foreground hover:text-accent transition-smooth">Whisky</Link></li>
              <li><Link to="/products?category=gin" className="text-muted-foreground hover:text-accent transition-smooth">Gin</Link></li>
              <li><Link to="/products?category=vodka" className="text-muted-foreground hover:text-accent transition-smooth">Vodka</Link></li>
              <li><Link to="/products?category=wine" className="text-muted-foreground hover:text-accent transition-smooth">Wine</Link></li>
              <li><Link to="/products?category=rum" className="text-muted-foreground hover:text-accent transition-smooth">Rum</Link></li>
              <li><Link to="/products?category=energy-drink" className="text-muted-foreground hover:text-accent transition-smooth">Energy Drinks</Link></li>
              <li><Link to="/products?category=water" className="text-muted-foreground hover:text-accent transition-smooth">Water</Link></li>
              <li><Link to="/products?category=juice" className="text-muted-foreground hover:text-accent transition-smooth">Juices</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-accent transition-smooth">About Us</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-accent transition-smooth">Contact</Link></li>
              <li><Link to="/delivery" className="text-muted-foreground hover:text-accent transition-smooth">Delivery Info</Link></li>
              <li><Link to="/terms" className="text-muted-foreground hover:text-accent transition-smooth">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-accent transition-smooth">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-smooth">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-smooth">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <p className="text-muted-foreground text-sm mt-4">
              Must be 18+ to purchase
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Ayawin. All rights reserved. Drink responsibly.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
