let urlConfig = require('./resources.json');
let request = require('request');

// TODO add fallback resource http://football.ua/ seems to be good one

function retrieveData (leagueType) {
    return new Promise(function (resolve, reject) {
        let mainUrl = urlConfig.main.base + urlConfig.main[leagueType];

        let result = {
            fullResponse: null,
            responseBody: null,
            fromSecondaryResource: false
        };

        request(mainUrl, function (error, response, body) {
            if (!error) {
                result.fullResponse = response;
                result.responseBody = body;
                resolve(result);
            } else {
                reject(error);
            }
        });
    });
}

module.exports = retrieveData;