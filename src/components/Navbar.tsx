import { ShoppingCart, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import logo from "@/assets/ayawin-logo.jpeg";

const Navbar = () => {
  const { items } = useCart();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-2 group">
            <img src={logo} alt="Ayawin Logo" className="h-10 w-auto transition-smooth group-hover:scale-105" />
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-foreground hover:text-accent transition-smooth">
              Home
            </Link>
            <Link to="/products" className="text-foreground hover:text-accent transition-smooth">
              Shop
            </Link>
            <Link to="/products?category=whisky" className="text-foreground hover:text-accent transition-smooth">
              Whisky
            </Link>
            <Link to="/products?category=gin" className="text-foreground hover:text-accent transition-smooth">
              Gin
            </Link>
            <Link to="/products?category=vodka" className="text-foreground hover:text-accent transition-smooth">
              Vodka
            </Link>
            <Link to="/products?category=wine" className="text-foreground hover:text-accent transition-smooth">
              Wine
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 bg-muted rounded-lg px-4 py-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search liquors..." 
                className="border-0 bg-transparent focus-visible:ring-0 w-64"
              />
            </div>
            
            <Link to="/cart">
              <Button variant="outline" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                    {itemCount}
                  </span>
                )}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
