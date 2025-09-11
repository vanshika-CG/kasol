import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import heroImage from '@/assets/hero-image.jpg';

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center hero-gradient overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Premium Kasol Rolls rolling papers"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-background/40" />
        </div>
        
        <div className="relative z-10 container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight">
              Discover the pulse of{' '}
              <span className="text-secondary">Kasol Rolls</span>' latest innovations
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A tapestry of urban culture and natural living. Elevate your rolling experience 
              with our newest line of rolling papers, crafted to perfection.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Button asChild size="lg" className="shadow-premium">
                <Link to="/products">Explore Products</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
              Let's Collaborate
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Creatives Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full shadow-soft hover:shadow-premium transition-smooth">
                <CardContent className="p-8 h-full flex flex-col">
                  <h3 className="text-2xl font-semibold text-primary mb-6">
                    Creatives
                  </h3>
                  <p className="text-muted-foreground mb-8 flex-1 leading-relaxed">
                    Got a passion for urban culture and a flair for the creative? We're always 
                    on the lookout for unique talents who can bring fresh perspectives to the 
                    Kasol Rolls brand. Let's create something extraordinary together.
                  </p>
                  <Button asChild variant="secondary" className="w-full">
                    <Link to="/creatives">Join the Tribe</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Distributors Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full shadow-soft hover:shadow-premium transition-smooth">
                <CardContent className="p-8 h-full flex flex-col">
                  <h3 className="text-2xl font-semibold text-primary mb-6">
                    Distributors
                  </h3>
                  <p className="text-muted-foreground mb-8 flex-1 leading-relaxed">
                    Interested in bringing the Kasol Rolls experience to a broader audience? 
                    We're seeking distribution partners who share our commitment to quality, 
                    innovation, and community. Let's grow together.
                  </p>
                  <Button asChild variant="secondary" className="w-full">
                    <Link to="/distributors">Contact Us</Link>
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
