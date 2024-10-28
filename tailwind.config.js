/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                'bebas': ['"Bebas Neue"', 'cursive'],
                'teko': ['"Teko"', 'sans-serif'],
            }, colors: {
                'custom-gray': 'rgb(202, 210, 197)',  // Sanftes Grün-Grau
                'custom-green1': 'rgb(132, 169, 140)',  // Hellgrün
                'custom-green2': 'rgb(82, 121, 111)',   // Mittleres Grün-Blau
                'custom-green3': 'rgb(53, 79, 82)',     // Dunkles Blau-Grau
                'custom-green4': 'rgb(47, 62, 70)',     // Sehr dunkles Blau-Grau
            },
        },
    },
    plugins: [],
}

