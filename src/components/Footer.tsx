import { Wine, Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Wine className="h-6 w-6 text-accent" />
              <span className="text-xl font-bold">Ayawin</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Kenya's premier destination for premium liquors. Delivered with care across the country.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products?category=whisky" className="text-muted-foreground hover:text-accent transition-smooth">Whisky</Link></li>
              <li><Link to="/products?category=gin" className="text-muted-foreground hover:text-accent transition-smooth">Gin</Link></li>
              <li><Link to="/products?category=vodka" className="text-muted-foreground hover:text-accent transition-smooth">Vodka</Link></li>
              <li><Link to="/products?category=wine" className="text-muted-foreground hover:text-accent transition-smooth">Wine</Link></li>
              <li><Link to="/products?category=beer" className="text-muted-foreground hover:text-accent transition-smooth">Beer</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-smooth">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-smooth">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-smooth">Delivery Info</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-smooth">Terms & Conditions</a></li>
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
