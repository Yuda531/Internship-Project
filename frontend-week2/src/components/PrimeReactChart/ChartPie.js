import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";

const ChartPie = () => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const data = {
      labels: ["Lithan Batch 2", "Lithan Batch 3", "Lithan Batch 4"],
      datasets: [
        {
          data: [16, 11, 4],
          backgroundColor: [
            documentStyle.getPropertyValue("--blue-500"),
            documentStyle.getPropertyValue("--yellow-500"),
            documentStyle.getPropertyValue("--green-500"),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue("--blue-400"),
            documentStyle.getPropertyValue("--yellow-400"),
            documentStyle.getPropertyValue("--green-400"),
          ],
        },
      ],
    };
    const options = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <div className="container my-5">
      <div className="card">
        <Chart
          type="pie"
          data={chartData}
          options={chartOptions}
          className="w-75 md:w-30rem"
        />
      </div>
    </div>
  );
};

export default ChartPie;
