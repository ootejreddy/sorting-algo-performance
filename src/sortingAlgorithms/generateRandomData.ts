interface Result {
  unsortedData: {};
  size: number;
}

export function generateRandomData() {
  let dataSet: any = [];
  for (let i: number = 1; i <= 5; i++) {
    const ARRAY_LENGTH = 100;
    let data: number[] = Array.from(Array(ARRAY_LENGTH * i)).map((x) =>
      Math.floor(Math.random() * 1000)
    );
    const result: Result = { unsortedData: data, size: ARRAY_LENGTH * i };
    dataSet.push(result);
  }
  return dataSet;
}

export default generateRandomData;
