import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface CTAProps {
    onOpenCertificate?: () => void;
}

const CTA = ({ onOpenCertificate }: CTAProps) => {
    return (
        <section className="py-24 relative z-10">
            <div className="max-w-5xl mx-auto px-4">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 p-12 md:p-20 text-center"
                >
                    {/* Background Patterns */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-black/10 rounded-full blur-3xl" />
                    </div>

                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
                            <Sparkles className="w-4 h-4 text-yellow-300" />
                            <span className="text-sm font-medium text-white">Start your journey today</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Ready to Transform <br /> Your Career?
                        </h2>
                        
                        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                            Join our community of learners and start building your dream future with industry-leading courses.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button 
                                onClick={onOpenCertificate}
                                className="px-8 py-4 rounded-xl bg-blue-700/50 text-white font-bold text-lg hover:bg-blue-700/70 backdrop-blur-md border border-white/10 transition-colors"
                            >
                                Get Certified
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
