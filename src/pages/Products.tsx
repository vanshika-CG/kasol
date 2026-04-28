// pages/Products.tsx
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Link } from 'react-router-dom';
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
    <div className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-jiwa-green mb-4 md:mb-6">
            Our Products
          </h1>
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
            Premium rolling papers and accessories crafted with precision and passion for the ultimate experience.
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
                  <h3 className="text-xl font-semibold text-jiwa-green mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    {product.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-jiwa-green text-jiwa-green hover:bg-jiwa-green hover:text-white" asChild>
                    <Link to={`/product/${product.id}`}>
                      View Details
                    </Link>
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