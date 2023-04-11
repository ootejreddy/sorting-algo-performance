import { dataSet } from "..";
var now = require("performance-now");

function merge(left: number[], right: number[]): number[] {
  let mix: number[] = [];
  let i: number = 0;
  let j: number = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      mix.push(left[i]);
      i++;
    } else {
      mix.push(right[j]);
      j++;
    }
  }
  return mix.concat(left.slice(i)).concat(right.slice(j));
}

function sort(randomList: number[]): number[] {
  if (randomList.length <= 1) {
    return randomList;
  }
  const mid: number = Math.floor(randomList.length / 2);

  return merge(sort(randomList.slice(0, mid)), sort(randomList.slice(mid)));
}

export function mergeSort(): void {
  let performanceData: any = [];
  console.log(`The dataSet in merge is:${JSON.stringify(dataSet)}`);
  dataSet.forEach((element: { unsortedData: number[]; size: number }) => {
    let randomList: number[] = [...element.unsortedData];
    let size: number = randomList.length;
    let startTime = now();
    let result: number[] = sort(randomList);
    let endTime = now();
    // console.log(`The merge sorted array is: ${result}`);
    let timeTaken = endTime - startTime;
    performanceData.push({ Size: size, Time: timeTaken });
  });
  console.log(`The performance data is ${JSON.stringify(performanceData)}`);
  return performanceData;
}
