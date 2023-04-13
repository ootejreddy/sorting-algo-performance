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
  let randomList: number[] = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2];
  sort(randomList, 0, randomList.length - 1);
  console.log(`The random list is: ${randomList}`);
  return;
}

quickSort();
