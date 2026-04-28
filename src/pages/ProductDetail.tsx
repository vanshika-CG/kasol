// pages/ProductDetail.tsx
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Mail } from 'lucide-react';
import productShowcase from '@/assets/product-showcase.jpg';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  category?: string;
  detailedDescription?: string;
  features?: string[];
  specifications?: { [key: string]: string };
  availability?: string;
}

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // Mock product data - in a real app, this would come from an API
  const allProducts: Product[] = [
    {
      id: 1,
      name: 'Classic Kasol Papers',
      description: 'Traditional rolling papers with premium hemp blend for the perfect roll.',
      image: productShowcase,
      category: 'Rolling Papers',
      detailedDescription: 'Experience the authentic Kasol tradition with our classic rolling papers. Made from premium hemp blend, these papers provide the perfect balance between thinness and durability. Each sheet is carefully crafted to ensure an even burn and smooth smoking experience.',
      features: [
        'Premium hemp blend material',
        'Ultra-thin for better flavor',
        'Slow-burning technology',
        'Natural gum adhesive',
        '50 papers per pack',
        'King size format'
      ],
      specifications: {
        'Material': 'Premium Hemp Blend',
        'Size': 'King Size (110mm x 55mm)',
        'Weight': '14 g/m²',
        'Packs per Box': '24',
        'Burn Rate': 'Slow & Even',
        'Origin': 'Himachal Pradesh, India'
      },
      availability: 'In Stock'
    },
    {
      id: 2,
      name: 'Hemp Blend Rolls',
      description: 'Eco-friendly hemp papers with natural fibers and slow burn technology.',
      image: productShowcase,
      category: 'Rolling Papers',
      detailedDescription: 'Our Hemp Blend Rolls represent the perfect fusion of sustainability and quality. Made from 100% organic hemp with natural fibers, these rolls offer an extended length for custom sizing while maintaining our commitment to environmental responsibility.',
      features: [
        '100% organic hemp material',
        '5-meter roll length',
        'Customizable size',
        'Biodegradable packaging',
        'Natural unbleached paper',
        'Slow-burning formula'
      ],
      specifications: {
        'Material': '100% Organic Hemp',
        'Length': '5 meters',
        'Width': '44mm',
        'Weight': '13 g/m²',
        'Packaging': 'Biodegradable',
        'Burn Time': 'Extended',
        'Certification': 'Organic Certified'
      },
      availability: 'In Stock'
    },
    {
      id: 3,
      name: 'Urban Culture Series',
      description: 'Limited edition papers featuring artist collaborations and unique designs.',
      image: productShowcase,
      category: 'Rolling Papers',
      detailedDescription: 'Collaborate with urban artists to create this exclusive limited edition series. Each pack features unique artwork that celebrates contemporary street culture while maintaining the premium quality Kasol is known for.',
      features: [
        'Limited edition artwork',
        'Artist collaborations',
        'Premium quality paper',
        'Collectible packaging',
        'Numbered editions',
        'Certificate of authenticity'
      ],
      specifications: {
        'Material': 'Premium Hemp Blend',
        'Size': 'King Size',
        'Sheets per Pack': '32',
        'Artwork': 'Limited Edition',
        'Packaging': 'Collector\'s Box',
        'Series': 'Urban Culture Vol. 1'
      },
      availability: 'Limited Stock'
    },
    {
      id: 4,
      name: 'Premium Filter Tips',
      description: 'Handcrafted filter tips made from sustainable materials for enhanced experience.',
      image: productShowcase,
      category: 'Accessories',
      detailedDescription: 'Elevate your smoking experience with our premium filter tips. Handcrafted from sustainable materials, these filters provide superior filtration while maintaining the natural flavor profile of your choice.',
      features: [
        'Sustainable materials',
        'Superior filtration',
        'Easy to use',
        'Consistent performance',
        '100 tips per pack',
        'Biodegradable'
      ],
      specifications: {
        'Material': 'Sustainable Fiber',
        'Count per Pack': '100',
        'Size': 'Standard 8mm',
        'Shape': 'Cylindrical',
        'Filtration': 'Multi-layer',
        'Biodegradability': '100%'
      },
      availability: 'In Stock'
    },
    {
      id: 5,
      name: 'Kasol Rolling Tray',
      description: 'Elegant bamboo rolling tray with magnetic compartments and premium finish.',
      image: productShowcase,
      category: 'Accessories',
      detailedDescription: 'Our premium bamboo rolling tray combines functionality with elegance. Crafted from sustainable bamboo, featuring magnetic compartments and a smooth finish that makes rolling both convenient and stylish.',
      features: [
        'Sustainable bamboo construction',
        'Magnetic compartments',
        'Smooth rolling surface',
        'Portable design',
        'Easy to clean',
        'Premium finish'
      ],
      specifications: {
        'Material': 'Natural Bamboo',
        'Dimensions': '12" x 8"',
        'Weight': '450g',
        'Compartments': '3 magnetic',
        'Finish': 'Premium coating',
        'Care': 'Wipe clean only'
      },
      availability: 'In Stock'
    },
    {
      id: 6,
      name: 'Grinder Collection',
      description: 'Precision-engineered grinders with sharp teeth and smooth operation.',
      image: productShowcase,
      category: 'Accessories',
      detailedDescription: 'Professional-grade grinders designed for perfect consistency. Precision-engineered with diamond-cut teeth and smooth threading, these grinders provide the perfect grind every time.',
      features: [
        'Precision engineering',
        'Diamond-cut teeth',
        'Smooth operation',
        'Magnetic lid',
        'Pollen catcher',
        'Multiple sizes available'
      ],
      specifications: {
        'Material': 'Aircraft-grade aluminum',
        'Teeth': 'Diamond-cut',
        'Chambers': '4',
        'Size Options': '2", 2.5", 3"',
        'Finish': 'Anodized',
        'Warranty': 'Lifetime'
      },
      availability: 'In Stock'
    },
    {
      id: 7,
      name: 'Classic Pre-Rolled Cones',
      description: 'Premium organic hemp pre-rolled cones with slow-burning filter tips. Perfect for on-the-go smoking with consistent flavor and smooth draw.',
      image: productShowcase,
      category: 'Pre-Rolled Cones',
      detailedDescription: 'Our Classic Pre-Rolled Cones are crafted from premium organic hemp with slow-burning filter tips. These ready-to-use cones provide the perfect convenience without compromising on quality or flavor.',
      features: [
        'Premium organic hemp material',
        'Slow-burning filter tips',
        'Ready-to-use convenience',
        'Consistent flavor profile',
        'Smooth draw experience',
        '20 cones per pack'
      ],
      specifications: {
        'Material': 'Organic Hemp',
        'Size': 'Classic 109mm',
        'Count per Pack': '20',
        'Filter Type': 'Slow-burning',
        'Burn Rate': 'Even & Slow',
        'Packaging': 'Resealable pouch'
      },
      availability: 'In Stock'
    },
    {
      id: 8,
      name: 'King Size Cones',
      description: 'Extra-large pre-rolled cones for sharing or extended sessions. Made with double-filtered hemp paper for enhanced filtration and flavor preservation.',
      image: productShowcase,
      category: 'Pre-Rolled Cones',
      detailedDescription: 'King Size Cones offer extended capacity for longer sessions or sharing. Made with double-filtered hemp paper that provides enhanced filtration while preserving the authentic flavor profile.',
      features: [
        'Extra-large capacity',
        'Double-filtered hemp paper',
        'Enhanced filtration system',
        'Flavor preservation',
        'Slow-burning technology',
        '15 cones per pack'
      ],
      specifications: {
        'Material': 'Double-filtered Hemp',
        'Size': 'King Size 140mm',
        'Count per Pack': '15',
        'Filter Type': 'Double-layer',
        'Burn Time': 'Extended',
        'Packaging': 'Protective tube'
      },
      availability: 'In Stock'
    },
    {
      id: 9,
      name: 'Flavored Cones',
      description: 'Infused pre-rolled cones with natural fruit essences. Available in multiple flavors with organic hemp wrapping for a unique smoking experience.',
      image: productShowcase,
      category: 'Pre-Rolled Cones',
      detailedDescription: 'Experience something new with our Flavored Cones. Infused with natural fruit essences and wrapped in organic hemp, these cones provide a unique and aromatic smoking experience.',
      features: [
        'Natural fruit essences',
        'Multiple flavor options',
        'Organic hemp wrapping',
        'Aromatic experience',
        'No artificial additives',
        '18 cones per pack'
      ],
      specifications: {
        'Material': 'Organic Hemp',
        'Flavors': 'Natural Fruit Essences',
        'Count per Pack': '18',
        'Infusion Method': 'Natural',
        'Additives': 'None',
        'Packaging': 'Flavor-sealed'
      },
      availability: 'In Stock'
    },
    {
      id: 10,
      name: 'Eco-Friendly Cones',
      description: '100% biodegradable pre-rolled cones made from sustainable hemp and plant-based filters. Environmentally conscious smoking without compromise.',
      image: productShowcase,
      category: 'Pre-Rolled Cones',
      detailedDescription: 'Make an environmentally conscious choice with our Eco-Friendly Cones. Made from 100% biodegradable materials including sustainable hemp and plant-based filters.',
      features: [
        '100% biodegradable materials',
        'Sustainable hemp source',
        'Plant-based filters',
        'Zero plastic packaging',
        'Carbon neutral production',
        '25 cones per pack'
      ],
      specifications: {
        'Material': 'Sustainable Hemp',
        'Biodegradability': '100%',
        'Count per Pack': '25',
        'Filter Type': 'Plant-based',
        'Packaging': 'Compostable',
        'Certification': 'Eco-Certified'
      },
      availability: 'In Stock'
    },
    {
      id: 11,
      name: 'Premium Filter Cones',
      description: 'High-performance pre-rolled cones with triple-layer filtration system. Engineered for maximum smoothness and minimal tar exposure.',
      image: productShowcase,
      category: 'Pre-Rolled Cones',
      detailedDescription: 'Premium Filter Cones feature our advanced triple-layer filtration system for the smoothest experience possible. Engineered to minimize tar exposure while maximizing flavor purity.',
      features: [
        'Triple-layer filtration',
        'Maximum smoothness',
        'Minimal tar exposure',
        'Advanced engineering',
        'Premium hemp paper',
        '12 cones per pack'
      ],
      specifications: {
        'Material': 'Premium Hemp',
        'Filtration': 'Triple-layer',
        'Count per Pack': '12',
        'Filter Technology': 'Advanced',
        'Smoothness Rating': 'Maximum',
        'Packaging': 'Premium box'
      },
      availability: 'In Stock'
    },
    {
      id: 12,
      name: 'Custom Logo Cones',
      description: 'Personalized pre-rolled cones featuring your brand logo. Perfect for events, promotions, and corporate gifting with premium hemp construction.',
      image: productShowcase,
      category: 'Custom Pre-Rolled Cones',
      detailedDescription: 'Elevate your brand with Custom Logo Cones. Featuring your personalized logo on premium hemp cones, perfect for marketing events, promotions, and corporate gifting.',
      features: [
        'Custom logo printing',
        'Premium hemp construction',
        'Brand customization',
        'Event-ready packaging',
        'Corporate gifting quality',
        'MOQ: 500 cones'
      ],
      specifications: {
        'Material': 'Premium Hemp',
        'Customization': 'Full-color logo',
        'Minimum Order': '500 cones',
        'Lead Time': '2-3 weeks',
        'Packaging': 'Custom branded',
        'Quality': 'Premium grade'
      },
      availability: 'Custom Order'
    },
    {
      id: 13,
      name: 'Bulk Custom Cones',
      description: 'High-volume custom pre-rolled cones for distributors and retailers. Custom packaging options available with your branding and specifications.',
      image: productShowcase,
      category: 'Custom Pre-Rolled Cones',
      detailedDescription: 'Scale your business with Bulk Custom Cones. Designed for high-volume distributors and retailers with full customization options including packaging and specifications.',
      features: [
        'High-volume production',
        'Custom packaging design',
        'Distributor pricing',
        'Retail-ready specifications',
        'Brand consistency',
        'MOQ: 5000 cones'
      ],
      specifications: {
        'Material': 'Premium Hemp',
        'Volume': 'Bulk quantities',
        'Minimum Order': '5000 cones',
        'Packaging': 'Fully custom',
        'Lead Time': '4-6 weeks',
        'Support': 'Dedicated account'
      },
      availability: 'Custom Order'
    },
    {
      id: 14,
      name: 'Event Branded Cones',
      description: 'Specially designed pre-rolled cones for music festivals, trade shows, and corporate events. Quick turnaround with full customization options.',
      image: productShowcase,
      category: 'Custom Pre-Rolled Cones',
      detailedDescription: 'Make your event memorable with Event Branded Cones. Specially designed for music festivals, trade shows, and corporate events with quick turnaround times.',
      features: [
        'Event-specific design',
        'Quick turnaround',
        'Festival-ready packaging',
        'Corporate event quality',
        'Full customization',
        'MOQ: 1000 cones'
      ],
      specifications: {
        'Material': 'Premium Hemp',
        'Event Type': 'All events',
        'Minimum Order': '1000 cones',
        'Lead Time': '1-2 weeks',
        'Packaging': 'Event themed',
        'Service': 'Priority support'
      },
      availability: 'Custom Order'
    }
  ];

  const product = allProducts.find(p => p.id === parseInt(id || '1'));

  if (!product) {
    return (
      <div className="py-16 md:py-24 bg-background">
        <div className="container-custom text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/products">Back to Products</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 md:py-24 bg-background">
      <div className="container-custom">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/products" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Products
            </Link>
          </Button>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="overflow-hidden shadow-premium">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </Card>
          </motion.div>

          {/* Product Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              {product.category && (
                <p className="text-sm font-medium text-primary mb-2">{product.category}</p>
              )}
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                {product.description}
              </p>
              {product.detailedDescription && (
                <p className="text-muted-foreground leading-relaxed">
                  {product.detailedDescription}
                </p>
              )}
            </div>

            {/* Availability */}
            {product.availability && (
              <div className={`px-3 py-1 rounded-full text-sm font-medium w-fit ${
                product.availability === 'In Stock' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {product.availability}
              </div>
            )}

            {/* Features */}
            {product.features && product.features.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Specifications */}
            {product.specifications && (
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">Specifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="border-b border-border pb-2">
                      <div className="text-sm font-medium text-primary">{key}</div>
                      <div className="text-sm text-muted-foreground">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Contact Actions */}
            <div className="pt-6 border-t border-border">
              <h3 className="text-xl font-semibold text-primary mb-4">Ready to Order?</h3>
              <p className="text-muted-foreground mb-6">
                Contact us directly to place your order or inquire about bulk pricing and customization options.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="flex-1">
                  <Link to="/contact" className="flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4" />
                    Contact Us
                  </Link>
                </Button>
                <Button variant="outline" asChild className="flex-1">
                  <Link to="/contact" className="flex items-center justify-center gap-2">
                    Become a Distributor
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
