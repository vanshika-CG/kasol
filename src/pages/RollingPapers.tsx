// pages/RollingPapers.tsx
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import productShowcase from '@/assets/product-showcase.jpg';

const RollingPapers = () => {
  const products = [
    {
      id: 1,
      name: 'Classic Kasol Papers',
      description: 'Traditional rice and hemp blend rolling papers with natural gum arabic. Slow-burning with ultra-thin construction for pure flavor experience.',
      image: productShowcase,
      category: 'Rolling Papers'
    },
    {
      id: 2,
      name: 'Hemp Blend Papers',
      description: '100% organic hemp rolling papers with eco-friendly packaging. Naturally slow-burning with minimal taste interference and smooth rolling texture.',
      image: productShowcase,
      category: 'Rolling Papers'
    },
    {
      id: 3,
      name: 'Urban Culture Series',
      description: 'Limited edition rolling papers featuring artist collaborations. Premium hemp base with unique designs celebrating urban culture and street art.',
      image: productShowcase,
      category: 'Rolling Papers'
    },
    {
      id: 4,
      name: 'King Size Slim Papers',
      description: 'Extra-long, ultra-thin rolling papers for larger joints. Precision-cut with natural gum for easy sealing and consistent burning performance.',
      image: productShowcase,
      category: 'Rolling Papers'
    },
    {
      id: 5,
      name: 'Flavored Rice Papers',
      description: 'Delicate rice papers infused with natural fruit flavors. Lightweight construction with subtle taste enhancement for a refined smoking ritual.',
      image: productShowcase,
      category: 'Rolling Papers'
    },
    {
      id: 6,
      name: 'Gold Leaf Papers',
      description: 'Luxury gold-embossed rolling papers with premium hemp core. Elegant design with slow-burning properties for sophisticated smoking occasions.',
      image: productShowcase,
      category: 'Rolling Papers'
    },
  ];

  return (
    <div className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 md:mb-6">
            Rolling Papers
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Premium rolling papers crafted for the discerning smoker. Natural materials, slow-burning performance, and artistic designs for the perfect roll.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full shadow-soft hover:shadow-premium transition-smooth">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 md:h-64 object-cover rounded-t-lg"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    {product.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="secondary" className="w-full">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Collection Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-muted/50 rounded-lg"
        >
          <h3 className="text-xl font-semibold text-primary mb-4">Craft Your Perfect Roll</h3>
          <p className="text-muted-foreground mb-4">
            Each pack contains 50 premium rolling papers, individually wrapped for freshness. 
            Perfect for personal use or gifting to fellow enthusiasts.
          </p>
          <Button asChild variant="outline" size="lg">
            <a href="/contact">Wholesale Inquiry</a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default RollingPapers;