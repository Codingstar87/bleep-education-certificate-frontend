import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, BookOpen, Award, ChevronRight, Home } from 'lucide-react';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { 
    icon: Home, 
    label: 'Home', 
    path: '/',
    description: 'Return to the main landing page'
  },
  { 
    icon: BookOpen, 
    label: 'Browse Courses', 
    path: '/courses',
    description: 'Explore our comprehensive curriculum'
  },
  { 
    icon: Award, 
    label: 'Get Certified', 
    path: '/certificate',
    description: 'Verify your skills and achievements'
  },
];

const sidebarVariants = {
  closed: { 
    x: '-100%',
    transition: { 
      type: 'spring', 
      stiffness: 400, 
      damping: 40 
    }
  },
  open: { 
    x: 0,
    transition: { 
      type: 'spring', 
      stiffness: 400, 
      damping: 40,
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  closed: { x: 50, opacity: 0 },
  open: { x: 0, opacity: 1 }
};

function MenuModal({ isOpen, onClose }: MenuModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            className="fixed left-0 top-0 bottom-0 w-full max-w-md bg-[#0f172a]/90 backdrop-blur-2xl border-r border-white/10 shadow-2xl z-50 overflow-hidden"
          >
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="relative z-10 p-8 h-full flex flex-col">
              <div className="flex justify-between items-center mb-12">
                <motion.h2 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                >
                  Navigation
                </motion.h2>
                <motion.button
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors border border-white/5 hover:border-white/20"
                >
                  <X className="w-6 h-6 text-gray-400 hover:text-white" />
                </motion.button>
              </div>

              <nav className="space-y-4 flex-1">
                {menuItems.map((item) => (
                  <motion.div key={item.path} variants={itemVariants}>
                    <Link
                      to={item.path}
                      onClick={onClose}
                      className="group block p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-blue-500/5 transition-all duration-500" />
                      
                      <div className="relative flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-400 group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-lg shadow-blue-500/10">
                          <item.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-200 group-hover:text-white transition-colors flex items-center gap-2">
                            {item.label}
                            <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-blue-400" />
                          </h3>
                          <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors mt-0.5">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div 
                variants={itemVariants}
                className="pt-8 border-t border-white/10"
              >
                <div className="flex gap-4 justify-center mb-6">
                   {/* Social or other links could go here */}
                </div>
                <p className="text-center text-sm text-gray-500">
                  © 2024 Bleep Education. <br /> Empowering learners worldwide.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default MenuModal;
