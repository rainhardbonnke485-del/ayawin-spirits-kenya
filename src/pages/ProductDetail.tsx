import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowLeft, Plus, Minus } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import { useState } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Button onClick={() => navigate("/products")}>Browse Products</Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
    toast.success(`${quantity}x ${product.name} added to cart`);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="gradient-card rounded-lg overflow-hidden shadow-elegant">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Product Info */}
          <div>
            <p className="text-sm text-accent uppercase tracking-wider mb-2">
              {product.category}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{product.name}</h1>
            <p className="text-2xl text-muted-foreground mb-6">{product.brand}</p>
            
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-4xl font-bold text-accent">
                KSh {product.price.toLocaleString()}
              </span>
              <span className="text-lg text-muted-foreground">{product.size}</span>
            </div>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {product.description}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8 p-6 gradient-card rounded-lg">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Origin</p>
                <p className="text-lg font-semibold">{product.origin}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Alcohol Content</p>
                <p className="text-lg font-semibold">{product.alcohol}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Size</p>
                <p className="text-lg font-semibold">{product.size}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Stock</p>
                <p className="text-lg font-semibold">
                  {product.stock > 10 ? "In Stock" : `Only ${product.stock} left`}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="text-2xl font-semibold w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Button 
              size="lg" 
              className="w-full gradient-primary text-lg shadow-glow"
              onClick={handleAddToCart}
              disabled={product.stock === 0}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
            </Button>

            <div className="mt-8 p-6 bg-muted/30 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Delivery:</strong> Available across Kenya. Fast and secure delivery to your doorstep.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                <strong>Returns:</strong> Contact us within 24 hours of delivery for any issues.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
