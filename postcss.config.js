const tailwindcss = require("tailwindcss");

module.exports = {
  plugins: [
    // tailwindcss("./tailwind.js"),
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-nested'),
    require('postcss-custom-properties'),
    require('autoprefixer'),
    require('postcss-preset-env')({ stage: 1 }),
  ]
}