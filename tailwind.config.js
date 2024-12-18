/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js}", // Alle HTML- und JS-Dateien im src-Verzeichnis
    ],
    theme: {
        extend: {
            fontFamily: {
                'bebas': ['"Bebas Neue"', 'cursive'],
                'teko': ['"Teko"', 'sans-serif'],
            },
            colors: {
                'custom-gray': 'rgb(202, 210, 197)',  // Sanftes Grün-Grau
                'custom-gray2': 'rgb(177,186,173)',  // Sanftes Grün-Grau 2
                'custom-green1': 'rgb(132, 169, 140)',  // Hellgrün
                'custom-green2': 'rgb(82, 121, 111)',   // Mittleres Grün-Blau
                'custom-green3': 'rgb(53, 79, 82)',     // Dunkles Blau-Grau
                'custom-green4': 'rgb(47, 62, 70)',     // Sehr dunkles Blau-Grau
            },
            animation: {
                'bounce-slow': 'bounce 2s infinite', // Langsamere Bounce-Animation
                'bounce-custom': 'customBounce 1.5s infinite', // Angepasste Animation
            },
            keyframes: {
                customBounce: {
                    '0%, 100%': {transform: 'translateY(0)'},
                    '70%': {transform: 'translateY(-15px)'}, // Höhe des Sprungs anpassen
                },
            },
        },
    },
    plugins: [],
}