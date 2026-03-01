import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 relative bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Start a Conversation</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Ready to tackle your technical challenges? Reach out and let's discuss how we can help your business thrive.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0 text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-foreground mb-1">General Inquiries</h4>
                  <p className="text-muted-foreground">Fill out the form to route your message to our consulting team.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0 text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-foreground mb-1">Location</h4>
                  <p className="text-muted-foreground">Operating globally, remote-first execution.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card border border-border p-8 md:p-10 rounded-3xl shadow-xl shadow-black/20 relative"
          >
            {/* Standard HTML Form submitting to Web3Forms */}
            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
              {/* Web3Forms required hidden inputs */}
              <input 
                type="hidden" 
                name="access_key" 
                value={import.meta.env.VITE_WEB3FORMS_KEY || ''} 
              />
              <input type="hidden" name="subject" value="New Consulting Inquiry from Tarletto Website" />
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">Contact Number</label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Project Description</label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={5}
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder="Tell us about your technical challenges..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 hover:shadow-[0_0_20px_-5px_var(--primary)] transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
