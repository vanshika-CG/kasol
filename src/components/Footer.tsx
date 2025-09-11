import { Instagram, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted border-t border-border">
      <div className="container-custom py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          {/* Brand Tagline */}
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-primary mb-4">
              Kasol Rolls
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Crafted with premium materials, Kasol Rolls combines tradition and innovation. 
              Elevating your rolling experience with the finest papers designed for the modern connoisseur.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center justify-center space-x-6">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-smooth"
              aria-label="Follow us on Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-smooth"
              aria-label="Follow us on Twitter"
            >
              <Twitter size={24} />
            </a>
          </div>

          {/* Legal & Copyright */}
          <div className="space-y-4 text-sm text-muted-foreground">
            <div className="flex items-center justify-center space-x-6">
              <button className="hover:text-primary transition-smooth">
                Cookie Notice
              </button>
              <button className="hover:text-primary transition-smooth">
                Privacy Policy
              </button>
              <button className="hover:text-primary transition-smooth">
                Terms of Service
              </button>
            </div>
            <p>
              © {currentYear} Kasol Rolls. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;