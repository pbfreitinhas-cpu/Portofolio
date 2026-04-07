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
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      className={`relative px-8 py-4 rounded-full backdrop-blur-2xl border cursor-pointer transition-all duration-300 overflow-hidden font-satoshi font-semibold ${
        theme === 'day'
          ? 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 border-purple-400/80 text-white shadow-[0_0_40px_rgba(168,85,247,0.5)] hover:shadow-[0_0_60px_rgba(168,85,247,0.7)]'
          : 'bg-yellow-400/20 border-yellow-400/40 text-yellow-300 shadow-[0_0_20px_rgba(250,204,21,0.3)]'
      }`}
    >
      {/* Animated background glow effect for day mode */}
      {theme === 'day' && (
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-30 blur-md"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
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
          className="relative flex-shrink-0"
        >
          {theme === 'night' ? (
            <Moon className="w-5 h-5" />
          ) : (
            <Sun className="w-6 h-6" />
          )}
        </motion.div>

        {/* Text */}
        <span className="text-sm tracking-wide">Switch Theme</span>
      </div>
    </motion.button>
  );
}
