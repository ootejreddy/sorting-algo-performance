import generateRandomData from "./generateRandomData";
var now = require("performance-now");

export function measurePerformance(algorithm: any) {
  let performance = [];
  for (let i = 1; i <= 5; i++) {
    let randomList: number[] = generateRandomData(i);
    let size = randomList.length;
    let startTime = now();
    algorithm(randomList);
    let endTime = now();
    let timeTaken = endTime - startTime;
    performance.push({ Size: size, Time: timeTaken });
  }
  return Performance;
}

export default measurePerformance;
