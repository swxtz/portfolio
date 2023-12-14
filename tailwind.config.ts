import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                cream: {
                    100: "#f2f8fb",
                    200: "#e5f1f8",
                    300: "#d8e9f4",
                    400: "#cbe2f1",
                    500: "#bedbed",
                    600: "#98afbe",
                    700: "#72838e",
                    800: "#4c585f",
                    900: "#262c2f",
                },

                teal: {
                    100: "#f6eada",
                    200: "#edd5b4",
                    300: "#e4c18f",
                    400: "#dbac69",
                    500: "#d29744",
                    600: "#a87936",
                    700: "#7e5b29",
                    800: "#543c1b",
                    900: "#2a1e0e",
                },
            },
        },
    },
    plugins: [],
};
export default config;
