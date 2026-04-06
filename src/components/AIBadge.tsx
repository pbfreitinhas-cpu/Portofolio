import { motion } from "motion/react";
import { Bot, Sparkles, Sun, Moon } from "lucide-react";

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
      className="relative px-6 py-3 rounded-full backdrop-blur-xl border shadow-lg cursor-pointer transition-all duration-500 bg-yellow-400/20 border-yellow-400/40 text-yellow-300 shadow-[0_0_20px_rgba(250,204,21,0.3)] overflow-hidden"
    >
      {/* Sparkles - bottom left corner */}
      <motion.div
        className="absolute -bottom-2 -left-2 pointer-events-none"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Sparkles className="w-5 h-5 text-yellow-300" />
      </motion.div>

      {/* Moon/Sun - top right corner */}
      <motion.div
        className="absolute -top-2.5 -right-2.5 pointer-events-none"
        animate={{ 
          rotate: theme === 'day' ? 360 : 0,
        }}
        transition={{ 
          duration: 0.5,
        }}
      >
        {theme === 'night' ? (
          <Moon className="w-6 h-6 text-yellow-300" />
        ) : (
          <Sun className="w-6 h-6 text-yellow-300" />
        )}
      </motion.div>

      {/* Main content - bot icon + text */}
      <div className="flex items-center gap-3">
        {/* Bot Icon with glow */}
        <motion.div
          animate={{ 
            rotate: [0, 8, -8, 0],
            y: [0, -3, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut"
          }}
          className="relative flex-shrink-0"
        >
          <Bot className="w-5 h-5 relative z-10" />
          
          {/* Pulsing glow behind bot */}
          <motion.div
            className="absolute inset-0 rounded-full blur-md bg-yellow-400/40"
            animate={{ 
              scale: [1, 1.4, 1],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              width: '24px',
              height: '24px',
              left: '-2px',
              top: '-2px'
            }}
          />
        </motion.div>

        {/* Text */}
        <span className="text-sm font-semibold font-satoshi drop-shadow-md">Switch Theme</span>
      </div>
    </motion.button>
  );
}
