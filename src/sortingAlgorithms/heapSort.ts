import { dataSet } from "..";
var now = require("performance-now");

function swap(arr: number[], index1: number, index2: number) {
  let temp: number = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function heapify(arr: number[], rootElement: number, size: number) {
  let max_element: number = rootElement;
  let leftChild: number = rootElement * 2 + 1;
  let rightChild: number = rootElement * 2 + 2;
  if (leftChild < size && arr[leftChild] > arr[max_element]) {
    max_element = leftChild;
  }
  if (rightChild < size && arr[rightChild] > arr[max_element]) {
    max_element = rightChild;
  }
  if (max_element !== rootElement) {
    swap(arr, rootElement, max_element);
    heapify(arr, max_element, size);
  }
}

function sort(arr: number[]) {
  const size = arr.length;
  for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
    heapify(arr, i, size);
  }
  let j = size - 1;
  while (j >= 1) {
    swap(arr, 0, j);
    heapify(arr, 0, j);
    j--;
  }
}

export function heapSort() {
  let performanceData: any = [];
  console.log(
    `the dataset  in quickSortThreeMedian is.... ${JSON.stringify(dataSet)}`
  );
  let localdataSet = dataSet;
  localdataSet.forEach((element: { unsortedData: number[]; size: number }) => {
    const randomList: number[] = [...element.unsortedData];
    let size: number = element.size;
    let startTime = now();
    sort(randomList);
    console.log(`The sorted list is: ${randomList}`);
    let endTime = now();
    let timeTaken = endTime - startTime;
    performanceData.push({ Size: size, Time: timeTaken });
  });
  return performanceData;
}

export default heapSort;
