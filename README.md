
# React + TypeScript + Vite Project

This template provides a minimal setup to get React working in Vite with HMR and includes ESLint rules for cleaner code. The project is built using React, TypeScript, and Vite, ensuring a fast and modern development experience.

## Features Implemented

- **Expense Tracking**: Allows users to input expenses, including fields for amount, category, date, and description.
- **Category Filtering**: Filter expenses by category to quickly view related expenses.
- **Local Storage Persistence**: Expense data is stored in local storage, allowing data persistence between page reloads.
- **Dynamic Total Calculation**: Displays the total sum of expenses based on filtered data.
- **User Feedback**: Provides success notifications on data submission using `react-hot-toast`.

## Getting Started

Follow these steps to install and run the project locally.

### Prerequisites

Make sure you have the following installed:

- **Node.js** (version 16 or higher)
- **npm** or **yarn** for package management

### Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/your-repository.git
    cd your-repository
    ```

2. **Install dependencies**:

    Using npm:

    ```bash
    npm install
    ```

    Or, if you use yarn:

    ```bash
    yarn install
    ```

3. **Start the development server**:

    Using npm:

    ```bash
    npm run dev
    ```

    Or, if you use yarn:

    ```bash
    yarn dev
    ```

4. **Open the application**:

    The application should be running at [http://localhost:5173](http://localhost:5173).

### Project Structure

The project includes the following main components:

- **Form Component**: For adding expense details, including amount, category, date, and description.
- **Table Component**: Displays all expenses with filtering and a total expense calculation.

## Expanding the ESLint Configuration

If you are developing a production application, you might want to expand the ESLint configuration to enable type-aware linting rules.

1. Configure the top-level `parserOptions` property:

    ```js
    export default tseslint.config({
      languageOptions: {
        parserOptions: {
          project: ['./tsconfig.node.json', './tsconfig.app.json'],
          tsconfigRootDir: import.meta.dirname,
        },
      },
    });
    ```

2. Replace `tseslint.configs.recommended` with `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`.

3. Optionally add `...tseslint.configs.stylisticTypeChecked`.

4. Install `eslint-plugin-react` and update the config:

    ```js
    import react from 'eslint-plugin-react';

    export default tseslint.config({
      settings: { react: { version: '18.3' } },
      plugins: { react },
      rules: {
        ...react.configs.recommended.rules,
        ...react.configs['jsx-runtime'].rules,
      },
    });
    ```
