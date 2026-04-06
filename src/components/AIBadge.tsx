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
      className="relative inline-flex items-center justify-center px-8 py-3 rounded-full backdrop-blur-xl border shadow-lg cursor-pointer transition-all duration-500 bg-yellow-400/20 border-yellow-400/40 text-yellow-300 shadow-[0_0_20px_rgba(250,204,21,0.3)]"
    >
      {/* Animated sparkles - decorative */}
      <motion.div
        className="absolute -top-3 -right-3 pointer-events-none"
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
        <Sparkles className="w-4 h-4 text-yellow-300" />
      </motion.div>

      {/* Theme toggle icon - decorative */}
      <motion.div
        className="absolute -top-2 -right-2 pointer-events-none"
        animate={{ 
          rotate: theme === 'day' ? 360 : 0,
        }}
        transition={{ 
          duration: 0.5,
        }}
      >
        {theme === 'night' ? (
          <Moon className="w-5 h-5 text-yellow-300" />
        ) : (
          <Sun className="w-5 h-5 text-yellow-300" />
        )}
      </motion.div>

      <div className="inline-flex items-center justify-center gap-2">
        {/* Animated robot icon */}
        <motion.div
          animate={{ 
            rotate: [0, 5, -5, 0],
            y: [0, -2, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut"
          }}
          className="relative flex-shrink-0 flex items-center justify-center"
        >
          <Bot className="w-6 h-6" />
          
          {/* Pulsing glow effect */}
          <motion.div
            className="absolute inset-0 rounded-full blur-md bg-yellow-400/30"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              width: '28px',
              height: '28px',
              left: '-1px',
              top: '-1px'
            }}
          />
        </motion.div>

        <span className="text-base drop-shadow-md font-semibold font-satoshi whitespace-nowrap">Switch Theme</span>
      </div>
    </motion.button>
  );
}
