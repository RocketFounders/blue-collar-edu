import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      number: "01",
      icon: "🎯",
      title: "Выбери курс",
      description: "Пройди квиз или выбери профессию из каталога. Определи свой путь к успеху.",
      features: ["Профориентация", "Пробный урок", "Гарантия возврата"]
    },
    {
      number: "02",
      icon: "🎮",
      title: "Учись в игре",
      description: "AR-симуляторы, TikTok-формат, челленджи и AI-наставник. Учеба, которая затягивает.",
      features: ["AR-практикумы", "Короткие уроки", "Геймификация"]
    },
    {
      number: "03",
      icon: "💰",
      title: "Заработай первый заказ",
      description: "Портфолио готово, навыки прокачаны. Job Connect поможет найти клиентов.",
      features: ["Реальные проекты", "Поиск заказов", "Сертификат"]
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-green rounded-full blur-[200px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Как это <span className="text-gradient">работает</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Три простых шага от новичка до профи. Без воды, только практика.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-neon-green via-purple-500 to-neon-green opacity-20 transform -translate-y-1/2" />

            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Step Card */}
                  <motion.div
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-2xl p-8
                             hover:border-neon-green/50 transition-all duration-300 h-full relative overflow-hidden group"
                  >
                    {/* Step Number Badge */}
                    <div className="absolute top-4 right-4 w-16 h-16 bg-neon-green/10 rounded-full flex items-center justify-center
                                  border-2 border-neon-green/30 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-neon-green font-black text-xl">{step.number}</span>
                    </div>

                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      className="text-7xl mb-6"
                    >
                      {step.icon}
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-black mb-4 group-hover:text-neon-green transition-colors duration-300">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2">
                      {step.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                          <svg className="w-5 h-5 text-neon-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neon-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
                  </motion.div>

                  {/* Connection Arrow (Desktop) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20">
                      <motion.div
                        animate={{
                          x: [0, 5, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="text-neon-green text-3xl"
                      >
                        →
                      </motion.div>
                    </div>
                  )}

                  {/* Connection Arrow (Mobile) */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex justify-center my-4">
                      <motion.div
                        animate={{
                          y: [0, 5, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="text-neon-green text-3xl rotate-90"
                      >
                        →
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-center mt-16"
          >
            <p className="text-gray-400 mb-6 text-lg">
              Готов начать свой путь?
            </p>
            <button className="px-10 py-5 bg-neon-green text-black font-black text-lg rounded-lg
                             hover:scale-105 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,255,144,0.6)]">
              Начать обучение сейчас
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
