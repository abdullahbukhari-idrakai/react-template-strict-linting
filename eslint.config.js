import react from 'eslint-plugin-react';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';

export default [
    {
        files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
        languageOptions: {
            parser: '@typescript-eslint/parser',
            ecmaVersion: 2021, // Parsing modern ECMAScript features
            sourceType: 'module', // Use ES Modules
            parserOptions: {
                project: './tsconfig.json',
            },
        },
        plugins: {
            react,
            '@typescript-eslint': tsPlugin,
            'jsx-a11y': jsxA11y,
            import: importPlugin,
        },
        settings: {
            react: {
                version: 'detect', // Automatically detect React version
            },
            'import/resolver': {
                typescript: {}, // Load <rootdir>/tsconfig.json for import resolution
            },
        },
        rules: {
            'no-console': 'warn',
            'prefer-const': 'error',
            '@typescript-eslint/no-unused-vars': [
                'error',
                { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
            ],
            '@typescript-eslint/explicit-function-return-type': [
                'warn',
                { allowExpressions: true, allowTypedFunctionExpressions: true },
            ],
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-empty-function': 'warn',
            'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
            'react/react-in-jsx-scope': 'off',
            'react/self-closing-comp': 'warn',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            'jsx-a11y/anchor-is-valid': [
                'warn',
                { aspects: ['invalidHref', 'preferButton'] },
            ],
            'import/order': [
                'warn',
                {
                    groups: [
                        'builtin',
                        'external',
                        'internal',
                        ['parent', 'sibling', 'index'],
                    ],
                    'newlines-between': 'always',
                    alphabetize: { order: 'asc', caseInsensitive: true },
                },
            ],
            'import/newline-after-import': 'warn',
            'prettier/prettier': ['error', { endOfLine: 'auto' }],
        },
    },
];
