// import { motion } from 'framer-motion';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Textarea } from '@/components/ui/textarea';
// import creativesHero from '@/assets/creatives-hero.jpg';

// const Creatives = () => {
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission
//     console.log('Form submitted');
//   };

//   return (
//     <div className="py-20 lg:py-32">
//       <div className="container-custom">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
//             Join the Kasol Rolls Creative Tribe
//           </h1>
//           <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
//             We're looking for artists, designers, and visionaries to collaborate 
//             on bold, innovative projects that push the boundaries of creativity.
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="space-y-8"
//           >
//             <div className="space-y-6">
//               <h2 className="text-2xl md:text-3xl font-semibold text-primary">
//                 Create with Purpose
//               </h2>
//               <p className="text-muted-foreground leading-relaxed">
//                 At Kasol Rolls, we believe that creativity is the bridge between urban culture 
//                 and natural living. We're constantly seeking passionate individuals who share 
//                 our vision of authentic expression and innovative design.
//               </p>
//               <p className="text-muted-foreground leading-relaxed">
//                 Whether you're a graphic designer, photographer, street artist, or creative 
//                 thinker, we want to hear from you. Our collaborative projects span from 
//                 limited edition packaging designs to large-scale brand campaigns.
//               </p>
//             </div>

//             <div className="aspect-video rounded-lg overflow-hidden shadow-soft">
//               <img
//                 src={creativesHero}
//                 alt="Creative collaboration at Kasol Rolls"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <Card className="shadow-premium">
//               <CardContent className="p-8">
//                 <h3 className="text-2xl font-semibold text-primary mb-6">
//                   Apply to Join
//                 </h3>
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div className="space-y-2">
//                     <Label htmlFor="name" className="text-primary font-medium">
//                       Full Name
//                     </Label>
//                     <Input
//                       id="name"
//                       placeholder="Your full name"
//                       required
//                       className="border-border focus:border-primary"
//                     />
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="email" className="text-primary font-medium">
//                       Email Address
//                     </Label>
//                     <Input
//                       id="email"
//                       type="email"
//                       placeholder="your@email.com"
//                       required
//                       className="border-border focus:border-primary"
//                     />
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="portfolio" className="text-primary font-medium">
//                       Portfolio/Website
//                     </Label>
//                     <Input
//                       id="portfolio"
//                       placeholder="https://yourportfolio.com"
//                       className="border-border focus:border-primary"
//                     />
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="message" className="text-primary font-medium">
//                       Tell Us About Your Creative Vision
//                     </Label>
//                     <Textarea
//                       id="message"
//                       placeholder="Describe your creative style, experience, and what excites you about collaborating with Kasol Rolls..."
//                       rows={6}
//                       required
//                       className="border-border focus:border-primary resize-none"
//                     />
//                   </div>

//                   <Button type="submit" variant="secondary" className="w-full">
//                     Join the Tribe
//                   </Button>
//                 </form>
//               </CardContent>
//             </Card>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Creatives;