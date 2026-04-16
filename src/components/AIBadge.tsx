import { motion } from "motion/react";
import { Sun, Moon } from "lucide-react";
import { useTranslation } from "react-i18next";

interface AIBadgeProps {
  theme: 'night' | 'day';
  onToggle: () => void;
}

export function AIBadge({ theme, onToggle }: AIBadgeProps) {
  const { t } = useTranslation();
  return (
    <motion.button
      onClick={onToggle}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      className={`relative px-8 py-4 rounded-full backdrop-blur-2xl border cursor-pointer transition-all duration-300 overflow-hidden font-satoshi font-semibold ${
        theme === 'day'
          ? 'bg-gradient-to-br from-yellow-300 via-yellow-400 to-amber-500 border-yellow-500/80 text-black shadow-[0_8px_25px_rgba(217,119,6,0.4)] hover:shadow-[0_12px_35px_rgba(217,119,6,0.6)] hover:border-yellow-400/100'
          : 'bg-yellow-400/20 border-yellow-400/40 text-yellow-300 shadow-[0_0_20px_rgba(250,204,21,0.3)]'
      }`}
    >
      {/* Animated background glow effect */}
      {theme === 'day' && (
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-200 via-yellow-300 to-amber-400 opacity-20 blur-lg"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}

      {/* Shine effect */}
      {theme === 'day' && (
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
          animate={{
            x: [-200, 200],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }}
        />
      )}

      {/* Main content - theme icon + text */}
      <div className="flex items-center gap-3 relative z-10">
        {/* Theme Icon with animation */}
        <motion.div
          animate={{ 
            rotate: theme === 'day' ? 360 : 0,
          }}
          transition={{ 
            duration: 0.5,
          }}
          className="relative flex-shrink-0 drop-shadow-sm"
        >
          {theme === 'night' ? (
            <Moon className="w-5 h-5" />
          ) : (
            <Sun className="w-6 h-6 text-black" />
          )}
        </motion.div>

        {/* Text */}
        <span className="text-sm tracking-wide drop-shadow-md">{t("switchTheme")}</span>
      </div>
    </motion.button>
  );
}
