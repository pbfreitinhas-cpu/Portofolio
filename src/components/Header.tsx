import { motion } from "motion/react";

interface HeaderProps {
  theme?: 'night' | 'day';
}

export function Header({ theme = 'night' }: HeaderProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className={`text-2xl tracking-tight transition-colors duration-1000 ${
          theme === 'night' ? 'text-white' : 'text-gray-800'
        }`}>Pedro</div>

        {/* Navigation Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => scrollToSection('contact')}
            className={`px-6 py-2 rounded-lg backdrop-blur-xl border transition-all duration-300 ${
              theme === 'night'
                ? 'bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-[#DBF1FD]/30'
                : 'bg-white/60 border-gray-300/40 text-gray-800 hover:bg-white/80 hover:border-blue-500/30'
            }`}
          >
            About
          </button>
          <button
            className={`px-6 py-2 rounded-lg backdrop-blur-xl border transition-all duration-300 ${
              theme === 'night'
                ? 'bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-[#DBF1FD]/30'
                : 'bg-white/60 border-gray-300/40 text-gray-800 hover:bg-white/80 hover:border-blue-500/30'
            }`}
          >
            Resume
          </button>
        </div>
      </div>
    </motion.header>
  );
}
