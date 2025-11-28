import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, CheckCircle, Loader2, User, Phone, Download, Share2, Sparkles, X } from 'lucide-react';

interface CertificateProps {
  onClose?: () => void;
  isModal?: boolean;
}

function Certificate({ onClose, isModal = false }: CertificateProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Mock API call
    await new Promise(resolve => setTimeout(resolve, 2500));

    setIsLoading(false);
    setShowSuccess(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className={`${isModal ? 'w-full max-w-2xl mx-auto' : 'min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative flex items-center justify-center overflow-hidden'}`}>
      {/* Background Elements - Only show if NOT modal */}
      {!isModal && (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
      )}

      <div className="w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-xl p-1 rounded-3xl border border-white/10 shadow-2xl"
        >
          <div className="bg-[#0f172a]/90 backdrop-blur-md rounded-[22px] p-8 relative overflow-hidden">
            {/* Decorative Top Bar */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

            {/* Close Button for Modal */}
            {isModal && onClose && (
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors z-20"
              >
                <X className="w-5 h-5" />
              </button>
            )}

            <AnimatePresence mode="wait">
              {!showSuccess ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                      className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/5 shadow-inner"
                    >
                      <Award className="w-10 h-10 text-blue-400" />
                    </motion.div>
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-3">
                      Claim Your Certificate
                    </h1>
                    <p className="text-gray-400">
                      Enter your details below to generate your verified certificate of completion.
                    </p>
                  </div>

                  <div className="space-y-5">
                    {[
                      { icon: User, name: 'name', placeholder: 'Full Name', delay: 0.3, type: 'text' },
                      { icon: Phone, name: 'phone', placeholder: 'Phone Number', delay: 0.4, type: 'tel' }
                    ].map((field, index) => (
                      <motion.div
                        key={field.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: field.delay }}
                        className="relative group"
                      >
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <field.icon className="h-5 w-5 text-gray-500 group-focus-within:text-blue-400 transition-colors duration-300" />
                        </div>
                        <input
                          type={field.type}
                          name={field.name}
                          required
                          placeholder={field.placeholder}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={handleChange}
                          className="block w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent focus:bg-white/10 transition-all duration-300"
                        />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500 -z-10 blur-md" />
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    type="submit"
                    disabled={isLoading}
                    className="w-full relative group overflow-hidden rounded-xl p-[1px]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300" />
                    <div className="relative bg-[#0f172a] group-hover:bg-transparent transition-colors duration-300 rounded-[11px] py-4 px-6 flex items-center justify-center gap-3">
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin text-white" />
                          <span className="text-white font-medium">Processing...</span>
                        </>
                      ) : (
                      <>
                          <span className="text-white font-medium group-hover:scale-105 transition-transform">Get Certificate</span>
                          <Sparkles className="w-5 h-5 text-yellow-400 group-hover:rotate-12 transition-transform" />
                        </>
                      )}
                    </div>
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", duration: 0.6 }}
                  className="text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/20 relative"
                  >
                    <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping opacity-20" />
                    <CheckCircle className="w-12 h-12 text-green-400" />
                  </motion.div>

                  <h2 className="text-3xl font-bold text-white mb-2">Success!</h2>
                  <p className="text-gray-400 mb-8">
                    Thank you, <span className="text-blue-400 font-semibold">{formData.name}</span>! We have received your details.
                  </p>

                  {/* Certificate Preview Card - Simplified or Removed since we don't have course info anymore */}
                  <div className="bg-white text-black p-6 rounded-lg shadow-xl mb-8 transform rotate-1 hover:rotate-0 transition-transform duration-500 border-4 border-double border-gray-200">
                    <div className="border-2 border-gray-900 p-4 h-full flex flex-col items-center justify-center text-center space-y-2">
                      <Award className="w-8 h-8 text-blue-600 mb-2" />
                      <h3 className="font-serif text-xl font-bold text-gray-900">Certificate of Completion</h3>
                      <p className="text-xs text-gray-500 uppercase tracking-widest">Presented to</p>
                      <p className="font-script text-2xl text-blue-700 font-bold py-2 border-b border-gray-300 w-full">{formData.name}</p>
                      <div className="flex justify-between w-full text-[10px] text-gray-500 mt-4 pt-4 border-t border-gray-200">
                        <span>{new Date().toLocaleDateString()}</span>
                        <span>Bleep Education</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button className="flex-1 bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20">
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                    <button className="flex-1 bg-white/5 hover:bg-white/10 text-white py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2 border border-white/10">
                      <Share2 className="w-4 h-4" />
                      Share
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      setShowSuccess(false);
                      setFormData({ name: '', phone: '' });
                    }}
                    className="mt-6 text-sm text-gray-500 hover:text-white transition-colors"
                  >
                    Submit Another Response
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Certificate;
