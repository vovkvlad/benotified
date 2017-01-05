let urlConfig = require('./resources.json');
let request = require('request');

function retrieveData (leagueType) {
    return new Promise(function (resolve, reject) {
        let mainUrl = urlConfig.main.base + urlConfig.main[leagueType];
        let secondaryUrl = urlConfig.secondary.base + urlConfig.secondary[leagueType];

        let result = {
            fullResponse: null,
            responsBody: null,
            fromSecondaryResource: false
        };

        request(mainUrl, function (error, response, body) {
            if (!error) {
                result.fullResponse = response;
                result.responsBody = body;
                resolve(result);
            } else {
                request(secondaryUrl, function (error, response, body) {
                    if (!error) {
                        result.fullResponse = response;
                        result.responsBody = body;
                        result.fromSecondaryResource = true;
                        resolve(result);
                    } else {
                        reject(error);
                    }
                });
            }
        });
    });
}

module.exports = retrieveData;