export interface Product {
  id: string;
  name: string;
  brand: string;
  category: "whisky" | "gin" | "vodka" | "wine" | "beer";
  price: number;
  size: string;
  image: string;
  description: string;
  origin: string;
  alcohol: string;
  stock: number;
}
