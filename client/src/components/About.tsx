import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const principles = [
  "No-nonsense, honest advice",
  "Focus on long-term maintainability",
  "Clarity over complexity",
  "Execution-driven culture"
];

export function About() {
  return (
    <section id="about" className="py-32 relative bg-secondary/30 border-y border-border overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">The Tarletto Approach</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We believe great engineering is invisible. It just works. At Tarletto, we strip away the jargon and focus purely on delivering measurable business value through robust technical execution.
            </p>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              We don't sell you on vanity metrics or empty promises. We partner with you to understand the deep-rooted challenges of your systems, architect pragmatic solutions, and write the code that makes it reality. Quality and clarity are our only mandates.
            </p>

            <div className="space-y-4">
              {principles.map((principle, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{principle}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Abstract visual representation of "Clarity" */}
            <div className="aspect-square max-w-md mx-auto relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl animate-pulse" />
              <div className="relative w-full h-full border border-border/50 rounded-full flex items-center justify-center overflow-hidden">
                <div className="w-[80%] h-[80%] border border-border/50 rounded-full flex items-center justify-center">
                  <div className="w-[60%] h-[60%] border border-primary/30 rounded-full flex items-center justify-center bg-card shadow-2xl">
                    <div className="w-[40%] h-[40%] bg-primary rounded-full shadow-[0_0_50px_rgba(20,184,166,0.5)]" />
                  </div>
                </div>
              </div>
              
              {/* Orbiting elements */}
              <div className="absolute w-full h-full animate-[spin_20s_linear_infinite]">
                <div className="absolute top-0 left-1/2 w-3 h-3 bg-muted-foreground rounded-full -translate-x-1/2 -translate-y-1/2" />
              </div>
              <div className="absolute w-[80%] h-[80%] animate-[spin_15s_linear_infinite_reverse]">
                <div className="absolute bottom-0 right-1/2 w-4 h-4 bg-primary/50 rounded-full translate-x-1/2 translate-y-1/2" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
