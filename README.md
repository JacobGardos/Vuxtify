# Vuxtify

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

A Nuxt Module for Vuetify 3

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
  <!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/vuxtify?file=playground%2Fapp.vue) -->
  <!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

- 📦 &nbsp;Tree Shaking
- 🚀 &nbsp;Vite Builder Compatible
- ⚙️ &nbsp;Webpack Builder Compatible
- 💅 &nbsp;Easily Customize Sass Variables
- 📚 &nbsp;Auto Imported Vuetify Composables
- 🧩 &nbsp;Provide $vuetify
- 🤖 &nbsp;Automatically Suggests Dependencies
- 🎨 &nbsp;HMR Theme Altering

## Quick Setup

1. Add `vuxtify` dependency to your project

```bash
# Using pnpm
pnpm add -D vuxtify

# Using yarn
yarn add --dev vuxtify

# Using npm
npm install --save-dev vuxtify
```

2. Add `vuxtify` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: ["vuxtify"],
  vuxtify: {
    // ... Module Options See Docs
  },
});
```

1. Add your `vuetify` options to your `app.config.ts` file

```js
export default defineAppConfig({
  vuetify: {
    theme: {
      defaultTheme: "light",
      themes: {
        light: {
          colors: {
            primary: "#1976D2",
            secondary: "#424242",
            accent: "#82B1FF",
            error: "#FF5252",
            info: "#2196F3",
            success: "#4CAF50",
            warning: "#FFC107",
          },
        },
      },
    },
  },
});
```

That's it! You can now use Vuetify in your Nuxt app ✨ Check out the [docs](https://vuxtify.netlify.app) for more details and examples.

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/vuxtify/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/vuxtify
[npm-downloads-src]: https://img.shields.io/npm/dm/vuxtify.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/vuxtify
[license-src]: https://img.shields.io/npm/l/vuxtify.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/vuxtify
[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
