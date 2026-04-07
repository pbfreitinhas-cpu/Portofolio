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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: number * 0.1 }}
      whileHover={{ scale: 1.01, y: -4 }}
      onClick={onClick}
      className={`group relative overflow-hidden rounded-2xl backdrop-blur-md border transition-all duration-300 w-full cursor-pointer font-satoshi ${
        theme === 'night'
          ? 'bg-white/5 border-white/10 hover:border-[#DBF1FD]/30'
          : 'bg-gradient-to-br from-white/50 to-blue-50/70 border-blue-300/70 hover:border-blue-400/90 shadow-[0_10px_30px_rgba(59,130,246,0.2)] hover:shadow-[0_15px_40px_rgba(59,130,246,0.3)]'
      }`}
    >
      <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden">
        <ImageWithFallback
          src={imageUrl}
          alt={current.title}
          className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
        />
      </div>

      <div className={`absolute inset-0 flex flex-col justify-end p-8 transition-all duration-300 ${
        theme === 'night'
          ? 'bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/85 group-hover:via-black/50 group-hover:to-transparent'
          : 'bg-gradient-to-t from-blue-700/80 via-blue-500/50 to-transparent group-hover:from-blue-800/90 group-hover:via-blue-600/65 group-hover:to-transparent'
      }`}>
        <h3 className={`text-2xl mb-2 font-bold transition-all duration-300 ${
          theme === 'night'
            ? 'text-white group-hover:text-white drop-shadow-lg group-hover:drop-shadow-[0_0_12px_rgba(219,241,253,0.4)]'
            : 'text-white group-hover:text-white drop-shadow-lg group-hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.4)]'
        }`}>
          {current.title}
        </h3>

        <p className={`transition-all duration-300 ${
          number === 3 
            ? 'text-yellow-300 group-hover:text-yellow-200 drop-shadow-md group-hover:drop-shadow-[0_0_8px_rgba(253,224,71,0.3)]'
            : theme === 'night' 
              ? 'text-[#DBF1FD] group-hover:text-[#E8F8FF] drop-shadow-md group-hover:drop-shadow-[0_0_8px_rgba(219,241,253,0.3)]'
              : 'text-blue-200 group-hover:text-blue-100 drop-shadow-md group-hover:drop-shadow-[0_0_8px_rgba(191,219,254,0.3)]'
        }`}>
          {current.subtitle}
        </p>
      </div>
    </motion.div>
  );
}