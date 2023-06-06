/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...fontFamily.sans],
            },
            colors: {
                textBody: '#333333',
                textLight: '#5D5F64',
                textLink: '#72747A',
                paletteRed: '#EF3061',
                palettePurple: '#7C39ED',
                paletteBlue: '#2D7FF9',
                paletteYellow: '#E08D00',
                paletteGreen: '#11AF22',
                surfaceSecondary: '#F4F3F2',
                surfacePrimary: '#FFFFFF',
                strokePrimary: '#E0E0E1',
            },
        },
    },
    plugins: [],
};
