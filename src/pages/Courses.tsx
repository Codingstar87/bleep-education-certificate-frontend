import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Clock, Star, Users, ArrowRight, Sparkles, Zap } from 'lucide-react';

// Import local assets
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.png';

const courses = [
    {
        id: 1,
        title: 'Full Stack Web Development',
        description: 'Master the MERN stack and build modern web applications from scratch.',
        duration: '6 Months',
        students: '1.2k+',
        rating: 4.8,
        image: img1,
        tags: ['React', 'Node.js', 'MongoDB'],
        color: 'from-blue-500 to-cyan-500'
    },
    {
        id: 2,
        title: 'Data Science Fundamentals',
        description: 'Learn Python, Pandas, and Machine Learning basics to analyze complex data.',
        duration: '4 Months',
        students: '850+',
        rating: 4.7,
        image: img2,
        tags: ['Python', 'ML', 'Data Analysis'],
        color: 'from-purple-500 to-pink-500'
    },
    {
        id: 3,
        title: 'UI/UX Design Mastery',
        description: 'Create stunning user interfaces and exceptional user experiences.',
        duration: '3 Months',
        students: '2k+',
        rating: 4.9,
        image: img3,
        tags: ['Figma', 'Design Systems', 'Prototyping'],
        color: 'from-orange-500 to-red-500'
    },
    {
        id: 4,
        title: 'Mobile App Development',
        description: 'Build native mobile apps for iOS and Android using React Native.',
        duration: '5 Months',
        students: '900+',
        rating: 4.6,
        image: img4,
        tags: ['React Native', 'Mobile', 'iOS/Android'],
        color: 'from-green-500 to-emerald-500'
    },
    {
        id: 5,
        title: 'Cloud Computing with AWS',
        description: 'Deploy and manage scalable applications on Amazon Web Services.',
        duration: '4 Months',
        students: '750+',
        rating: 4.8,
        image: img5,
        tags: ['AWS', 'Cloud', 'DevOps'],
        color: 'from-yellow-500 to-orange-500'
    },
    {
        id: 6,
        title: 'Cybersecurity Essentials',
        description: 'Protect systems and networks from digital attacks and security breaches.',
        duration: '5 Months',
        students: '600+',
        rating: 4.9,
        image: img6,
        tags: ['Security', 'Ethical Hacking', 'Network'],
        color: 'from-red-500 to-rose-600'
    }
];

function Courses() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] animate-pulse delay-1000" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
                    >
                        <Sparkles className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm font-medium text-blue-200">Premium Learning Content</span>
                    </motion.div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-gray-400">
                            Explore Our
                        </span>{' '}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                            Courses
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Unlock your potential with our industry-leading courses designed to help you master new skills and advance your career.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course, index) => (
                        <motion.div
                            key={course.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative h-full cursor-pointer"
                            onClick={() => navigate(`/courses/${course.id}`)}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                            <div className="h-full bg-[#1e293b]/80 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden hover:border-blue-500/30 transition-all duration-300 flex flex-col">
                                {/* Image Section */}
                                <div className="relative h-56 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b] via-transparent to-transparent z-10" />
                                    <motion.img
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.6 }}
                                        src={course.image}
                                        alt={course.title}
                                        className="w-full h-full object-cover"
                                    />

                                    {/* Floating Badge */}
                                    <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/10 shadow-lg">
                                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                        <span className="text-sm font-bold text-white">{course.rating}</span>
                                    </div>

                                    {/* Category Badge */}
                                    <div className={`absolute top-4 left-4 z-20 px-3 py-1.5 rounded-full bg-gradient-to-r ${course.color} shadow-lg`}>
                                        <span className="text-xs font-bold text-white uppercase tracking-wider">Bestseller</span>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {course.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-xs font-medium px-2.5 py-1 rounded-md bg-white/5 text-gray-300 border border-white/5"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                                        {course.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-6 line-clamp-2 flex-1">
                                        {course.description}
                                    </p>

                                    <div className="mt-auto pt-6 border-t border-white/5">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                                <Clock className="w-4 h-4 text-blue-400" />
                                                <span>{course.duration}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                                <Users className="w-4 h-4 text-purple-400" />
                                                <span>{course.students}</span>
                                            </div>
                                        </div>

                                        <button className="w-full py-3 rounded-xl bg-white/5 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-500 border border-white/10 hover:border-transparent text-white font-medium transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                                            <span>Enroll Now</span>
                                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Courses;
