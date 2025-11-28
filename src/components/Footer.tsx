import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';


const Footer = () => {
    return (
        <footer className="bg-[#0f172a] border-t border-white/10 pt-20 pb-10 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                                <span className="text-white font-bold text-xl">B</span>
                            </div>
                            <span className="text-2xl font-bold text-white">Bleep</span>
                        </div>
                        <p className="text-gray-400 mb-6">
                            Empowering the next generation of leaders through world-class education and innovation.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61573822894708" },
                                // { Icon: Twitter, href: "#" },
                                { Icon: Instagram, href: "https://www.instagram.com/bleepeducation" },
                                { Icon: Linkedin, href: "https://www.linkedin.com/company/bleep-education/" }
                            ].map(({ Icon, href }, index) => (
                                <a 
                                    key={index} 
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><a href="https://bleepeducation.in/about-us" className="text-gray-400 hover:text-blue-400 transition-colors">About Us</a></li>
                            <li><a href="https://bleepeducation.in/all-products" className="text-gray-400 hover:text-blue-400 transition-colors">Courses</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Mentorship</a></li>
                            <li><a href="/#testimonials" className="text-gray-400 hover:text-blue-400 transition-colors">Success Stories</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Legal</h4>
                        <ul className="space-y-4">
                            <li><a href="https://bleepeducation.in/privacy-policy" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                            <li><a href="https://bleepeducation.in/terms-condition" className="text-gray-400 hover:text-blue-400 transition-colors">Terms & Conditions</a></li>
                            <li><a href="https://bleepeducation.in/refund-policy" className="text-gray-400 hover:text-blue-400 transition-colors">Refund & Exchange Policy</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-1" />
                                <span>Headquarters: Tripura, Agartala.</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail className="w-5 h-5 text-blue-400 shrink-0" />
                                <span>support@bleepeducation.com</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone className="w-5 h-5 text-blue-400 shrink-0" />
                                <span>+91 8729805215</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 text-center text-gray-500">
                    <p>&copy; 2025 BLEEP EDUCATION LLP. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
