var now = require("performance-now");

export function bubbleSort(data: number[]) {
  let performanceData: any = [];
  console.log(`the dataset  in bubble is.... ${data}`);

  const randomList: number[] = [...data];

  let size: number = randomList.length;
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
  return performanceData;
}

export default bubbleSort;
