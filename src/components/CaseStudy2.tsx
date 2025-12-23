import image_c9dcde759291ae527a8c20289cd691b256c9b5c9 from 'figma:asset/c9dcde759291ae527a8c20289cd691b256c9b5c9.png';
import image_99268e41598a0e171d946ce01b4315172dfbb4f9 from 'figma:asset/99268e41598a0e171d946ce01b4315172dfbb4f9.png';
import image_fea9d31ed7fa8e2e11ae50204ca6f102a3f60184 from 'figma:asset/fea9d31ed7fa8e2e11ae50204ca6f102a3f60184.png';
import image_79d010f0e0ac4a6050c00168acacf492fccf91ab from 'figma:asset/79d010f0e0ac4a6050c00168acacf492fccf91ab.png';
import image_ae4c881cd982f24b70fd35f6fa0dfb97c41ef223 from 'figma:asset/ae4c881cd982f24b70fd35f6fa0dfb97c41ef223.png';
import image_b638cdda55459d4c3742759cd4c4287b03a2d0e2 from 'figma:asset/b638cdda55459d4c3742759cd4c4287b03a2d0e2.png';
import image_0e1728a2af02788a73ce6175b3458c8bc9d5c1ed from 'figma:asset/0e1728a2af02788a73ce6175b3458c8bc9d5c1ed.png';
import image_19897c4fe6e0b443949735d28001a35a658bd493 from 'figma:asset/19897c4fe6e0b443949735d28001a35a658bd493.png';
// import image_9c8ad3c5a6a89e976e00e78e5aef62336d73c9e1 from 'figma:asset/9c8ad3c5a6a89e976e00e78e5aef62336d73c9e1.png'; // não usado

import { motion } from "motion/react";
import { ArrowLeft, Bot, Brain } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CaseStudy2Props {
  onBack: () => void;
  theme?: "night" | "day";
}

export function CaseStudy2({ onBack, theme = "night" }: CaseStudy2Props) {
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
        className={`min-h-screen relative transition-all duration-1000 ${
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
          className={`fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 rounded-lg backdrop-blur-xl border transition-all duration-300 ${
            theme === "night"
              ? "bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-[#DBF1FD]/30"
              : "bg-white/60 border-gray-300/40 text-gray-800 hover:bg-white/80 hover:border-blue-500/30"
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
                Case Study #2
              </div>
              <h1 className="text-white text-5xl md:text-6xl lg:text-7xl mb-6">
                Netflix Choice Overload
              </h1>
              <p className="text-white/70 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
                Reimagining Netflix’s discovery flow to tackle choice overload with personalization, simplicity, and cognitive-aware design.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-2xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10"
            >
              <ImageWithFallback
                src={image_b638cdda55459d4c3742759cd4c4287b03a2d0e2}
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
                <p className="text-white/70">UX/UI Designer</p>
              </div>
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-[#DBF1FD] mb-3">Timeline</h3>
                <p className="text-white/70">12 weeks</p>
              </div>
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-[#DBF1FD] mb-3">Tools</h3>
                <p className="text-white/70">Figma, ChatGPT, UX Gears</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 mb-20"
            >
              <h2 className="text-white text-3xl mb-6">
                Background &amp; Problem
              </h2>
              <p className="text-white/70 leading-relaxed mb-4">
                Netflix is a global streaming platform offering thousands of movies and shows on-demand. However, this vast library can overwhelm users — many people spend a long time browsing and still feel indecisive about what to watch.
              </p>
              <p className="text-white/70 leading-relaxed mb-8">
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
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 mb-20"
            >
              <h2 className="text-white text-3xl mb-6">
                Challenge &amp; Goals
              </h2>
              <p className="text-white/70 leading-relaxed mb-4">
                Netflix’s enormous content catalog and diverse user tastes posed a challenge in simplifying the choice process.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#DBF1FD] mt-2"></div>
                  <p className="text-white/70">
                    We needed to minimize the paradox of choice without sacrificing the variety Netflix offers.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#DBF1FD] mt-2"></div>
                  <p className="text-white/70">
                    Our goal was to streamline decision-making with personalized, intuitive guidance that fits seamlessly into the existing interface.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#DBF1FD] mt-2"></div>
                  <p className="text-white/70">
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
                    We conducted user surveys and interviews to understand viewing habits and frustrations.
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
                    We also heard a strong desire for better guidance – users wanted easier ways to discover content they might enjoy without endless scrolling. These insights confirmed the need to reduce cognitive load and provide trustworthy recommendations (for example, highlighting popular or “For You” picks) to make choosing quicker and more satisfying.
                  </p>
                </div>
              </div>

              {/* Creative Image Layout - 2x2 Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1761122827167-159d1d272313?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB3aXJlZnJhbWUlMjBza2V0Y2h8ZW58MXx8fHwxNzYxMjgzMjYwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="AI approach 1"
                    className="w-full aspect-video object-cover opacity-60 hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
                <div className="rounded-xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1648134859177-525771773915?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcmVzZWFyY2glMjBkYXRhfGVufDF8fHx8MTc2MTI4NzExNXww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="AI approach 2"
                    className="w-full aspect-video object-cover opacity-60 hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
                <div className="rounded-xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1547194936-28214bd75193?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBwcm9jZXNzJTIwd29ya2Zsb3d8ZW58MXx8fHwxNzYxMjg3MTE1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="AI approach 3"
                    className="w-full aspect-video object-cover opacity-60 hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
                <div className="rounded-xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1758598305216-b8cf416cb5b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmZhY2UlMjBtb2NrdXAlMjBzY3JlZW58ZW58MXx8fHwxNzYxMzUzMTE5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="AI approach 4"
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
                    src="https://images.unsplash.com/photo-1758598305216-b8cf416cb5b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmZhY2UlMjBtb2NrdXAlMjBzY3JlZW58ZW58MXx8fHwxNzYxMzUzMTE5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="AI design tool 1"
                    className="w-full h-48 object-cover opacity-60 hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
                <div className="rounded-xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1547194936-28214bd75193?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBwcm9jZXNzJTIwd29ya2Zsb3d8ZW58MXx8fHwxNzYxMjg3MTE1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="AI design tool 2"
                    className="w-full h-48 object-cover opacity-60 hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
                <div className="rounded-xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1761122827167-159d1d272313?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB3aXJlZnJhbWUlMjBza2V0Y2h8ZW58MXx8fHwxNzYxMjgzMjYwfDA&ixlib=rb-4.1.0&q=80&w=1080"
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
                    Zeigarnik Effect
                  </h4>
                  <p className="text-white/70 leading-relaxed">
                    Featuring unfinished shows prominently in “Continue Watching” encourages people to complete what they started. This plays on the urge to resolve incomplete tasks, drawing viewers back to wrap up series or movies.
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
                  <div className="text-4xl text-[#DBF1FD] mb-2">65%</div>
                  <p className="text-white/70">Reduction in design time</p>
                </div>
                <div>
                  <div className="text-4xl text-[#DBF1FD] mb-2">89%</div>
                  <p className="text-white/70">
                    Improvement in accessibility compliance
                  </p>
                </div>
                <div>
                  <div className="text-4xl text-[#DBF1FD] mb-2">3.2x</div>
                  <p className="text-white/70">
                    Faster component adoption rate
                  </p>
                </div>
                <div>
                  <div className="text-4xl text-[#DBF1FD] mb-2">92%</div>
                  <p className="text-white/70">
                    Designer satisfaction score
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