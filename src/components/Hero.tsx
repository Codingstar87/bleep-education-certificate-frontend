import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse delay-1000" />
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left"
                    >
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm"
                        >
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            <span className="text-sm font-medium text-blue-200">New Courses Available</span>
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Master the <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient">
                                Future of Tech
                            </span>
                        </h1>

                        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Unlock your potential with industry-leading courses in Web Development, AI, and Design. Learn from the best and build your dream career.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <a 
                                href="https://bleepeducation.in/"
                                className="px-8 py-4 rounded-xl bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 hover:scale-105 transition-all shadow-xl shadow-blue-600/30 flex items-center gap-2"
                            >
                                Start Learning
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>

                        <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-gray-400">
                            <div className="flex items-center gap-2">
                                <Zap className="w-5 h-5 text-yellow-400" />
                                <span>Fast-track Learning</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Sparkles className="w-5 h-5 text-purple-400" />
                                <span>Certified Content</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Visual Content */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative w-full aspect-square max-w-[600px] mx-auto">
                            {/* Main Floating Card */}
                            <motion.div 
                                animate={{ y: [-20, 20, -20] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-[3rem] border border-white/10 backdrop-blur-xl p-8"
                            >
                                <div className="h-full w-full rounded-[2rem] bg-[#0f172a]/50 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20" />
                                    
                                    {/* Code Snippet Decoration */}
                                    <div className="p-6 font-mono text-sm space-y-2 opacity-70">
                                        <div className="flex gap-2 mb-4">
                                            <div className="w-3 h-3 rounded-full bg-red-500" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                            <div className="w-3 h-3 rounded-full bg-green-500" />
                                        </div>
                                        <div className="text-purple-400">const <span className="text-blue-400">future</span> = <span className="text-yellow-400">await</span> learn();</div>
                                        <div className="text-gray-400 pl-4">if (skills.level &gt; 9000) {'{'}</div>
                                        <div className="text-green-400 pl-8">return "Success";</div>
                                        <div className="text-gray-400 pl-4">{'}'}</div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating Elements */}
                            <motion.div 
                                animate={{ y: [10, -10, 10], x: [5, -5, 5] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -top-8 -right-8 p-4 rounded-2xl bg-[#1e293b] border border-white/10 shadow-xl flex items-center gap-3"
                            >
                                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400">Speed</p>
                                    <p className="font-bold text-white">10x Faster</p>
                                </div>
                            </motion.div>

                            <motion.div 
                                animate={{ y: [-15, 15, -15], x: [-5, 5, -5] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="absolute -bottom-8 -left-8 p-4 rounded-2xl bg-[#1e293b] border border-white/10 shadow-xl flex items-center gap-3"
                            >
                                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                                    <Sparkles className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400">Quality</p>
                                    <p className="font-bold text-white">Premium</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
