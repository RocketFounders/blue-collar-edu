import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Mission = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const professions = [
    "Электрик нового поколения",
    "Мастер умного дома",
    "Токарь-цифровик",
    "Механик электромобилей",
    "Мастер по ремонту"
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-green rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Почему это <span className="text-neon-green">важно</span>?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              ИИ меняет рынок труда, но <span className="text-neon-green font-semibold">профессии руками остаются</span>.
              Мы обучаем новое поколение мастеров — с технологиями,
              симуляторами и современным подходом к старым профессиям.
            </p>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-900 to-black border border-neon-green/20 rounded-2xl p-8 md:p-12 mb-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-neon-green/5 rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-neon-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Наша миссия</h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Сделать blue-collar профессии привлекательными для поколения Z через
                    геймификацию, AR-симуляторы и современные методы обучения.
                    Работа руками — это круто, технологично и выгодно.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Professions Slider */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <h3 className="text-2xl font-bold text-center mb-8">
              <span className="text-gradient">Профессии будущего</span> — с человеческими руками
            </h3>

            <div className="flex flex-wrap justify-center gap-4">
              {professions.map((profession, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 255, 144, 0.1)' }}
                  className="px-6 py-3 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-full
                           hover:border-neon-green transition-all duration-300 cursor-pointer"
                >
                  <span className="text-gray-300 font-medium">{profession}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Key Points */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid md:grid-cols-3 gap-6 mt-16"
          >
            {[
              { icon: "💡", title: "Технологично", desc: "AR-симуляторы и AI-помощники" },
              { icon: "💰", title: "Выгодно", desc: "Зарплата от 80 000 ₽" },
              { icon: "🚀", title: "Быстрый старт", desc: "6-10 недель обучения" }
            ].map((point, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="text-center p-6 bg-gray-900/30 rounded-xl border border-gray-800 hover:border-neon-green/50 transition-all duration-300"
              >
                <div className="text-4xl mb-3">{point.icon}</div>
                <h4 className="text-lg font-bold mb-2 text-white">{point.title}</h4>
                <p className="text-gray-400">{point.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
