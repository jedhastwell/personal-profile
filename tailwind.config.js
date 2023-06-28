/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'burnt-yellow': '#f9bf15',
        'orange-yellow': '#f9a31c',
      },
      screens: {
        sm: '480px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      dropShadow: {
        orange: '3px 3px 0px #f9a31c',
        card: '5px 20px 40px rgba(0, 0, 0, 0.3)',
        button: '0px 2px 3px rgba(0,0,0,0.2)',
        'button-highlight': '0px 1px 5px rgba(0,0,0,0.3)',
      },
      borderRadius: {
        card: '20px',
      },
    },
  },
  plugins: [],
}
