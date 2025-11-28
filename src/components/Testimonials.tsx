import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
    {
        name: "Alex Johnson",
        role: "Frontend Developer",
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100&h=100",
        content: "The courses here are absolutely top-notch. I went from knowing nothing about React to building full-stack apps in just 3 months."
    },
    {
        name: "Sarah Williams",
        role: "UX Designer",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100",
        content: "The design curriculum is comprehensive and up-to-date. The community support is what really sets this platform apart."
    },
    {
        name: "Michael Chen",
        role: "Data Scientist",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100",
        content: "Excellent content on Data Science. The instructors explain complex concepts in a way that's easy to understand."
    },
    {
        name: "Emily Davis",
        role: "Product Manager",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100",
        content: "Bleep Education helped me bridge the gap between technical and business skills. Highly recommended for PMs!"
    },
    {
        name: "David Kim",
        role: "Backend Engineer",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100",
        content: "The backend architecture courses are deep and practical. I use what I learned here every day at my job."
    },
    {
        name: "Lisa Patel",
        role: "Mobile Developer",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100",
        content: "Flutter and React Native courses are the best I've found. Clear, concise, and project-based learning."
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(1);
    const [isResetting, setIsResetting] = useState(false);

    // Clone testimonials for seamless loop
    // We append the first set to the end
    const extendedTestimonials = [...testimonials, ...testimonials];
    const totalOriginalItems = testimonials.length;

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setItemsPerPage(3);
            } else if (window.innerWidth >= 768) {
                setItemsPerPage(2);
            } else {
                setItemsPerPage(1);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const next = useCallback(() => {
        if (isResetting) return;
        setCurrentIndex((prev) => prev + 1);
    }, [isResetting]);

    const prev = useCallback(() => {
        if (isResetting) return;
        if (currentIndex === 0) {
            setIsResetting(true);
            setCurrentIndex(totalOriginalItems);
            setTimeout(() => {
                setIsResetting(false);
                setCurrentIndex(totalOriginalItems - 1);
            }, 50);
        } else {
            setCurrentIndex((prev) => prev - 1);
        }
    }, [isResetting, currentIndex, totalOriginalItems]);

    // Handle silent reset when reaching the end of the original list
    useEffect(() => {
        if (currentIndex === totalOriginalItems) {
            // Wait for animation to finish (500ms), then snap back to 0
            const timer = setTimeout(() => {
                setIsResetting(true);
                setCurrentIndex(0);
                // Allow a small tick for the state to update without transition
                setTimeout(() => {
                    setIsResetting(false);
                }, 50);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [currentIndex, totalOriginalItems]);

    // Auto-play functionality
    useEffect(() => {
        const timer = setInterval(() => {
            next();
        }, 3000); // Change every 3 seconds

        return () => clearInterval(timer);
    }, [next]);

    return (
        <section id="testimonials" className="py-24 relative z-10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                        Student Success Stories
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Join thousands of students who have transformed their careers with Bleep Education.
                    </p>
                </motion.div>

                <div className="relative px-4 md:px-12">
                    {/* Navigation Buttons */}
                    <button
                        onClick={prev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-slate-800/50 border border-white/10 text-white hover:bg-blue-500/20 transition-all disabled:opacity-50"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={next}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-slate-800/50 border border-white/10 text-white hover:bg-blue-500/20 transition-all disabled:opacity-50"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Carousel Track */}
                    <div className="overflow-hidden">
                        <motion.div
                            className="flex"
                            animate={{
                                x: `-${currentIndex * (100 / itemsPerPage)}%`
                            }}
                            transition={{
                                duration: isResetting ? 0 : 0.5,
                                type: isResetting ? "tween" : "spring",
                                stiffness: 300,
                                damping: 30
                            }}
                        >
                            {extendedTestimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 px-4"
                                    style={{ width: `${100 / itemsPerPage}%` }}
                                >
                                    <div className="h-full relative p-8 rounded-3xl bg-slate-800/30 border border-white/5 hover:border-blue-500/30 transition-all duration-300 group">
                                        <Quote className="absolute top-8 right-8 w-12 h-12 text-white/5 group-hover:text-blue-500/10 transition-colors" />

                                        <div className="flex items-center gap-4 mb-6">
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="w-14 h-14 rounded-full border-2 border-blue-500/20"
                                            />
                                            <div>
                                                <h4 className="font-bold text-white">{testimonial.name}</h4>
                                                <p className="text-sm text-blue-400">{testimonial.role}</p>
                                            </div>
                                        </div>

                                        <div className="flex gap-1 mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                            ))}
                                        </div>

                                        <p className="text-gray-300 leading-relaxed">
                                            "{testimonial.content}"
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Dots Pagination - Only show dots for original items */}
                <div className="flex justify-center gap-2 mt-8">
                    {Array.from({ length: Math.ceil(totalOriginalItems / itemsPerPage) }).map((_, index) => {
                        // Calculate active dot based on currentIndex
                        // This is a bit tricky with sliding window, but let's approximate
                        // If we are at index 0, dot 0. Index 3 (if 3 per page), dot 1?
                        // Actually, standard carousels usually have 1 dot per PAGE or 1 dot per ITEM.
                        // Given the design, let's do 1 dot per ITEM or just hide dots if it's too many.
                        // The original design had dots.
                        // Let's map currentIndex % totalOriginalItems to the dot.

                        // Simplified: Just show dots for the first N items?
                        // Let's show one dot per "page" roughly, or just one dot per item if not too many.
                        // We have 6 items. 6 dots is fine.

                        const isActive = (currentIndex % totalOriginalItems) === index;

                        return (
                            <button
                                key={index}
                                onClick={() => {
                                    setIsResetting(false);
                                    setCurrentIndex(index);
                                }}
                                className={`w-2 h-2 rounded-full transition-all ${isActive ? 'bg-blue-500 w-6' : 'bg-slate-600 hover:bg-slate-500'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
