/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#2B7A3E", // ShodExpress green
                    dark: "#1E5A2E",
                    light: "#3B8A4E",
                },
                "primary-dark": "#1E5A2E",
                "primary-light": "#3B8A4E",
                secondary: {
                    DEFAULT: "#FFFFFF", // White
                    off: "#F8F8F8",
                },
                "secondary-off": "#F8F8F8",
                dark: "#333333",
                light: "#F5F5F5",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
}; 