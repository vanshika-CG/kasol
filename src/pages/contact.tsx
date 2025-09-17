import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, User, MailOpen, PhoneCall } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Here you would typically send the form data to your backend
      // await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-20 lg:py-32 bg-background">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Get In Touch
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have questions about our products, want to collaborate, or just want to say hello? 
            We'd love to hear from you. Reach out and let's start a conversation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="shadow-soft">
              <CardContent className="p-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <h2 className="text-2xl md:text-3xl font-semibold text-primary">
                      Send us a message
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Fill out the form below and we'll get back to you within 24 hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <label htmlFor="name" className="text-sm font-medium text-foreground">
                          Full Name
                        </label>
                      </div>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="h-12"
                      />
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <label htmlFor="email" className="text-sm font-medium text-foreground">
                          Email Address
                        </label>
                      </div>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="h-12"
                      />
                    </div>

                    {/* Subject Field */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <MailOpen className="h-4 w-4 text-muted-foreground" />
                        <label htmlFor="subject" className="text-sm font-medium text-foreground">
                          Subject
                        </label>
                      </div>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="h-12"
                      />
                    </div>

                    {/* Message Field */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <MailOpen className="h-4 w-4 text-muted-foreground" />
                        <label htmlFor="message" className="text-sm font-medium text-foreground">
                          Message
                        </label>
                      </div>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us more about your inquiry..."
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-12 text-base font-semibold"
                      >
                        {isSubmitting ? (
                          <>
                            <Send className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </motion.div>

                    {/* Submit Status */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-center"
                    >
                      {submitStatus === 'success' && (
                        <div className="text-green-600 text-sm font-medium flex items-center justify-center gap-2">
                          <Send className="h-4 w-4" />
                          Message sent successfully! We'll get back to you soon.
                        </div>
                      )}
                      {submitStatus === 'error' && (
                        <div className="text-red-600 text-sm font-medium">
                          Something went wrong. Please try again.
                        </div>
                      )}
                    </motion.div>
                  </form>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-primary">
                Contact Information
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Ready to roll with Kasol? Get in touch with our team. We're here to help with 
                product inquiries, partnerships, and everything in between.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Email Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="shadow-soft hover:shadow-premium transition-smooth flex items-center gap-4 p-6">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email Us</h3>
                    <p className="text-sm text-muted-foreground">hello@kasolrolls.com</p>
                  </div>
                </Card>
              </motion.div>

              {/* Phone Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="shadow-soft hover:shadow-premium transition-smooth flex items-center gap-4 p-6">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                    <PhoneCall className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Call Us</h3>
                    <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                  </div>
                </Card>
              </motion.div>

              {/* Location Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="shadow-soft hover:shadow-premium transition-smooth flex items-center gap-4 p-6">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Visit Us</h3>
                    <p className="text-sm text-muted-foreground">
                      Kasol Valley, Himachal Pradesh<br />
                      India - 175105
                    </p>
                  </div>
                </Card>
              </motion.div>
            </div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="pt-6 border-t border-border"
            >
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Prefer to reach out on social media?
                </p>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1">
                    Instagram
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    Twitter
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default Contact;