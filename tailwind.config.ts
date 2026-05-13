import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        fenland: {
          purple: '#4E056E',
          red: '#D90205',
          soft: '#F5ECF8',
          warm: '#FFFDFD',
          dark: '#211327',
        },
      },
      boxShadow: {
        card: '0 24px 70px rgba(78, 5, 110, 0.13)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      backgroundImage: {
        'fenland-radial': 'radial-gradient(circle at 20% 20%, rgba(217, 2, 5, 0.16), transparent 30%), radial-gradient(circle at 85% 10%, rgba(78, 5, 110, 0.18), transparent 32%)',
      },
    },
  },
  plugins: [],
};

export default config;
