// pages/PreRolledCones.tsx
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import productShowcase from '@/assets/product-showcase.jpg';

const PreRolledCones = () => {
  const products = [
    {
      id: 1,
      name: 'Classic Pre-Rolled Cones',
      description: 'Premium organic hemp pre-rolled cones with slow-burning filter tips. Perfect for on-the-go smoking with consistent flavor and smooth draw.',
      image: productShowcase,
      category: 'Pre-Rolled Cones'
    },
    {
      id: 2,
      name: 'King Size Cones',
      description: 'Extra-large pre-rolled cones for sharing or extended sessions. Made with double-filtered hemp paper for enhanced filtration and flavor preservation.',
      image: productShowcase,
      category: 'Pre-Rolled Cones'
    },
    {
      id: 3,
      name: 'Flavored Cones',
      description: 'Infused pre-rolled cones with natural fruit essences. Available in multiple flavors with organic hemp wrapping for a unique smoking experience.',
      image: productShowcase,
      category: 'Pre-Rolled Cones'
    },
    {
      id: 4,
      name: 'Eco-Friendly Cones',
      description: '100% biodegradable pre-rolled cones made from sustainable hemp and plant-based filters. Environmentally conscious smoking without compromise.',
      image: productShowcase,
      category: 'Pre-Rolled Cones'
    },
    {
      id: 5,
      name: 'Premium Filter Cones',
      description: 'High-performance pre-rolled cones with triple-layer filtration system. Engineered for maximum smoothness and minimal tar exposure.',
      image: productShowcase,
      category: 'Pre-Rolled Cones'
    },
  ];

  const customProducts = [
    {
      id: 1,
      name: 'Custom Logo Cones',
      description: 'Personalized pre-rolled cones featuring your brand logo. Perfect for events, promotions, and corporate gifting with premium hemp construction.',
      image: productShowcase,
      category: 'Custom Pre-Rolled Cones'
    },
    {
      id: 2,
      name: 'Bulk Custom Cones',
      description: 'High-volume custom pre-rolled cones for distributors and retailers. Custom packaging options available with your branding and specifications.',
      image: productShowcase,
      category: 'Custom Pre-Rolled Cones'
    },
    {
      id: 3,
      name: 'Event Branded Cones',
      description: 'Specially designed pre-rolled cones for music festivals, trade shows, and corporate events. Quick turnaround with full customization options.',
      image: productShowcase,
      category: 'Custom Pre-Rolled Cones'
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
            Pre-Rolled Cones
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Premium pre-rolled cones crafted with organic hemp for the perfect smoking experience. Ready-to-use convenience with superior quality and flavor.
          </p>
        </motion.div>

        {/* Standard Products Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-primary mb-8 text-center">
            Standard Collection
          </h2>
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
                    <Button
                      variant="outline"
                      className="w-full border-2 border-[#8B5C2A] text-[#8B5C2A] hover:bg-[#8B5C2A]/10"
                    >
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Custom Products Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Custom Pre-Rolled Cones
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Looking for personalized branding? Explore our custom cone options for events, promotions, and corporate gifting.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {customProducts.map((product, index) => (
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
                    <Button variant="outline" className="w-full">
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Custom Quote CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center p-8 bg-muted/50 rounded-lg"
        >
          <h3 className="text-xl font-semibold text-primary mb-4">Need a Custom Order?</h3>
          <p className="text-muted-foreground mb-4">
            Contact us for bulk pricing, special customization, and personalized consultation.
          </p>
          <Button asChild variant="outline" size="lg">
            <a href="/contact">Get Custom Quote</a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default PreRolledCones;