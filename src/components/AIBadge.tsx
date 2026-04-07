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
      className={`relative px-7 py-3.5 rounded-full backdrop-blur-md border shadow-lg cursor-pointer transition-all duration-500 overflow-hidden font-satoshi font-bold ${
        theme === 'day'
          ? 'bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 border-amber-600/70 text-amber-950 shadow-[0_4px_20px_rgba(217,119,6,0.35)] hover:shadow-[0_6px_28px_rgba(217,119,6,0.5)] hover:from-amber-300 hover:via-yellow-300 hover:to-amber-300'
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
        <span className={`text-sm font-bold transition-colors duration-500 ${
          theme === 'day' ? 'drop-shadow-[0_2px_4px_rgba(120,53,15,0.4)]' : 'drop-shadow-md'
        }`}>Switch Theme</span>
      </div>
    </motion.button>
  );
}
