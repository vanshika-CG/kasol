import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import productShowcase from '@/assets/product-showcase.jpg';

const About = () => {
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
            About Kasol Rolls
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Crafting the future of rolling with tradition and innovation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Brand Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-semibold text-primary">
                Our Story
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Kasol Rolls is more than a brand—it's a lifestyle. Rooted in urban culture 
                and inspired by natural living, we create premium rolling papers that elevate 
                every moment. Our commitment to quality and sustainability drives everything we do.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Born from the vibrant streets and the serene valleys of Kasol, our brand 
                represents the perfect harmony between city energy and mountain tranquility. 
                We believe that the best experiences come from authentic materials, thoughtful 
                design, and a deep respect for both tradition and innovation.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="aspect-square rounded-lg overflow-hidden shadow-premium"
          >
            <img
              src={productShowcase}
              alt="Kasol Rolls brand story"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          <Card className="shadow-soft hover:shadow-premium transition-smooth">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-primary-foreground rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                Quality First
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Every product undergoes rigorous testing to ensure the highest standards 
                of quality and consistency for our customers.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft hover:shadow-premium transition-smooth">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-secondary-foreground rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                Sustainability
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We source eco-friendly materials and use sustainable practices 
                throughout our production process.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft hover:shadow-premium transition-smooth">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-accent-foreground rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                Innovation
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Continuously pushing boundaries with new technologies and designs 
                that enhance the rolling experience.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Card className="shadow-premium bg-muted">
            <CardContent className="p-12">
              <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
                Our Mission
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                To bridge the gap between urban culture and natural living through premium 
                rolling papers that celebrate authenticity, creativity, and community. We're 
                committed to creating products that not only meet the highest standards of 
                quality but also reflect the values and aspirations of the modern lifestyle.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default About;