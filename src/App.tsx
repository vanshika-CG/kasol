import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/bebas-neue";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Products from "./pages/Products";
// import Creatives from "./pages/Creatives";
// import Distributors from "./pages/Distributors";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import PreRolledCones from './pages/PreRolledCones';
import RollingPapers from './pages/RollingPapers';

const queryClient = new QueryClient();

const SplashScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-slate-950 via-emerald-950 via-green-900 to-green-600 overflow-hidden"
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 1, delay: 1.5, ease: "easeInOut" }}
      style={{ zIndex: 1000 }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-green-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main content container */}
      <div className="relative z-10 text-center">
        {/* Main title with enhanced styling */}
        <motion.div
          className="relative"
          initial={{ scale: 0.5, opacity: 0, rotateY: -90 }}
          animate={{ scale: 1, opacity: 1, rotateY: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          {/* Glow effect behind text */}
          <div className="absolute inset-0 blur-2xl">
            <h1
              className="text-6xl md:text-8xl lg:text-9xl font-bold text-green-400/50"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Kasol Rolls
            </h1>
          </div>
          
          {/* Main text with gradient */}
          <h1
            className="relative text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-white via-green-200 to-green-400 bg-clip-text text-transparent drop-shadow-2xl"
            style={{ 
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: '0.05em'
            }}
          >
            Kasol Rolls
          </h1>
          
          {/* Animated underline */}
          <motion.div
            className="h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent mt-4 mx-auto"
            initial={{ width: 0 }}
            animate={{ width: "80%" }}
            transition={{ duration: 1, delay: 1 }}
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="text-lg md:text-xl text-green-100/80 font-medium mt-6 tracking-wider"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Authentic • Fresh • Flavorful
        </motion.p>

        {/* Loading dots */}
        <motion.div
          className="flex justify-center space-x-2 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-green-400 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Corner decorative elements */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 border-l-4 border-t-4 border-green-400/50"
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-20 h-20 border-r-4 border-b-4 border-green-400/50"
        initial={{ scale: 0, rotate: 45 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      />

      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20" />
    </motion.div>
  );
};

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500); // Display splash screen for 2.5 seconds (1.5s delay + 1s fade)
    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnimatePresence>
            {showSplash && <SplashScreen />}
          </AnimatePresence>
          {!showSplash && (
            <Layout>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/products" element={<Products />} />
                {/* <Route path="/creatives" element={<Creatives />} />
                <Route path="/distributors" element={<Distributors />} /> */}
                <Route path="/pre-rolled-cones" element={<PreRolledCones />} />
        <Route path="/rolling-papers" element={<RollingPapers />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          )}
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;