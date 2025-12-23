import image_fb9b27202cc8fc39ebf0c93631ee2c8f7df7a625 from 'figma:asset/fb9b27202cc8fc39ebf0c93631ee2c8f7df7a625.png';
import image_e00a28ccfb5900fb6e4768252b55aec94542958f from 'figma:asset/e00a28ccfb5900fb6e4768252b55aec94542958f.png';
import image_1747b0d33ee8a253f6eb010f7db29cd7a0177bd8 from 'figma:asset/1747b0d33ee8a253f6eb010f7db29cd7a0177bd8.png';
import image_bb7fd3ad4b0b008a08f6d2666dc5e69a75759bcf from 'figma:asset/bb7fd3ad4b0b008a08f6d2666dc5e69a75759bcf.png';
import image_b6cef2a8e2d956cc5ecdddc7ddd2e4e04d69f818 from 'figma:asset/b6cef2a8e2d956cc5ecdddc7ddd2e4e04d69f818.png';

import { motion } from "motion/react";
import { ArrowLeft, Bot, Brain } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CaseStudy1Props {
  onBack: () => void;
  theme?: 'night' | 'day';
}

export function CaseStudy1({ onBack, theme = 'night' }: CaseStudy1Props) {
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
            <div className={`inline-block px-4 py-2 rounded-full backdrop-blur-xl border mb-6 transition-all duration-1000 ${
              theme === 'night'
                ? 'bg-[#DBF1FD]/10 border-[#DBF1FD]/30 text-[#DBF1FD]'
                : 'bg-blue-500/20 border-blue-500/40 text-blue-700'
            }`}>
              Case Study #1
            </div>
            <h1 className={`text-5xl md:text-6xl lg:text-7xl mb-6 transition-colors duration-1000 ${
              theme === 'night' ? 'text-white' : 'text-gray-800'
            }`}>
              Spotify Car Mode
            </h1>
            <p className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed transition-colors duration-1000 ${
              theme === 'night' ? 'text-white/70' : 'text-gray-700'
            }`}>
              Designing a simplified music control interface that minimizes driver distraction and cognitive load, keeping eyes on the road and hands on the wheel
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`rounded-2xl overflow-hidden backdrop-blur-xl border transition-all duration-1000 ${
              theme === 'night'
                ? 'bg-white/5 border-white/10'
                : 'bg-white/60 border-white/30 shadow-lg'
            }`}
          >
            <img
              src={image_b6cef2a8e2d956cc5ecdddc7ddd2e4e04d69f818}
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
            <div className={`backdrop-blur-xl border rounded-2xl p-6 transition-all duration-1000 ${
              theme === 'night' ? 'bg-white/5 border-white/10' : 'bg-white/60 border-white/30 shadow-lg'
            }`}>
              <h3 className={`mb-3 transition-colors duration-1000 ${
                theme === 'night' ? 'text-[#DBF1FD]' : 'text-blue-600'
              }`}>Role</h3>
              <p className={`transition-colors duration-1000 ${
                theme === 'night' ? 'text-white/70' : 'text-gray-700'
              }`}>UX/UI Designer</p>
            </div>
            <div className={`backdrop-blur-xl border rounded-2xl p-6 transition-all duration-1000 ${
              theme === 'night' ? 'bg-white/5 border-white/10' : 'bg-white/60 border-white/30 shadow-lg'
            }`}>
              <h3 className={`mb-3 transition-colors duration-1000 ${
                theme === 'night' ? 'text-[#DBF1FD]' : 'text-blue-600'
              }`}>Timeline</h3>
              <p className={`transition-colors duration-1000 ${
                theme === 'night' ? 'text-white/70' : 'text-gray-700'
              }`}>8 weeks</p>
            </div>
            <div className={`backdrop-blur-xl border rounded-2xl p-6 transition-all duration-1000 ${
              theme === 'night' ? 'bg-white/5 border-white/10' : 'bg-white/60 border-white/30 shadow-lg'
            }`}>
              <h3 className={`mb-3 transition-colors duration-1000 ${
                theme === 'night' ? 'text-[#DBF1FD]' : 'text-blue-600'
              }`}>Tools</h3>
              <p className={`transition-colors duration-1000 ${
                theme === 'night' ? 'text-white/70' : 'text-gray-700'
              }`}>Figma, Hotjar, Analytics, ChatGPT Engineer</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`backdrop-blur-xl border rounded-2xl p-8 mb-20 transition-all duration-1000 ${
              theme === 'night' ? 'bg-white/5 border-white/10' : 'bg-white/60 border-white/30 shadow-lg'
            }`}
          >
            <h2 className={`text-3xl mb-6 transition-colors duration-1000 ${
              theme === 'night' ? 'text-white' : 'text-gray-800'
            }`}>Background & Problem</h2>
            <p className={`leading-relaxed mb-4 transition-colors duration-1000 ${
              theme === 'night' ? 'text-white/70' : 'text-gray-700'
            }`}>
              Spotify’s mobile interface was not designed for drivers, yet many users rely on it while commuting. The current UI requires too many taps, displays dense content, and has small touch targets — all of which increase distraction risk behind the wheel. Without a dedicated experience for driving scenarios, users feel frustrated trying to control playback safely. 
            </p>
            <p className="text-white/70 leading-relaxed mb-8">
              Reports and user feedback reveal that this issue not only impacts user satisfaction, but also creates a serious usability gap that could lead to churn or even safety concerns. This case explores how to adapt Spotify for safer on-road use through intentional UX and cognitive design.
            </p>

            {/* Creative Image Layout - Asymmetric Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="col-span-2 md:col-span-2 rounded-xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10">
                <ImageWithFallback
                  src={image_bb7fd3ad4b0b008a08f6d2666dc5e69a75759bcf}
                  alt="Background visual 1"
                  className="w-full h-64 object-cover opacity-60 hover:opacity-80 transition-opacity duration-300"
                />
              </div>
              <div className="col-span-2 md:col-span-1 rounded-xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1648134859177-525771773915?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcmVzZWFyY2glMjBkYXRhfGVufDF8fHx8MTc2MTI4NzExNXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Background visual 2"
                  className="w-full h-64 object-cover opacity-60 hover:opacity-80 transition-opacity duration-300"
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
              Designing for drivers presents a unique paradox: how do you minimize attention without minimizing control?
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#DBF1FD] mt-2"></div>
                <p className="text-white/70">The challenge was to reduce visual and interaction load, while maintaining access to key music functions — all in a way that is effortless during driving.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#DBF1FD] mt-2"></div>
                <p className="text-white/70">The design had to work in motion, often with one hand, poor lighting, or even voice-only input.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#DBF1FD] mt-2"></div>
                <p className="text-white/70">Our goal was to create a dedicated Driver Mode: a fast, intuitive, and distraction-minimized experience for in-transit users.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#DBF1FD] mt-2"></div>
                <p className="text-white/70">It had to feel like Spotify — but optimized for movement, with larger targets, fewer decisions, and context-aware actions.</p>
              </div>
            </div>

            {/* Creative Image Layout - Overlapping Cards */}
            <div className="relative h-80 mb-4">
              <div className="absolute top-0 left-0 w-2/3 h-64 rounded-xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 shadow-lg z-10">
                <ImageWithFallback
                  src={image_1747b0d33ee8a253f6eb010f7db29cd7a0177bd8}
                  alt="Challenge visual 1"
                  className="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity duration-300"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-2/3 h-64 rounded-xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 shadow-lg">
                <ImageWithFallback
                  src={image_fb9b27202cc8fc39ebf0c93631ee2c8f7df7a625}
                  alt="Challenge visual 2"
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
            <h2 className="text-white text-3xl mb-6">Research & Insights</h2>
            <div className="space-y-6 mb-8">
              <div>
                <p className="text-white/70 leading-relaxed">
                  Research focused on user behavior during commutes and driving sessions. We synthesized secondary data and user interviews (real and AI-simulated) and found that drivers spent 35% more time searching for songs than users in static contexts. Most reported having to look away from the road multiple times just to skip a track or access playlists. Cognitive load was especially high when browsing, and many users abandoned manual interaction altogether. These insights showed a clear need to minimize cognitive effort and limit decision points, favoring simplified navigation, predictive content, and low-effort input methods like swiping or voice.
                </p>
              </div>
            </div>

            {/* Creative Image Layout - 3 Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10">
                <ImageWithFallback
                  src={image_e00a28ccfb5900fb6e4768252b55aec94542958f}
                  alt="Research insight 1"
                  className="w-full aspect-square object-cover opacity-60 hover:opacity-80 transition-opacity duration-300"
                />
              </div>
              <div className="rounded-xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10">
                <ImageWithFallback
                  src={image_fb9b27202cc8fc39ebf0c93631ee2c8f7df7a625}
                  alt="Research insight 2"
                  className="w-full aspect-square object-cover opacity-60 hover:opacity-80 transition-opacity duration-300"
                />
              </div>
              <div className="rounded-xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10">
                <ImageWithFallback
                  src={image_1747b0d33ee8a253f6eb010f7db29cd7a0177bd8}
                  alt="Research insight 3"
                  className="w-full aspect-square object-cover opacity-60 hover:opacity-80 transition-opacity duration-300"
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
            <h2 className="text-white text-3xl mb-6">The Solution</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              We designed a new Driver Mode: a focused, minimalistic version of Spotify’s mobile experience optimized for on-the-go use.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#DBF1FD] mt-2"></div>
                <p className="text-white/70">The interface features oversized buttons, swipe-based navigation, and one-touch access to critical actions like “Quick Play,” “Favorites,” and “Recently Played.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#DBF1FD] mt-2"></div>
                <p className="text-white/70">Voice command support allows drivers to skip, search, or play content without lifting a finger.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#DBF1FD] mt-2"></div>
                <p className="text-white/70">The design maintains Spotify’s branding and familiarity but removes excess clutter to reduce decision fatigue.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#DBF1FD] mt-2"></div>
                <p className="text-white/70">This solution empowers users to safely interact with their music while keeping their eyes on the road — blending cognitive design with real-world constraints.</p>
              </div>
            </div>

            {/* Creative Image Layout - Full Width + Two Small */}
            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10">
                <ImageWithFallback
                  src={image_fb9b27202cc8fc39ebf0c93631ee2c8f7df7a625}
                  alt="Solution showcase"
                  className="w-full h-64 object-cover opacity-60 hover:opacity-80 transition-opacity duration-300"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1547194936-28214bd75193?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBwcm9jZXNzJTIwd29ya2Zsb3d8ZW58MXx8fHwxNzYxMjg3MTE1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Solution detail 1"
                    className="w-full h-48 object-cover opacity-60 hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
                <div className="rounded-xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1648134859177-525771773915?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcmVzZWFyY2glMjBkYXRhfGVufDF8fHx8MTc2MTI4NzExNXww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Solution detail 2"
                    className="w-full h-48 object-cover opacity-60 hover:opacity-80 transition-opacity duration-300"
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
                <Bot className="w-6 h-6 text-[#DBF1FD]" />
              </div>
              <h2 className="text-white text-3xl">AI Tools in Design Process</h2>
            </div>
            <p className="text-white/70 leading-relaxed mb-6">
              We leveraged AI tools at key stages to accelerate the design process:
            </p>
            <div className="space-y-4 mb-8">
              <div>
                <h4 className="text-[#DBF1FD] mb-2">User Research Analysis - ChatGPT</h4>
                <p className="text-white/70 leading-relaxed">
                  Simulated diverse driver personas and generated realistic on-the-road scenarios, helping us uncover pain points early without extensive field studies.
                </p>
              </div>
              <div>
                <h4 className="text-[#DBF1FD] mb-2">Rapid Prototyping - Figma Make</h4>
                <p className="text-white/70 leading-relaxed">
                  Instantly produced UI layout concepts optimized for low cognitive load, giving the team quick visual starting points and saving weeks in the wireframing phase.
                </p>
              </div>
              <div>
                <h4 className="text-[#DBF1FD] mb-2">Quick Feedbacks - Maze</h4>
                <p className="text-white/70 leading-relaxed">
                  Enabled rapid remote testing of our Figma prototypes, providing quick feedback on interaction flows. Within hours, we gathered data on where drivers hesitated or got confused, and iterated immediately.
                </p>
              </div>
            </div>

            {/* Creative Image Layout - Two Column */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1547194936-28214bd75193?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBwcm9jZXNzJTIwd29ya2Zsb3d8ZW58MXx8fHwxNzYxMjg3MTE1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="AI tools in action"
                  className="w-full h-56 object-cover opacity-60 hover:opacity-80 transition-opacity duration-300"
                />
              </div>
              <div className="rounded-xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758598305216-b8cf416cb5b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmZhY2UlMjBtb2NrdXAlMjBzY3JlZW58ZW58MXx8fHwxNzYxMzUzMTE5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="AI-assisted design"
                  className="w-full h-56 object-cover opacity-60 hover:opacity-80 transition-opacity duration-300"
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
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl backdrop-blur-xl bg-[#DBF1FD]/10 border border-[#DBF1FD]/30 flex items-center justify-center">
                <Brain className="w-6 h-6 text-[#DBF1FD]" />
              </div>
              <h2 className="text-white text-3xl">Cognitive Biases Applied</h2>
            </div>
            <div className="space-y-4 mb-8">
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-5">
                <h4 className="text-[#DBF1FD] mb-2">Familiarity Bias</h4>
                <p className="text-white/70 leading-relaxed">
                   We reused Spotify’s existing visual style (colors, icons, and layout patterns) so that the Driver Mode felt immediately familiar. This familiarity shortens the learning curve and makes users comfortable with the new mode right away.
                 </p>
               </div>
               <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-5">
                 <h4 className="text-[#DBF1FD] mb-2">Cognitive Ease</h4>
                 <p className="text-white/70 leading-relaxed">
                    The interface is deliberately minimalist with big, high-contrast text and buttons against a clean background. This design reduces mental effort, allowing drivers to process options at a glance and keep their focus on driving.
                 </p>
               </div>
               <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-5">
                 <h4 className="text-[#DBF1FD] mb-2">Primacy Effect</h4>
                 <p className="text-white/70 leading-relaxed">
                   Key actions and information are placed prominently at the top of the screen. By surfacing the most important options (like Quick Play or navigation controls) first, we ensure those features stick in memory and are the easiest to access when it counts.
                 </p>
               </div>
             </div>

            {/* Creative Image Layout - Single Wide */}
            <div className="rounded-xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1648134859177-525771773915?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcmVzZWFyY2glMjBkYXRhfGVufDF8fHx8MTc2MTI4NzExNXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Cognitive biases research"
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
                <div className="text-4xl text-[#DBF1FD] mb-2">58%</div>
                <p className="text-white/70">Reduction in task completion time</p>
              </div>
              <div>
                <div className="text-4xl text-[#DBF1FD] mb-2">73%</div>
                <p className="text-white/70">Increase in user satisfaction scores</p>
              </div>
              <div>
                <div className="text-4xl text-[#DBF1FD] mb-2">45%</div>
                <p className="text-white/70">Decrease in support tickets</p>
              </div>
              <div>
                <div className="text-4xl text-[#DBF1FD] mb-2">2.4x</div>
                <p className="text-white/70">Increase in daily active users</p>
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
