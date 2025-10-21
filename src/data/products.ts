import { Product } from "@/types/product";
import whiskeyImg from "@/assets/whisky-product.jpg";
import ginImg from "@/assets/gin-product.jpg";
import vodkaImg from "@/assets/vodka-product.jpg";
import wineImg from "@/assets/wine-product.jpg";

export const products: Product[] = [
  // Premium Whisky
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
    id: "13",
    name: "Jameson Irish Whiskey",
    brand: "Jameson",
    category: "whisky",
    price: 2800,
    size: "750ml",
    image: whiskeyImg,
    description: "Triple distilled Irish whiskey with a smooth, balanced taste. Perfect for any occasion.",
    origin: "Ireland",
    alcohol: "40%",
    stock: 45
  },
  
  // Premium Gin
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
    id: "14",
    name: "Gordon's London Dry Gin",
    brand: "Gordon's",
    category: "gin",
    price: 1800,
    size: "750ml",
    image: ginImg,
    description: "The world's best-selling London Dry gin. Crisp, refreshing, and perfectly balanced.",
    origin: "England",
    alcohol: "37.5%",
    stock: 60
  },

  // Premium Vodka
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
    id: "15",
    name: "Smirnoff Red Label",
    brand: "Smirnoff",
    category: "vodka",
    price: 1600,
    size: "750ml",
    image: vodkaImg,
    description: "Classic vodka triple distilled for exceptional smoothness. Great for cocktails and mixed drinks.",
    origin: "Russia",
    alcohol: "37.5%",
    stock: 80
  },

  // Premium Wine & Champagne
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
    id: "8",
    name: "Dom Pérignon 2012",
    brand: "Dom Pérignon",
    category: "champagne",
    price: 35000,
    size: "750ml",
    image: wineImg,
    description: "Legendary champagne with refined bubbles. Complex layers of fruit, flowers, and brioche.",
    origin: "France",
    alcohol: "12.5%",
    stock: 6
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
  },
  {
    id: "16",
    name: "4th Street Sweet Red",
    brand: "4th Street",
    category: "wine",
    price: 450,
    size: "750ml",
    image: wineImg,
    description: "Sweet and fruity red wine. Easy drinking and perfect for casual occasions.",
    origin: "South Africa",
    alcohol: "8%",
    stock: 100
  },

  // Rum
  {
    id: "17",
    name: "Bacardi Gold",
    brand: "Bacardi",
    category: "rum",
    price: 2200,
    size: "750ml",
    image: vodkaImg,
    description: "Smooth golden rum with hints of vanilla and almond. Perfect for cocktails or sipping.",
    origin: "Puerto Rico",
    alcohol: "40%",
    stock: 40
  },
  {
    id: "18",
    name: "Captain Morgan Spiced",
    brand: "Captain Morgan",
    category: "rum",
    price: 1900,
    size: "750ml",
    image: vodkaImg,
    description: "Rich spiced rum with notes of vanilla, brown sugar, and warm spices.",
    origin: "Jamaica",
    alcohol: "35%",
    stock: 55
  },

  // Tequila
  {
    id: "19",
    name: "Patrón Silver",
    brand: "Patrón",
    category: "tequila",
    price: 8500,
    size: "750ml",
    image: vodkaImg,
    description: "Ultra-premium silver tequila. Crystal clear with smooth, sweet agave notes.",
    origin: "Mexico",
    alcohol: "40%",
    stock: 12
  },
  {
    id: "20",
    name: "Jose Cuervo Especial",
    brand: "Jose Cuervo",
    category: "tequila",
    price: 2400,
    size: "750ml",
    image: vodkaImg,
    description: "Classic gold tequila with a smooth, balanced flavor. Great for margaritas.",
    origin: "Mexico",
    alcohol: "38%",
    stock: 35
  },

  // Cognac
  {
    id: "21",
    name: "Hennessy VSOP",
    brand: "Hennessy",
    category: "cognac",
    price: 9800,
    size: "700ml",
    image: whiskeyImg,
    description: "Harmonious blend of 60 eaux-de-vie aged up to 15 years. Smooth with notes of oak and vanilla.",
    origin: "France",
    alcohol: "40%",
    stock: 18
  },
  {
    id: "22",
    name: "Rémy Martin VSOP",
    brand: "Rémy Martin",
    category: "cognac",
    price: 10500,
    size: "700ml",
    image: whiskeyImg,
    description: "Fine Champagne cognac with rich, fruity notes and a velvety texture.",
    origin: "France",
    alcohol: "40%",
    stock: 14
  },

  // Energy Drinks
  {
    id: "23",
    name: "Red Bull Energy Drink",
    brand: "Red Bull",
    category: "energy-drink",
    price: 180,
    size: "250ml",
    image: vodkaImg,
    description: "The original energy drink. Revitalizes body and mind with caffeine and B-vitamins.",
    origin: "Austria",
    alcohol: "0%",
    stock: 200
  },
  {
    id: "24",
    name: "Monster Energy",
    brand: "Monster",
    category: "energy-drink",
    price: 200,
    size: "500ml",
    image: vodkaImg,
    description: "Powerful energy blend with a bold flavor. The perfect energy boost.",
    origin: "USA",
    alcohol: "0%",
    stock: 180
  },
  {
    id: "25",
    name: "Power Horse",
    brand: "Power Horse",
    category: "energy-drink",
    price: 150,
    size: "250ml",
    image: vodkaImg,
    description: "Energy drink with taurine and caffeine. Keeps you energized throughout the day.",
    origin: "Kenya",
    alcohol: "0%",
    stock: 250
  },

  // Water
  {
    id: "26",
    name: "Dasani Drinking Water",
    brand: "Dasani",
    category: "water",
    price: 50,
    size: "500ml",
    image: vodkaImg,
    description: "Pure, refreshing drinking water. Enhanced with minerals for taste.",
    origin: "Kenya",
    alcohol: "0%",
    stock: 500
  },
  {
    id: "27",
    name: "Keringet Natural Water",
    brand: "Keringet",
    category: "water",
    price: 80,
    size: "500ml",
    image: vodkaImg,
    description: "Natural mineral water from the pristine Kenyan highlands. Pure and refreshing.",
    origin: "Kenya",
    alcohol: "0%",
    stock: 400
  },

  // Juices (Del Monte)
  {
    id: "28",
    name: "Del Monte Orange Juice",
    brand: "Del Monte",
    category: "juice",
    price: 120,
    size: "1L",
    image: vodkaImg,
    description: "100% natural orange juice. Rich in Vitamin C and bursting with fresh citrus flavor.",
    origin: "Kenya",
    alcohol: "0%",
    stock: 150
  },
  {
    id: "29",
    name: "Del Monte Tropical Mix",
    brand: "Del Monte",
    category: "juice",
    price: 120,
    size: "1L",
    image: vodkaImg,
    description: "Exotic blend of tropical fruits. Refreshing and naturally sweet.",
    origin: "Kenya",
    alcohol: "0%",
    stock: 140
  },
  {
    id: "30",
    name: "Del Monte Mango Juice",
    brand: "Del Monte",
    category: "juice",
    price: 120,
    size: "1L",
    image: vodkaImg,
    description: "Pure mango juice with rich, tropical flavor. Made from the finest mangoes.",
    origin: "Kenya",
    alcohol: "0%",
    stock: 160
  },

  // Beer (affordable options)
  {
    id: "31",
    name: "Tusker Lager",
    brand: "Tusker",
    category: "beer",
    price: 250,
    size: "500ml",
    image: vodkaImg,
    description: "Kenya's favorite beer. Crisp, refreshing lager with a smooth finish.",
    origin: "Kenya",
    alcohol: "4.2%",
    stock: 300
  },
  {
    id: "32",
    name: "Heineken",
    brand: "Heineken",
    category: "beer",
    price: 280,
    size: "500ml",
    image: vodkaImg,
    description: "Premium international lager. Refreshing taste with a balanced bitterness.",
    origin: "Netherlands",
    alcohol: "5%",
    stock: 250
  },
];