import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Clock, BookOpen, CheckCircle, ArrowLeft, Play, Globe } from 'lucide-react';
import { useState } from 'react';

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data - in a real app, fetch based on ID
  const course = {
    id: id,
    title: "Advanced Web Development Masterclass",
    description: "Master modern web development with React, Node.js, and Cloud Architecture. Build production-ready applications from scratch.",
    rating: 4.9,
    students: 12500,
    duration: "12 Weeks",
    lessons: 145,
    price: "$99.99",
    originalPrice: "$199.99",
    instructor: {
      name: "Sarah Johnson",
      role: "Senior Software Engineer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
    },
    features: [
      "Build 5 Real-world Projects",
      "1-on-1 Mentorship Support",
      "Job Placement Assistance",
      "Lifetime Access to Materials",
      "Certificate of Completion"
    ],
    syllabus: [
      { week: "Week 1-2", title: "Advanced React Patterns", topics: ["Hooks in Depth", "Performance Optimization", "State Management"] },
      { week: "Week 3-4", title: "Backend Mastery", topics: ["Node.js Architecture", "Database Design", "API Security"] },
      { week: "Week 5-6", title: "Cloud & DevOps", topics: ["AWS Fundamentals", "CI/CD Pipelines", "Docker & Kubernetes"] }
    ]
  };

  return (
    <div className="min-h-screen bg-[#0f172a] pb-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]" />
      </div>

      {/* Navigation Bar Placeholder (if needed, or just back button) */}
      <div className="relative z-20 pt-4 md:pt-8 px-4 max-w-7xl mx-auto">
        <button
          onClick={() => navigate('/courses')}
          className="flex items-center justify-center text-gray-400 hover:text-white transition-colors group p-2 md:p-3 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/5"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Hero Section */}
      <div className="relative pt-12 pb-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap items-center gap-4 mb-6"
            >
              <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-sm font-bold border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                Bestseller
              </span>
              <div className="flex items-center gap-1.5 text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full border border-yellow-400/10">
                <Star className="w-4 h-4 fill-current" />
                <span className="font-bold">{course.rating}</span>
                <span className="text-yellow-200/60 text-sm">({course.students.toLocaleString()} students)</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight"
            >
              {course.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl"
            >
              {course.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-6 text-gray-300 mb-10"
            >
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5">
                <Clock className="w-5 h-5 text-blue-400" />
                <span className="font-medium">{course.duration}</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5">
                <BookOpen className="w-5 h-5 text-purple-400" />
                <span className="font-medium">{course.lessons} Lessons</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5">
                <Globe className="w-5 h-5 text-green-400" />
                <span className="font-medium">English</span>
              </div>
            </motion.div>

            {/* Instructor Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 w-full md:w-fit hover:bg-white/10 transition-colors cursor-pointer group"
            >
              <div className="relative">
                <img src={course.instructor.image} alt={course.instructor.name} className="w-14 h-14 rounded-full object-cover border-2 border-blue-500/30 group-hover:border-blue-500 transition-colors" />
                <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1">
                  <CheckCircle className="w-3 h-3 text-white" />
                </div>
              </div>
              <div>
                <p className="text-sm text-blue-300 font-medium mb-0.5">Created by</p>
                <p className="font-bold text-white text-lg group-hover:text-blue-200 transition-colors">{course.instructor.name}</p>
                <p className="text-sm text-gray-400">{course.instructor.role}</p>
              </div>
            </motion.div>
          </div>

          {/* Desktop Floating Card */}
          <div className="hidden lg:block relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="sticky top-24 p-8 rounded-3xl bg-[#1e293b]/80 backdrop-blur-xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.3)]"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-3xl pointer-events-none" />

              {/* Video Preview Placeholder */}
              <div className="relative aspect-video rounded-xl overflow-hidden mb-6 group cursor-pointer">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors z-10 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-white fill-white ml-1" />
                  </div>
                </div>
                <img src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=400" alt="Preview" className="w-full h-full object-cover" />
              </div>

              <div className="flex items-end gap-3 mb-6">
                <span className="text-4xl font-bold text-white">{course.price}</span>
                <span className="text-xl text-gray-500 line-through mb-1">{course.originalPrice}</span>
                <span className="text-sm text-green-400 font-bold mb-2 ml-auto">50% OFF</span>
              </div>

              <button className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold text-lg shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] mb-4 relative overflow-hidden group">
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10">Enroll Now</span>
              </button>

              <p className="text-center text-sm text-gray-400 mb-8">30-Day Money-Back Guarantee</p>

              <div className="space-y-4">
                <p className="font-bold text-white text-sm uppercase tracking-wider mb-2">This course includes:</p>
                {course.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-gray-300 text-sm group">
                    <div className="p-1 rounded-full bg-green-500/10 group-hover:bg-green-500/20 transition-colors">
                      <CheckCircle className="w-3.5 h-3.5 text-green-400" />
                    </div>
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content Tabs Section */}
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex gap-8 border-b border-white/10 mb-8 overflow-x-auto no-scrollbar">
          {['overview', 'syllabus', 'reviews'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-lg font-medium capitalize transition-all relative whitespace-nowrap ${activeTab === tab ? 'text-blue-400' : 'text-gray-400 hover:text-white'
                }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"
                />
              )}
            </button>
          ))}
        </div>

        <div className="lg:w-2/3 min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeTab === 'overview' && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">What you'll learn</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Master React 18 and Next.js 14",
                      "Build scalable backend systems",
                      "Deploy to AWS and Vercel",
                      "Implement payment gateways",
                      "Advanced TypeScript patterns",
                      "System Design fundamentals"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                        <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/20">
                  <h3 className="text-xl font-bold text-white mb-2">Prerequisites</h3>
                  <p className="text-gray-400">Basic understanding of JavaScript and HTML/CSS is recommended but not required. We start from the basics!</p>
                </div>
              </motion.div>
            )}

            {activeTab === 'syllabus' && (
              <motion.div
                key="syllabus"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                {course.syllabus.map((week, idx) => (
                  <div key={idx} className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all hover:bg-white/[0.07]">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                      <div>
                        <span className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-1 block">{week.week}</span>
                        <h4 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors">{week.title}</h4>
                      </div>
                      <div className="px-3 py-1 rounded-full bg-white/5 text-xs font-medium text-gray-400 border border-white/5">
                        {week.topics.length} Lessons
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {week.topics.map((topic, tIdx) => (
                        <li key={tIdx} className="flex items-center gap-3 text-gray-400 group-hover:text-gray-300 transition-colors">
                          <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                            <Play className="w-3 h-3 text-blue-400 fill-current" />
                          </div>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'reviews' && (
              <motion.div
                key="reviews"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-center py-12"
              >
                <div className="inline-flex p-4 rounded-full bg-white/5 mb-4">
                  <Star className="w-8 h-8 text-yellow-400 fill-current" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">4.9/5 Rating</h3>
                <p className="text-gray-400">Based on 12,500+ student reviews</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-[#0f172a]/95 backdrop-blur-xl border-t border-white/10 lg:hidden z-50 safe-area-bottom">
        <div className="flex items-center justify-between gap-4 max-w-md mx-auto">
          <div>
            <p className="text-xs text-gray-400 line-through">{course.originalPrice}</p>
            <div className="flex items-center gap-2">
              <p className="text-2xl font-bold text-white">{course.price}</p>
              <span className="text-xs font-bold text-green-400 bg-green-400/10 px-2 py-0.5 rounded">-50%</span>
            </div>
          </div>
          <button className="flex-1 py-3.5 rounded-xl bg-blue-600 text-white font-bold shadow-lg shadow-blue-500/25 active:scale-95 transition-transform">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
