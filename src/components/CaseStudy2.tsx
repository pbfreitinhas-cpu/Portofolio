import img_c9dcde7592 from '../assets/c9dcde759291ae527a8c20289cd691b256c9b5c9.png';
import img_99268e4159 from '../assets/99268e41598a0e171d946ce01b4315172dfbb4f9.png';
import img_fea9d31ed7 from '../assets/fea9d31ed7fa8e2e11ae50204ca6f102a3f60184.png';
import img_79d010f0e0 from '../assets/79d010f0e0ac4a6050c00168acacf492fccf91ab.png';
import img_ae4c881cd9 from '../assets/ae4c881cd982f24b70fd35f6fa0dfb97c41ef223.png';
import img_b638cdda55 from '../assets/b638cdda55459d4c3742759cd4c4287b03a2d0e2.png';
import img_0e1728a2af from '../assets/0e1728a2af02788a73ce6175b3458c8bc9d5c1ed.png';
import img_19897c4fe6 from '../assets/19897c4fe6e0b443949735d28001a35a658bd493.png';
import netflixSurvey from '../assets/netflix-survey-insights.png';
import netflixUsabilityTest from '../assets/usability-test-netflix.png';
import netflixDeskResearch from '../assets/desk-research-netflix.png';
import netflixCrazyEight from '../assets/crazy-eight-netflix.png';
import netflixFigmaMake from '../assets/figma-make-netflix.png';
import netflixBrain from '../assets/brain-netflix.png';
import netflixNotionAi from '../assets/notion-ai-netlfix.png';

// import image_9c8ad3c5a6a89e976e00e78e5aef62336d73c9e1 from 'figma:asset/9c8ad3c5a6a89e976e00e78e5aef62336d73c9e1.png'; // não usado

import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { ArrowLeft, Bot, Brain } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CaseStudy2Props {
  onBack: () => void;
  theme?: "night" | "day";
}

