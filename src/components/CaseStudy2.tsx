import image_c9dcde759291ae527a8c20289cd691b256c9b5c9 from 'figma:asset/c9dcde759291ae527a8c20289cd691b256c9b5c9.png';
import image_99268e41598a0e171d946ce01b4315172dfbb4f9 from 'figma:asset/99268e41598a0e171d946ce01b4315172dfbb4f9.png';
import image_fea9d31ed7fa8e2e11ae50204ca6f102a3f60184 from 'figma:asset/fea9d31ed7fa8e2e11ae50204ca6f102a3f60184.png';
import image_79d010f0e0ac4a6050c00168acacf492fccf91ab from 'figma:asset/79d010f0e0ac4a6050c00168acacf492fccf91ab.png';
import image_ae4c881cd982f24b70fd35f6fa0dfb97c41ef223 from 'figma:asset/ae4c881cd982f24b70fd35f6fa0dfb97c41ef223.png';
import image_b638cdda55459d4c3742759cd4c4287b03a2d0e2 from 'figma:asset/b638cdda55459d4c3742759cd4c4287b03a2d0e2.png';
import image_0e1728a2af02788a73ce6175b3458c8bc9d5c1ed from 'figma:asset/0e1728a2af02788a73ce6175b3458c8bc9d5c1ed.png';
import image_19897c4fe6e0b443949735d28001a35a658bd493 from 'figma:asset/19897c4fe6e0b443949735d28001a35a658bd493.png';
import netflixSurvey from "../assets/netflix-survey-insights.png";
import netflixUsabilityTest from "../assets/usability-test-netflix.png";
import netflixDeskResearch from "../assets/desk-research-netflix.png";
import netflixCrazyEight from "../assets/crazy-eight-netflix.png";
import netflixFigmaMake from "../assets/figma-make-netflix.png";
import netflixBrain from "../assets/brain-netflix.png";
import netflixNotionAi from "../assets/notion-ai-netlfix.png";

// import image_9c8ad3c5a6a89e976e00e78e5aef62336d73c9e1 from 'figma:asset/9c8ad3c5a6a89e976e00e78e5aef62336d73c9e1.png'; // não usado

