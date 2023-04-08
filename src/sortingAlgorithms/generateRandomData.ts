export function generateRandomData(i: any): number[] {
  const ARRAY_LENGTH = 100;
  let data: number[] = Array.from(Array(ARRAY_LENGTH * i)).map((x) =>
    Math.floor(Math.random() * 1000)
  );
  //   console.log(`The random data is: ${data}`);
  return data;
}
export default generateRandomData;
