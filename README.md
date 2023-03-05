# Базовый темплейт приложения на VUE

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Описание проекта

Это проект, который должен быть использован, как базовая разметка для любых других последующих проектов.
Упор в описании я сделаю на моделе архитектуры [Featured Sliced Design](https://feature-sliced.design)

Весь проект построен должен быть так, чтобы все компоненты могли работать без плотной связи друг с другом. Компонент может состоять из вложенных сущностей, которые и связывает общий родительский компонент (то есть компонент-обертка). Компонент-обертка может связывать различные сущности с помощью props, provide/inject, а дочерние компонент могут обращаться к родительскому с помощью emit.

### Форматирование кода с помощью Prittier
Нужно запустить следующую команбу, чтобы отформатмровать весь код:
```sh
npm run format
```