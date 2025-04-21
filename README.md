# Vue 3 + vuetify

This project is a Vue 3 application built with TypeScript and Vite. It includes features such as authentication, product and category management, and a dashboard interface. The project uses Vuetify for UI components and Pinia for state management.

## Features
- **Authentication**: Login/logout functionality.
- **Dashboard**: Overview of products, categories, and users.
- **Products Management**: View a list of products and detailed product information.
- **Categories Management**: View a list of categories (users).
- **Responsive Design**: Built with Vuetify for a modern and responsive UI.

## Project Structure
- **`src/`**: Contains the source code for the application.
  - **`views/`**: Vue components for pages like login, products, and categories.
  - **`stores/`**: Pinia stores for state management.
  - **`router/`**: Vue Router configuration.
  - **`plugins/`**: Vuetify plugin setup.
  - **`components/`**: Shared components like the app layout.
- **`public/`**: public and assets files for setup, usage, and development.

## Installation
1. Clone the repository:
   ```bash
   git clone git@github.com:mahmoud-alaraby/vue-3-task.git vue_assessment
   cd vue_assessment
   bun install
   bun run dev
