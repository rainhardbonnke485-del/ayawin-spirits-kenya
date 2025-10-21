import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { Product } from "@/types/product";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <Link to={`/product/${product.id}`}>
      <Card className="gradient-card overflow-hidden transition-smooth hover:shadow-elegant hover:scale-[1.02] group">
        <div className="relative aspect-[3/4] overflow-hidden bg-muted">
          <img 
            src={product.image} 
            alt={product.name}
            className="object-cover w-full h-full transition-smooth group-hover:scale-110"
          />
          {product.stock < 10 && product.stock > 0 && (
            <div className="absolute top-2 right-2 bg-destructive text-destructive-foreground px-2 py-1 rounded text-xs font-semibold">
              Only {product.stock} left
            </div>
          )}
          {product.stock === 0 && (
            <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
              <span className="text-lg font-semibold text-muted-foreground">Out of Stock</span>
            </div>
          )}
        </div>
        
        <div className="p-4">
          <p className="text-xs text-accent uppercase tracking-wider mb-1">{product.category}</p>
          <h3 className="font-semibold text-lg mb-1 line-clamp-1">{product.name}</h3>
          <p className="text-sm text-muted-foreground mb-2 line-clamp-1">{product.brand}</p>
          
          <div className="flex items-center justify-between mt-4">
            <div>
              <p className="text-2xl font-bold text-accent">
                KSh {product.price.toLocaleString()}
              </p>
              <p className="text-xs text-muted-foreground">{product.size}</p>
            </div>
            
            <Button 
              size="icon" 
              onClick={handleAddToCart}
              disabled={product.stock === 0}
              className="shadow-glow"
            >
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;
