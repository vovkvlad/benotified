let cheerio = require('cheerio');

function mainParser (html, league) {
    //basic config, should be enhanced in future
    let $ = cheerio.load(html);
    return $('table.soccer').html();
}

module.exports = mainParser;