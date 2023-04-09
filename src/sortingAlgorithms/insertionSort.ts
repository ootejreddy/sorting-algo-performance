import dataSet from "../Dataset/dataSet";
var now = require("performance-now");

function insertionSort() {
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
      for (j = i + 1; j > 0; j--) {
        if (randomList[j] < randomList[j - 1]) {
          let temp: number = randomList[j - 1];
          randomList[j - 1] = randomList[j];
          randomList[j] = temp;
        } else {
          break;
        }
      }
    }
    let endTime = now();
    console.log(`The sorted data is: ${randomList}`);
    let timeTaken = endTime - startTime;
    performanceData.push({ Size: size, Time: timeTaken });
  });

  return performanceData;
}

export default insertionSort;
