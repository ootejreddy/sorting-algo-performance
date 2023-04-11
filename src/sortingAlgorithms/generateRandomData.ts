export function generateRandomData(size: any) {
  const ARRAY_LENGTH = parseInt(size);
  let data: number[] = Array.from(Array(ARRAY_LENGTH)).map((x) =>
    Math.floor(Math.random() * 1000)
  );
  console.log(`The random data is ${data.length}`);

  return data;
}

export default generateRandomData;
