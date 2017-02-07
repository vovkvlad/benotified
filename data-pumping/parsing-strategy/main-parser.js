let cheerio = require('cheerio');

function mainParser (html, league) {
    //basic config, should be enhanced in future
    let $ = cheerio.load(html, {
        decodeEntities: false
    });
    return $('div.tab').html();
}

module.exports = mainParser;