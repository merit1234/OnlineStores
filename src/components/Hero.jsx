import { useState, useEffect } from "react"; 
import { motion } from "framer-motion";
import { image } from "framer-motion/client";

const featuredBanners = [
  {
    title: "SUPER OFFER SALES",
    subtitle: "70% off on all Products sale",
    buttonText: "Seize the Offers",
    bg: "from-yellow-400 to-pink-500"
  },
  {
    title: "Catchy & Modern",
    subtitle: "Shop the Best, Forget the Rest.",
    buttonText: "Explore Now",
    bg: "from-green-400 to-blue-500",
  
  },
  {
    title: "Limited Offers ⏰",
    subtitle: "Your Favorite Products, One Click Away.",
    buttonText: "Catch the Savings",
    bg: "from-red-500 to-purple-600"
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % featuredBanners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const banner = featuredBanners[current];

  return (
    <motion.div
      key={current}
      className={`bg-gradient-to-r ${banner.bg} text-white text-center py-20 px-4 rounded-lg shadow-lg mb-10`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4">{banner.title}</h1>
      <p className="text-lg md:text-xl mb-6">{banner.subtitle}</p>
      <a
        href="#products"
        className="bg-white text-orange-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
      >
        {banner.buttonText}
      </a>
    </motion.div>
  );
};

export default Hero;