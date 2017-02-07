let retrieve = require('./retrieve');
let parsers = require('./parsing-strategy');

retrieve('ua').then((data) => {
    let cutTable = parsers.mainParser(data.responseBody, 'ua');

    return cutTable;
})
.catch((error) => {
    console.log(error);
});