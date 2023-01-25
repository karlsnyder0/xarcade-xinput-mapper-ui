module.exports = {
    style: {
        postcss: {
            plugins: [
                require('tailwindcss'),
                require('autoprefixer'),

                // require("@fullhuman/postcss-purgecss")({
                //     content: ["./src/**/*.html", "./src/**/*.tsx", "./src/**/*.ts"],
                // }),
            ],
        },
    },
};