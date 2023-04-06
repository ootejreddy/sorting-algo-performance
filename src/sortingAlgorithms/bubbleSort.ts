import generateRandomData from "./generateRandomData";
var now = require("performance-now");

export function bubbleSort() {
  let performanceData: any = [];
  let k: number;
  for (k = 1; k <= 5; k++) {
    let randomList: number[] = generateRandomData(k);
    let size = randomList.length;
    let i: number;
    let j: number;
    let startTime = now();
    for (i = 0; i < randomList.length; i++) {
      for (j = 1; j < randomList.length - i; j++) {
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
  }
  // console.log(`The bubble sort algorithm result is ${data}`);
  return performanceData;
}
export default bubbleSort;
