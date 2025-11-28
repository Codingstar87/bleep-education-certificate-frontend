import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, Sparkles } from 'lucide-react';
import MenuModal from './MenuModal';

function NavigationButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5, type: "spring" }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={() => setIsOpen(true)}
        className="fixed top-4 right-4 md:top-8 md:right-8 z-40 group"
      >
        <div className="relative flex items-center justify-center p-3 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300">
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative">
            <Menu className={`w-5 h-5 text-white transition-all duration-300 ${isHovered ? 'rotate-90 opacity-0' : 'opacity-100'}`} />
            <Sparkles className={`absolute inset-0 w-5 h-5 text-blue-400 transition-all duration-300 ${isHovered ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
          </div>
        </div>
      </motion.button>

      <MenuModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

export default NavigationButton;
