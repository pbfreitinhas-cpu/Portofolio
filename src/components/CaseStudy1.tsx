import image_fb9b27202cc8fc39ebf0c93631ee2c8f7df7a625 from 'figma:asset/fb9b27202cc8fc39ebf0c93631ee2c8f7df7a625.png';
import image_e00a28ccfb5900fb6e4768252b55aec94542958f from 'figma:asset/e00a28ccfb5900fb6e4768252b55aec94542958f.png';
import image_1747b0d33ee8a253f6eb010f7db29cd7a0177bd8 from 'figma:asset/1747b0d33ee8a253f6eb010f7db29cd7a0177bd8.png';
import image_bb7fd3ad4b0b008a08f6d2666dc5e69a75759bcf from 'figma:asset/bb7fd3ad4b0b008a08f6d2666dc5e69a75759bcf.png';
import capaspotify from '../assets/capaspotify.png';
import competitorspotify from '../assets/Competitor-spotify.png';
import surveyspotify from '../assets/survey-spotify.png';
import brainstormspotify from '../assets/Brainstorm-desk-spotify.png';
import figmaMakespotify from '../assets/figma-make-spotify.png';
import personagptspotify from '../assets/personas-gpt-spotify.png';
import cognitivespotify from '../assets/cognitive-spotify.png';

import { motion } from "motion/react";
import { ArrowLeft, Bot, Brain, Sparkles, Zap, Target, BarChart3, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useTranslation } from 'react-i18next';

interface CaseStudy1Props {
  onBack: () => void;
  theme?: 'night' | 'day';
}

