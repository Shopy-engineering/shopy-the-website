import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";

const bouncePath = [
  { x: -120, y: 0 },
  { x: -80, y: -40 },
  { x: -40, y: 0 },
  { x: 0, y: -60 },
  { x: 40, y: 0 },
  { x: 80, y: -40 },
  { x: 120, y: 0 },
  { x: 0, y: 0 }
];

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        {/* Animated Shopping Bag */}
        <div className="relative h-32 mb-4 flex items-end justify-center">
          <motion.div
            initial={bouncePath[0]}
            animate={{ 
              x: bouncePath.map(p => p.x), 
              y: bouncePath.map(p => p.y) 
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              times: [0, 0.14, 0.28, 0.42, 0.57, 0.71, 0.85, 1]
            }}
            className="inline-block"
          >
            <ShoppingBag size={48} className="text-shopy-600 drop-shadow-lg" />
          </motion.div>
        </div>
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Take me home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
