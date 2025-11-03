import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: "🎮",
      title: "Симуляторы и AR-практикумы",
      description: "Тренируйся как в игре. Виртуальная практика перед реальной работой.",
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30"
    },
    {
      icon: "📱",
      title: "Формат TikTok-уроков",
      description: "Короткие видео, чек-листы и челленджи. Учись на ходу.",
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      icon: "🤖",
      title: "AI-наставник HANDY",
      description: "Объясняет ошибки, выдает советы, проверяет твои работы 24/7.",
      color: "from-neon-green/20 to-green-500/20",
      borderColor: "border-neon-green/30"
    },
    {
      icon: "🧑‍🏫",
      title: "Менторы-практики",
      description: "Реальные мастера своего дела курируют твой прогресс.",
      color: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-500/30"
    },
    {
      icon: "💼",
      title: "Портфолио-профиль",
      description: "Фото и видео твоих работ. Покажи, что ты умеешь.",
      color: "from-yellow-500/20 to-orange-500/20",
      borderColor: "border-yellow-500/30"
    },
    {
      icon: "🧩",
      title: "Геймификация",
      description: "Уровни, ачивки, соревнования. Учись играючи.",
      color: "from-pink-500/20 to-purple-500/20",
      borderColor: "border-pink-500/30"
    },
    {
      icon: "🧠",
      title: "Сертификат и сообщество",
      description: "Официальный диплом и доступ в комьюнити профи.",
      color: "from-indigo-500/20 to-blue-500/20",
      borderColor: "border-indigo-500/30"
    },
    {
      icon: "🧰",
      title: "Job Connect",
      description: "Поиск заказов и работодателей прямо на платформе.",
      color: "from-green-500/20 to-teal-500/20",
      borderColor: "border-green-500/30"
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-green rounded-full blur-[200px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[200px]" />
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
            Фишки <span className="text-gradient">HANDS.ON</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Мы объединили геймификацию, современные технологии и практический опыт
            в одной платформе для твоего успеха
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                rotateZ: Math.random() > 0.5 ? 2 : -2
              }}
              className={`group relative bg-gradient-to-br ${feature.color} backdrop-blur-sm
                        border ${feature.borderColor} rounded-2xl p-6
                        hover:shadow-[0_0_30px_rgba(0,255,144,0.2)] transition-all duration-300 cursor-pointer`}
            >
              {/* Feature Icon */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="text-6xl mb-4"
              >
                {feature.icon}
              </motion.div>

              {/* Feature Content */}
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-neon-green transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-neon-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900/50 backdrop-blur-sm border border-neon-green/30 rounded-full">
            <span className="text-neon-green text-lg font-bold">И это только начало!</span>
            <span className="text-2xl">🚀</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
