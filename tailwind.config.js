const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
    // Bật chế độ dark mode bằng class
    darkMode: 'class',

    // Thêm đường dẫn của Flowbite vào đây để Tailwind không xóa mất class của nó
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        flowbite.content(),
    ],

    theme: {
        extend: {},
    },

    // Thêm plugin của Flowbite vào đây
    plugins: [
        flowbite.plugin(),
    ],
}