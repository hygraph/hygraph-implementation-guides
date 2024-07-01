require('dotenv').config();

module.exports = function(eleventyConfig) {
    // Add data to the global data object
    console.log(process.env.HYGRAPH_ENDPOINT)
    eleventyConfig.addGlobalData("pages", async function(){
        const response = await fetch(process.env.HYGRAPH_ENDPOINT, {
            method: 'POST',
            body: JSON.stringify({
                query: `query Pages {
                    pages {
                        title
                        slug
                        body {
                        text
                        }
                    }
                }`
            })
        });
        const { data } = await response.json();
        const pages = data.pages;

        return pages;
    })
                    
}