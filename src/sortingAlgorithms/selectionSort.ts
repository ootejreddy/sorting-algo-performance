import dataSet from "../Dataset/dataSet";

var now = require("performance-now");

export function selectionSort() {
  console.log(`the dataset  in selection is.... ${JSON.stringify(dataSet)}`);
  let performanceData: any = [];
  dataSet.forEach((element: { unsortedData: number[]; size: number }) => {
    let randomList: number[] = [...element.unsortedData];

    let size: number = element.size;
    let startTime = now();
    for (let i: number = 0; i < randomList.length; i++) {
      let last: number = randomList.length - i - 1;
      let maxIndex: number = getMax(randomList, 0, last);
      swap(randomList, maxIndex, last);
    }
    let endTime = now();
    let timeTaken = endTime - startTime;
    performanceData.push({ Size: size, Time: timeTaken });
  });
  console.log(
    `The selection sort performance is ${JSON.stringify(performanceData)}`
  );
  return performanceData;
}

function getMax(arrayData: number[], start: number, end: number): number {
  let max: number = start;
  for (let i: number = start; i <= end; i++) {
    if (arrayData[max] < arrayData[i]) {
      max = i;
    }
  }
  return max;
}

function swap(arrayData: number[], maxIndex: number, last: number) {
  let temp: number = arrayData[last];
  arrayData[last] = arrayData[maxIndex];
  arrayData[maxIndex] = temp;
}

export default selectionSort;
