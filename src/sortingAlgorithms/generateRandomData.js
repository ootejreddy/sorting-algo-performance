"use strict";
exports.__esModule = true;
exports.generateRandomData = void 0;
function generateRandomData(i) {
    var ARRAY_LENGTH = 100;
    var data = Array.from(Array(ARRAY_LENGTH * i)).map(function (x) {
        return Math.floor(Math.random() * 1000);
    });
    //   console.log(`The random data is: ${data}`);
    return data;
}
exports.generateRandomData = generateRandomData;
exports["default"] = generateRandomData;
