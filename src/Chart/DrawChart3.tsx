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
  const labels = ["500", "1000", "1500", "2000", "2500"];
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
  return (
    <div className="App" style={{ width: "800px", height: "800px" }}>
      <Line data={data}>Hello</Line>
    </div>
  );
}
