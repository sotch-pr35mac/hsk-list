/*
 * Author: Preston Wang-Stosur-Bassett
 * Date: May 12, 2018
 * Description: This file provides and interface for querying the HSK level of a given Chinese word (in simplified characters)
 */

const fs = require('fs');
var hskWordList = {}

function getData() {
    fs.readFile('data.json', 'utf8', function(err, data) {
        if(err) {
            console.log('There was an error processing the data file.');
        } else {
            hskWordList = JSON.parse(data);
        }
    });
}

getData();

var getHsk = function(word) {
    if(hskWordList[word] == undefined || hskWordList[word] == null) {
        // Return the integer value -1 to represent that the word was not found in the HSK data
        return -1;
    } else {
        return hskWordList[word];
    }
}

module.exports.getHsk = getHsk;
