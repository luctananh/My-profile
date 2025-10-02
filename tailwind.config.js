/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        // Cú pháp đúng cho Flowbite React
        'node_modules/flowbite-react/lib/esm/**/*.js',
    ],
    theme: {
        extend: {},
    },
    plugins: [
        // Cú pháp đúng cho Flowbite React
        require('flowbite/plugin'),
    ],
};