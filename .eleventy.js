const path = require("path");
const cssnano = require('cssnano');
    
module.exports = function(eleventyConfig) {

    eleventyConfig.setTemplateFormats(["njk", "html", "md", "css"]);
    
    return {
        dir: {
            input: "src",
            output: "public",
            includes: "includes",
            layouts: "layout"
        },
        passthroughFileCopy: true,
        plugins: [
            cssnano({
                preset: 'default',
              }),
        ]
    }
};