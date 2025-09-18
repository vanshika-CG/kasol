// index.tsx
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import enhancedHeroBg from '@/assets/hero-image.jpg';
import kasolRollsBranding from '@/assets/kasol-rolls-branding.jpg';
import productShowcase from '@/assets/product-showcase.jpg';
import { ArrowRight, ExternalLink, Eye, X } from 'lucide-react';
import { useState } from 'react';

const Index = () => {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 100]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  // Featured products for the homepage
  const featuredProducts = [
    {
      id: 1,
      name: 'Pre-Rolled Cones',
      description: 'Premium pre-rolled cones made with organic hemp for the perfect smoke every time. Each cone is meticulously crafted to ensure a smooth, consistent burn and superior flavor preservation.',
      image: productShowcase,
      path: '/pre-rolled-cones'
    },
    {
      id: 2,
      name: 'Rolling Papers',
      description: 'Slow-burning rice and hemp blend papers with natural gum for flawless rolling. Designed for the discerning smoker who appreciates quality and craftsmanship in every detail.',
      image: productShowcase,
      path: '/rolling-papers'
    },
    {
      id: 3,
      name: 'Custom Pre-Rolled Cones',
      description: 'Personalized pre-rolled cones with your brand or design - perfect for events and promotions. Elevate your brand with our premium customization options that make every cone unforgettable.',
      image: productShowcase,
      path: '/pre-rolled-cones'
    },
  ];

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleViewMore = (path) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      navigate(path); // ✅ This works on Netlify
    }, 300);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div>
      {/* Enhanced Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Parallax Effect */}
        <motion.div 
          className="absolute inset-0"
          style={{ y: backgroundY }}
        >
          <img
            src={enhancedHeroBg}
            alt="Premium hemp leaves and rolling papers - Kasol Rolls brand aesthetic"
            className="w-full h-[120%] object-cover"
          />
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/40 to-white/60" />
        </motion.div>
        
        {/* Content Layout */}
        <div className="relative z-10 container-custom flex flex-col md:flex-row items-center justify-between px-4 md:px-8">
          {/* Image on the left */}
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <img
              src={enhancedHeroBg}
              alt="Premium hemp leaves and rolling papers"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          {/* Content Box on the right */}
          <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end">
            <div className="bg-black bg-opacity-70 text-white p-6 md:p-8 rounded-lg shadow-lg space-y-4 max-w-md w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                  Made for Perfect Ritual
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-yellow-400 font-semibold mt-2">
                  Pioneering since 1991
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 text-base md:text-lg font-semibold w-full sm:w-auto"
                >
                  <Link to="/pre-rolled-cones">Explore Cones</Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-4 py-2 text-base md:text-lg font-semibold w-full sm:w-auto"
                >
                  <Link to="/contact">Contact us</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Decorative Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            className="relative block w-full h-12 md:h-16 fill-background"
          >
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".25"
          />
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".5"
          />
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
          />
          </svg>
        </div>
      </section>

      {/* Branding Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-background">
        <div className="container-custom px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-8"
          >
            {/* Image */}
            <div className="flex-shrink-0 w-full md:w-1/2">
              <img
                src={kasolRollsBranding}
                alt="Kasol Rolls premium rolling papers and packaging"
                className="w-full max-w-sm md:max-w-md h-auto object-cover rounded-lg shadow-lg mx-auto"
              />
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
                Premium Craftsmanship, Urban Soul
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                Kasol Rolls brings you the finest rolling papers, blending natural quality with the spirit of urban culture. Experience the difference in every roll.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 md:py-20 lg:py-28 bg-background">
        <div className="container-custom">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
              Our Signature Collection
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover our most popular products - crafted with precision and passion for the ultimate experience.
            </p>
          </motion.div>

          {/* Featured Products Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full shadow-soft hover:shadow-premium transition-smooth group relative">
                  {/* View More Button - Top Right Corner */}
                  <div className="absolute top-3 right-3 z-20">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Button 
                        size="sm" 
                        variant="ghost"
                        className="w-8 h-8 p-0 bg-secondary/20 hover:bg-secondary/30 border border-secondary/40 rounded-full text-secondary shadow-md hover:shadow-lg transition-smooth"
                        onClick={() => handleViewMore(product.path)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </motion.div>
                  </div>

                  {/* Product Image */}
                  <div className="aspect-square overflow-hidden rounded-t-lg relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                    />
                  </div>
                  
                  {/* Product Content */}
                  <CardContent className="p-6 pt-0">
                    <h3 className="text-xl font-semibold text-primary mb-3">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {product.description.substring(0, 100)}...
                    </p>
                  </CardContent>
                  
                  {/* Bottom View Details Button */}
                  <CardFooter className="p-6 pt-0">
                    <Button 
                      onClick={() => handleViewDetails(product)}
                      variant="secondary" 
                      className="w-full" 
                    >
                      <span className="flex items-center justify-center gap-2">
                        View Details
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={closeModal}>
        <DialogContent className="sm:max-w-[425px] p-0 max-h-[90vh] overflow-y-auto">
          <DialogHeader className="p-6 pb-4 border-b">
            <div className="flex items-center justify-between">
              <DialogTitle className="text-2xl font-bold text-primary">
                {selectedProduct?.name}
              </DialogTitle>
              <Button
                variant="ghost"
                size="sm"
                className="w-8 h-8 p-0 rounded-full hover:bg-muted"
                onClick={closeModal}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <DialogDescription className="text-sm text-muted-foreground mt-2">
              Premium quality crafted for the perfect ritual
            </DialogDescription>
          </DialogHeader>
          
          <div className="p-6">
            <div className="aspect-square w-full rounded-lg overflow-hidden mb-4">
              <img
                src={selectedProduct?.image}
                alt={selectedProduct?.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed text-sm">
                {selectedProduct?.description}
              </p>
              
              <div className="flex gap-3">
                <Button 
                  onClick={() => handleViewMore(selectedProduct?.path)}
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  View Collection
                </Button>
                <Button 
                  variant="outline"
                  className="flex-1"
                  onClick={closeModal}
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Collaboration Section */}
      <section className="py-16 md:py-20 lg:py-32 bg-background">
        <div className="container-custom px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-primary mb-4">
              Let's Collaborate
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {/* Creatives Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full shadow-soft hover:shadow-premium transition-smooth">
                <CardContent className="p-6 md:p-8 h-full flex flex-col">
                  <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-4 md:mb-6">
                    Creatives
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 md:mb-8 flex-1 leading-relaxed">
                    Got a passion for urban culture and a flair for the creative? We're always 
                    on the lookout for unique talents who can bring fresh perspectives to the 
                    Kasol Rolls brand. Let's create something extraordinary together.
                  </p>
                  <Button asChild variant="secondary" className="w-full text-sm md:text-base">
                    <Link to="/contact">Join the Tribe</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Distributors Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full shadow-soft hover:shadow-premium transition-smooth">
                <CardContent className="p-6 md:p-8 h-full flex flex-col">
                  <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-4 md:mb-6">
                    Distributors
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 md:mb-8 flex-1 leading-relaxed">
                    Interested in bringing the Kasol Rolls experience to a broader audience? 
                    We're seeking distribution partners who share our commitment to quality, 
                    innovation, and community. Let's grow together.
                  </p>
                  <Button asChild variant="secondary" className="w-full text-sm md:text-base">
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;