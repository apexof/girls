module.exports = {
    // "modules": false,
    presets: [
        [
            "@babel/preset-env",
            {
                corejs: 3,
                // debug: true,
                useBuiltIns: "entry"
            }
        ],
        "@babel/preset-react"
    ],
    env: {
        production: {
            plugins: [
                "transform-react-remove-prop-types"
            ]
        },
        development: {}
    },
    plugins: [
        "@babel/plugin-proposal-optional-chaining",
        "@babel/plugin-syntax-optional-chaining",
        "@babel/plugin-proposal-class-properties",
        [
            "react-css-modules",
            {
                generateScopedName: "[name]_[local]_[hash:base64:5]",
                exclude: "node_modules",
                attributeNames: {
                    cx: "className",
                    styleName: null
                },
                filetypes: { ".scss": { syntax: "postcss-scss" } }
            }
        ]
    ]
};
