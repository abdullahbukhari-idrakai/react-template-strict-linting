export default {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 2021, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'react-hooks',
        'jsx-a11y',
        'import',
    ],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended', // React recommended rules
        'plugin:@typescript-eslint/recommended', // TypeScript recommended rules
        'plugin:@typescript-eslint/recommended-requiring-type-checking', // Additional TypeScript rules requiring type info
        'plugin:react-hooks/recommended', // React hooks rules
        'plugin:jsx-a11y/recommended', // Accessibility checks
        'plugin:import/errors', // Import errors
        'plugin:import/warnings', // Import warnings
        'plugin:import/typescript', // Support for TypeScript imports
        'plugin:prettier/recommended', // Integrates Prettier with ESLint
    ],
    settings: {
        react: {
            version: 'detect', // Automatically detect the react version
        },
        'import/resolver': {
            typescript: {}, // This loads <rootdir>/tsconfig.json to eslint
        },
    },
    rules: {
        // General code-quality rules
        'no-console': 'warn', // Warn when console statements are used
        'no-unused-vars': 'off', // Turn off base rule as it can report incorrect errors
        '@typescript-eslint/no-unused-vars': [
            'error',
            { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
        ], // Error on unused vars unless they start with an underscore
        'prefer-const': 'error', // Prefer const over let when variables are not reassigned

        // TypeScript-specific rules
        '@typescript-eslint/explicit-function-return-type': [
            'warn',
            { allowExpressions: true, allowTypedFunctionExpressions: true },
        ], // Encourage explicit return types
        '@typescript-eslint/no-explicit-any': 'warn', // Discourage use of 'any' type
        '@typescript-eslint/no-empty-function': 'warn', // Warn on empty functions
        '@typescript-eslint/no-inferrable-types': 'off', // Allow explicit types even if they can be inferred
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'], // Prefer interfaces over type literals

        // React-specific rules
        'react/prop-types': 'off', // Disable prop-types as we use TypeScript for type checking
        'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }], // Enforce .tsx extension for JSX
        'react/react-in-jsx-scope': 'off', // Not needed with React 17+
        'react/self-closing-comp': 'warn', // Encourage self-closing tags for components without children
        'react/jsx-props-no-spreading': 'off', // Allow prop spreading

        // React Hooks rules
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies

        // Accessibility rules
        'jsx-a11y/anchor-is-valid': [
            'warn',
            {
                aspects: ['invalidHref', 'preferButton'],
            },
        ],

        // Import rules
        'import/order': [
            'warn',
            {
                groups: [
                    'builtin', // Built-in types are first
                    'external', // Then external packages
                    'internal', // Then internal modules
                    ['parent', 'sibling', 'index'], // Then parent/sibling/index
                ],
                'newlines-between': 'always',
                alphabetize: { order: 'asc', caseInsensitive: true },
            },
        ],
        'import/no-unresolved': 'error', // Ensure imports point to a file/module that can be resolved
        'import/newline-after-import': 'warn', // Enforce a newline after import statements

        // Prettier integration
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto', // Resolve end-of-line issues between different operating systems
            },
        ],
    },
};
