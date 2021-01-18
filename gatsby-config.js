module.exports = {
    //! Site Meta Data
    siteMetadata: {
        title: "Edie",
        description: `Edie Homepage`,
        author: `Rahi Khan`,
        siteUrl: `https://edie-homepage69.netlify.app/`,
    },

    //! External Gatsby Plugins
    plugins: [
        "gatsby-plugin-postcss",
        "gatsby-plugin-sass",
        "gatsby-plugin-sharp",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-mdx",
        "gatsby-transformer-sharp",
        "gatsby-transformer-json",
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [`Heebo\:800`, `Poppins\:400,500,700`, `Montserrat\:600`],
                display: "swap",
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/",
            },
            __key: "pages",
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `./src/data/`,
                ignore: [`**/\.*`], //! ignore files starting with a dot
            },
        },

        //! "Offline-plugin" will always be after "Manifest-plugin"
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: `Edie Homepage`,
                short_name: `Edie Homepage`,
                description: `Edie Homepage`,
                lang: `en`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#ffffff`,
                display: `standalone`,
                icon: `./src/images/devchallenges.png`,
            },
        },
        "gatsby-plugin-offline",
    ],
};
