import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Courses = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const courses = [
    {
      id: 1,
      title: "Мастер по ремонту: финишные работы",
      description: "Навык шпаклевки, поклейки обоев, укладки плитки и ламината",
      duration: "6-10 недель",
      price: "от 15 000 ₽",
      icon: "🛠️",
      level: "Начальный",
      tags: ["Шпаклевка", "Плитка", "Ламинат"]
    },
    {
      id: 2,
      title: "Электрик нового поколения",
      description: "Монтаж проводки, электробезопасность, IoT и умный дом",
      duration: "8 недель",
      price: "от 20 000 ₽",
      icon: "⚡",
      level: "Средний",
      tags: ["Проводка", "IoT", "Умный дом"]
    },
    {
      id: 3,
      title: "Токарь-цифровик (CNC & металл)",
      description: "Симуляторы станков, программирование G-кода, CAM-системы",
      duration: "10 недель",
      price: "от 25 000 ₽",
      icon: "⚙️",
      level: "Продвинутый",
      tags: ["CNC", "G-код", "CAM"]
    },
    {
      id: 4,
      title: "Механик электромобилей",
      description: "Работа с EV-системами, батареями, диагностика электромобилей",
      duration: "8 недель",
      price: "от 30 000 ₽",
      icon: "🔋",
      level: "Средний",
      tags: ["EV", "Батареи", "Диагностика"]
    },
    {
      id: 5,
      title: "Мастер по кондиционерам и вентиляции",
      description: "Установка, обслуживание и диагностика климатических систем",
      duration: "6 недель",
      price: "от 20 000 ₽",
      icon: "❄️",
      level: "Начальный",
      tags: ["Монтаж", "Сервис", "Диагностика"]
    },
    {
      id: 6,
      title: "Мастер \"Умный дом своими руками\"",
      description: "Сенсоры, автоматизация освещения, системы безопасности",
      duration: "8 недель",
      price: "от 25 000 ₽",
      icon: "🏠",
      level: "Средний",
      tags: ["Автоматизация", "Сенсоры", "Безопасность"]
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 50px,
              rgba(0, 255, 144, 0.1) 50px,
              rgba(0, 255, 144, 0.1) 51px
            )
          `
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
            Каталог <span className="text-gradient">курсов</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Выбери профессию, которая тебя зажигает. Учись с симуляторами,
            менторами и AI-помощником.
          </p>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl overflow-hidden
                       hover:border-neon-green/50 transition-all duration-300 cursor-pointer"
            >
              {/* Course Header */}
              <div className="p-6 border-b border-gray-800 bg-gray-900/50">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-5xl">{course.icon}</div>
                  <span className="px-3 py-1 bg-neon-green/10 text-neon-green text-xs font-bold rounded-full border border-neon-green/30">
                    {course.level}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-neon-green transition-colors duration-300">
                  {course.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {course.description}
                </p>
              </div>

              {/* Course Tags */}
              <div className="px-6 py-4 flex flex-wrap gap-2">
                {course.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full border border-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Course Details */}
              <div className="px-6 py-4 border-t border-gray-800">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {course.duration}
                  </div>
                  <div className="text-neon-green font-bold text-lg">
                    {course.price}
                  </div>
                </div>

                <button
                  className="w-full py-3 font-bold rounded-lg border transition-all duration-300"
                  style={{
                    backgroundColor: 'rgba(0, 255, 144, 0.1)',
                    borderColor: 'rgba(0, 255, 144, 0.3)',
                    color: '#00FF90'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#00FF90';
                    e.currentTarget.style.color = '#000';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 255, 144, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(0, 255, 144, 0.1)';
                    e.currentTarget.style.color = '#00FF90';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  Подробнее
                </button>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neon-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Не знаешь, какой курс выбрать?
          </p>
          <button
            className="px-8 py-4 bg-transparent text-white font-bold text-lg rounded-lg border-2 transition-all duration-300"
            style={{ borderColor: '#00FF90' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#00FF90';
              e.currentTarget.style.color = '#000';
              e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 255, 144, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Пройди тест на профориентацию
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Courses;
