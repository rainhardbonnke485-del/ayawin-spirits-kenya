export interface Product {
  id: string;
  name: string;
  brand: string;
  category: "whisky" | "gin" | "vodka" | "wine" | "beer" | "rum" | "tequila" | "cognac" | "champagne" | "energy-drink" | "water" | "juice";
  price: number;
  size: string;
  image: string;
  description: string;
  origin: string;
  alcohol: string;
  stock: number;
}
