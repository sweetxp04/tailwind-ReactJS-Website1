/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#010851",
                secondary: "#707070",
                tartiary: "#EBEBEB",
                pink: "#EE9AE5 ",
            },
        },
    },
    plugins: [],
};
