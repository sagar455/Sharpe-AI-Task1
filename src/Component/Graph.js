import React, { useEffect, useRef } from "react";
import moment from "moment";
import Chart from "chart.js/auto";

const Graph = ({ coordinateData }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (coordinateData.length === 0) return; // Avoid initializing chart with empty data
    if (!chartRef.current) {
      chartRef.current = new Chart("Chart", {
        type: "line",
        data: {
          labels: coordinateData.map((item) =>
            moment(item[0]).format("HH:MM:SS")
          ),
          datasets: [
            {
              label: "Graph according to Tue, Jan 20 1970 stats",
              data: coordinateData.map((item) => ({
                x: moment(item[0]),
                y: item[1],
              })),
              borderWidth: 3,
              fill: true,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, [coordinateData]);

  return <canvas id="Chart"></canvas>;
};

export default Graph;
