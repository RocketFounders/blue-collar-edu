import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Community = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: "500+", label: "Активных студентов", icon: "👥" },
    { number: "1200+", label: "Завершенных проектов", icon: "✅" },
    { number: "95%", label: "Довольных выпускников", icon: "⭐" },
    { number: "50+", label: "Партнеров-работодателей", icon: "🤝" }
  ];

  const challenges = [
    {
      title: "Кто шпаклюет ровнее?",
      participants: 156,
      prize: "Профессиональный шпатель",
      deadline: "3 дня"
    },
    {
      title: "Монтаж розетки за 15 минут",
      participants: 89,
      prize: "Мультиметр Fluke",
      deadline: "5 дней"
    },
    {
      title: "Идеальная сварка TIG",
      participants: 67,
      prize: "Защитная маска",
      deadline: "7 дней"
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-black relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 144, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 144, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Комьюнити и <span className="text-gradient">челленджи</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Учись не в одиночку. Соревнуйся, делись опытом и расти вместе с другими мастерами
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl
                       hover:border-neon-green/50 transition-all duration-300"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-black text-neon-green mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Active Challenges */}
        <div className="max-w-5xl mx-auto">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-3xl font-bold mb-8 text-center"
          >
            Активные <span className="text-neon-green">челленджи</span>
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6
                         hover:border-neon-green/50 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-2xl">🏆</span>
                  <span className="px-3 py-1 bg-neon-green/10 text-neon-green text-xs font-bold rounded-full">
                    {challenge.deadline}
                  </span>
                </div>

                <h4 className="text-lg font-bold mb-3 group-hover:text-neon-green transition-colors duration-300">
                  {challenge.title}
                </h4>

                <div className="space-y-2 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-2">
                    <span>👥</span>
                    <span>{challenge.participants} участников</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>🎁</span>
                    <span className="text-neon-green">{challenge.prize}</span>
                  </div>
                </div>

                <button
                  className="w-full py-2 bg-gray-800 text-white font-bold rounded-lg transition-all duration-300"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#00FF90';
                    e.currentTarget.style.color = '#000';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#1f2937';
                    e.currentTarget.style.color = '#fff';
                  }}
                >
                  Участвовать
                </button>
              </motion.div>
            ))}
          </div>

          {/* Community Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
            className="bg-gradient-to-br from-gray-900 to-black border border-neon-green/30 rounded-2xl p-8 md:p-12"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">
              Что говорят наши <span className="text-neon-green">студенты</span>?
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  quote: "Я делал ремонт сам — теперь работаю мастером и зарабатываю 120к!",
                  author: "Максим, 22 года",
                  course: "Мастер по ремонту"
                },
                {
                  quote: "AR-симуляторы — это космос! Как в игре, только реально полезно.",
                  author: "Анна, 19 лет",
                  course: "Электрик"
                },
                {
                  quote: "Менторы объясняют так, что понятно даже мне. Уже работаю на себя!",
                  author: "Дмитрий, 24 года",
                  course: "Токарь-цифровик"
                },
                {
                  quote: "Job Connect помог найти первых клиентов еще во время обучения!",
                  author: "Елена, 21 год",
                  course: "Умный дом"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-neon-green/30 transition-all duration-300"
                >
                  <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-white">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.course}</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-500">⭐</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Community;
