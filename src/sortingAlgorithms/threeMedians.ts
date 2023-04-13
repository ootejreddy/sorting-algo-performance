/* eslint-disable no-mixed-operators */

var now = require("performance-now");

function swap(randomList: number[], index1: number, index2: number) {
  let temp: number = randomList[index1];
  randomList[index1] = randomList[index2];
  randomList[index2] = temp;
}

function getPivot(randomList: number[], low: number, high: number) {
  let firstElement: number = low;
  let lastElement: number = high;
  let middleElement: number = Math.floor((low + high) / 2);
  // eslint-disable-next-line no-mixed-operators
  if (
    (firstElement > middleElement && firstElement < lastElement) ||
    (firstElement > lastElement && firstElement < middleElement)
  ) {
    return firstElement;
  } else if (
    (middleElement > firstElement && middleElement < lastElement) ||
    (middleElement > lastElement && middleElement < firstElement)
  ) {
    return middleElement;
  } else {
    return lastElement;
  }
}

function getPartitionIndex(randomList: number[], low: number, high: number) {
  let start: number = low;
  let end: number = high;
  const pivotIndex = getPivot(randomList, low, end);
  console.log(`The pivot Index is ${pivotIndex}`);

  swap(randomList, low, pivotIndex);
  const pivot = randomList[low];
  console.log(`The pivot is ${pivot}`);
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

function sort(randomList: number[], low: number, high: number) {
  if (low < high) {
    let partitionIndex: number = getPartitionIndex(randomList, low, high);
    sort(randomList, low, partitionIndex - 1);
    sort(randomList, partitionIndex + 1, high);
  }
}

export function quickSort() {
  const randomList: number[] = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2];

  sort(randomList, 0, randomList.length - 1);
  console.log(`The random list is ${randomList}`);
}

quickSort();
