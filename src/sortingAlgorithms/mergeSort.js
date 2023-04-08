"use strict";
exports.__esModule = true;
exports.mergeSort = void 0;
var generateRandomData_1 = require("./generateRandomData");
var now = require("performance-now");
function merge(left, right) {
    var mix = [];
    var i = 0;
    var j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            mix.push(left[i]);
            i++;
        }
        else {
            mix.push(right[j]);
            j++;
        }
    }
    return mix.concat(left.slice(i)).concat(right.slice(j));
}
function sort(randomList) {
    if (randomList.length <= 1) {
        return randomList;
    }
    var mid = Math.floor(randomList.length / 2);
    return merge(sort(randomList.slice(0, mid)), sort(randomList.slice(mid)));
}
function mergeSort() {
    var performanceData = [];
    var k;
    for (k = 1; k <= 5; k++) {
        var randomList = (0, generateRandomData_1["default"])(k);
        var size = randomList.length;
        var startTime = now();
        var result = sort(randomList);
        var endTime = now();
        // console.log(`The merge sorted array is: ${result}`);
        var timeTaken = endTime - startTime;
        performanceData.push({ Size: size, Time: timeTaken });
    }
    console.log("The performance data is " + JSON.stringify(performanceData));
    return performanceData;
}
exports.mergeSort = mergeSort;
mergeSort();