import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { ArrowLeft, Bot, Brain, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CaseStudy2Props {
  onBack: () => void;
  theme?: "night" | "day";
}

export function CaseStudy2({ onBack, theme = "night" }: CaseStudy2Props) {
  const { t } = useTranslation();
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <div
        className={`min-h-screen relative transition-all duration-1000 font-satoshi ${
          theme === "night"
            ? "bg-gradient-to-b from-[#0D1117] to-[#121826]"
            : "bg-gradient-to-b from-[#87CEEB] via-[#B0D4F1] to-[#E3F2FD]"
        }`}
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {/* Animated background - Stars for night */}
        {theme === "night" && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
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
        <section className={`min-h-screen flex items-center justify-center px-6 ${theme === 'day' ? 'py-24' : 'py-20'}`}>
          <div className={`max-w-5xl mx-auto ${theme === 'day' ? 'w-full' : ''}`}>
            <motion.div
              initial={{ opacity: 0, y: theme === 'day' ? 40 : 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ...(theme === 'day' ? { ease: "easeOut" } : {}) }}
              className={`text-center ${theme === 'day' ? 'mb-16' : 'mb-12'}`}
            >
              <motion.div
                {...(theme === 'day' ? {
                  initial: { scale: 0.9, opacity: 0 },
                  animate: { scale: 1, opacity: 1 },
                  transition: { duration: 0.6, delay: 0.1 }
                } : {})}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-xl border mb-8 transition-all duration-1000 font-medium text-sm ${
                  theme === 'night'
                    ? 'bg-[#DBF1FD]/10 border-[#DBF1FD]/30 text-[#DBF1FD]'
                    : 'bg-gradient-to-r from-blue-400/40 to-cyan-300/40 border-blue-400/60 text-blue-900 shadow-[0_8px_24px_rgba(100,150,255,0.2)]'
                }`}>
                {theme === 'day' && <Sparkles className="w-4 h-4" />}
                Case Study #2
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ...(theme === 'day' ? { delay: 0.2 } : {}) }}
                className={`${theme === 'day' ? 'text-5xl md:text-7xl lg:text-8xl font-bold mb-8 transition-colors duration-1000 leading-tight' : 'text-5xl md:text-6xl lg:text-7xl mb-6 font-bold transition-colors duration-500'}
                  ${theme === 'night' ? 'text-white' : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700'}`}
                style={theme === 'day' ? { fontFamily: "'Playfair Display', serif", letterSpacing: '-0.02em' } : undefined}
              >
                {t("netflixChoiceOverload")}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ...(theme === 'day' ? { delay: 0.3 } : {}) }}
                className={`${theme === 'day' ? 'text-lg md:text-xl' : 'text-xl md:text-2xl'} max-w-3xl mx-auto leading-relaxed transition-colors ${theme === 'day' ? 'duration-1000' : 'duration-500'}
                  ${theme === 'night' ? 'text-white/70' : 'text-blue-900/80'}`}
              >
                Reimagining Netflix's discovery flow to tackle choice overload with personalization, simplicity, and cognitive-aware design.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ...(theme === 'day' ? { delay: 0.4 } : { delay: 0.2 }) }}
              className={`rounded-3xl overflow-hidden backdrop-blur-2xl border-2 transition-all duration-300 ${
                theme === 'night'
                  ? 'bg-white/5 border-white/10'
                  : 'bg-white/50 border-white/70 shadow-[0_20px_60px_rgba(100,150,255,0.25)]'
              }`}
            >
              <div className="relative overflow-hidden bg-gradient-to-b from-blue-100/50 to-transparent rounded-2xl">
                <ImageWithFallback
                  src={image_b638cdda55459d4c3742759cd4c4287b03a2d0e2}
                  alt="Case Study Hero"
                  className={`w-full aspect-[16/9] object-cover ${theme === 'day' ? 'rounded-2xl' : ''}`}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid grid-cols-1 md:grid-cols-3 mb-20 transition-all duration-500 ${
                theme === "night" ? "gap-8" : "gap-6 md:gap-8 lg:gap-10"
              }`}
            >
              <div className={`backdrop-blur-xl rounded-2xl border transition-colors duration-500
                ${theme === 'night' ? 'bg-white/5 border-white/10 p-6' : 'bg-white/80 border-gray-200 shadow p-6'}
              `}>
                <h3 className={`font-semibold uppercase tracking-wide text-sm
                  ${theme === 'night' ? 'mb-3' : 'mb-5'}
                  ${theme === 'night' ? 'text-[#DBF1FD]' : 'text-blue-700'}`}>Role</h3>
                <p className={`${theme === 'night' ? 'text-white/70' : 'text-gray-900 font-medium leading-relaxed pr-2'}`}>UX/UI Designer</p>
              </div>
              <div className={`backdrop-blur-xl rounded-2xl border transition-colors duration-500
                ${theme === 'night' ? 'bg-white/5 border-white/10 p-6' : 'bg-white/80 border-gray-200 shadow p-6'}
              `}>
                <h3 className={`font-semibold uppercase tracking-wide text-sm
                  ${theme === 'night' ? 'mb-3' : 'mb-5'}
                  ${theme === 'night' ? 'text-[#DBF1FD]' : 'text-blue-700'}`}>Timeline</h3>
                <p className={`${theme === 'night' ? 'text-white/70' : 'text-gray-900 font-medium leading-relaxed pr-2'}`}>12 weeks</p>
              </div>
              <div className={`backdrop-blur-xl rounded-2xl border transition-colors duration-500
                ${theme === 'night' ? 'bg-white/5 border-white/10 p-6' : 'bg-white/80 border-gray-200 shadow p-6'}
              `}>
                <h3 className={`font-semibold uppercase tracking-wide text-sm
                  ${theme === 'night' ? 'mb-3' : 'mb-5'}
                  ${theme === 'night' ? 'text-[#DBF1FD]' : 'text-blue-700'}`}>Tools</h3>
                <p className={`${theme === 'night' ? 'text-white/70' : 'text-gray-900 font-medium leading-relaxed pr-2'}`}>Figma, ChatGPT, UX Gears</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`backdrop-blur-xl rounded-2xl p-8 mb-20 border transition-colors duration-500
                ${theme === 'night' ? 'bg-white/5 border-white/10' : 'bg-white/90 border-gray-200 shadow'}`}
            >
              <h2 className={`text-3xl mb-6 font-bold transition-colors duration-500 ${theme === 'night' ? 'text-white' : 'text-gray-900'}`}>
                Background &amp; Problem
              </h2>
              <p className={`leading-relaxed mb-4 transition-colors duration-500 ${theme === 'night' ? 'text-white/70' : 'text-gray-800'}`}
                style={theme === 'day' ? { background: 'rgba(255,255,255,0.85)', borderRadius: '0.5rem', padding: '0.5rem 1rem' } : {}}
              >
                Netflix is a global streaming platform offering thousands of movies and shows on-demand. However, this vast library can overwhelm users — many people spend a long time browsing and still feel indecisive about what to watch.
              </p>
              <p className={`leading-relaxed mb-8 transition-colors duration-500 ${theme === 'night' ? 'text-white/70' : 'text-gray-800'}`}
                style={theme === 'day' ? { background: 'rgba(255,255,255,0.85)', borderRadius: '0.5rem', padding: '0.5rem 1rem' } : {}}
              >
                This case study addresses that issue by refining Netflix’s content discovery experience to reduce decision fatigue and help viewers find something they will love faster.
              </p>

              {/* Creative Image Layout - Side by Side Different Heights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10">
                  <ImageWithFallback
                    src={image_19897c4fe6e0b443949735d28001a35a658bd493}
                    alt="Background visual 1"
                    className="w-full h-80 object-cover opacity-60 hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
                <div className="space-y-4">
                  <div className="rounded-xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10">
                    <ImageWithFallback
                      src={image_0e1728a2af02788a73ce6175b3458c8bc9d5c1ed}
                      alt="Background visual 2"
                      className="w-full h-36 object-cover opacity-60 hover:opacity-80 transition-opacity duration-300"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10">
                    <ImageWithFallback
                      src={image_79d010f0e0ac4a6050c00168acacf492fccf91ab}
                      alt="Background visual 3"
                      className="w-full h-36 object-cover opacity-60 hover:opacity-80 transition-opacity duration-300"
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
              className={`backdrop-blur-xl rounded-2xl p-8 mb-20 border transition-colors duration-500
                ${theme === 'night' ? 'bg-white/5 border-white/10' : 'bg-white/90 border-gray-200 shadow'}`}
            >
              <h2 className={`text-3xl mb-6 font-bold transition-colors duration-500 ${theme === 'night' ? 'text-white' : 'text-gray-900'}`}>
                Challenge &amp; Goals
              </h2>
              <p className={`leading-relaxed mb-4 transition-colors duration-500 ${theme === 'night' ? 'text-white/70' : 'text-gray-800'}`}
                style={theme === 'day' ? { background: 'rgba(255,255,255,0.85)', borderRadius: '0.5rem', padding: '0.5rem 1rem' } : {}}
              >
                Netflix’s enormous content catalog and diverse user tastes posed a challenge in simplifying the choice process.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${theme === 'night' ? 'bg-[#DBF1FD]' : 'bg-blue-500'}`}></div>
                  <p className={`${theme === 'night' ? 'text-white/70' : 'text-gray-800'}`}
                    style={theme === 'day' ? { background: 'rgba(255,255,255,0.85)', borderRadius: '0.5rem', padding: '0.25rem 0.75rem' } : {}}
                  >
                    We needed to minimize the paradox of choice without sacrificing the variety Netflix offers.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${theme === 'night' ? 'bg-[#DBF1FD]' : 'bg-blue-500'}`}></div>
                  <p className={`${theme === 'night' ? 'text-white/70' : 'text-gray-800'}`}
                    style={theme === 'day' ? { background: 'rgba(255,255,255,0.85)', borderRadius: '0.5rem', padding: '0.25rem 0.75rem' } : {}}
                  >
                    Our goal was to streamline decision-making with personalized, intuitive guidance that fits seamlessly into the existing interface.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${theme === 'night' ? 'bg-[#DBF1FD]' : 'bg-blue-500'}`}></div>
                  <p className={`${theme === 'night' ? 'text-white/70' : 'text-gray-800'}`}
                    style={theme === 'day' ? { background: 'rgba(255,255,255,0.85)', borderRadius: '0.5rem', padding: '0.25rem 0.75rem' } : {}}
                  >
                    Ultimately, we aimed to help users start watching something sooner and boost their overall satisfaction.
                  </p>
                </div>
              </div>

              {/* Creative Image Layout - Masonry Style */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="col-span-2 rounded-xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10">
                  <ImageWithFallback
                    src={image_fea9d31ed7fa8e2e11ae50204ca6f102a3f60184}
                    alt="Challenge visual 1"
                    className="w-full h-48 object-cover opacity-60 hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
                <div className="rounded-xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10">
                  <ImageWithFallback
                    src={image_79d010f0e0ac4a6050c00168acacf492fccf91ab}
                    alt="Challenge visual 2"
                    className="w-full h-48 object-cover opacity-60 hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
                <div className="rounded-xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10">
                  <ImageWithFallback
                    src={image_ae4c881cd982f24b70fd35f6fa0dfb97c41ef223}
                    alt="Challenge visual 3"
                    className="w-full h-48 object-cover opacity-60 hover:opacity-80 transition-opacity duration-300"
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
                  <h4 className="text-[#DBF1FD] mb-3">
                    Surveys and Interviews
                  </h4>
                  <p className="text-white/70 leading-relaxed">
                    The survey and interview was conducted to understand viewing habits and frustrations.
                  </p>
                </div>
                <div>
                  <h4 className="text-[#DBF1FD] mb-3">
                    Rewatching Familiar Titles
                  </h4>
                  <p className="text-white/70 leading-relaxed">
                    Many people felt overwhelmed by the number of options and often ended up rewatching familiar titles instead of trying something new.
                  </p>
                </div>
                <div>
                  <h4 className="text-[#DBF1FD] mb-3">
                    Endless Scrolling and Reducce Cognitive load
                  </h4>
                  <p className="text-white/70 leading-relaxed">
                    I also heard a strong desire for better guidance – users wanted easier ways to discover content they might enjoy without endless scrolling. These insights confirmed the need to reduce cognitive load and provide trustworthy recommendations (for example, highlighting popular or “For You” picks) to make choosing quicker and more satisfying.
                  </p>
                </div>
              </div>

              {/* Creative Image Layout - 2x2 Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10">
                  <ImageWithFallback
                    src={netflixSurvey}
                    alt="Netflix survey insight"
                    className="w-full aspect-video object-cover opacity-60 hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
                <div className="rounded-xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10">
                  <ImageWithFallback
                    src={netflixUsabilityTest}
                    alt="Usability Test"
                    className="w-full aspect-video object-cover opacity-60 hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
                <div className="rounded-xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10">
                  <ImageWithFallback
                    src={netflixDeskResearch}
                    alt="Desk Research"
                    className="w-full aspect-video object-cover opacity-60 hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
                <div className="rounded-xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10">
                  <ImageWithFallback
                    src={netflixCrazyEight}
                    alt="Crazy Eight"
                    className="w-full aspect-video object-cover opacity-60 hover:opacity-80 transition-opacity duration-300"
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
              <h2 className="text-white text-3xl mb-6">The solution</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#DBF1FD] mt-2"></div>
                  <p className="text-white/70">
                    We designed a guided, user-centric browsing experience to make choosing content effortless.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#DBF1FD] mt-2"></div>
                  <p className="text-white/70">
                    A new “Help Me Choose” feature prompts indecisive viewers with a couple of quick questions (like mood or genre) and then instantly plays a tailored recommendation.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#DBF1FD] mt-2"></div>
                  <p className="text-white/70">
                    The home screen was simplified to show fewer but more relevant titles at once – for example, a prominent “Top Pick for You” card – which cuts down on clutter and decision fatigue.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#DBF1FD] mt-2"></div>
                  <p className="text-white/70">
                    I also added subtle social-proof cues, such as “Trending Now” labels on popular titles, to give users more confidence in their selections.
                  </p>
                </div>
              </div>

              {/* Creative Image Layout - Vertical Stack with Varying Heights */}
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2 rounded-xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10">
                    <ImageWithFallback
                      src={image_99268e41598a0e171d946ce01b4315172dfbb4f9}
                      alt="Feature showcase 1"
                      className="w-full h-56 object-cover opacity-60 hover:opacity-80 transition-opacity duration-300"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10">
                    <ImageWithFallback
                      src={image_79d010f0e0ac4a6050c00168acacf492fccf91ab}
                      alt="Feature showcase 2"
                      className="w-full h-56 object-cover opacity-60 hover:opacity-80 transition-opacity duration-300"
                    />
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10">
                  <ImageWithFallback
                    src={image_fea9d31ed7fa8e2e11ae50204ca6f102a3f60184}
                    alt="Feature showcase 3"
                    className="w-full h-40 object-cover opacity-60 hover:opacity-80 transition-opacity duration-300"
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
                  <Bot className="w-6 h-6 text-[#DBF1FD]" />
                </div>
                <h2 className="text-white text-3xl">
                  AI Tools in Design Process
                </h2>
              </div>
              <p className="text-white/70 leading-relaxed mb-6">
                This project was built on AI integration from the ground up. AI
                tools not only assisted in the design process but became core
                components of the design system itself, creating a
                self-improving ecosystem.
              </p>
              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="text-[#DBF1FD] mb-2">
                    ChatGPT: User Research
                  </h4>
                  <p className="text-white/70 leading-relaxed">
                    Used to brainstorm ideas and assist with summarizing user research (e.g., condensing interview notes), which sped up the ideation and analysis process.
                  </p>
                </div>
                <div>
                  <h4 className="text-[#DBF1FD] mb-2">
                    Midjourney and Figma Make: Quick Prototyping
                  </h4>
                  <p className="text-white/70 leading-relaxed">
                    Employed for quick concept illustrations and UI mockups. AI-generated visuals helped the team rapidly explore and communicate design ideas.
                  </p>
                </div>
                <div>
                  <h4 className="text-[#DBF1FD] mb-2">
                    Notion AI: Manage Data
                  </h4>
                  <p className="text-white/70 leading-relaxed">
                    Utilized to organize and summarize research data. It automatically highlighted common themes in user feedback, allowing us to make informed design decisions faster.
                  </p>
                </div>
              </div>

              {/* Creative Image Layout - Three Column */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10">
                  <ImageWithFallback
                    src={netflixFigmaMake}
                    alt="Figma Make Prototyping"
                    className="w-full h-48 object-cover opacity-60 hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
                <div className="rounded-xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10">
                  <ImageWithFallback
                    src={netflixBrain}
                    alt="Imagem Ilustrativa"
                    className="w-full h-48 object-cover opacity-60 hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
                <div className="rounded-xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10">
                  <ImageWithFallback
                    src={netflixNotionAi}
                    alt="AI design tool 3"
                    className="w-full h-48 object-cover opacity-60 hover:opacity-80 transition-opacity duration-300"
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
                <h2 className="text-white text-3xl">
                  Cognitive Biases Applied
                </h2>
              </div>
              <p className="text-white/70 leading-relaxed mb-6">
                
              </p>
              <div className="space-y-4 mb-8">
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-5">
                  <h4 className="text-[#DBF1FD] mb-2">Confirmation Bias</h4>
                  <p className="text-white/70 leading-relaxed">
                    Aligning recommendations with each user’s viewing history, so suggestions feel personal and validated. This makes users more likely to trust and choose the content presented.
                  </p>
                </div>
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-5">
                  <h4 className="text-[#DBF1FD] mb-2">Social Proof</h4>
                  <p className="text-white/70 leading-relaxed">
                    Highlighting popularity (e.g. Top 10 lists, “Trending Now” badges) to signal quality. If users see others enjoying a title, they gain confidence that it’s worth watching
                  </p>
                </div>
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-5">
                  <h4 className="text-[#DBF1FD] mb-2">
                    Mere Exposure Effect
                  </h4>
                  <p className="text-white/70 leading-relaxed">
                    Repeatedly surfacing familiar genres, actors, or themes in the UI increases their appeal. The more a user encounters something familiar, the more comfortable they feel giving it a try.
                  </p>
                </div>
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-5">
                  <h4 className="text-[#DBF1FD] mb-2">
                    Choice Paralysis
                  </h4>
                  <p className="text-white/70 leading-relaxed">
                    Reducing the number of visible options and highlighting a curated selection helps users decide faster, without feeling overwhelmed. This increases confidence and engagement with the platform.
                  </p>
                </div>
              </div>

              {/* Creative Image Layout - Stacked */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10">
                    <ImageWithFallback
                      src={image_99268e41598a0e171d946ce01b4315172dfbb4f9}
                      alt="Cognitive bias research 1"
                      className="w-full h-40 object-cover opacity-60 hover:opacity-80 transition-opacity duration-300"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10">
                    <ImageWithFallback
                      src={image_c9dcde759291ae527a8c20289cd691b256c9b5c9}
                      alt="Cognitive bias research 2"
                      className="w-full h-40 object-cover opacity-60 hover:opacity-80 transition-opacity duration-300"
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
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              <h2 className="text-white text-3xl mb-6">Impact &amp; Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl text-[#DBF1FD] mb-2">29%</div>
                  <p className="text-white/70">Reduction in average time-to-choice</p>
                </div>
                <div>
                  <div className="text-4xl text-[#DBF1FD] mb-2">39%</div>
                  <p className="text-white/70">
                    Increase in confidence of choice
                  </p>
                </div>
                <div>
                  <div className="text-4xl text-[#DBF1FD] mb-2">2.1x</div>
                  <p className="text-white/70">
                    Fewer decision-reversals
                  </p>
                </div>
                <div>
                  <div className="text-4xl text-[#DBF1FD] mb-2">75%</div>
                  <p className="text-white/70">
                    Stated reduction in choice frustrations
                  </p>
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
