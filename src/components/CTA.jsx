import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', phone: '' });
  };

  return (
    <section ref={ref} className="py-24 bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="w-full h-full border-2 border-neon-green/20 rounded-full"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]">
            <motion.div
              animate={{
                rotate: -360,
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
              className="w-full h-full border-2 border-purple-500/20 rounded-full"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gray-900 via-black to-gray-900 border-2 border-neon-green/30 rounded-3xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Side - Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                    Хочешь <span className="text-gradient">попробовать</span>?
                  </h2>
                  <p className="text-xl text-gray-300 mb-8">
                    Получи доступ к бесплатному 3-дневному интенсиву
                    <span className="text-neon-green font-bold"> "Сделай розетку за 15 минут"</span>
                  </p>

                  {/* Benefits */}
                  <ul className="space-y-4 mb-8">
                    {[
                      "AR-симулятор электромонтажа",
                      "Личный AI-наставник HANDY",
                      "Доступ к комьюнити мастеров",
                      "Сертификат о прохождении"
                    ].map((benefit, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        className="flex items-center gap-3 text-gray-300"
                      >
                        <div className="w-6 h-6 bg-neon-green/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-neon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        {benefit}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Trust Indicators */}
                  <div className="flex items-center gap-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🔒</span>
                      <span>Безопасно</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">✉️</span>
                      <span>Без спама</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Side - Form */}
              <div className="bg-gradient-to-br from-neon-green/10 to-purple-500/10 p-8 md:p-12 flex items-center">
                <motion.form
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  onSubmit={handleSubmit}
                  className="w-full space-y-6"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-300 mb-2">
                      Твое имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white
                               focus:border-neon-green focus:outline-none focus:ring-2 focus:ring-neon-green/20
                               transition-all duration-300"
                      placeholder="Иван Иванов"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white
                               focus:border-neon-green focus:outline-none focus:ring-2 focus:ring-neon-green/20
                               transition-all duration-300"
                      placeholder="ivan@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-300 mb-2">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white
                               focus:border-neon-green focus:outline-none focus:ring-2 focus:ring-neon-green/20
                               transition-all duration-300"
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 text-black font-black text-lg rounded-lg transition-all duration-300"
                    style={{
                      backgroundColor: '#00FF90',
                      boxShadow: '0 4px 20px rgba(0, 255, 144, 0.4)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 0 40px rgba(0, 255, 144, 0.7)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 255, 144, 0.4)';
                    }}
                  >
                    Получить бесплатный доступ
                  </motion.button>

                  <p className="text-xs text-gray-500 text-center">
                    Нажимая кнопку, вы соглашаетесь с{' '}
                    <a href="#" className="text-neon-green hover:underline">политикой конфиденциальности</a>
                  </p>
                </motion.form>
              </div>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-400 mb-4">
              Уже более <span className="text-neon-green font-bold">500 студентов</span> начали свой путь с нами
            </p>
            <div className="flex justify-center gap-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-500 text-2xl">⭐</span>
              ))}
              <span className="text-gray-400 ml-2">4.9/5 на основе 200+ отзывов</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
