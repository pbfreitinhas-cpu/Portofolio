import { motion } from "motion/react";
import { ArrowLeft, Bot, Brain } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CaseStudy3Props {
  onBack: () => void;
  theme?: 'night' | 'day';
}

export function CaseStudy3({ onBack, theme = 'night' }: CaseStudy3Props) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
      
      <div className={`min-h-screen relative transition-all duration-1000 ${
        theme === 'night' 
          ? 'bg-gradient-to-b from-[#0D1117] to-[#121826]' 
          : 'bg-gradient-to-b from-[#87CEEB] via-[#B0D4F1] to-[#E3F2FD]'
      }`} style={{ fontFamily: "'Playfair Display', serif" }}>
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
                  opacity: [
                    Math.random() * 0.5 + 0.2,
                    Math.random() * 0.8 + 0.2,
                    Math.random() * 0.5 + 0.2,
                  ],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        )}

        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onClick={onBack}
          className={`fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 rounded-lg backdrop-blur-xl border transition-all duration-300 ${
            theme === 'night'
              ? 'bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-[#DBF1FD]/30'
              : 'bg-white/60 border-gray-300/40 text-gray-800 hover:bg-white/80 hover:border-blue-500/30'
          }`}
          style={{ fontFamily: "'Shadows Into Light', cursive" }}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </motion.button>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-2 rounded-full backdrop-blur-xl bg-[#DBF1FD]/10 border border-[#DBF1FD]/30 text-[#DBF1FD] mb-6">
              Case Study #3
            </div>
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl mb-6">
              Behavioral E-Commerce
            </h1>
            <p className="text-white/70 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Leveraging behavioral economics and cognitive bias research to increase conversion rates while maintaining ethical design principles
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-2xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1748801583967-3038967d7279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBtb2NrdXAlMjBzY3JlZW58ZW58MXx8fHwxNzYwNTg2Mzk4fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Case Study Hero"
              className="w-full aspect-[16/9] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          >
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-[#DBF1FD] mb-3">Role</h3>
              <p className="text-white/70">Senior UX Researcher</p>
            </div>
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-[#DBF1FD] mb-3">Timeline</h3>
              <p className="text-white/70">10 weeks</p>
            </div>
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-[#DBF1FD] mb-3">Tools</h3>
              <p className="text-white/70">Figma, OptimizelyHotjar</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 mb-20"
          >
            <h2 className="text-white text-3xl mb-6">Background & Problem</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              The e-commerce platform was experiencing high cart abandonment rates and low conversion despite significant traffic. Traditional optimization tactics were yielding diminishing returns, and the team needed a more sophisticated, psychology-based approach.
            </p>
            <p className="text-white/70 leading-relaxed mb-8">
              The challenge was to increase conversions ethically without resorting to dark patterns or manipulative techniques that could damage brand trust.
            </p>

            {/* Creative Image Layout - Large + Small Grid */}
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 row-span-2 rounded-xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758598305216-b8cf416cb5b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmZhY2UlMjBtb2NrdXAlMjBzY3JlZW58ZW58MXx8fHwxNzYxMzUzMTE5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Background visual 1"
                  className="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity duration-300"
                />
              </div>
              <div className="rounded-xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1761122827167-159d1d272313?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB3aXJlZnJhbWUlMjBza2V0Y2h8ZW58MXx8fHwxNzYxMjgzMjYwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Background visual 2"
                  className="w-full h-32 object-cover opacity-60 hover:opacity-80 transition-opacity duration-300"
                />
              </div>
              <div className="rounded-xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1648134859177-525771773915?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcmVzZWFyY2glMjBkYXRhfGVufDF8fHx8MTc2MTI4NzExNXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Background visual 3"
                  className="w-full h-32 object-cover opacity-60 hover:opacity-80 transition-opacity duration-300"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 mb-20"
          >
            <h2 className="text-white text-3xl mb-6">Challenge & Goals</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Design an e-commerce experience that leverages behavioral psychology to guide users toward confident purchase decisions while maintaining ethical design standards and building long-term trust.
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#DBF1FD] mt-2"></div>
                <p className="text-white/70">Double conversion rates within 3 months</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#DBF1FD] mt-2"></div>
                <p className="text-white/70">Reduce cart abandonment by at least 40%</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#DBF1FD] mt-2"></div>
                <p className="text-white/70">Improve customer trust scores and NPS ratings</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#DBF1FD] mt-2"></div>
                <p className="text-white/70">Increase repeat purchase rate</p>
              </div>
            </div>

            {/* Creative Image Layout - Diagonal Split */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1547194936-28214bd75193?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBwcm9jZXNzJTIwd29ya2Zsb3d8ZW58MXx8fHwxNzYxMjg3MTE1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Challenge visual 1"
                    className="w-full h-40 object-cover opacity-60 hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
                <div className="rounded-xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1761122827167-159d1d272313?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB3aXJlZnJhbWUlMjBza2V0Y2h8ZW58MXx8fHwxNzYxMjgzMjYwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Challenge visual 2"
                    className="w-full h-24 object-cover opacity-60 hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
              </div>
              <div className="rounded-xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758598305216-b8cf416cb5b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmZhY2UlMjBtb2NrdXAlMjBzY3JlZW58ZW58MXx8fHwxNzYxMzUzMTE5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Challenge visual 3"
                  className="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity duration-300"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 mb-20"
          >
            <h2 className="text-white text-3xl mb-6">Behavioral Research Insights</h2>
            <div className="space-y-6 mb-8">
              <div>
                <h4 className="text-[#DBF1FD] mb-3">Loss Aversion & Endowment Effect</h4>
                <p className="text-white/70 leading-relaxed">
                  Research showed users were more motivated by avoiding losses than acquiring gains. We redesigned the cart experience to emphasize what users would lose by not completing their purchase, while maintaining transparency.
                </p>
              </div>
              <div>
                <h4 className="text-[#DBF1FD] mb-3">Choice Architecture</h4>
                <p className="text-white/70 leading-relaxed">
                  Analysis revealed that presenting too many options led to decision paralysis. We restructured product displays using default heuristics and progressive filtering to guide users toward confident decisions.
                </p>
              </div>
              <div>
                <h4 className="text-[#DBF1FD] mb-3">Social Proof & Scarcity</h4>
                <p className="text-white/70 leading-relaxed">
                  Implemented ethical social proof mechanisms showing real purchase data and authentic reviews. Used honest scarcity indicators only when inventory genuinely justified it.
                </p>
              </div>
            </div>

            {/* Creative Image Layout - Horizontal Strip + Square */}
            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1648134859177-525771773915?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcmVzZWFyY2glMjBkYXRhfGVufDF8fHx8MTc2MTI4NzExNXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Research insight 1"
                  className="w-full h-48 object-cover opacity-60 hover:opacity-80 transition-opacity duration-300"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="rounded-xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1761122827167-159d1d272313?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB3aXJlZnJhbWUlMjBza2V0Y2h8ZW58MXx8fHwxNzYxMjgzMjYwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Research insight 2"
                    className="w-full aspect-square object-cover opacity-60 hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
                <div className="rounded-xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1547194936-28214bd75193?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBwcm9jZXNzJTIwd29ya2Zsb3d8ZW58MXx8fHwxNzYxMjg3MTE1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Research insight 3"
                    className="w-full aspect-square object-cover opacity-60 hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
                <div className="rounded-xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1758598305216-b8cf416cb5b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmZhY2UlMjBtb2NrdXAlMjBzY3JlZW58ZW58MXx8fHwxNzYxMzUzMTE5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Research insight 4"
                    className="w-full aspect-square object-cover opacity-60 hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 mb-20"
          >
            <h2 className="text-white text-3xl mb-6">Design Solutions</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#DBF1FD] mt-2"></div>
                <p className="text-white/70">Redesigned checkout flow to reduce friction points and decision nodes</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#DBF1FD] mt-2"></div>
                <p className="text-white/70">Implemented smart defaults based on user behavior and preferences</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#DBF1FD] mt-2"></div>
                <p className="text-white/70">Created micro-commitment strategy through progressive engagement</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#DBF1FD] mt-2"></div>
                <p className="text-white/70">Applied anchoring principles to product pricing and comparison displays</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#DBF1FD] mt-2"></div>
                <p className="text-white/70">Designed trust-building elements throughout the purchase journey</p>
              </div>
            </div>

            {/* Creative Image Layout - Mixed Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="col-span-2 md:col-span-3 rounded-xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758598305216-b8cf416cb5b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmZhY2UlMjBtb2NrdXAlMjBzY3JlZW58ZW58MXx8fHwxNzYxMzUzMTE5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Solution showcase 1"
                  className="w-full h-64 object-cover opacity-60 hover:opacity-80 transition-opacity duration-300"
                />
              </div>
              <div className="col-span-2 md:col-span-1 space-y-4">
                <div className="rounded-xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1761122827167-159d1d272313?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB3aXJlZnJhbWUlMjBza2V0Y2h8ZW58MXx8fHwxNzYxMjgzMjYwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Solution detail 1"
                    className="w-full h-28 object-cover opacity-60 hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
                <div className="rounded-xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1547194936-28214bd75193?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBwcm9jZXNzJTIwd29ya2Zsb3d8ZW58MXx8fHwxNzYxMjg3MTE1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Solution detail 2"
                    className="w-full h-28 object-cover opacity-60 hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 mb-20"
          >
            <h2 className="text-white text-3xl mb-6">Ethical Considerations</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Every design decision was evaluated through an ethical lens. We established clear guidelines distinguishing between persuasion and manipulation, ensuring all behavioral interventions respected user autonomy and provided genuine value.
            </p>
            <p className="text-white/70 leading-relaxed">
              The redesign prioritized long-term customer relationships over short-term conversion gains, resulting in both improved metrics and increased customer satisfaction.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 mb-20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl backdrop-blur-xl bg-[#DBF1FD]/10 border border-[#DBF1FD]/30 flex items-center justify-center">
                <Bot className="w-6 h-6 text-[#DBF1FD]" />
              </div>
              <h2 className="text-white text-3xl">AI Tools in Design Process</h2>
            </div>
            <p className="text-white/70 leading-relaxed mb-6">
              AI played a transformative role in analyzing user behavior at scale and predicting which design interventions would be most effective, enabling data-driven decisions backed by behavioral psychology.
            </p>
            <div className="space-y-4 mb-8">
              <div>
                <h4 className="text-[#DBF1FD] mb-2">Predictive Analytics</h4>
                <p className="text-white/70 leading-relaxed">
                  Deployed AI models to analyze user journey data and predict abandonment points with 89% accuracy, allowing us to proactively address friction before users encountered it.
                </p>
              </div>
              <div>
                <h4 className="text-[#DBF1FD] mb-2">Sentiment Analysis</h4>
                <p className="text-white/70 leading-relaxed">
                  Used natural language processing to analyze customer reviews and support tickets, identifying emotional pain points and trust concerns that informed design priorities.
                </p>
              </div>
              <div>
                <h4 className="text-[#DBF1FD] mb-2">A/B Test Optimization</h4>
                <p className="text-white/70 leading-relaxed">
                  Leveraged AI-powered multi-armed bandit algorithms to optimize A/B testing, automatically allocating more traffic to better-performing variations while gathering statistical significance faster.
                </p>
              </div>
            </div>

            {/* Creative Image Layout - Asymmetric */}
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 rounded-xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1648134859177-525771773915?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcmVzZWFyY2glMjBkYXRhfGVufDF8fHx8MTc2MTI4NzExNXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="AI analytics dashboard"
                  className="w-full h-56 object-cover opacity-60 hover:opacity-80 transition-opacity duration-300"
                />
              </div>
              <div className="space-y-4">
                <div className="rounded-xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1758598305216-b8cf416cb5b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmZhY2UlMjBtb2NrdXAlMjBzY3JlZW58ZW58MXx8fHwxNzYxMzUzMTE5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="AI tool 1"
                    className="w-full h-24 object-cover opacity-60 hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
                <div className="rounded-xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1547194936-28214bd75193?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBwcm9jZXNzJTIwd29ya2Zsb3d8ZW58MXx8fHwxNzYxMjg3MTE1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="AI tool 2"
                    className="w-full h-24 object-cover opacity-60 hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 mb-20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl backdrop-blur-xl bg-[#DBF1FD]/10 border border-[#DBF1FD]/30 flex items-center justify-center">
                <Brain className="w-6 h-6 text-[#DBF1FD]" />
              </div>
              <h2 className="text-white text-3xl">Cognitive Biases Applied</h2>
            </div>
            <p className="text-white/70 leading-relaxed mb-6">
              This project centered on ethically leveraging cognitive biases to guide purchase decisions. Every design choice was carefully crafted to work with natural human psychology while maintaining transparency and user autonomy.
            </p>
            <div className="space-y-4 mb-8">
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-5">
                <h4 className="text-[#DBF1FD] mb-2">Loss Aversion</h4>
                <p className="text-white/70 leading-relaxed">
                  Framed messaging to emphasize potential losses (missing out on limited inventory) rather than just gains, tapping into the powerful psychological tendency to avoid losses more than acquiring equivalent gains.
                </p>
              </div>
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-5">
                <h4 className="text-[#DBF1FD] mb-2">Social Proof</h4>
                <p className="text-white/70 leading-relaxed">
                  Implemented authentic social proof through real purchase counts, verified reviews, and "others also viewed" recommendations, leveraging users' tendency to follow others' actions in uncertain situations.
                </p>
              </div>
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-5">
                <h4 className="text-[#DBF1FD] mb-2">Scarcity Principle</h4>
                <p className="text-white/70 leading-relaxed">
                  Used honest scarcity indicators (actual low stock levels) to create urgency, capitalizing on the bias that makes items seem more valuable when they're less available—but only with genuine inventory data.
                </p>
              </div>
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-5">
                <h4 className="text-[#DBF1FD] mb-2">Decoy Effect</h4>
                <p className="text-white/70 leading-relaxed">
                  Strategically positioned product options to make target items more appealing through comparison, using asymmetric dominance to guide users toward optimal choices without restricting freedom.
                </p>
              </div>
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-5">
                <h4 className="text-[#DBF1FD] mb-2">Endowment Effect</h4>
                <p className="text-white/70 leading-relaxed">
                  Designed the cart experience to create psychological ownership before checkout, leveraging the tendency to value items more highly once we feel we own them, reducing abandonment.
                </p>
              </div>
            </div>

            {/* Creative Image Layout - Full Width */}
            <div className="rounded-xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1761122827167-159d1d272313?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB3aXJlZnJhbWUlMjBza2V0Y2h8ZW58MXx8fHwxNzYxMjgzMjYwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Behavioral psychology framework"
                className="w-full h-64 object-cover opacity-60 hover:opacity-80 transition-opacity duration-300"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <h2 className="text-white text-3xl mb-6">Impact & Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="text-4xl text-[#DBF1FD] mb-2">127%</div>
                <p className="text-white/70">Increase in conversion rate</p>
              </div>
              <div>
                <div className="text-4xl text-[#DBF1FD] mb-2">41%</div>
                <p className="text-white/70">Reduction in cart abandonment</p>
              </div>
              <div>
                <div className="text-4xl text-[#DBF1FD] mb-2">85%</div>
                <p className="text-white/70">Improvement in customer trust score</p>
              </div>
              <div>
                <div className="text-4xl text-[#DBF1FD] mb-2">2.8x</div>
                <p className="text-white/70">Increase in repeat purchases</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="py-12 px-6 bg-[#161C23]">
        <div className="max-w-4xl mx-auto text-center">
          <button
            onClick={onBack}
            className="px-8 py-4 rounded-xl backdrop-blur-2xl bg-[#DBF1FD]/10 border border-[#DBF1FD]/40 text-[#DBF1FD] hover:bg-[#DBF1FD]/20 hover:shadow-[0_0_30px_rgba(219,241,253,0.3)] transition-all duration-300"
            style={{ fontFamily: "'Shadows Into Light', cursive" }}
          >
            Back to Portfolio
          </button>
        </div>
      </section>
      </div>
    </>
  );
}