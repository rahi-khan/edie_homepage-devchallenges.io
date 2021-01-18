module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}"],

    //! class: Toggle dark mode manually
    //! media: Dark mode depends on OS
    darkMode: "media",
    theme: {
        fontFamily: {
            heeb: ["Heebo", "sans-serif"],
            pops: ["Poppins", "sans-serif"],
            monty: ["Montserrat", "sans-serif"],
        },
        extend: {},
    },
    variants: {
        extend: {
            padding: ["last"],
            margin: ["last"],
        },
    },
    plugins: [],
};
