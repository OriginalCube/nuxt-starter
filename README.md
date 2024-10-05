# 🚀 Nuxt Starter Template

This is a **highly opinionated** Nuxt starter template designed to quickly set up a Nuxt 3 application with preconfigured tools and best practices. It includes a variety of features that promote code quality, styling consistency, and modern development practices.

## ✨ Features

- 🖥️ **Nuxt 3** for server-side rendering, static site generation, and hybrid applications
- 🎨 **Tailwind CSS** integration for rapid UI development
- 🧰 **@vueuse/core** and **@vueuse/nuxt** for seamless Vue composition utilities
- 🔍 **ESLint** and **Prettier** for code linting and formatting, ensuring code consistency
- 🐶 **Husky** and **Lint-staged** for automated code linting and formatting on commit
- 🔀 **Prettier Plugin for Tailwind CSS** to enforce consistent class ordering
- 🛣️ **Vue Router** for advanced routing capabilities

## 🛠️ Installation

1. Clone the repository:
    ```bash
    git clone <your-repo-url>
    cd <your-repo-folder>
    ```

2. Install dependencies:
    ```bash
    bun install
    ```

3. Start the development server:
    ```bash
    bun dev
    ```

## 📦 Dependencies

- 🔤 **@nuxt/fonts**: Font management in Nuxt
- 🖼️ **@nuxt/icon**: Icon support in Nuxt
- ⚡ **nuxt**: The core Nuxt 3 framework
- 💚 **vue**: The latest version of Vue.js
- 🗺️ **vue-router**: Latest version of Vue Router for flexible routing

### 🛠️ Development Dependencies

- 📏 **@antfu/eslint-config**: A minimal ESLint configuration that extends popular settings
- 🌬️ **@nuxtjs/tailwindcss**: Official Tailwind CSS module for Nuxt 3
- 🧹 **eslint, prettier, eslint-config-prettier, eslint-plugin-prettier**: For linting and code formatting
- 🐶 **husky and lint-staged**: Automatically run linters on commit
- 🎨 **prettier-plugin-tailwindcss**: Automatically sorts Tailwind classes

## 🧹 Linting and Formatting

This project uses **ESLint** and **Prettier** for linting and formatting. It enforces consistent code style and helps avoid errors.

- **Lint**:
    ```bash
    bunx lint
    ```

- **Format**:
    ```bash
    bunx format
    ```

## 🐶 Husky & Lint-staged

Husky and lint-staged are set up to ensure that any staged files are linted and formatted before they are committed. This ensures that the code in the repository is always clean and follows the defined standards.

## 🚀 Getting Started

After installation, you can start developing your Nuxt 3 application right away. Here are some key directories and files:

- `pages/`: Add your application views and routes
- `components/`: Put your Vue components here
- `layouts/`: Define your page layouts
- `assets/`: Store your images, fonts, and other static assets
- `nuxt.config.ts`: Configure your Nuxt application

## 🎨 Customizing Tailwind

You can customize your Tailwind configuration in the `tailwind.config.js` file. This allows you to modify the default theme, add new utility classes, and more.

## 🔧 Configuration

- ESLint configuration is in `eslint.config.js`
- Prettier configuration is in `prettier.config.js`
- Nuxt configuration is in `nuxt.config.ts`
- Tailwind configuration is in `tailwind.config.js`

## 📚 Learning Resources

- [Nuxt 3 Documentation](https://nuxt.com/docs/getting-started/introduction)
- [Vue 3 Documentation](https://v3.vuejs.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [VueUse Documentation](https://vueuse.org/)

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](link-to-your-issues-page).

## 🙏 Acknowledgements

- [Nuxt.js team](https://nuxt.com/) for the amazing framework
- [Tailwind CSS team](https://tailwindcss.com/) for the utility-first CSS framework
- [VueUse team](https://vueuse.org/) for the collection of Vue Composition Utilities

Happy coding! 🎉