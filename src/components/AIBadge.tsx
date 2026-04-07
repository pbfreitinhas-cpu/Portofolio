import { motion } from "motion/react";
import { Sun, Moon } from "lucide-react";

interface AIBadgeProps {
  theme: 'night' | 'day';
  onToggle: () => void;
}

export function AIBadge({ theme, onToggle }: AIBadgeProps) {
  return (
    <motion.button
      onClick={onToggle}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative px-6 py-3 rounded-full backdrop-blur-xl border shadow-lg cursor-pointer transition-all duration-500 overflow-hidden ${
        theme === 'day'
          ? 'bg-gradient-to-r from-orange-500 to-rose-500 border-orange-400 text-white shadow-[0_0_25px_rgba(251,146,60,0.4)] hover:shadow-[0_0_35px_rgba(251,146,60,0.5)]'
          : 'bg-yellow-400/20 border-yellow-400/40 text-yellow-300 shadow-[0_0_20px_rgba(250,204,21,0.3)]'
      }`}
    >
      {/* Main content - theme icon + text */}
      <div className="flex items-center gap-2">
        {/* Theme Icon with animation */}
        <motion.div
          animate={{ 
            rotate: theme === 'day' ? 360 : 0,
          }}
          transition={{ 
            duration: 0.5,
          }}
          className="relative flex-shrink-0"
        >
          {theme === 'night' ? (
            <Moon className="w-5 h-5" />
          ) : (
            <Sun className="w-5 h-5" />
          )}
        </motion.div>

        {/* Text */}
        <span className="text-sm font-semibold font-satoshi drop-shadow-md">Switch Theme</span>
      </div>
    </motion.button>
  );
}
