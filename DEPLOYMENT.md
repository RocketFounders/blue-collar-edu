# 🚀 Руководство по деплою HANDS.ON

## Быстрые способы деплоя

### 1. Vercel (⚡ САМЫЙ БЫСТРЫЙ - рекомендую!)

**Способ A: Через CLI (2 минуты)**

```bash
# Установите Vercel CLI
npm install -g vercel

# Войдите в аккаунт
vercel login

# Деплой в production
vercel --prod
```

**Способ B: Через GitHub (автоматический)**

1. Зайдите на [vercel.com](https://vercel.com)
2. Нажмите "Import Project"
3. Подключите GitHub и выберите репозиторий `blue-collar-edu`
4. Vercel автоматически определит настройки:
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Нажмите "Deploy"
6. Готово! Получите URL: `https://hands-on-landing.vercel.app`

**Результат:**
- ✅ Автоматический деплой при каждом push
- ✅ Превью для каждого PR
- ✅ HTTPS и CDN
- ✅ Бесплатно навсегда

---

### 2. Netlify (🎯 Тоже очень быстро)

**Способ A: Drag & Drop (30 секунд!)**

```bash
# Соберите проект
npm run build

# Перейдите на https://app.netlify.com/drop
# Перетащите папку dist/ на страницу
# Готово!
```

**Способ B: Через CLI**

```bash
# Установите CLI
npm install -g netlify-cli

# Войдите
netlify login

# Деплой
npm run build
netlify deploy --prod --dir=dist
```

**Результат:**
- ✅ Мгновенный деплой
- ✅ Формы без бэкенда
- ✅ Serverless функции
- ✅ Бесплатно

---

### 3. GitHub Pages (📄 100% бесплатно)

**Настройка (один раз):**

1. Зайдите в Settings репозитория → Pages
2. Source: выберите "GitHub Actions"
3. Готово!

**Автоматический деплой уже настроен!**

GitHub Action автоматически задеплоит при каждом push в `main`.

URL будет: `https://rocketfounders.github.io/blue-collar-edu/`

**Если нужен custom URL:**

```js
// vite.config.js
export default defineConfig({
  plugins: [react()],
  base: '/blue-collar-edu/', // Только для GitHub Pages
})
```

---

### 4. Cloudflare Pages (⚡ Очень быстро)

1. Зайдите на [pages.cloudflare.com](https://pages.cloudflare.com)
2. Подключите GitHub
3. Настройки:
   - Build command: `npm run build`
   - Build output: `dist`
4. Deploy!

**Результат:**
- ✅ Самый быстрый CDN в мире
- ✅ Unlimited bandwidth
- ✅ Бесплатно

---

## 📊 Сравнение вариантов

| Платформа | Скорость | Сложность | Лучше для |
|-----------|----------|-----------|-----------|
| **Vercel** | ⚡⚡⚡ | 🟢 Легко | Production, команды |
| **Netlify** | ⚡⚡⚡ | 🟢 Легко | Формы, serverless |
| **GitHub Pages** | ⚡⚡ | 🟡 Средне | Open source, бесплатно |
| **Cloudflare** | ⚡⚡⚡ | 🟢 Легко | Максимальная скорость |

---

## 🎯 Мой рекомендуемый выбор:

### Для продакшена: **Vercel**
- Лучшая DX (developer experience)
- Автоматические превью
- Аналитика из коробки

### Для демо/портфолио: **Netlify Drag & Drop**
- Буквально 30 секунд
- Не нужен аккаунт для первого деплоя

### Для open source: **GitHub Pages**
- Всё в одном месте с кодом
- Полностью бесплатно

---

## 🔧 Настройка окружений

### Environment Variables (если понадобятся)

Создайте `.env` файл:

```env
VITE_API_URL=https://api.hands-on.ru
VITE_ANALYTICS_ID=your-id
```

**В Vercel/Netlify:**
- Settings → Environment Variables
- Добавьте переменные

---

## 🌐 Custom Domain

### Vercel:
1. Settings → Domains
2. Добавьте `hands-on.ru`
3. Настройте DNS записи

### Netlify:
1. Domain settings → Add custom domain
2. Следуйте инструкциям

---

## 🚀 Готовые команды для деплоя

```bash
# Vercel
vercel --prod

# Netlify
npm run build && netlify deploy --prod --dir=dist

# Локальный превью production билда
npm run build && npm run preview
```

---

## 📝 Чеклист перед деплоем

- ✅ `npm run build` работает без ошибок
- ✅ Проверен в `npm run preview`
- ✅ Все изображения оптимизированы
- ✅ Убраны console.log
- ✅ Настроены meta-теги для SEO
- ✅ Добавлен favicon

---

**Удачного деплоя! 🎉**
