import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    platform: [
      { name: "Курсы", href: "#courses" },
      { name: "О платформе", href: "#about" },
      { name: "Преподаватели", href: "#mentors" },
      { name: "Блог", href: "#blog" }
    ],
    support: [
      { name: "FAQ", href: "#faq" },
      { name: "Контакты", href: "#contacts" },
      { name: "Поддержка", href: "#support" },
      { name: "Отзывы", href: "#reviews" }
    ],
    legal: [
      { name: "Политика конфиденциальности", href: "#privacy" },
      { name: "Условия использования", href: "#terms" },
      { name: "Договор оферты", href: "#offer" }
    ]
  };

  const socialLinks = [
    { name: "TikTok", icon: "📱", href: "#" },
    { name: "Instagram", icon: "📸", href: "#" },
    { name: "YouTube", icon: "▶️", href: "#" },
    { name: "Telegram", icon: "✈️", href: "#" },
    { name: "VK", icon: "🔵", href: "#" }
  ];

  return (
    <footer className="bg-black border-t border-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 144, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 144, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="text-neon-green text-3xl font-black tracking-wider">HANDS.ON</span>
            </motion.div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Школа современных blue-collar профессий для поколения Z.
              Работай руками, думай как инженер.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center
                           border border-gray-800 hover:border-neon-green hover:bg-neon-green/10
                           transition-all duration-300 text-2xl"
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Платформа</h3>
            <ul className="space-y-3">
              {footerLinks.platform.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-neon-green transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Поддержка</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-neon-green transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Документы</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-neon-green transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-900 pt-8 mb-8">
          <div className="max-w-md">
            <h3 className="text-white font-bold mb-4">Подпишись на новости</h3>
            <p className="text-gray-400 text-sm mb-4">
              Получай информацию о новых курсах, челленджах и акциях
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Твой email"
                className="flex-1 px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-white
                         focus:border-neon-green focus:outline-none focus:ring-2 focus:ring-neon-green/20
                         transition-all duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 text-black font-bold rounded-lg transition-all duration-300"
                style={{
                  backgroundColor: '#00FF90',
                  boxShadow: '0 2px 10px rgba(0, 255, 144, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 255, 144, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 2px 10px rgba(0, 255, 144, 0.3)';
                }}
              >
                OK
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-900 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-sm">
              © {currentYear} HANDS.ON. Все права защищены.
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-500">
              <span>ИНН: 1234567890</span>
              <span>ОГРН: 1234567890123</span>
            </div>
          </div>
        </div>

        {/* Made with love badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-8 text-gray-600 text-sm"
        >
          Сделано с <span className="text-red-500">❤️</span> для будущих мастеров
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
