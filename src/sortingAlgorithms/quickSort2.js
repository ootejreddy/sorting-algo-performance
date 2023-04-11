"use strict";
exports.__esModule = true;
exports.quickSort = void 0;
function swap(randomList, index1, index2) {
    var temp = randomList[index1];
    randomList[index1] = randomList[index2];
    randomList[index2] = temp;
}
function getPartitionIndex(randomList, low, high) {
    var pivot = randomList[low];
    var start = low;
    var end = high;
    while (start < end) {
        while (randomList[start] <= pivot && start <= high - 1) {
            start++;
        }
        while (randomList[end] > pivot && end >= low + 1) {
            end--;
        }
        if (start < end) {
            swap(randomList, start, end);
        }
    }
    swap(randomList, low, end);
    return end;
}
function sort(randomList, low, high) {
    if (low < high) {
        var partitionIndex = getPartitionIndex(randomList, low, high);
        sort(randomList, low, partitionIndex - 1);
        sort(randomList, partitionIndex + 1, high);
    }
}
function quickSort() {
    var randomList = [9, 8, 7, 6, 5, 4, 3, 2];
    sort(randomList, 0, randomList.length - 1);
    console.log("The random list is: " + randomList);
    return;
}
exports.quickSort = quickSort;
quickSort();
