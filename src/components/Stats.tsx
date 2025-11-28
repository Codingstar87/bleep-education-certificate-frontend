import { motion } from 'framer-motion';
import { Users, BookOpen, Award, Globe } from 'lucide-react';

const stats = [
    { icon: Users, value: "10k+", label: "Active Students", color: "text-blue-400" },
    { icon: BookOpen, value: "150+", label: "Expert Courses", color: "text-purple-400" },
    { icon: Award, value: "5k+", label: "Certificates Issued", color: "text-yellow-400" },
    { icon: Globe, value: "50+", label: "Countries", color: "text-green-400" }
];

const Stats = () => {
    return (
        <section className="py-20 relative z-10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center group"
                        >
                            <div className="mb-4 inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                                <stat.icon className={`w-8 h-8 ${stat.color}`} />
                            </div>
                            <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
                            <p className="text-gray-400 font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
