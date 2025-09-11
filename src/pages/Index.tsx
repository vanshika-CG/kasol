import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import enhancedHeroBg from '@/assets/enhanced-hero-bg.jpg';

const Index = () => {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);

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
          {/* White gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/40 to-white/60" />
        </motion.div>
        
        {/* Content */}
        <div className="relative z-10 container-custom text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-5xl mx-auto space-y-8"
          >
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight">
              Elevate Every Moment with{' '}
              <span className="text-secondary">Kasol Rolls</span>
            </h1>
            
            {/* Subheading */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl text-primary/80 max-w-4xl mx-auto leading-relaxed font-medium"
            >
              Premium rolling papers crafted for urban culture and natural living
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            >
              {/* Primary CTA */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 text-lg font-semibold shadow-premium"
                  aria-label="Explore Kasol Rolls products"
                >
                  <Link to="/products">Explore Products</Link>
                </Button>
              </motion.div>
              
              {/* Secondary CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-4 text-lg font-semibold transition-smooth"
                  aria-label="Discover Kasol Rolls brand story"
                >
                  <Link to="/about">Discover Our Story</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Decorative Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            className="relative block w-full h-16 fill-background"
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
