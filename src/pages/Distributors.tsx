import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import distributorsHero from '@/assets/distributors-hero.jpg';

const Distributors = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

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
            Become a Kasol Rolls Distributor
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Partner with us to bring premium rolling papers to your audience 
            and grow together in the evolving market.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-primary">
                Partnership Opportunities
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Kasol Rolls is expanding its reach and we're seeking dedicated distribution 
                partners who align with our values of quality, innovation, and community 
                building. Join our network of trusted distributors worldwide.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">What We Offer:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Premium product lines with competitive margins
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Marketing support and brand materials
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Territory protection and exclusive rights
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Ongoing training and business development
                  </li>
                </ul>
              </div>
            </div>

            <div className="aspect-video rounded-lg overflow-hidden shadow-soft">
              <img
                src={distributorsHero}
                alt="Kasol Rolls distribution partnership"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-premium">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-primary mb-6">
                  Partner Inquiry
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-primary font-medium">
                      Contact Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      required
                      className="border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-primary font-medium">
                      Company Name
                    </Label>
                    <Input
                      id="company"
                      placeholder="Your company name"
                      required
                      className="border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-primary font-medium">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="business@email.com"
                      required
                      className="border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="territory" className="text-primary font-medium">
                      Territory of Interest
                    </Label>
                    <Input
                      id="territory"
                      placeholder="City, State/Province, Country"
                      className="border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-primary font-medium">
                      Tell Us About Your Business
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Describe your business, distribution experience, target market, and why you're interested in partnering with Kasol Rolls..."
                      rows={6}
                      required
                      className="border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button type="submit" variant="secondary" className="w-full">
                    Contact Us
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Distributors;