import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import reactHooks from 'eslint-plugin-react-hooks';

const eslintConfig = [
  ...nextCoreWebVitals,
  eslintPluginPrettierRecommended,
  {
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      'react-hooks/rules-of-hooks': 'warn',
    },
  },
];

export default eslintConfig;