export function CaseStudy2({ onBack, theme = "night" }: CaseStudy2Props) {
  const { t } = useTranslation();

  // Glassmorphism helpers
  // Novos estilos para Day Mode: contraste alto, fundo branco, bordas suaves, espaçamento generoso, fontes grandes
  const glass = theme === 'day'
    ? "bg-white border border-gray-200 shadow-lg"
    : "bg-white/5 border-white/10";
  const glassCard = theme === 'day'
    ? "bg-gray-50 border border-gray-200 shadow-md"
    : "bg-white/5 border-white/10";
  const textMain = theme === 'day' ? "text-gray-900" : "text-white";
  const textSubtle = theme === 'day' ? "text-gray-700" : "text-white/70";
  const accent = theme === 'day' ? "text-blue-800 font-bold" : "text-[#DBF1FD]";
  const accentBg = theme === 'day' ? "bg-blue-100" : "bg-[#DBF1FD]/10";
  const borderAccent = theme === 'day' ? "border-blue-300" : "border-[#DBF1FD]/30";

  // Ajustes de espaçamento e fontes para Day Mode
  const sectionPad = theme === 'day' ? "px-6 py-12 md:py-16" : "px-4 py-8";
  const cardPad = theme === 'day' ? "p-8 md:p-10" : "p-6";
  const heading = theme === 'day' ? "text-3xl md:text-4xl font-extrabold tracking-tight" : "text-2xl font-bold";
  const subheading = theme === 'day' ? "text-xl md:text-2xl font-semibold" : "text-lg font-semibold";
  const paragraph = theme === 'day' ? "text-lg md:text-xl leading-relaxed" : "text-base leading-relaxed";
  const listItem = theme === 'day' ? "text-base md:text-lg pl-2" : "text-base pl-2";

  return (
    <main className={theme === 'day' ? "min-h-screen font-satoshi bg-white text-gray-900" : "min-h-screen font-satoshi bg-transparent"}>
      {/* Back Button */}
      <button
        onClick={onBack}
        className={theme === 'day'
          ? "fixed top-6 left-6 z-50 flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-700 text-white hover:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 text-lg font-semibold shadow-lg"
          : `fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-all duration-300 ${glass}`}
        aria-label={t('Back')}
        tabIndex={0}
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="font-medium">{t('Back')}</span>
      </button>

      {/* Hero Section */}
      <section className={`flex flex-col items-center justify-center ${sectionPad} pt-28`}> 
        <div className={`mb-8 px-6 py-3 rounded-full font-bold text-lg tracking-wide ${accentBg} ${accent} border ${borderAccent} shadow-sm`}>Case Study #2</div>
        <h1 className={`mb-4 text-center leading-tight ${heading} ${textMain}`}>{t("netflixChoiceOverload")}</h1>
        <p className={`max-w-2xl text-center mb-10 ${paragraph} ${textSubtle}`}>Reimagining Netflix’s discovery flow to tackle choice overload with personalization, simplicity, and cognitive-aware design.</p>
        <div className={`w-full max-w-3xl rounded-3xl overflow-hidden ${glass} mb-10 shadow-xl`}>
          <ImageWithFallback src={img_b638cdda55} alt="Case Study Hero" className="w-full aspect-[16/9] object-cover" />
        </div>
      </section>

      {/* Overview Cards */}
      <section className={`max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 ${sectionPad} pt-0 pb-0`}> 
        {[
          { label: "Role", value: "UX/UI Designer" },
          { label: "Timeline", value: "12 weeks" },
          { label: "Tools", value: "Figma, ChatGPT, UX Gears" }
        ].map((item) => (
          <div
            key={item.label}
            className={`rounded-2xl ${cardPad} flex flex-col items-center text-center ${glassCard} transition-shadow duration-200 focus-within:ring-2 focus-within:ring-blue-400 outline-none focus:ring-2 focus:ring-blue-400`}
            tabIndex={0}
            aria-label={item.label}
          >
            <span className={`mb-2 text-base font-semibold uppercase tracking-wider ${accent}`}>{item.label}</span>
            <span className={`text-xl font-bold ${textMain}`}>{item.value}</span>
          </div>
        ))}
      </section>

      {/* Problem Section */}
      <section className={`max-w-3xl mx-auto mb-16 rounded-3xl ${glass} ${sectionPad}`}> 
        <h2 className={`mb-4 ${heading} ${textMain}`}>Background &amp; Problem</h2>
        <p className={`mb-3 ${paragraph} ${textSubtle}`}>Netflix is a global streaming platform offering thousands of movies and shows on-demand. However, this vast library can overwhelm users — many people spend a long time browsing and still feel indecisive about what to watch.</p>
        <p className={`mb-8 ${paragraph} ${textSubtle}`}>This case study addresses that issue by refining Netflix’s content discovery experience to reduce decision fatigue and help viewers find something they will love faster.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ImageWithFallback src={img_19897c4fe6} alt="Background visual 1" className="w-full h-48 object-cover rounded-2xl" />
          <div className="space-y-4">
            <ImageWithFallback src={img_0e1728a2af} alt="Background visual 2" className="w-full h-20 object-cover rounded-2xl" />
            <ImageWithFallback src={img_79d010f0e0} alt="Background visual 3" className="w-full h-20 object-cover rounded-2xl" />
          </div>
        </div>
      </section>

      {/* Challenge & Goals */}
      <section className={`max-w-3xl mx-auto mb-16 rounded-3xl ${glass} ${sectionPad}`}> 
        <h2 className={`mb-4 ${heading} ${textMain}`}>Challenge &amp; Goals</h2>
        <ul className="space-y-4 mb-8 pl-6 list-disc">
          <li className={`${listItem} ${textSubtle}`}>Minimize the paradox of choice without sacrificing variety.</li>
          <li className={`${listItem} ${textSubtle}`}>Streamline decision-making with personalized, intuitive guidance.</li>
          <li className={`${listItem} ${textSubtle}`}>Help users start watching sooner and boost satisfaction.</li>
        </ul>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ImageWithFallback src={img_fea9d31ed7} alt="Challenge visual 1" className="w-full h-40 object-cover rounded-2xl" />
          <ImageWithFallback src={img_79d010f0e0} alt="Challenge visual 2" className="w-full h-40 object-cover rounded-2xl" />
          <ImageWithFallback src={img_ae4c881cd9} alt="Challenge visual 3" className="w-full h-40 object-cover rounded-2xl" />
        </div>
      </section>

      {/* Research & Insights */}
      <section className={`max-w-3xl mx-auto mb-16 rounded-3xl ${glass} ${sectionPad}`}> 
        <h2 className={`mb-4 ${heading} ${textMain}`}>Research & Insights</h2>
        <div className="space-y-6 mb-10">
          <div>
            <h4 className={`mb-2 font-semibold ${accent}`}>Surveys and Interviews</h4>
            <p className={textSubtle}>The survey and interview was conducted to understand viewing habits and frustrations.</p>
          </div>
          <div>
            <h4 className={`mb-2 font-semibold ${accent}`}>Rewatching Familiar Titles</h4>
            <p className={textSubtle}>Many people felt overwhelmed by the number of options and often ended up rewatching familiar titles instead of trying something new.</p>
          </div>
          <div>
            <h4 className={`mb-2 font-semibold ${accent}`}>Endless Scrolling and Reduce Cognitive Load</h4>
            <p className={textSubtle}>Users wanted easier ways to discover content they might enjoy without endless scrolling. These insights confirmed the need to reduce cognitive load and provide trustworthy recommendations (for example, highlighting popular or “For You” picks) to make choosing quicker and more satisfying.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ImageWithFallback src={netflixSurvey} alt="Netflix survey insight" className="w-full aspect-video object-cover rounded-2xl" />
          <ImageWithFallback src={netflixUsabilityTest} alt="Usability Test" className="w-full aspect-video object-cover rounded-2xl" />
          <ImageWithFallback src={netflixDeskResearch} alt="Desk Research" className="w-full aspect-video object-cover rounded-2xl" />
          <ImageWithFallback src={netflixCrazyEight} alt="Crazy Eight" className="w-full aspect-video object-cover rounded-2xl" />
        </div>
      </section>

      {/* Solution */}
      <section className={`max-w-3xl mx-auto mb-16 rounded-3xl ${glass} ${sectionPad}`}> 
        <h2 className={`mb-4 ${heading} ${textMain}`}>The Solution</h2>
        <ul className="space-y-4 mb-8 pl-6 list-disc">
          <li className={`${listItem} ${textSubtle}`}>Guided, user-centric browsing for effortless choices.</li>
          <li className={`${listItem} ${textSubtle}`}>“Help Me Choose” feature for tailored recommendations.</li>
          <li className={`${listItem} ${textSubtle}`}>Home screen simplified to show fewer, more relevant titles.</li>
          <li className={`${listItem} ${textSubtle}`}>Social-proof cues (e.g. “Trending Now”) for confidence in selections.</li>
        </ul>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ImageWithFallback src={img_99268e4159} alt="Feature showcase 1" className="w-full h-40 object-cover rounded-2xl" />
          <ImageWithFallback src={img_79d010f0e0} alt="Feature showcase 2" className="w-full h-40 object-cover rounded-2xl" />
          <ImageWithFallback src={img_fea9d31ed7} alt="Feature showcase 3" className="w-full h-40 object-cover rounded-2xl" />
        </div>
      </section>

      {/* AI Tools */}
      <section className={`max-w-3xl mx-auto mb-16 rounded-3xl ${glass} ${sectionPad}`}> 
        <div className="flex items-center gap-3 mb-4">
          <Bot className={`w-6 h-6 ${accent}`} />
          <h2 className={`text-2xl font-bold ${textMain}`}>AI Tools in Design Process</h2>
        </div>
        <ul className="space-y-2 pl-4 list-disc">
          <li className={textSubtle}><b>ChatGPT:</b> Brainstorming and summarizing user research.</li>
          <li className={textSubtle}><b>Midjourney &amp; Figma Make:</b> Quick concept illustrations and UI mockups.</li>
          <li className={textSubtle}><b>Notion AI:</b> Organizing and summarizing research data.</li>
        </ul>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          <ImageWithFallback src={netflixFigmaMake} alt="Figma Make Prototyping" className="w-full h-28 object-cover rounded-2xl" />
          <ImageWithFallback src={netflixBrain} alt="Imagem Ilustrativa" className="w-full h-28 object-cover rounded-2xl" />
          <ImageWithFallback src={netflixNotionAi} alt="AI design tool 3" className="w-full h-28 object-cover rounded-2xl" />
        </div>
      </section>

      {/* Cognitive Biases */}
      <section className={`max-w-3xl mx-auto mb-16 rounded-3xl ${glass} ${sectionPad}`}> 
        <div className="flex items-center gap-3 mb-4">
          <Brain className={`w-6 h-6 ${accent}`} />
          <h2 className={`text-2xl font-bold ${textMain}`}>Cognitive Biases Applied</h2>
        </div>
        <ul className="space-y-2 pl-4 list-disc">
          <li className={textSubtle}><b>Confirmation Bias:</b> Recomendações alinhadas ao histórico do usuário.</li>
          <li className={textSubtle}><b>Social Proof:</b> Popularidade e badges “Trending Now”.</li>
          <li className={textSubtle}><b>Mere Exposure Effect:</b> Familiaridade aumenta o conforto.</li>
          <li className={textSubtle}><b>Choice Paralysis:</b> Menos opções visíveis, seleção curada.</li>
        </ul>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          <ImageWithFallback src={img_99268e4159} alt="Cognitive bias research 1" className="w-full h-32 object-cover rounded-2xl" />
          <ImageWithFallback src={img_c9dcde7592} alt="Cognitive bias research 2" className="w-full h-32 object-cover rounded-2xl" />
        </div>
      </section>

      {/* Impact & Results */}
      <section className={`max-w-3xl mx-auto mb-20 rounded-3xl ${glass} ${sectionPad}`}> 
        <h2 className={`text-2xl font-bold mb-4 ${textMain}`}>Impact &amp; Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className={`rounded-2xl ${cardPad} flex flex-col items-center ${glassCard}`}> 
            <span className={`text-4xl font-extrabold ${accent}`}>29%</span>
            <span className={`text-lg ${textSubtle}`}>Reduction in average time-to-choice</span>
          </div>
          <div className={`rounded-2xl ${cardPad} flex flex-col items-center ${glassCard}`}> 
            <span className={`text-4xl font-extrabold ${accent}`}>39%</span>
            <span className={`text-lg ${textSubtle}`}>Increase in confidence of choice</span>
          </div>
          <div className={`rounded-2xl ${cardPad} flex flex-col items-center ${glassCard}`}> 
            <span className={`text-4xl font-extrabold ${accent}`}>2.1x</span>
            <span className={`text-lg ${textSubtle}`}>Fewer decision-reversals</span>
          </div>
          <div className={`rounded-2xl ${cardPad} flex flex-col items-center ${glassCard}`}> 
            <span className={`text-4xl font-extrabold ${accent}`}>75%</span>
            <span className={`text-lg ${textSubtle}`}>Stated reduction in choice frustrations</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-10 flex justify-center bg-transparent">
        <button
          onClick={onBack}
          className={theme === 'day'
            ? `px-10 py-4 rounded-xl bg-blue-700 text-white text-lg font-bold shadow-lg hover:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-all duration-300`
            : `px-8 py-3 rounded-lg font-semibold ${glassCard} focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-all duration-300`}
        >
          Back to Portfolio
        </button>
      </footer>
    </main>
  );
}