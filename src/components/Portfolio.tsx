import { motion } from "motion/react";
import { CaseStudyCard } from "./CaseStudyCard";
import { Header } from "./Header";
import { AIBadge } from "./AIBadge";
import { Mail, Linkedin, FileText } from "lucide-react";
import hero1 from "../assets/fb9b27202cc8fc39ebf0c93631ee2c8f7df7a625.png";
import hero2 from "../assets/b638cdda55459d4c3742759cd4c4287b03a2d0e2.png";
import hero3 from "../assets/coming soon 1.png";

interface PortfolioProps {
  onCaseStudyClick: (id: number) => void;
  theme: 'night' | 'day';
  onToggleTheme: () => void;
}

export function Portfolio({ onCaseStudyClick, theme, onToggleTheme }: PortfolioProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const caseStudies = [
    { id: 1, imageUrl: hero1 },
    { id: 2, imageUrl: hero2 },
    { id: 3, imageUrl: hero3 },
  ];

  return (
    <div className={`min-h-screen relative overflow-hidden transition-all duration-1000 ${
      theme === 'night' 
        ? 'bg-gradient-to-b from-[#0D1117] to-[#121826]' 
        : 'bg-gradient-to-b from-[#87CEEB] via-[#B0D4F1] to-[#E3F2FD]'
    }`}>
      {/* Animated background - Stars for night */}
      {theme === 'night' && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={`star-${i}`}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.2,
              }}
              animate={{
                opacity: [Math.random() * 0.5 + 0.2, Math.random() * 0.3, Math.random() * 0.5 + 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      )}

      {/* Animated background - Sun and Clouds for day */}
      {theme === 'day' && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Sun */}
          <motion.div
            className="absolute top-20 right-32 w-24 h-24 rounded-full bg-gradient-to-br from-yellow-300 to-amber-400 shadow-[0_0_60px_rgba(251,191,36,0.6)]"
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 360],
            }}
            transition={{
              scale: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              },
              rotate: {
                duration: 120,
                repeat: Infinity,
                ease: "linear"
              }
            }}
          >
            {/* Sun rays */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={`ray-${i}`}
                className="absolute top-1/2 left-1/2 w-1 h-8 bg-gradient-to-t from-yellow-300 to-transparent origin-bottom"
                style={{
                  transform: `translate(-50%, -100%) rotate(${i * 30}deg)`,
                }}
                animate={{
                  opacity: [0.4, 0.8, 0.4],
                  height: [28, 36, 28],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>

          {/* Clouds */}
          {[...Array(6)].map((_, i) => {
            const startX = Math.random() * 120 - 20;
            const startY = Math.random() * 60 + 10;
            const cloudSize = Math.random() * 0.5 + 0.8;
            return (
              <motion.div
                key={`cloud-${i}`}
                className="absolute"
                style={{
                  left: `${startX}%`,
                  top: `${startY}%`,
                  scale: cloudSize,
                }}
                animate={{
                  x: ['0%', '120vw'],
                  y: [0, Math.sin(i) * 20, 0],
                }}
                transition={{
                  x: {
                    duration: 60 + i * 10,
                    repeat: Infinity,
                    ease: "linear"
                  },
                  y: {
                    duration: 8 + i * 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                {/* Cloud shape using multiple circles */}
                <div className="relative w-32 h-12">
                  <div className="absolute top-2 left-2 w-10 h-10 rounded-full bg-white/80 blur-sm" />
                  <div className="absolute top-0 left-6 w-14 h-14 rounded-full bg-white/90 blur-sm" />
                  <div className="absolute top-3 left-12 w-12 h-12 rounded-full bg-white/80 blur-sm" />
                  <div className="absolute top-4 left-4 w-20 h-6 rounded-full bg-white/70 blur-sm" />
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      <Header theme={theme} />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20 relative">
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h1 className={`mb-6 text-4xl md:text-5xl lg:text-6xl leading-relaxed transition-colors duration-1000 ${
              theme === 'night' ? 'text-white/90' : 'text-gray-800'
            }`}>
              Hey, I'm Pedro — a designer based on the Gold Coast, passionate about cognitive bias, behavior-driven interfaces, surf, soccer and the intersection of design and artificial intelligence.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8 flex justify-center"
          >
            <AIBadge theme={theme} onToggle={onToggleTheme} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => scrollToSection('case-studies')}
              className={`group relative px-8 py-4 rounded-xl backdrop-blur-2xl border transition-all duration-300 w-full sm:w-auto overflow-hidden ${
                theme === 'night'
                  ? 'bg-[#DBF1FD]/10 border-[#DBF1FD]/40 text-[#DBF1FD] hover:bg-[#DBF1FD]/20 hover:shadow-[0_0_30px_rgba(219,241,253,0.3)]'
                  : 'bg-blue-500/20 border-blue-500/40 text-blue-700 hover:bg-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50"></div>
              <span className="relative z-10">View Case Studies</span>
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className={`group relative px-8 py-4 rounded-xl backdrop-blur-2xl border transition-all duration-300 w-full sm:w-auto overflow-hidden ${
                theme === 'night'
                  ? 'bg-[#DBF1FD]/10 border-[#DBF1FD]/40 text-[#DBF1FD] hover:bg-[#DBF1FD]/20 hover:shadow-[0_0_30px_rgba(219,241,253,0.3)]'
                  : 'bg-blue-500/20 border-blue-500/40 text-blue-700 hover:bg-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50"></div>
              <span className="relative z-10">More About Me</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 px-6 bg-[rgba(0,0,0,0)]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className={`text-4xl md:text-5xl text-center transition-colors duration-1000 ${
              theme === 'night' ? 'text-white' : 'text-gray-800'
            }`}>Case Studies</h2>
          </motion.div>

          <div className="flex flex-col gap-8">
            {caseStudies.map((study) => (
              <CaseStudyCard 
                key={study.id} 
                number={study.id} 
                imageUrl={study.imageUrl}
                onClick={() => onCaseStudyClick(study.id)}
                theme={theme}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About & Tools Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl mx-auto">
            {/* About Me Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`backdrop-blur-xl border rounded-2xl p-8 transition-all duration-1000 ${
                theme === 'night'
                  ? 'bg-white/5 border-white/10'
                  : 'bg-white/60 border-white/30 shadow-lg'
              }`}
            >
              <h2 className={`mb-6 text-4xl transition-colors duration-1000 ${
                theme === 'night' ? 'text-white' : 'text-gray-800'
              }`}>About Me</h2>
              <p className={`leading-relaxed mb-4 text-xl transition-colors duration-1000 ${
                theme === 'night' ? 'text-white/70' : 'text-gray-700'
              }`}>
                I'm a UX/UI designer with a deep interest in cognitive psychology and artificial intelligence. My work focuses on understanding how users think, behave, and make decisions.
              </p>
              <p className={`leading-relaxed mb-4 text-xl transition-colors duration-1000 ${
                theme === 'night' ? 'text-white/70' : 'text-gray-700'
              }`}>
                By combining behavioral science with design thinking, I create interfaces that align with natural cognitive patterns and reduce decision fatigue.
              </p>
              <p className={`leading-relaxed text-xl transition-colors duration-1000 ${
                theme === 'night' ? 'text-white/70' : 'text-gray-700'
              }`}>
                Currently exploring how AI can augment the design process while maintaining human-centered principles.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Footer Section */}
      <section id="contact" className={`py-20 px-6 mt-20 transition-all duration-1000 ${
        theme === 'night' ? 'bg-[#161C23]' : 'bg-blue-50/50'
      }`}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`text-4xl md:text-5xl mb-6 transition-colors duration-1000 ${
              theme === 'night' ? 'text-white' : 'text-gray-800'
            }`}>Get in touch</h2>
            <p className={`mb-12 text-lg transition-colors duration-1000 ${
              theme === 'night' ? 'text-white/70' : 'text-gray-700'
            }`}>
              Interested in collaborating or learning more? Let's connect.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button className={`group relative flex items-center gap-3 px-6 py-4 rounded-xl backdrop-blur-2xl border transition-all duration-300 w-full sm:w-auto overflow-hidden ${
              theme === 'night'
                ? 'bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-[#DBF1FD]/30 hover:shadow-[0_0_20px_rgba(219,241,253,0.2)]'
                : 'bg-white/60 border-gray-300/40 text-gray-800 hover:bg-white/80 hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]'
            }`}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50"></div>
              <Mail className={`w-5 h-5 relative z-10 transition-colors duration-1000 ${
                theme === 'night' ? 'text-[#DBF1FD]' : 'text-blue-600'
              }`} />
              <span className="relative z-10">Email</span>
            </button>

            <button className={`group relative flex items-center gap-3 px-6 py-4 rounded-xl backdrop-blur-2xl border transition-all duration-300 w-full sm:w-auto overflow-hidden ${
              theme === 'night'
                ? 'bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-[#DBF1FD]/30 hover:shadow-[0_0_20px_rgba(219,241,253,0.2)]'
                : 'bg-white/60 border-gray-300/40 text-gray-800 hover:bg-white/80 hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]'
            }`}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50"></div>
              <Linkedin className={`w-5 h-5 relative z-10 transition-colors duration-1000 ${
                theme === 'night' ? 'text-[#DBF1FD]' : 'text-blue-600'
              }`} />
              <span className="relative z-10">LinkedIn</span>
            </button>

            <button className={`group relative flex items-center gap-3 px-6 py-4 rounded-xl backdrop-blur-2xl border transition-all duration-300 w-full sm:w-auto overflow-hidden ${
              theme === 'night'
                ? 'bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-[#DBF1FD]/30 hover:shadow-[0_0_20px_rgba(219,241,253,0.2)]'
                : 'bg-white/60 border-gray-300/40 text-gray-800 hover:bg-white/80 hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]'
            }`}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50"></div>
              <FileText className={`w-5 h-5 relative z-10 transition-colors duration-1000 ${
                theme === 'night' ? 'text-[#DBF1FD]' : 'text-blue-600'
              }`} />
              <span className="relative z-10">Resume</span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`mt-16 pt-8 border-t transition-colors duration-1000 ${
              theme === 'night' ? 'border-white/10' : 'border-gray-300/30'
            }`}
          >
            <p className={`text-sm transition-colors duration-1000 ${
              theme === 'night' ? 'text-white/40' : 'text-gray-500'
            }`}>
              © 2025 Pedro. UX/UI Designer specializing in AI and cognitive bias.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
