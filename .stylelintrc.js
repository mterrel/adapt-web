module.exports = {
    extends: "stylelint-config-standard",
    rules: {
        indentation: 4,
        "plugin/no-unsupported-browser-features": true,
    },
    plugins: [
        "stylelint-no-unsupported-browser-features"
    ],
};
