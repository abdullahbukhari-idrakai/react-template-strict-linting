# React Vite Strict Linting Boilerplate

This repository provides a **starter template** for building modern React applications with Vite, TypeScript, and strict linting and formatting tools.

## Features

- ⚛️ **React 18** with Hooks support
- 🚀 **Vite** for lightning-fast builds and development
- 📏 **ESLint** and **Prettier** for strict linting and code formatting
- 🌲 **Redux Toolkit** for state management
- 📦 **Axios** for API requests
- 💅 **MUI (Material UI)** components and styling solutions
- 🧪 **Jest** and **Testing Library** for unit testing
- 🛠 **Husky** and **Lint-Staged** for pre-commit checks

## Project Structure

```
/src                 # Source code
  ├── /assets        # Static assets
  ├── /components    # Reusable components
  ├── /features      # Redux slices/features
  ├── /pages         # Application pages
  ├── /routes        # Route configurations
  ├── /store         # Redux store setup
  ├── /styles        # Global stylesheets
  ├── /types         # Type definitions
  └── /utils         # Utility functions
```

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v14+)
- **Yarn** or **npm**

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd react-vite-strict-linting
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## Available Scripts

- **`npm run dev`**: Start the development server
- **`npm run build`**: Build the project for production
- **`npm run preview`**: Preview the production build
- **`npm run lint`**: Lint the project with ESLint
- **`npm run format`**: Format the code with Prettier

## Linting and Formatting

- **ESLint** is used to enforce coding standards and practices.
- **Prettier** ensures consistent code formatting.
- **Husky** and **Lint-Staged** run pre-commit hooks to ensure clean commits.

## Folder Aliases

The following aliases are configured in `tsconfig.json`:

```json
{
  "@assets/*": ["assets/*"],
  "@components/*": ["components/*"],
  "@features/*": ["features/*"],
  "@pages/*": ["pages/*"],
  "@routes/*": ["routes/*"],
  "@store/*": ["store/*"],
  "@styles/*": ["styles/*"],
  "@types/*": ["types/*"],
  "@utils/*": ["utils/*"]
}
```

## Testing

- **Jest** is used for unit testing.
- **Testing Library** provides utilities to test React components.
  Run tests with:

```bash
npm run test
```

## Dependencies Overview

- **@mui/material** and **@emotion/styled** for UI components
- **React Router** for client-side routing
- **React Redux & Redux Toolkit** for state management
- **Axios** for API requests
- **Zod** for schema validation

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## How to Use This Template

To create a new project from this template:

1. Fork the repository or use the **Use this template** button on GitHub.
2. Clone the new repository and start coding!

---

## Contributing

Contributions are welcome! Feel free to open issues and pull requests for improvements.

---

## Acknowledgments

This project is powered by:

- **Vite** for fast builds and hot module replacement
- **React** and its powerful ecosystem
- **ESLint** and **Prettier** for clean code practices

---

Thank you for using this template! 😊
