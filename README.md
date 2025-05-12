# Руководство для использования 🛠️

Данное руководство поможет быстро запустить проект, проверить функциональность и успешно прогнать все тесты.

---

## 📂 Структура проекта

```
/stellar-burgers
├─ cypress/                # E2E-тесты на Cypress
│  ├─ fixtures/            # JSON-моки: ingredients.json, user.json, order.json
│  ├─ support/             # кастомные команды и настройки
│  └─ e2e/                 # спецификации тестов (constructor.cy.ts)
├─ src/                    # исходный код приложения
│  ├─ components/          # React-компоненты
│  ├─ services/            # Redux: slices, store, rootReducer
│  └─ …
├─ tsconfig.json           # TypeScript-конфиг с алиасами
├─ jest.config.ts          # конфиг Jest для корректных алиасов
├─ cypress.config.ts       # конфиг Cypress
├─ package.json            # скрипты и зависимости
└─ README.md               # это руководство
```

---

## 🚀 Установка и запуск

1. **Установить зависимости**

   ```bash
   npm install
   ```

2. **Запустить dev-сервер**

   ```bash
   npm run start
   ```

   По умолчанию приложение будет доступно по адресу `http://localhost:4000`.

3. **Запустить Storybook (UI-компоненты)**

   ```bash
   npm run storybook
   ```

---

## ✅ Unit-тесты (Jest)

- **Запуск:**

  ```bash
  npm test
  ```

- **Режим наблюдения:**

  ```bash
  npm run test:watch
  ```

### Что проверено

- **rootReducer**: соответствует `store.getState()` при неизвестном экшене.
- **constructorSlice**: экшены `setBun`, `addIngredient`, `removeIngredient`, `moveIngredient`, `resetConstructor`.
- **ingredientsSlice**: асинхронный thunk `fetchIngredients` (pending, fulfilled, rejected).

Все тесты находятся рядом с слайсами в папках `src/services/slices/tests` и `src/services/tests`.

---

## 🧪 E2E-тесты (Cypress)

- **Открыть GUI:**

  ```bash
  npm run cypress
  ```

- **Запуск headless:**

  ```bash
  npm run cypress:run
  ```

### Покрытие сценариев

1. **Добавление ингредиентов**

   - Клик по кнопкам "Добавить" булки и соуса.
   - Визуальная проверка элементов в конструкторе (`data-cy="constructor-bun"`, `data-cy="constructor-ingredient"`).

2. **Модальное окно ингредиента**

   - Открытие при клике на карточку.
   - Закрытие крестиком и оверлеем (с `force: true`).

3. **Создание заказа**

   - Моки: `ingredients.json`, `user.json`, `order.json`.
   - Подстановка фейковых токенов в `cookie` и `localStorage`.
   - Клик кнопки "Оформить заказ", ожидание мок-ответа.
   - Проверка появления номера заказа и очистки конструктора.

Спецификации лежат в `cypress/e2e/constructor.cy.ts`.

---

## ⚙️ Важные детали

- **Алиасы** (`@api`, `@utils-types` и др.) настроены в `tsconfig.json` и `jest.config.ts`.
- **Redux Toolkit**: слайсы в `src/services/slices`, корневой редьюсер в `src/services/store.ts`.
- **TypeScript**: строгая типизация, все тесты на TS.
- **Линтинг и форматирование**:

  ```bash
  npm run lint:fix
  npm run format
  ```

---
