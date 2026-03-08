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
import { ArrowLeft, Bot, Brain } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CaseStudy1Props {
  onBack: () => void;
  theme?: 'night' | 'day';
}

export function CaseStudy1({ onBack, theme = 'night' }: CaseStudy1Props) {
  const isNight = theme === 'night';

  const card = isNight
    ? "backdrop-blur-xl bg-white/5 border border-white/10"
    : "backdrop-blur-xl bg-white/80 border border-gray-200 shadow-lg";

  const textTitle = isNight ? "text-white" : "text-gray-900";
  const textBody = isNight ? "text-white/70" : "text-gray-700";

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />

      <div
        className={`min-h-screen relative transition-all duration-1000 ${
          isNight
            ? "bg-gradient-to-b from-[#0D1117] to-[#121826]"
            : "bg-gradient-to-b from-[#87CEEB] via-[#B0D4F1] to-[#E3F2FD]"
        }`}
        style={{ fontFamily: "'Playfair Display', serif" }}
      >

        {isNight && (
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
                animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.2, 1] }}
                transition={{ duration: Math.random() * 3 + 2, repeat: Infinity }}
              />
            ))}
          </div>
        )}

        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className={`fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 rounded-lg backdrop-blur-xl border ${
            isNight
              ? "bg-white/5 border-white/20 text-white"
              : "bg-white border-gray-300 text-gray-800 shadow"
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </motion.button>

        {/* HERO */}
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-5xl mx-auto text-center">

            <div className={`inline-block px-4 py-2 rounded-full border mb-6 ${
              isNight
                ? "bg-[#DBF1FD]/10 border-[#DBF1FD]/30 text-[#DBF1FD]"
                : "bg-blue-100 border-blue-300 text-blue-700"
            }`}>
              Case Study #1
            </div>

            <h1 className={`text-6xl mb-6 ${textTitle}`}>
              Spotify Car Mode
            </h1>

            <p className={`text-xl max-w-3xl mx-auto ${textBody}`}>
              Designing a simplified music control interface that minimizes driver distraction and cognitive load, keeping eyes on the road and hands on the wheel
            </p>

            <div className={`rounded-2xl overflow-hidden mt-12 ${card}`}>
              <img
                src={capaspotify}
                alt="Case Study Hero"
                className="w-full aspect-[16/9] object-cover"
              />
            </div>

          </div>
        </section>

        {/* CONTENT */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto space-y-20">

            {/* BACKGROUND */}
            <div className={`rounded-2xl p-8 ${card}`}>
              <h2 className={`text-3xl mb-6 ${textTitle}`}>
                Background & Problem
              </h2>

              <p className={`leading-relaxed mb-6 ${textBody}`}>
                Spotify’s mobile interface was not designed for drivers...
              </p>

              <p className={`leading-relaxed mb-8 ${textBody}`}>
                Reports and user feedback reveal that this issue not only impacts user satisfaction...
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <ImageWithFallback src={image_bb7fd3ad4b0b008a08f6d2666dc5e69a75759bcf} alt="bg1"/>
                <ImageWithFallback src={image_e00a28ccfb5900fb6e4768252b55aec94542958f} alt="bg2"/>
              </div>
            </div>

            {/* CHALLENGE */}
            <div className={`rounded-2xl p-8 ${card}`}>
              <h2 className={`text-3xl mb-6 ${textTitle}`}>
                Challenge & Goals
              </h2>

              <p className={`${textBody} mb-6`}>
                Designing for drivers presents a unique paradox...
              </p>

              <div className="space-y-4">
                <p className={textBody}>The challenge was to reduce visual and interaction load...</p>
                <p className={textBody}>The design had to work in motion...</p>
                <p className={textBody}>Our goal was to create a dedicated Driver Mode...</p>
                <p className={textBody}>It had to feel like Spotify — but optimized for movement...</p>
              </div>
            </div>

            {/* RESEARCH */}
            <div className={`rounded-2xl p-8 ${card}`}>
              <h2 className={`text-3xl mb-6 ${textTitle}`}>
                Research & Insights
              </h2>

              <p className={`${textBody} mb-8`}>
                Research focused on user behavior during commutes...
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <ImageWithFallback src={competitorspotify} alt="competitor"/>
                <ImageWithFallback src={surveyspotify} alt="survey"/>
                <ImageWithFallback src={brainstormspotify} alt="brainstorm"/>
              </div>
            </div>

            {/* SOLUTION */}
            <div className={`rounded-2xl p-8 ${card}`}>
              <h2 className={`text-3xl mb-6 ${textTitle}`}>
                The Solution
              </h2>

              <p className={`${textBody} mb-6`}>
                We designed a new Driver Mode...
              </p>

              <ImageWithFallback src={image_fb9b27202cc8fc39ebf0c93631ee2c8f7df7a625} alt="solution"/>
            </div>

            {/* IMPACT */}
            <div className={`rounded-2xl p-8 ${card}`}>
              <h2 className={`text-3xl mb-6 ${textTitle}`}>
                Impact & Results
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl text-[#DBF1FD] mb-2">25%</div>
                  <p className={textBody}>Reduction in gaze-off-road duration</p>
                </div>

                <div>
                  <div className="text-4xl text-[#DBF1FD] mb-2">73%</div>
                  <p className={textBody}>Increase in user safety perception</p>
                </div>
              </div>
            </div>

          </div>
        </section>

      </div>
    </>
  );
}