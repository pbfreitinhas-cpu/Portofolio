import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CaseStudyCardProps {
  number: number;
  imageUrl: string;
  onClick: () => void;
  theme?: 'night' | 'day';
}

export function CaseStudyCard({ number, imageUrl, onClick, theme = 'night' }: CaseStudyCardProps) {

  const caseStudies = {
    1: {
      title: "Spotify Driver Mode",
      subtitle: "View Case Study →"
    },
    2: {
      title: "Netflix Choice Overload",
      subtitle: "View Case Study →"
    },
    3: {
      title: "Crafting the Next Experience",
      subtitle: "In progress"
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
      className={`group relative overflow-hidden rounded-2xl backdrop-blur-xl border transition-all duration-300 w-full cursor-pointer ${
        theme === 'night'
          ? 'bg-white/5 border-white/10 hover:border-[#DBF1FD]/30'
          : 'bg-white/60 border-white/30 hover:border-blue-500/40 shadow-lg'
      }`}
    >
      <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden">
        <ImageWithFallback
          src={imageUrl}
          alt={current.title}
          className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
        />
      </div>

      <div className={`absolute inset-0 flex flex-col justify-end p-8 ${
        theme === 'night'
          ? 'bg-gradient-to-t from-black/70 via-black/30 to-transparent'
          : 'bg-gradient-to-t from-blue-900/70 via-blue-900/30 to-transparent'
      }`}>
        <h3 className="text-white text-2xl mb-2 font-bold">
          {current.title}
        </h3>

        <p className={`${
          number === 3 
            ? 'text-yellow-300'
            : theme === 'night' ? 'text-[#DBF1FD]' : 'text-blue-200'
        }`}>
          {current.subtitle}
        </p>
      </div>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className={`absolute inset-0 backdrop-blur-sm ${
          theme === 'night' ? 'bg-[#DBF1FD]/5' : 'bg-blue-500/10'
        }`} />
      </div>
    </motion.div>
  );
}