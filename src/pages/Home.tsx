import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Certificate from './Certificate';
import BackgroundOrbs from '../components/BackgroundOrbs';

const Home = () => {
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
        style={{ scaleX }}
      />
      <BackgroundOrbs />
      {/* Main Content with Blur Effect */}
      <div className={`relative z-10 transition-all duration-300 ${isCertificateOpen ? 'blur-md pointer-events-none' : ''}`}>
        <Hero />
        <Stats />
        <CTA onOpenCertificate={() => setIsCertificateOpen(true)} />
        <Features />
        <Gallery />
        <Testimonials />
        
        <Footer />
      </div>

      {/* Certificate Modal Overlay */}
      <AnimatePresence>
        {isCertificateOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCertificateOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative z-10 w-full max-w-2xl"
            >
              <Certificate isModal onClose={() => setIsCertificateOpen(false)} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
