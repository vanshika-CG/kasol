import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import productShowcase from '@/assets/product-showcase.jpg';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Classic Kasol Papers',
      description: 'Traditional rolling papers with premium hemp blend for the perfect roll.',
      image: productShowcase,
    },
    {
      id: 2,
      name: 'Hemp Blend Rolls',
      description: 'Eco-friendly hemp papers with natural fibers and slow burn technology.',
      image: productShowcase,
    },
    {
      id: 3,
      name: 'Urban Culture Series',
      description: 'Limited edition papers featuring artist collaborations and unique designs.',
      image: productShowcase,
    },
    {
      id: 4,
      name: 'Premium Filter Tips',
      description: 'Handcrafted filter tips made from sustainable materials for enhanced experience.',
      image: productShowcase,
    },
    {
      id: 5,
      name: 'Kasol Rolling Tray',
      description: 'Elegant bamboo rolling tray with magnetic compartments and premium finish.',
      image: productShowcase,
    },
    {
      id: 6,
      name: 'Grinder Collection',
      description: 'Precision-engineered grinders with sharp teeth and smooth operation.',
      image: productShowcase,
    },
  ];

  return (
    <div className="py-20 lg:py-32">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Our Finest Rolling Papers & Accessories
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover a curated selection of premium rolling papers and accessories 
            designed for the modern connoisseur.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full shadow-soft hover:shadow-premium transition-smooth group">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button variant="secondary" className="w-full">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;