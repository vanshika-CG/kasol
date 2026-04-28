// pages/About-Jiwa-Style.tsx
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import productShowcase from '@/assets/product-showcase.jpg';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={productShowcase}
            alt="Kasol brand heritage"
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
              WHAT'S IN A NAME?
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-green-200 font-light">
              Enhancing your smoking experience. Kasol, derived from the heart of Himachal Pradesh, represents the perfect blend of tradition and innovation.
            </p>
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
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-jiwa-green mb-2">1991</div>
                    <div className="text-sm text-gray-600">Year Founded</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-jiwa-green mb-2">5600+</div>
                    <div className="text-sm text-gray-600">Employees</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-jiwa-green mb-2">100%</div>
                    <div className="text-sm text-gray-600">Sustainable</div>
                  </div>
                </div>
                <Button 
                  asChild 
                  className="bg-jiwa-green hover:bg-jiwa-dark-green text-white px-6 py-3"
                >
                  <Link to="/contact">Partner With Us</Link>
                </Button>
              </div>
              <div className="relative">
                <img
                  src={productShowcase}
                  alt="Kasol craftsmanship"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
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
              OUR VALUES
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              The principles that guide everything we do, from sourcing materials to crafting the perfect rolling experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "QUALITY FIRST",
                description: "Every product undergoes rigorous testing to ensure the highest standards of quality and consistency for our customers."
              },
              {
                title: "SUSTAINABILITY", 
                description: "We source eco-friendly materials and use sustainable practices throughout our production process."
              },
              {
                title: "INNOVATION",
                description: "Continuously pushing boundaries with new technologies and designs that enhance the rolling experience."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 bg-white">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-jiwa-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <div className="w-8 h-8 bg-jiwa-green rounded-full"></div>
                    </div>
                    <h3 className="text-xl font-bold text-jiwa-green mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Section */}
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
              AN OLD SOUL WITH A YOUNG HEART
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              More than just a name, Kasol is the essence of pure, natural quality and the true spirit of craftsmanship. 
              It represents the harmony between traditional wisdom and modern innovation, creating products that honor 
              the past while embracing the future.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12">
              From the mountains of Himachal Pradesh to the hands of skilled craftsmen, every Kasol product carries 
              the legacy of quality, sustainability, and passion that defines our brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                className="bg-jiwa-green hover:bg-jiwa-dark-green text-white px-8 py-4 text-lg"
              >
                <Link to="/products">Explore Our Products</Link>
              </Button>
              <Button 
                asChild 
                variant="outline"
                className="border-jiwa-green text-jiwa-green hover:bg-jiwa-green hover:text-white px-8 py-4 text-lg"
              >
                <Link to="/contact">Become Distributor</Link>
              </Button>
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
              JOIN THE KASOL FAMILY
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Become part of a community that values quality, sustainability, and exceptional craftsmanship
            </p>
            <Button 
              asChild 
              size="lg"
              className="bg-white text-jiwa-green hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              <Link to="/contact">Get Started Today</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
