# ![Logo](/public/swan-logo.svg) Personal site [![Feature-Sliced Design][shields-fsd-pain]](https://feature-sliced.design/)

[shields-fsd-pain]: https://img.shields.io/badge/Feature--Sliced-Design?style=for-the-badge&labelColor=262224&color=F2F2F2&logoWidth=10&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAAACXBIWXMAAALFAAACxQGJ1n/vAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABHSURBVHgB7dKxCQAgDETR08ZNHNBBHNBNrBQFuyCCKQK5V6QMfBJAWVij5zLwKbW6d0VYx2TZyXnBKxvEZJnDx2bylf1kdRM6tiAZsruQ/QAAAABJRU5ErkJggg==

## 💥 Introduction

Being a frontend developer, I realized the importance of having my own digital footprint.
So, I decided to create my own [website](http://olgaswan.com/). This site serves a dual purpose - it's a platform where
I can display my work, and also a space for me to express my thoughts through blog posts.

## 🚀 Features

- **Block-style editor**: allows to create articles composed of different types of content blocks. These blocks can
  include titles, paragraphs, Markdown-formatted text, iframes for embedding content, code snippets, and images. This
  feature gives flexibility in structuring articles by combining these various block types to create engaging and
  diverse content.
- **Tag filtering**: Using tags, users can explore content based on particular topics, themes, or categories. Each diary
  is associated with one or more tags that reflect its subject matter.
- **Cloud Firestore Integration**: Firebase's seamless integration simplifies data storage and synchronization, ensuring
  real-time updates across devices and platforms.
- **grommet framework**: provides a set of UI components designed for accessibility, modularity, and responsiveness. Its
  theming capabilities ensure a consistent and visually appealing user interface across the application.
- **Animations**: tilting diary card animation creates an interaction with the content previews. Parallax animation
  bring a dynamic, multi-layered effect to content as users scroll.

## 📜 Packages

- [`React`](https://react.dev/) - the library for web and native user interfaces
- [`Typescript`](https://www.typescriptlang.org/) - typesafety, enhances code quality, catches errors during
  development, and improves overall maintainability.
- [`Cloud Firestore/Firebase`](https://firebase.google.com/docs/firestore) - flexible, scalable NoSQL cloud database,
  built on Google Cloud infrastructure, to store and sync data.
- [`Nanostores`](https://github.com/nanostores/nanostores/) - a tiny (298 bytes) state manager with many atomic
  tree-shakable stores.
- [`grommet`](https://v2.grommet.io/) - a react-based framework that provides accessibility, modularity, responsiveness,
  and theming in a tidy package.
- [`Feature-Sliced Design`](https://feature-sliced.design/) - architectural methodology for frontend projects.
- [`GSAP`](https://gsap.com/) - fancy high-performance animations that work in every major browser.
- [`React Hook Form`](https://react-hook-form.com/) - performant, flexible and extensible forms with easy-to-use
  validation.
- [`Loadable Components`](https://loadable-components.com/) - a React code splitting library.
- [`Sass`](https://sass-lang.com/) - powerful professional grade CSS extension language.
- [`React Router V6`](https://reactrouter.com/) - lightweight routing library.
- [`React Helmet`](https://www.npmjs.com/package/react-helmet) - a document head manager.
- [`Yarn`](https://yarnpkg.com/) - an open-source package manager used to manage dependencies in JavaScript projects.
- [`Vite`](https://vitejs.dev/) - a build tool that aims to provide a faster and leaner development experience for
  modern web projects.
- [`Vitest`](https://vitest.dev/) - a Vite-native testing framework.
- [`Node.js`](https://nodejs.org/en) - a cross-platform, open-source JavaScript runtime environment.
- [`Prettier`](https://prettier.io/) - a code formatter.

## 🛠️ Local development

To ensure that you are able to install everything properly, I would recommend you to have <b>Yarn</b>, <b>React</b>
and <b>Vite</b> installed.
Once everything is set up, run the commands:

- `yarn` to install dependencies,
- `yarn develop` to start local dev server,
- `yarn test` to run tests,
- `yarn format` to format and lint,

Also, you could check other scripts in [package.json](./package.json).

If you have any development ideas, feel free to create a pull request or message me.
