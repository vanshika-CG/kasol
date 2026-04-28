// pages/PreRolledCones-Jiwa-Style.tsx
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Link } from 'react-router-dom';
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={productShowcase}
            alt="Premium pre-rolled cones"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/70" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 container-custom text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              PRE-ROLLED CONES
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-green-200 font-light">
              Good to the core, expertly hand-rolled and exclusively made of rolling papers of the highest quality, sourced from sustainable forestry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-jiwa-green hover:bg-jiwa-dark-green text-white px-8 py-4 text-lg font-semibold shadow-lg"
              >
                <Link to="/contact">Become Distributor</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-jiwa-green px-8 py-4 text-lg font-semibold shadow-lg transition-all duration-300"
              >
                <Link to="/products">View All Products</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Standard Products Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-jiwa-green mb-6">
              STANDARD COLLECTION
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Premium pre-rolled cones crafted with organic hemp for the perfect smoking experience. Ready-to-use convenience with superior quality and flavor.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
                  <div className="aspect-square overflow-hidden rounded-t-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-jiwa-green mb-3">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {product.description}
                    </p>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button 
                      variant="outline"
                      className="w-full border-jiwa-green text-jiwa-green hover:bg-jiwa-green hover:text-white"
                      asChild
                    >
                      <Link to={`/product/${product.id + 6}`}>
                        View Details
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Products Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container-custom px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-jiwa-green mb-6">
              CUSTOM PRE-ROLLED CONES
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Looking for personalized branding? Explore our custom cone options for events, promotions, and corporate gifting.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {customProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
                  <div className="aspect-square overflow-hidden rounded-t-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-jiwa-green mb-3">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {product.description}
                    </p>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button 
                      variant="outline"
                      className="w-full border-jiwa-green text-jiwa-green hover:bg-jiwa-green hover:text-white"
                      asChild
                    >
                      <Link to={`/product/${product.id + 11}`}>
                        View Details
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-jiwa-green mb-6">
                  EXCEPTIONAL QUALITY, SUSTAINABLY SOURCED
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our pre-rolled cones are crafted from the finest organic hemp, sourced from sustainable forests. 
                  Each cone is meticulously hand-rolled to ensure consistent quality and the perfect smoking experience.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  We believe in transparency and quality. Every batch undergoes rigorous testing to ensure it meets 
                  our high standards for purity, consistency, and performance.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-jiwa-green rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">100% Organic Hemp</div>
                      <div className="text-sm text-gray-600">Sustainably sourced and pesticide-free</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-jiwa-green rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Hand-Rolled</div>
                      <div className="text-sm text-gray-600">Expertly crafted for consistency</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-jiwa-green rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Slow-Burning</div>
                      <div className="text-sm text-gray-600">Even burn for optimal experience</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-jiwa-green rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Vegan-Friendly</div>
                      <div className="text-sm text-gray-600">No animal products or testing</div>
                    </div>
                  </div>
                </div>
                <Button 
                  asChild 
                  className="bg-jiwa-green hover:bg-jiwa-dark-green text-white px-6 py-3"
                >
                  <Link to="/contact">Request Custom Quote</Link>
                </Button>
              </div>
              <div className="relative">
                <img
                  src={productShowcase}
                  alt="Quality craftsmanship"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-jiwa-green">
        <div className="container-custom px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-white"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              READY TO GROW YOUR BUSINESS?
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Join our network of distributors and bring premium quality pre-rolled cones to your customers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg"
                className="bg-white text-jiwa-green hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              >
                <Link to="/contact">Become Distributor</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-jiwa-green px-8 py-4 text-lg font-semibold"
              >
                <Link to="/products">View All Products</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PreRolledCones;
