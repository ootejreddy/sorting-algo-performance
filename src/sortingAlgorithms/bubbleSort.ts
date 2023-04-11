import { dataSet } from "..";

var now = require("performance-now");

export function bubbleSort() {
  let performanceData: any = [];
  console.log(`the dataset  in bubble is.... ${JSON.stringify(dataSet)}`);
  let localdataSet = dataSet;
  localdataSet.forEach((element: { unsortedData: number[]; size: number }) => {
    const randomList: number[] = [...element.unsortedData];

    let size: number = element.size;
    let i: number;
    let j: number;
    let startTime = now();
    for (i = 0; i < size; i++) {
      for (j = 1; j < size - i; j++) {
        if (randomList[j] < randomList[j - 1]) {
          let temp: number = randomList[j - 1];
          randomList[j - 1] = randomList[j];
          randomList[j] = temp;
        }
      }
    }
    let endTime = now();
    let timeTaken = endTime - startTime;
    performanceData.push({ Size: size, Time: timeTaken });
  });

  return performanceData;
}

export default bubbleSort;
