import { Chart } from "react-google-charts";

export const DrawChart = (props: any) => {
  console.log(`The props data is: ${JSON.stringify(props.Data)}`);
  // let data: any = [
  //   { size: 500, timeTaken: 10.100000023841858 },
  //   { size: 1000, timeTaken: 1.5999999642372131 },
  //   { size: 1500, timeTaken: 2.5 },
  //   { size: 2000, timeTaken: 4 },
  //   { size: 2500, timeTaken: 7.899999976158142 },
  // ];
  const chartData = [
    ["No.of elements", "TimeTaken"],
    ...props.result.map((item: any) => [parseInt(item.Size), item.Time]),
  ];

  console.log(`The chart Data is ${chartData}`);

  const chartOptions = {
    title: ` performance shart`,
    hAxis: {
      title: "No of elements",
    },
    vAxis: {
      title: "Time in milliseconds",
    },
  };

  return (
    <Chart
      width={"700px"}
      height={"400px"}
      chartType="LineChart"
      loader={<div>Loading Chart</div>}
      data={chartData}
      options={chartOptions}
      rootProps={{ "data-testid": "1" }}
    />
  );
};

export default DrawChart;
