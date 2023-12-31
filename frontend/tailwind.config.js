/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        blackGray: "#3C4242",
        darkGray: "#807D7E",
        mediumGray: "#BEBCBD",
        lightGray: "#EDEEF2",
        extraLightGray: "#F6F6F6",
        brightPurple: "#8A33FD"
      }
    },
  },
  plugins: [],
}
