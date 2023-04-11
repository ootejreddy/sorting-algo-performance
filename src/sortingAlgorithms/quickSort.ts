import { dataSet } from "..";

var now = require("performance-now");

function swap(randomList: number[], index1: number, index2: number) {
  let temp: number = randomList[index1];
  randomList[index1] = randomList[index2];
  randomList[index2] = temp;
}

function getPartitionIndex(randomList: number[], low: number, high: number) {
  const pivot = randomList[low];
  let start: number = low;
  let end: number = high;
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
  let performanceData: any = [];
  console.log(`the dataset  in bubble is.... ${JSON.stringify(dataSet)}`);
  let localdataSet = dataSet;
  localdataSet.forEach((element: { unsortedData: number[]; size: number }) => {
    const randomList: number[] = [...element.unsortedData];
    let size: number = element.size;
    let startTime = now();
    sort(randomList, 0, randomList.length - 1);
    console.log(`The sorted list is: ${randomList}`);
    let endTime = now();
    let timeTaken = endTime - startTime;
    performanceData.push({ Size: size, Time: timeTaken });
  });

  return performanceData;
}

export default quickSort;
