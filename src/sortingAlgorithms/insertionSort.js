"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var dataSet_1 = require("../Dataset/dataSet");
var now = require("performance-now");
function insertionSort() {
    var performanceData = [];
    console.log("the dataset  in bubble is.... " + JSON.stringify(dataSet_1["default"]));
    var localdataSet = dataSet_1["default"];
    localdataSet.forEach(function (element) {
        var randomList = __spreadArray([], element.unsortedData, true);
        var size = element.size;
        var i;
        var j;
        var startTime = now();
        for (i = 0; i < size; i++) {
            for (j = i + 1; j > 0; j--) {
                if (randomList[j] < randomList[j - 1]) {
                    var temp = randomList[j - 1];
                    randomList[j - 1] = randomList[j];
                    randomList[j] = temp;
                }
                else {
                    break;
                }
            }
        }
        var endTime = now();
        console.log("The sorted data is: " + randomList);
        var timeTaken = endTime - startTime;
        performanceData.push({ Size: size, Time: timeTaken });
    });
    return performanceData;
}
insertionSort();
exports["default"] = insertionSort;
