/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                card: 'rgb(60, 62, 68)',
                textGray: 'rgb(158, 158, 158);'
            }
        }
    },
    plugins: []
}