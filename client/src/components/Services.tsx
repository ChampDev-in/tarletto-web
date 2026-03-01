import { motion } from "framer-motion";
import { Laptop, Rocket, Server, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Laptop,
    title: "Technology Consulting",
    description: "Strategic guidance to align your technical decisions with your business objectives. We help you choose the right stack, tools, and practices."
  },
  {
    icon: Rocket,
    title: "Product & MVP Development",
    description: "Rapid, high-quality execution to bring your ideas to market. We focus on core value delivery without compromising on solid engineering foundations."
  },
  {
    icon: Server,
    title: "System Architecture & Scalability",
    description: "Designing robust, fault-tolerant systems that grow with your business. We resolve bottlenecks and modernize legacy infrastructure."
  },
  {
    icon: Lightbulb,
    title: "Engineering Advisory",
    description: "Ongoing support for leadership and technical teams. We provide code reviews, team mentoring, and high-level technical oversight."
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 relative bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Expertise</h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card border border-border p-8 md:p-10 rounded-3xl hover:border-primary/50 transition-colors duration-500 overflow-hidden"
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-secondary border border-border flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 group-hover:border-primary/30 group-hover:text-primary transition-all duration-300">
                  <service.icon className="w-7 h-7 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
