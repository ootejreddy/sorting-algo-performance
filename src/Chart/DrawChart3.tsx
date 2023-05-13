import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

function getRandomColor(): string {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

export function DrawChart3(props: any) {
  const labels = ["5", "10", "15", "20", "25"];
  const data = {
    labels: labels,
    datasets: [
      ...props.result.map((item: any) => {
        return {
          yAxisID: `${item.Algorithm}-y-axis`,
          fill: false,
          label: item.Algorithm,
          backgroundColor: getRandomColor(),
          borderColor: getRandomColor(),
          data: [...item.sortedData.map((item: any) => item.Time)],
        };
      }),
    ],
  };

  const options = {
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: "No of Elements",
          color: "#911",
          font: {
            family: "Comic Sans MS",
            size: 20,
            weight: "bold",
            lineHeight: 1.2,
          },
          padding: { top: 20, left: 0, right: 0, bottom: 0 },
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "Time in MilliSeconds",
          color: "#191",
          // font: {
          //   family: "Times",
          //   size: 20,
          //   style: "normal",
          //   lineHeight: 1.2,
          // },
          // padding: { top: 30, left: 0, right: 0, bottom: 0 },
        },
      },
    },
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center h-100"
      style={{ padding: "50px" }}
    >
      <div className="App" style={{ width: "1000px", height: "800px" }}>
        <Line data={data} options={options}>
          Hello
        </Line>
      </div>
    </div>
  );
}
