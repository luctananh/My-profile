/** @type {import('tailwindcss').Config} */
module.exports = {
    // Thêm dòng này hoặc đảm bảo nó có giá trị là 'class'
    darkMode: 'class',

    content: [
        "./src/**/*.{js,jsx,ts,tsx}", // Đảm bảo dòng này quét đúng các tệp của bạn
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}