export function CaseStudy1({ onBack, theme = 'night' }: CaseStudy1Props) {
  const { t } = useTranslation();
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
      
      <div className={`min-h-screen relative transition-all duration-1000 font-satoshi ${
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
          className={`fixed top-8 left-8 z-50 flex items-center gap-2 px-6 py-3 rounded-2xl backdrop-blur-2xl border transition-all duration-300 font-medium text-sm ${
            theme === 'night'
              ? 'bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-[#DBF1FD]/30 hover:shadow-lg'
              : 'bg-white/70 border-white/80 text-blue-900 hover:bg-white/85 hover:border-blue-300/60 hover:shadow-[0_8px_32px_rgba(100,150,255,0.15)]'
          }`}
        >
          <ArrowLeft className="w-5 h-5" />
          <span>{t('Back')}</span>
        </motion.button>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-24">
        <div className="max-w-5xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-xl border mb-8 transition-all duration-1000 font-medium text-sm ${
                theme === 'night'
                  ? 'bg-[#DBF1FD]/10 border-[#DBF1FD]/30 text-[#DBF1FD]'
                  : 'bg-gradient-to-r from-blue-400/40 to-cyan-300/40 border-blue-400/60 text-blue-900 shadow-[0_8px_24px_rgba(100,150,255,0.2)]'
              }`}>
              <Sparkles className="w-4 h-4" />
              Case Study #1
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-8 transition-colors duration-1000 leading-tight ${
                theme === 'night' ? 'text-white' : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700'
              }`}
              style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '-0.02em' }}
            >
              {t("spotifyDriverMode")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed transition-colors duration-1000 font-medium ${
                theme === 'night' ? 'text-white/70' : 'text-blue-900/80'
              }`}
            >
              Designing a simplified music control interface that minimizes driver distraction and cognitive load, keeping eyes on the road and hands on the wheel
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`rounded-3xl overflow-hidden backdrop-blur-2xl border-2 transition-all duration-300 ${
              theme === 'night'
                ? 'bg-white/5 border-white/10 shadow-2xl'
                : 'bg-white/50 border-white/70 shadow-[0_20px_60px_rgba(100,150,255,0.25)]'
            }`}
          >
            <div className="relative overflow-hidden bg-gradient-to-b from-blue-100/50 to-transparent">
              <img
                src={capaspotify}
                alt="Spotify Driver Mode - Case Study Hero"
                className="w-full aspect-[16/9] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`grid grid-cols-1 md:grid-cols-3 mb-24 transition-all duration-500 ${
              theme === 'night' ? 'gap-8' : 'gap-6 md:gap-8 lg:gap-10'
            }`}
          >
            {[
              { label: 'Role', value: 'UX/UI Designer', icon: Target },
              { label: 'Timeline', value: '8 weeks', icon: Zap },
              { label: 'Tools', value: 'Figma, Hotjar, Analytics, ChatGPT', icon: Sparkles }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`backdrop-blur-[20px] rounded-2xl transition-all duration-300 group ${
                  theme === 'night'
                    ? 'bg-white/5 border border-white/10 p-6 min-h-[168px] flex flex-col justify-between hover:bg-white/8 hover:border-white/20 hover:shadow-lg'
                    : 'bg-white/80 border border-gray-200 shadow px-7 py-8 md:px-8 md:py-9 min-h-[168px] flex flex-col justify-between hover:bg-white/90 hover:border-blue-300/60 hover:shadow-[0_12px_40px_rgba(100,150,255,0.18)]'
                }`}
              >
                <div className={`flex items-center gap-3 ${theme === 'night' ? 'mb-3' : 'mb-5'}`}>
                  <div className={`w-10 h-10 rounded-lg backdrop-blur-xl border flex items-center justify-center transition-all duration-300 ${
                    theme === 'night'
                      ? 'bg-[#DBF1FD]/10 border-[#DBF1FD]/30 group-hover:bg-[#DBF1FD]/20'
                      : 'bg-blue-400/30 border-blue-400/60 group-hover:bg-blue-400/40'
                  }`}>
                    <item.icon className={`w-5 h-5 transition-colors duration-300 ${
                      theme === 'night' ? 'text-[#DBF1FD]' : 'text-blue-700'
                    }`} />
                  </div>
                  <h3 className={`font-semibold uppercase tracking-wide text-sm transition-colors duration-300 ${
                    theme === 'night' ? 'text-[#DBF1FD]' : 'text-blue-700'
                  }`}>{item.label}</h3>
                </div>
                <p className={`transition-colors duration-300 font-medium text-base leading-relaxed ${
                  theme === 'night' ? 'text-white/70' : 'text-gray-900 pr-2'
                }`}>{item.value}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Problem Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`backdrop-blur-[20px] border-2 rounded-3xl p-10 mb-24 transition-all duration-300 ${
              theme === 'night'
                ? 'bg-white/5 border-white/10'
                : 'bg-white/60 border-white/80 shadow-[0_12px_40px_rgba(100,150,255,0.15)]'
            }`}
          >
            <h2 className={`text-4xl md:text-5xl mb-8 font-bold transition-colors duration-1000 ${
              theme === 'night' ? 'text-white' : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700'
            }`} style={{ fontFamily: "'Playfair Display', serif" }}>{t('backgroundProblem')}</h2>
            
            <div className="space-y-4 mb-10">
              <p className={`leading-relaxed text-lg transition-colors duration-1000 font-medium ${
                theme === 'night' ? 'text-white/70' : 'text-blue-900/85'
              }`}>
                {t('backgroundProblemText1')}
              </p>
              <p className={`leading-relaxed text-lg transition-colors duration-1000 font-medium ${
                theme === 'night' ? 'text-white/70' : 'text-blue-900/85'
              }`}>
                {t('backgroundProblemText2')}
              </p>
            </div>

            {/* Image Grid */}
            <div className={`grid grid-cols-2 md:grid-cols-3 ${
              theme === 'night' ? 'gap-4' : 'gap-6 md:gap-8'
            }`}>
              <motion.div
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ duration: 0.3 }}
                className={`col-span-2 md:col-span-2 rounded-2xl overflow-hidden backdrop-blur-xl border-2 transition-all duration-300 ${
                  theme === 'night'
                    ? 'bg-white/5 border-white/10'
                    : 'bg-white/40 border-white/70 shadow-[0_8px_24px_rgba(100,150,255,0.15)]'
                }`}
              >
                <ImageWithFallback
                  src={image_bb7fd3ad4b0b008a08f6d2666dc5e69a75759bcf}
                  alt="Background context - research"
                  className={`w-full h-64 object-cover transition-opacity duration-300 ${
                    theme === 'day' ? 'opacity-80 hover:opacity-95' : 'opacity-60 hover:opacity-80'
                  }`}
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ duration: 0.3 }}
                className={`col-span-2 md:col-span-1 rounded-2xl overflow-hidden backdrop-blur-xl border-2 transition-all duration-300 ${
                  theme === 'night'
                    ? 'bg-white/5 border-white/10'
                    : 'bg-white/40 border-white/70 shadow-[0_8px_24px_rgba(100,150,255,0.15)]'
                }`}
              >
                <ImageWithFallback
                  src={image_e00a28ccfb5900fb6e4768252b55aec94542958f}
                  alt="Background context - insights"
                  className={`w-full h-64 object-cover transition-opacity duration-300 ${
                    theme === 'day' ? 'opacity-80 hover:opacity-95' : 'opacity-60 hover:opacity-80'
                  }`}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Challenge & Goals Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`backdrop-blur-[20px] border-2 rounded-3xl p-10 mb-24 transition-all duration-300 ${
              theme === 'night'
                ? 'bg-white/5 border-white/10'
                : 'bg-white/60 border-white/80 shadow-[0_12px_40px_rgba(100,150,255,0.15)]'
            }`}
          >
            <h2 className={`text-4xl md:text-5xl mb-8 font-bold transition-colors duration-1000 ${
              theme === 'night' ? 'text-white' : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700'
            }`} style={{ fontFamily: "'Playfair Display', serif" }}>Challenge & Goals</h2>
            
            <p className={`leading-relaxed mb-8 text-lg transition-colors duration-1000 font-medium italic ${
              theme === 'night' ? 'text-white/70' : 'text-blue-900/75'
            }`}>
              "How do you minimize attention without minimizing control?"
            </p>

            <div className="space-y-4 mb-10">
              {[
                "The challenge was to reduce visual and interaction load, while maintaining access to key music functions — all in a way that is effortless during driving.",
                "The design had to work in motion, often with one hand, poor lighting, or even voice-only input.",
                "Our goal was to create a dedicated Driver Mode: a fast, intuitive, and distraction-minimized experience for in-transit users.",
                "It had to feel like Spotify — but optimized for movement, with larger targets, fewer decisions, and context-aware actions."
              ].map((text, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ x: 8 }}
                  className={`flex items-start gap-4 p-4 rounded-xl backdrop-blur-xl border transition-all duration-300 ${
                    theme === 'night'
                      ? 'bg-white/5 border-white/10 hover:bg-white/8'
                      : 'bg-blue-400/15 border-blue-300/40 hover:bg-blue-400/25'
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full mt-3 flex-shrink-0 ${
                    theme === 'night' ? 'bg-[#DBF1FD]' : 'bg-blue-600'
                  }`}></div>
                  <p className={`transition-colors duration-1000 leading-relaxed font-medium text-base ${
                    theme === 'night' ? 'text-white/80' : 'text-blue-900/85'
                  }`}>{text}</p>
                </motion.div>
              ))}
            </div>

            {/* Overlapping Image Cards */}
            <div className="relative h-80 mb-4">
              <motion.div
                whileHover={{ x: -12, y: -8 }}
                transition={{ duration: 0.3 }}
                className={`absolute top-0 left-0 w-2/3 h-64 rounded-2xl overflow-hidden backdrop-blur-xl border-2 transition-all duration-300 z-10 ${
                  theme === 'night'
                    ? 'bg-white/5 border-white/10 shadow-xl'
                    : 'bg-white/50 border-white/70 shadow-[0_12px_40px_rgba(100,150,255,0.25)]'
                }`}
              >
                <ImageWithFallback
                  src={image_1747b0d33ee8a253f6eb010f7db29cd7a0177bd8}
                  alt="Challenge illustration 1"
                  className={`w-full h-full object-cover transition-opacity duration-300 ${
                    theme === 'day' ? 'opacity-80 hover:opacity-95' : 'opacity-60 hover:opacity-80'
                  }`}
                />
              </motion.div>
              <motion.div
                whileHover={{ x: 12, y: 8 }}
                transition={{ duration: 0.3 }}
                className={`absolute bottom-0 right-0 w-2/3 h-64 rounded-2xl overflow-hidden backdrop-blur-xl border-2 transition-all duration-300 ${
                  theme === 'night'
                    ? 'bg-white/5 border-white/10 shadow-xl'
                    : 'bg-white/50 border-white/70 shadow-[0_12px_40px_rgba(100,150,255,0.25)]'
                }`}
              >
                <ImageWithFallback
                  src={image_fb9b27202cc8fc39ebf0c93631ee2c8f7df7a625}
                  alt="Challenge illustration 2"
                  className={`w-full h-full object-cover transition-opacity duration-300 ${
                    theme === 'day' ? 'opacity-80 hover:opacity-95' : 'opacity-60 hover:opacity-80'
                  }`}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Research & Insights Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`backdrop-blur-[20px] border-2 rounded-3xl p-10 mb-24 transition-all duration-300 ${
              theme === 'night'
                ? 'bg-white/5 border-white/10'
                : 'bg-white/60 border-white/80 shadow-[0_12px_40px_rgba(100,150,255,0.15)]'
            }`}
          >
            <h2 className={`text-4xl md:text-5xl mb-8 font-bold transition-colors duration-1000 ${
              theme === 'night' ? 'text-white' : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700'
            }`} style={{ fontFamily: "'Playfair Display', serif" }}>Research & Insights</h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`backdrop-blur-xl border rounded-2xl p-6 mb-8 transition-all duration-300 ${
                theme === 'night'
                  ? 'bg-white/5 border-white/10'
                  : 'bg-blue-400/20 border-blue-400/50'
              }`}
            >
              <p className={`leading-relaxed text-base transition-colors duration-1000 font-medium ${
                theme === 'night' ? 'text-white/80' : 'text-blue-900/85'
              }`}>
                Research focused on user behavior during commutes and driving sessions. We synthesized secondary data and user interviews (real and AI-simulated) and found that drivers spent <span className={`font-bold ${theme === 'day' ? 'text-blue-700' : 'text-[#DBF1FD]'}`}>35% more time searching for songs</span> than users in static contexts. Most reported having to look away from the road multiple times just to skip a track or access playlists. Cognitive load was especially high when browsing, and many users abandoned manual interaction altogether. These insights showed a clear need to minimize cognitive effort and limit decision points, favoring simplified navigation, predictive content, and low-effort input methods like swiping or voice.
              </p>
            </motion.div>

            {/* Research Grid */}
            <div className={`grid grid-cols-1 md:grid-cols-3 ${
              theme === 'night' ? 'gap-4' : 'gap-6 md:gap-8'
            }`}>
              {[
                { img: competitorspotify, alt: "Competitor analysis - Spotify" },
                { img: surveyspotify, alt: "User survey findings" },
                { img: brainstormspotify, alt: "Design brainstorming session" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05, y: -8 }}
                  className={`rounded-2xl overflow-hidden backdrop-blur-xl border-2 transition-all duration-300 ${
                    theme === 'night'
                      ? 'bg-white/5 border-white/10'
                      : 'bg-white/40 border-white/70 shadow-[0_8px_24px_rgba(100,150,255,0.15)]'
                  }`}
                >
                  <ImageWithFallback
                    src={item.img}
                    alt={item.alt}
                    className={`w-full aspect-square object-cover transition-opacity duration-300 ${
                      theme === 'day' ? 'opacity-80 hover:opacity-95' : 'opacity-60 hover:opacity-80'
                    }`}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* The Solution Section - Fully Responsive */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`backdrop-blur-[20px] border-2 rounded-3xl p-10 mb-24 transition-all duration-300 ${
              theme === 'night'
                ? 'bg-white/5 border-white/10'
                : 'bg-white/60 border-white/80 shadow-[0_12px_40px_rgba(100,150,255,0.15)]'
            }`}
          >
            <h2 className={`text-4xl md:text-5xl mb-8 font-bold transition-colors duration-1000 ${
              theme === 'night' ? 'text-white' : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700'
            }`} style={{ fontFamily: "'Playfair Display', serif" }}>The Solution</h2>
            
            <p className={`leading-relaxed mb-8 text-lg transition-colors duration-1000 font-medium ${
              theme === 'night' ? 'text-white/70' : 'text-blue-900/85'
            }`}>
              We designed a new <span className={`font-bold ${theme === 'day' ? 'text-blue-700' : 'text-[#DBF1FD]'}`}>Driver Mode</span>: a focused, minimalistic version of Spotify's mobile experience optimized for on-the-go use with zero distractions.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "The interface features oversized buttons, swipe-based navigation, and one-touch access to critical actions like 'Quick Play,' 'Favorites,' and 'Recently Played.'",
                "Voice command support allows drivers to skip, search, or play content without lifting a finger.",
                "The design maintains Spotify's branding and familiarity but removes excess clutter to reduce decision fatigue.",
                "This solution empowers users to safely interact with their music while keeping their eyes on the road — blending cognitive design with real-world constraints."
              ].map((text, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`flex items-start gap-4 p-4 rounded-xl backdrop-blur-xl border transition-all duration-300 ${
                    theme === 'night'
                      ? 'bg-white/5 border-white/10'
                      : 'bg-blue-400/15 border-blue-300/40'
                  }`}
                >
                  <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                    theme === 'night' ? 'text-[#DBF1FD]' : 'text-blue-600'
                  }`} />
                  <p className={`transition-colors duration-1000 leading-relaxed font-medium text-base ${
                    theme === 'night' ? 'text-white/80' : 'text-blue-900/85'
                  }`}>{text}</p>
                </motion.div>
              ))}
            </div>

            {/* Solution Images */}
            <div className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                className={`rounded-2xl overflow-hidden backdrop-blur-xl border-2 transition-all duration-300 ${
                  theme === 'night'
                    ? 'bg-white/5 border-white/10'
                    : 'bg-white/40 border-white/70 shadow-[0_8px_24px_rgba(100,150,255,0.15)]'
                }`}
              >
                <ImageWithFallback
                  src={image_fb9b27202cc8fc39ebf0c93631ee2c8f7df7a625}
                  alt="Solution showcase - main interface"
                  className={`w-full h-64 object-cover transition-opacity duration-300 ${
                    theme === 'day' ? 'opacity-80 hover:opacity-95' : 'opacity-60 hover:opacity-80'
                  }`}
                />
              </motion.div>
              <div className={`grid grid-cols-1 md:grid-cols-2 ${
                theme === 'night' ? 'gap-4' : 'gap-6 md:gap-8'
              }`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  className={`rounded-2xl overflow-hidden backdrop-blur-xl border-2 transition-all duration-300 ${
                    theme === 'night'
                      ? 'bg-white/5 border-white/10'
                      : 'bg-white/40 border-white/70 shadow-[0_8px_24px_rgba(100,150,255,0.15)]'
                  }`}
                >
                  <ImageWithFallback
                    src={image_1747b0d33ee8a253f6eb010f7db29cd7a0177bd8}
                    alt="Solution detail - interaction flow 1"
                    className={`w-full h-48 object-cover transition-opacity duration-300 ${
                      theme === 'day' ? 'opacity-80 hover:opacity-95' : 'opacity-60 hover:opacity-80'
                    }`}
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  className={`rounded-2xl overflow-hidden backdrop-blur-xl border-2 transition-all duration-300 ${
                    theme === 'night'
                      ? 'bg-white/5 border-white/10'
                      : 'bg-white/40 border-white/70 shadow-[0_8px_24px_rgba(100,150,255,0.15)]'
                  }`}
                >
                  <ImageWithFallback
                    src={image_e00a28ccfb5900fb6e4768252b55aec94542958f}
                    alt="Solution detail - interaction flow 2"
                    className={`w-full h-48 object-cover transition-opacity duration-300 ${
                      theme === 'day' ? 'opacity-80 hover:opacity-95' : 'opacity-60 hover:opacity-80'
                    }`}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* AI Tools Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`backdrop-blur-[20px] border-2 rounded-3xl p-10 mb-24 transition-all duration-300 ${
              theme === 'night'
                ? 'bg-white/5 border-white/10'
                : 'bg-white/60 border-white/80 shadow-[0_12px_40px_rgba(100,150,255,0.15)]'
            }`}
          >
            <div className="flex items-center gap-3 mb-8">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-12 h-12 rounded-xl backdrop-blur-xl border flex items-center justify-center transition-all duration-300 ${
                  theme === 'night'
                    ? 'bg-[#DBF1FD]/10 border-[#DBF1FD]/30'
                    : 'bg-blue-400/30 border-blue-400/60'
                }`}>
                <Bot className={`w-6 h-6 transition-colors duration-1000 ${
                  theme === 'night' ? 'text-[#DBF1FD]' : 'text-blue-700'
                }`} />
              </motion.div>
              <h2 className={`text-4xl font-bold transition-colors duration-1000 ${
                theme === 'night' ? 'text-white' : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700'
              }`} style={{ fontFamily: "'Playfair Display', serif" }}>AI Tools in Design</h2>
            </div>

            <p className={`leading-relaxed mb-8 text-lg transition-colors duration-1000 font-medium ${
              theme === 'night' ? 'text-white/70' : 'text-blue-900/85'
            }`}>
              We leveraged AI tools at key stages to accelerate the design process and enhance our research:
            </p>

            <div className="space-y-4 mb-8">
              <motion.div
                whileHover={{ x: 8 }}
                className={`backdrop-blur-xl border-2 rounded-xl p-6 transition-all duration-300 ${
                  theme === 'night'
                    ? 'bg-white/5 border-white/10'
                    : 'bg-blue-400/15 border-blue-300/40'
                }`}>
                <h4 className={`font-bold mb-2 text-lg transition-colors duration-1000 ${
                  theme === 'night' ? 'text-[#DBF1FD]' : 'text-blue-700'
                }`}>User Research Analysis - ChatGPT</h4>
                <p className={`leading-relaxed transition-colors duration-1000 font-medium ${
                  theme === 'night' ? 'text-white/70' : 'text-blue-900/85'
                }`}>
                  Simulated diverse driver personas and generated realistic on-the-road scenarios, helping us uncover pain points early without extensive field studies.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ x: 8 }}
                className={`backdrop-blur-xl border-2 rounded-xl p-6 transition-all duration-300 ${
                  theme === 'night'
                    ? 'bg-white/5 border-white/10'
                    : 'bg-blue-400/15 border-blue-300/40'
                }`}>
                <h4 className={`font-bold mb-2 text-lg transition-colors duration-1000 ${
                  theme === 'night' ? 'text-[#DBF1FD]' : 'text-blue-700'
                }`}>Rapid Prototyping - Figma Make</h4>
                <p className={`leading-relaxed transition-colors duration-1000 font-medium ${
                  theme === 'night' ? 'text-white/70' : 'text-blue-900/85'
                }`}>
                  Instantly produced UI layout concepts optimized for low cognitive load, giving the team quick visual starting points and saving weeks in the wireframing phase.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ x: 8 }}
                className={`backdrop-blur-xl border-2 rounded-xl p-6 transition-all duration-300 ${
                  theme === 'night'
                    ? 'bg-white/5 border-white/10'
                    : 'bg-blue-400/15 border-blue-300/40'
                }`}>
                <h4 className={`font-bold mb-2 text-lg transition-colors duration-1000 ${
                  theme === 'night' ? 'text-[#DBF1FD]' : 'text-blue-700'
                }`}>Quick Feedback - Maze</h4>
                <p className={`leading-relaxed transition-colors duration-1000 font-medium ${
                  theme === 'night' ? 'text-white/70' : 'text-blue-900/85'
                }`}>
                  Enabled rapid remote testing of our Figma prototypes, providing quick feedback on interaction flows. Within hours, we gathered data on where drivers hesitated.
                </p>
              </motion.div>
            </div>

            {/* AI Tools Images */}
            <div className={`grid grid-cols-1 md:grid-cols-2 ${
              theme === 'night' ? 'gap-4' : 'gap-6 md:gap-8'
            }`}>
              <motion.div
                whileHover={{ scale: 1.05, y: -8 }}
                className={`rounded-2xl overflow-hidden backdrop-blur-xl border-2 transition-all duration-300 ${
                  theme === 'night'
                    ? 'bg-white/5 border-white/10'
                    : 'bg-white/40 border-white/70 shadow-[0_8px_24px_rgba(100,150,255,0.15)]'
                }`}>
                <ImageWithFallback
                  src={figmaMakespotify}
                  alt="Figma Make tool"
                  className={`w-full h-56 object-cover transition-opacity duration-300 ${
                    theme === 'day' ? 'opacity-80 hover:opacity-95' : 'opacity-60 hover:opacity-80'
                  }`}
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -8 }}
                className={`rounded-2xl overflow-hidden backdrop-blur-xl border-2 transition-all duration-300 ${
                  theme === 'night'
                    ? 'bg-white/5 border-white/10'
                    : 'bg-white/40 border-white/70 shadow-[0_8px_24px_rgba(100,150,255,0.15)]'
                }`}>
                <ImageWithFallback
                  src={personagptspotify}
                  alt="Persona creation with AI"
                  className={`w-full h-56 object-cover transition-opacity duration-300 ${
                    theme === 'day' ? 'opacity-80 hover:opacity-95' : 'opacity-60 hover:opacity-80'
                  }`}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Cognitive Biases Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`backdrop-blur-[20px] border-2 rounded-3xl p-10 mb-24 transition-all duration-300 ${
              theme === 'night'
                ? 'bg-white/5 border-white/10'
                : 'bg-white/60 border-white/80 shadow-[0_12px_40px_rgba(100,150,255,0.15)]'
            }`}
          >
            <div className="flex items-center gap-3 mb-8">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-12 h-12 rounded-xl backdrop-blur-xl border flex items-center justify-center transition-all duration-300 ${
                  theme === 'night'
                    ? 'bg-[#DBF1FD]/10 border-[#DBF1FD]/30'
                    : 'bg-blue-400/30 border-blue-400/60'
                }`}>
                <Brain className={`w-6 h-6 transition-colors duration-1000 ${
                  theme === 'night' ? 'text-[#DBF1FD]' : 'text-blue-700'
                }`} />
              </motion.div>
              <h2 className={`text-4xl font-bold transition-colors duration-1000 ${
                theme === 'night' ? 'text-white' : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700'
              }`} style={{ fontFamily: "'Playfair Display', serif" }}>Cognitive Biases Applied</h2>
            </div>

            <div className="space-y-4 mb-8">
              {[
                {
                  title: "Familiarity Bias",
                  description: "We reused Spotify's existing visual style (colors, icons, and layout patterns) so that the Driver Mode felt immediately familiar. This familiarity shortens the learning curve and makes users comfortable with the new mode right away."
                },
                {
                  title: "Cognitive Ease",
                  description: "The interface is deliberately minimalist with big, high-contrast text and buttons against a clean background. This design reduces mental effort, allowing drivers to process options at a glance and keep their focus on driving."
                },
                {
                  title: "Primacy Effect",
                  description: "Key actions and information are placed prominently at the top of the screen. By surfacing the most important options (like Quick Play or navigation controls) first, we ensure those features stick in memory and are the easiest to access when it counts."
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className={`backdrop-blur-xl border-2 rounded-xl p-6 transition-all duration-300 ${
                    theme === 'night'
                      ? 'bg-white/5 border-white/10'
                      : 'bg-blue-400/15 border-blue-300/40'
                  }`}>
                  <h4 className={`font-bold mb-2 text-lg transition-colors duration-1000 ${
                    theme === 'night' ? 'text-[#DBF1FD]' : 'text-blue-700'
                  }`}>{item.title}</h4>
                  <p className={`leading-relaxed transition-colors duration-1000 font-medium ${
                    theme === 'night' ? 'text-white/70' : 'text-blue-900/85'
                  }`}>
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Cognitive Research Image */}
            <motion.div
              whileHover={{ scale: 1.03, y: -8 }}
              className={`rounded-2xl overflow-hidden backdrop-blur-xl border-2 transition-all duration-300 ${
                theme === 'night'
                  ? 'bg-white/5 border-white/10'
                  : 'bg-white/40 border-white/70 shadow-[0_8px_24px_rgba(100,150,255,0.15)]'
              }`}>
              <ImageWithFallback
                src={cognitivespotify}
                alt="Cognitive biases research and implementation"
                className={`w-full h-64 object-cover transition-opacity duration-300 ${
                  theme === 'day' ? 'opacity-80 hover:opacity-95' : 'opacity-60 hover:opacity-80'
                }`}
              />
            </motion.div>
          </motion.div>

          {/* Impact & Results Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`backdrop-blur-[20px] border-2 rounded-3xl p-10 transition-all duration-300 ${
              theme === 'night'
                ? 'bg-white/5 border-white/10'
                : 'bg-white/60 border-white/80 shadow-[0_12px_40px_rgba(100,150,255,0.15)]'
            }`}
          >
            <div className="flex items-center gap-3 mb-8">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-12 h-12 rounded-xl backdrop-blur-xl border flex items-center justify-center transition-all duration-300 ${
                  theme === 'night'
                    ? 'bg-[#DBF1FD]/10 border-[#DBF1FD]/30'
                    : 'bg-blue-400/30 border-blue-400/60'
                }`}>
                <BarChart3 className={`w-6 h-6 transition-colors duration-1000 ${
                  theme === 'night' ? 'text-[#DBF1FD]' : 'text-blue-700'
                }`} />
              </motion.div>
              <h2 className={`text-4xl font-bold transition-colors duration-1000 ${
                theme === 'night' ? 'text-white' : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700'
              }`} style={{ fontFamily: "'Playfair Display', serif" }}>Impact & Results</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { number: "25%", description: "Reduction in gaze-off-road duration" },
                { number: "73%", description: "Increase in user safety perception" },
                { number: "1.8s", description: "Faster average task completion time" },
                { number: "3.1x", description: "Increase in hands-free interaction usage" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05, y: -8 }}
                  className={`backdrop-blur-xl border-2 rounded-xl p-6 transition-all duration-300 ${
                    theme === 'night'
                      ? 'bg-white/5 border-white/10'
                      : 'bg-blue-400/20 border-blue-300/60'
                  }`}>
                  <div className={`text-5xl font-bold mb-3 transition-colors duration-1000 ${
                    theme === 'night' ? 'text-[#DBF1FD]' : 'text-blue-700'
                  }`}>{item.number}</div>
                  <p className={`text-base font-medium transition-colors duration-1000 ${
                    theme === 'night' ? 'text-white/70' : 'text-blue-900/85'
                  }`}>{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className={`py-12 px-6 transition-all duration-1000 ${
        theme === 'night' ? 'bg-[#161C23]' : 'bg-white/40 backdrop-blur-xl border-t-2 border-white/60'
      }`}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBack}
            className={`px-8 py-4 rounded-2xl backdrop-blur-2xl border-2 font-semibold transition-all duration-300 ${
              theme === 'night'
                ? 'bg-[#DBF1FD]/10 border-[#DBF1FD]/40 text-[#DBF1FD] hover:bg-[#DBF1FD]/20 hover:shadow-[0_0_30px_rgba(219,241,253,0.3)]'
                : 'bg-blue-500/30 border-blue-500/60 text-blue-900 hover:bg-blue-500/40 hover:shadow-[0_8px_32px_rgba(100,150,255,0.3)]'
            }`}
          >
            Back to Portfolio
          </motion.button>
        </div>
      </section>
      </div>
    </>
  );
}
