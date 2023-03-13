const colors = require('./src/tailwind/constants/colors');
const backgroundColor = require('./src/tailwind/constants/backgroundColor');
const height = require('./src/tailwind/constants/height');
const width = require('./src/tailwind/constants/width');
const fontSize = require('./src/tailwind/constants/fontSize');
const margin = require('./src/tailwind/constants/margin');
const border = require('./src/tailwind/constants/border');
const inset = require('./src/tailwind/constants/inset');
const minWidth = require('./src/tailwind/constants/minWidth');
const flex = require('./src/tailwind/constants/flex');

module.exports = {
  important: true,
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors,
      backgroundColor,
      height,
      width,
      fontSize,
      margin,
      inset,
      minWidth,
      flex,
      border,
    },
    gradientColorStops: (theme) => ({
      ...theme('colors'),
      colors,
    }),
  },
  variants: {
    extend: {
      transform: ['hover', 'focus'],
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
    require('tailwind-scrollbar')({ nocompatible: true }),
    require("daisyui")
  ],
};
