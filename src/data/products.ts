import { Product } from "@/types/product";
import whiskeyImg from "@/assets/whisky-product.jpg";
import ginImg from "@/assets/gin-product.jpg";
import vodkaImg from "@/assets/vodka-product.jpg";
import wineImg from "@/assets/wine-product.jpg";

export const products: Product[] = [
  {
    id: "1",
    name: "Johnnie Walker Blue Label",
    brand: "Johnnie Walker",
    category: "whisky",
    price: 28500,
    size: "750ml",
    image: whiskeyImg,
    description: "An exceptional blend of rare whiskies from Scotland's finest distilleries. Smooth, complex, and unforgettable.",
    origin: "Scotland",
    alcohol: "40%",
    stock: 15
  },
  {
    id: "2",
    name: "Tanqueray No. Ten",
    brand: "Tanqueray",
    category: "gin",
    price: 4200,
    size: "750ml",
    image: ginImg,
    description: "A premium small-batch gin with fresh citrus fruits and botanicals. Perfect for sophisticated cocktails.",
    origin: "England",
    alcohol: "47.3%",
    stock: 24
  },
  {
    id: "3",
    name: "Belvedere Pure",
    brand: "Belvedere",
    category: "vodka",
    price: 5800,
    size: "750ml",
    image: vodkaImg,
    description: "Ultra-premium vodka distilled from Polish rye. Silky smooth with a hint of vanilla and cream.",
    origin: "Poland",
    alcohol: "40%",
    stock: 18
  },
  {
    id: "4",
    name: "Château Margaux 2015",
    brand: "Château Margaux",
    category: "wine",
    price: 85000,
    size: "750ml",
    image: wineImg,
    description: "Premier Grand Cru red wine from Bordeaux. Elegant, refined, and age-worthy with remarkable complexity.",
    origin: "France",
    alcohol: "13.5%",
    stock: 5
  },
  {
    id: "5",
    name: "Macallan 18 Year",
    brand: "Macallan",
    category: "whisky",
    price: 45000,
    size: "750ml",
    image: whiskeyImg,
    description: "Rich and full-bodied single malt aged in sherry oak casks. Notes of dried fruits, spice, and chocolate.",
    origin: "Scotland",
    alcohol: "43%",
    stock: 8
  },
  {
    id: "6",
    name: "Hendrick's Lunar",
    brand: "Hendrick's",
    category: "gin",
    price: 5500,
    size: "700ml",
    image: ginImg,
    description: "Limited edition gin with night-blooming botanicals. Mysterious, floral, and deeply aromatic.",
    origin: "Scotland",
    alcohol: "43.4%",
    stock: 12
  },
  {
    id: "7",
    name: "Grey Goose VX",
    brand: "Grey Goose",
    category: "vodka",
    price: 12500,
    size: "1L",
    image: vodkaImg,
    description: "Vodka infused with a hint of precious cognac. Smooth and luxurious with a golden finish.",
    origin: "France",
    alcohol: "40%",
    stock: 20
  },
  {
    id: "8",
    name: "Dom Pérignon 2012",
    brand: "Dom Pérignon",
    category: "wine",
    price: 35000,
    size: "750ml",
    image: wineImg,
    description: "Legendary champagne with refined bubbles. Complex layers of fruit, flowers, and brioche.",
    origin: "France",
    alcohol: "12.5%",
    stock: 6
  },
  {
    id: "9",
    name: "Glenfiddich 21 Year",
    brand: "Glenfiddich",
    category: "whisky",
    price: 32000,
    size: "700ml",
    image: whiskeyImg,
    description: "Luxurious single malt finished in Caribbean rum casks. Sweet, spicy, and incredibly smooth.",
    origin: "Scotland",
    alcohol: "40%",
    stock: 10
  },
  {
    id: "10",
    name: "Bombay Sapphire",
    brand: "Bombay",
    category: "gin",
    price: 3200,
    size: "750ml",
    image: ginImg,
    description: "Classic London Dry gin with 10 hand-selected botanicals. Balanced, versatile, and timeless.",
    origin: "England",
    alcohol: "40%",
    stock: 35
  },
  {
    id: "11",
    name: "Absolut Elyx",
    brand: "Absolut",
    category: "vodka",
    price: 6800,
    size: "750ml",
    image: vodkaImg,
    description: "Manually crafted vodka using a vintage copper still. Rich texture with notes of white chocolate.",
    origin: "Sweden",
    alcohol: "42.3%",
    stock: 16
  },
  {
    id: "12",
    name: "Penfolds Grange",
    brand: "Penfolds",
    category: "wine",
    price: 95000,
    size: "750ml",
    image: wineImg,
    description: "Australia's most celebrated wine. Powerful Shiraz with exceptional aging potential.",
    origin: "Australia",
    alcohol: "14.5%",
    stock: 4
  }
];
