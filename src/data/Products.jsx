import Jeans from '../assets/Jeans.jpeg'
import ashsnikers from '../assets/ashsnikers.jpg'
import exclusivewatch from '../assets/exclusivewatch.png'
import menspolo  from '../assets/menspolo.jpg'
import mensjoggers from '../assets/mensjoggers.jpg'
import unisexjumper from '../assets/unisexjumper.jpg'
import unisexsocks from '../assets/unisexsocks.jpg'
import watch from '../assets/watch.jpg'
import Bag from '../assets/Bag.jpeg'
import ladiesaccessries from '../assets/ladiesaccessries.jpeg'
import winter from '../assets/winter.jpeg'
import pinkladies from '../assets/pinkladies.jpeg'
import canvas from '../assets/canvas.jpg'
import mensshoes from '../assets/mensshoes.jpg'
import menstop from '../assets/menstop.jpg'





// This file contains the product data for the online shop.
const products = [
  {
    id: 1,
    name: "Classic Blue Jean",
    price: 15000.00,
    image: Jeans,
    description: "Slip into timeless style with our best-selling denim jeans."
  },
  {
  id: 2,
  name: "Classic Snikers",
  description: "Classic Sneakers — timeless, comfy, and effortlessly stylish ,your everyday go-to for any look.",
  price: 14000,
   image: ashsnikers,
  category: "shoes",
  size: ["S", "M", "L", "XL"],
  color: ["Black", "Gray", "Navy"],
  inStock: true,
  rating: 4.4
},

  {
    id: 3,
    name: "Exclusive Watch",
    price: 30000,
    image: exclusivewatch,
    description: "Exclusive Watch — bold, refined, and made to impress.A timeless piece for every moment."
  },
  {
    id: 4,
    name: "Mens Shirt",
    price: 10000,
    image: menspolo,
    description: "Sharp, stylish, and effortlessly cool.Perfect fit for every occasion.."
  },
  {
    id: 5,
    name: "Joggers",
    price: 10000.00,
    image: mensjoggers,
    description: "Sleek, comfy, and made to move.Style meets all-day comfort"
  },
  {
    id: 6,
    name: "Jumper",
    price: 8000.00,
    image: unisexjumper,
    description: "Cozy, chic, and effortlessly warm.Layer up in style and comfort."
  },
  {
    id: 7,
    name: "Socks",
    price: 5000.00,
    image: unisexsocks,
    description: "soft, snug, and made for all-day comfort.The perfect finish to every step"
  },
  {
    id: 8,
    name: "Wrist Watch",
    price: 20000.00,
    image: watch,
    description: "Timeless elegance on your wrist.Style that keeps up with every second.."
  },
  {
    id: 9,
    name: "Ladies Bags",
    price: 18000.00,
    image: Bag,
    description: "stylish, spacious, and made to stand out.Carry elegance everywhere you go"
  },
  {
    id: 10,
    name: "Feminine accessories",
    price: 70000.00,
    image: ladiesaccessries,
    description: " Delicate, stylish, and effortlessly chic the perfect touch to complete your look."
  },
  {
    id: 11,
    name: "Winter wears",
    price: 30000,
    image: winter,
    description: " Warm, stylish, and built for the chill.Cozy up in comfort and elegance"
  },
  {
    id: 12,
    name: "Ladies Pink Gown",
    price: 10000,
    image: pinkladies,
    description: "Bold, beautiful, and unapologetically feminine .Own your style with a touch of pink flair."
  },
  {
    id: 13,
    name: "Men shoes",
    price: 15000.00,
    image: canvas,
    description: "Cool, casual, and effortlessly versatile.Perfect for everyday style and comfort."
  },
  {
    id: 14,
    name: "Mens Shoes",
    price: 10000,
    image: mensshoes ,
    description: "Bold, refined, and built to last,Walk strong, look sharp."
  },
  {
    id: 15,
    name: "Mens Top",
    price: 8000.00,
    image: menstop,
    description: "Modern, versatile, and effortlessly cool. Style that fits every moment."
  },
]
export default products;