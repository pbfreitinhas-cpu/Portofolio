import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CaseStudyCardProps {
  number: number;
  imageUrl: string;
  onClick: () => void;
  theme?: 'night' | 'day';
}

export function CaseStudyCard({ number, imageUrl, onClick, theme = 'night' }: CaseStudyCardProps) {
  const { t } = useTranslation();

  const caseStudies = {
    1: {
      title: t("spotifyDriverMode"),
      subtitle: t("viewCaseStudy")
    },
    2: {
      title: t("netflixChoiceOverload"),
      subtitle: t("viewCaseStudy")
    },
    3: {
      title: t("craftingNextExperience"),
      subtitle: t("inProgress")
    }
  };

  const current = caseStudies[number as keyof typeof caseStudies];

  const cardClasses = theme === 'night'
    ? 'bg-white/5 border-white/10 hover:border-[#DBF1FD]/30'
    : 'bg-white/40 border-2 border-white/70 hover:border-white/100 shadow-[0_15px_45px_rgba(30,144,255,0.25)] hover:shadow-[0_20px_60px_rgba(30,144,255,0.4)]';

  const imageOpacity = theme === 'day'
    ? 'opacity-45 group-hover:opacity-65'
    : 'opacity-60 group-hover:opacity-80';

  const overlayClasses = theme === 'night'
    ? 'bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/85 group-hover:via-black/50 group-hover:to-transparent'
    : 'bg-gradient-to-t from-slate-900/95 via-blue-900/85 to-blue-700/40 group-hover:from-slate-900/98 group-hover:via-blue-900/92 group-hover:to-blue-700/50';

  const titleClasses = theme === 'night'
    ? 'text-white group-hover:text-white drop-shadow-lg group-hover:drop-shadow-[0_0_12px_rgba(219,241,253,0.4)]'
    : 'text-white group-hover:text-white drop-shadow-xl group-hover:drop-shadow-[0_0_16px_rgba(100,200,255,0.6)] text-3xl';

  const subtitleClasses = number === 3 
    ? 'text-amber-200 group-hover:text-amber-100 drop-shadow-lg group-hover:drop-shadow-[0_0_12px_rgba(255,200,100,0.5)]'
    : 'text-white group-hover:text-white drop-shadow-md group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] text-lg font-bold';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: number * 0.1 }}
      whileHover={theme === 'day' ? { scale: 1.05, y: -8 } : { scale: 1.01, y: -4 }}
      onClick={onClick}
      className={`group relative overflow-hidden rounded-2xl backdrop-blur-xl border transition-all duration-300 w-full cursor-pointer font-satoshi ${cardClasses}`}
    >
      {/* Shine effect for day mode */}
      {theme === 'day' && (
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none opacity-0 group-hover:opacity-100"
          animate={{ x: [-100, 100] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }}
        />
      )}

      <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden">
        <ImageWithFallback
          src={imageUrl}
          alt={current.title}
          className={`w-full h-full object-cover transition-opacity duration-300 ${imageOpacity}`}
        />
      </div>

      <div className={`absolute inset-0 flex flex-col justify-end p-8 transition-all duration-300 ${overlayClasses}`}>
        <h3 className={`text-2xl mb-2 font-bold transition-all duration-300 ${titleClasses}`}>
          {current.title}
        </h3>

        <p className={`transition-all duration-300 ${subtitleClasses}`}>
          {current.subtitle}
        </p>
      </div>
    </motion.div>
  );
}