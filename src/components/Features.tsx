import { motion } from 'framer-motion';
import { BookOpen, Users, Trophy, Zap } from 'lucide-react';

const features = [
    {
        icon: <BookOpen className="w-8 h-8 text-blue-400" />,
        title: "Comprehensive Curriculum",
        description: "Access a wide range of courses designed by industry experts."
    },
    {
        icon: <Users className="w-8 h-8 text-purple-400" />,
        title: "Community Driven",
        description: "Connect with learners worldwide and share your journey."
    },
    {
        icon: <Trophy className="w-8 h-8 text-yellow-400" />,
        title: "Gamified Learning",
        description: "Earn badges and certificates as you progress."
    },
    {
        icon: <Zap className="w-8 h-8 text-cyan-400" />,
        title: "Instant Feedback",
        description: "Get real-time assessment on your assignments and quizzes."
    }
];

const Features = () => {
    return (
        <section className="py-24 px-4 relative z-10">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                        Why Choose Us?
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        We provide a comprehensive learning ecosystem designed to help you succeed in the digital age.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative group p-8 rounded-3xl overflow-hidden bg-slate-800/40 border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="mb-6 p-4 bg-slate-800/50 rounded-2xl w-fit group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300 border border-white/5 group-hover:border-blue-500/30">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors">{feature.title}</h3>
                                <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
