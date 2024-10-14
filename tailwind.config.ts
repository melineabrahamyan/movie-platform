import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#040404',
      },
      backgroundImage: {
        'btn-gradient': 'linear-gradient(to right, #2024DF, #071987)',
      },
    },
  },
  plugins: [],
};
export default config;
