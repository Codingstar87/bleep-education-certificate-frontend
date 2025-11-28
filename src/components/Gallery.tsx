import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import type { MouseEvent } from 'react';
import { Link } from 'react-router-dom';

// Import all images dynamically
const images = import.meta.glob('../assets/*.png', { eager: true });

// Filter out the background image and sort numerically
const galleryImages = Object.entries(images)
    .filter(([path]) => !path.includes('Desktop Background'))
    .map(([path, module]: [string, any]) => ({
        src: module.default,
        id: path.split('/').pop()?.split('.')[0]
    }))
    .sort((a, b) => {
        const numA = parseInt(a.id || '0');
        const numB = parseInt(b.id || '0');
        return numA - numB;
    });

// Duplicate images for seamless loop
const marqueeImages = [...galleryImages, ...galleryImages];

const Card = ({ image }: { image: any }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXFromCenter = e.clientX - rect.left - width / 2;
        const mouseYFromCenter = e.clientY - rect.top - height / 2;
        x.set(mouseXFromCenter / width);
        y.set(mouseYFromCenter / height);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div className="group relative flex-shrink-0 perspective-1000">
            <motion.div
                className="relative w-[85vw] md:w-[380px] h-[240px] rounded-3xl bg-slate-800 border border-white/10 z-20"
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                    borderRadius: "24px"
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                whileHover={{
                    scale: 1.05,
                    zIndex: 50,
                    boxShadow: "0 20px 50px rgba(59, 130, 246, 0.5)"
                }}
            >
                {/* Neon Glow Background */}
                <div
                    className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-500"
                    style={{ transform: "translateZ(-10px)" }}
                />

                <div
                    className="relative w-full h-full rounded-3xl overflow-hidden bg-slate-900"
                    style={{ transform: "translateZ(0px)" }}
                >
                    <img
                        src={image.src}
                        alt={`Course ${image.id}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-between p-6">
                        {/* Top Badges */}
                        <div
                            className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{ transform: "translateZ(20px)" }}
                        >
                            <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-blue-500 text-white rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                                Premium
                            </span>
                            <span className="text-white text-xs font-bold bg-black/50 px-2 py-1 rounded-full backdrop-blur-sm">4.9 ★</span>
                        </div>

                        {/* Center Button */}
                        <div
                            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100"
                            style={{ transform: "translateZ(30px)" }}
                        >
                            <a
                                href="https://bleepeducation.in/all-products"
                                className="px-6 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/40 text-white text-sm font-bold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] flex items-center gap-2"
                            >
                                View Course
                                <span>→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>

    {/* Reflection Effect */ }
    < div className = "absolute top-full left-0 right-0 h-[240px] opacity-30 pointer-events-none transform scale-y-[-1] origin-top mask-gradient z-10 mt-4 blur-[2px] transition-opacity duration-300 group-hover:opacity-10" >
                <img
                    src={image.src}
                    alt=""
                    className="w-full h-full object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
            </div >
        </div >
    );
};

const Gallery = () => {
    return (
        <section className="py-24 bg-slate-900 overflow-hidden relative z-20">
            <div className="mb-16 text-center px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]"
                >
                    Our Courses
                </motion.h2>
                <p className="text-gray-400 text-xl max-w-2xl mx-auto">
                    Experience learning in a new dimension.
                </p>
            </div>

            <div className="relative w-full overflow-hidden py-10">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-slate-900 to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-slate-900 to-transparent pointer-events-none" />

                <div className="flex gap-12 w-max animate-marquee hover-pause px-10">
                    {marqueeImages.map((image, index) => (
                        <Card key={`${image.id}-${index}`} image={image} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
