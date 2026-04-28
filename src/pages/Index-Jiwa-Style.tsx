import { motion, useScroll, useTransform } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import enhancedHeroBg from '@/assets/hero-image.jpg';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 100]);
  const navigate = useNavigate();

  const handleViewMore = (path) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      navigate(path);
    }, 300);
  };

  const handleLinkClick = (path) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Jiwa Style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <motion.div 
          className="absolute inset-0"
          style={{ y: backgroundY }}
        >
          <img
            src={enhancedHeroBg}
            alt="Premium hemp leaves and rolling papers"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
        
        {/* Content */}
        <div className="relative z-10 container-custom text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              AN OLD SOUL WITH A YOUNG HEART
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-green-200 font-light">
              Good to the core, expertly hand-rolled and exclusively made of rolling papers of the highest quality, sourced from sustainable forestry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => handleLinkClick('/products')}
                size="lg" 
                className="bg-jiwa-green hover:bg-jiwa-dark-green text-white px-8 py-4 text-lg font-semibold shadow-lg"
              >
                Explore Products
              </Button>
              <Button 
                onClick={() => handleLinkClick('/contact')}
                variant="outline" 
                size="lg"
                className="border-2 border-white text-jiwa-green hover:bg-white hover:text-jiwa-green px-8 py-4 text-lg font-semibold shadow-lg"
              >
                Become Distributor
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-jiwa-green mb-6">
              WHAT'S IN A NAME?
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              Enhancing your smoking experience. Kasol, derived from the heart of Himachal Pradesh, represents the perfect blend of tradition and innovation. More than just a name, Kasol is the essence of pure, natural quality and the true spirit of craftsmanship. It is the source of exceptional experiences.
            </p>
            <Button 
              onClick={() => handleLinkClick('/about')}
              variant="outline"
              className="border-jiwa-green text-jiwa-green hover:bg-jiwa-green hover:text-white px-6 py-3"
            >
              Learn More
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-20 md:py-32 bg-gray-50">
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
                  GIFTED BY NATURE, HAND-CRAFTED BY PASSIONATE PEOPLE
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Kasol rolling papers are exclusively made of the highest quality materials, sourced from sustainable forestry, and crafted by people who care about quality and tradition. Our commitment to excellence ensures every product delivers the perfect experience.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Founded with the aspiration of building a brighter future through sustainable practices and empowering local communities, we believe that our success lies in how we look after each other and our environment.
                </p>
                <Button 
                  onClick={() => handleLinkClick('/about')}
                  className="bg-jiwa-green hover:bg-jiwa-dark-green text-white px-6 py-3"
                >
                  Discover Our Story
                </Button>
              </div>
              <div className="relative">
                <img
                  src={enhancedHeroBg}
                  alt="Craftsmanship and quality"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Preview Section */}
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
              OUR COLLECTION
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Discover our premium range of rolling papers and pre-rolled cones, crafted with precision and passion for the ultimate experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "PRE-ROLLED CONES",
                description: "Expertly hand-rolled cones made from premium organic hemp for the perfect experience every time.",
                path: "/pre-rolled-cones"
              },
              {
                title: "ROLLING PAPERS", 
                description: "Slow-burning papers with natural gum, crafted from the finest sustainable materials.",
                path: "/rolling-papers"
              },
              {
                title: "CUSTOM CONES",
                description: "Personalized cones with your branding - perfect for events, promotions, and business growth.",
                path: "/pre-rolled-cones"
              }
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold text-jiwa-green mb-4">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {product.description}
                    </p>
                    <Button 
                      onClick={() => handleLinkClick(product.path)}
                      variant="outline"
                      className="border-jiwa-green text-jiwa-green hover:bg-jiwa-green hover:text-white w-full"
                    >
                      <span className="flex items-center justify-center gap-2">
                        Explore
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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
              READY TO PARTNER WITH US?
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Join our network of distributors and bring premium quality to your customers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => handleLinkClick('/contact')}
                size="lg"
                className="bg-white text-jiwa-green hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              >
                Become Distributor
              </Button>
              <Button 
                onClick={() => handleLinkClick('/products')}
                variant="outline" 
                size="lg"
                className="border-2 border-white text-jiwa-green hover:bg-transparent hover:text-white px-8 py-4 text-lg font-semibold"
              >
                View Products
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
