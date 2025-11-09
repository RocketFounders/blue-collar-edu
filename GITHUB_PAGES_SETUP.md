# 🚀 Финальная настройка GitHub Pages

## ✅ Что уже сделано:

1. ✅ Создан и настроен проект
2. ✅ Добавлен `base: '/blue-collar-edu/'` в vite.config.js
3. ✅ Создан GitHub Actions workflow для автоматического деплоя
4. ✅ Код запушен в репозиторий

---

## 📋 Что нужно сделать вручную:

### Шаг 1: Включить GitHub Pages

1. Перейдите в репозиторий на GitHub:
   ```
   https://github.com/RocketFounders/blue-collar-edu
   ```

2. Откройте **Settings** → **Pages** (слева в меню)

3. В разделе **Source** выберите:
   - **Source**: `GitHub Actions`

4. Нажмите **Save**

### Шаг 2: Дождаться деплоя

1. Перейдите на вкладку **Actions**:
   ```
   https://github.com/RocketFounders/blue-collar-edu/actions
   ```

2. Вы увидите запущенный workflow:
   - `Deploy to GitHub Pages (Current Branch)`

3. Дождитесь когда workflow станет зеленым ✅ (обычно 1-2 минуты)

### Шаг 3: Открыть сайт

После успешного деплоя ваш сайт будет доступен по адресу:

```
https://rocketfounders.github.io/blue-collar-edu/
```

---

## 🔧 Альтернативный способ (если нужен деплой с main ветки)

Если вы хотите деплоить с ветки `main`:

1. Создайте Pull Request:
   ```bash
   gh pr create --title "Deploy HANDS.ON Landing" --body "Production-ready landing page"
   ```

2. Или вручную через GitHub:
   - Перейдите на вкладку **Pull requests**
   - Нажмите **New pull request**
   - Base: `main` ← Compare: `claude/hands-on-edtech-landing-011CUmFWAYYRpPy2fszEU8QY`
   - Создайте и смержите PR

3. После мерджа в main, workflow `deploy.yml` автоматически задеплоит сайт

---

## 🎨 Проверка деплоя

После успешного деплоя проверьте:

- ✅ Кнопки видны и работают (ярко-зеленые)
- ✅ Анимации плавные
- ✅ Все секции отображаются
- ✅ Мобильная версия адаптивная

---

## 🐛 Troubleshooting

### Workflow не запускается

Проблема: 403 ошибка или workflow не видно

**Решение:**
1. Settings → Actions → General
2. Включите "Allow all actions and reusable workflows"
3. В разделе "Workflow permissions" выберите "Read and write permissions"

### Pages не активирован

Проблема: В Settings нет вкладки Pages

**Решение:**
1. Убедитесь что репозиторий публичный (или у вас GitHub Pro)
2. Settings → включите GitHub Pages

### Сайт показывает 404

Проблема: Страница не открывается

**Решение:**
1. Проверьте что деплой завершился успешно в Actions
2. Подождите 1-2 минуты после деплоя
3. Очистите кэш браузера (Ctrl+Shift+R)

---

## 📞 Нужна помощь?

Если что-то не работает:

1. Проверьте логи в Actions → ваш workflow → Build
2. Убедитесь что `base: '/blue-collar-edu/'` в vite.config.js
3. Проверьте что Pages настроен на "GitHub Actions"

---

**После настройки сайт будет автоматически обновляться при каждом push! 🎉**
