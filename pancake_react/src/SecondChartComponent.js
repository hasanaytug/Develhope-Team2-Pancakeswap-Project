import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  registerables,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";
import ChartDataLabels from "chartjs-plugin-datalabels";

export default function SecondChartComponent(props) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartDataLabels
  );

  ChartJS.defaults.set("plugins.datalabels", {
    labels: {
      title: {
        value: "rgba(53, 162, 235, 0)",
        color: "rgba(53, 162, 235, 0)",
        font: {
          size: "100px",
        },
      },
    },
    listeners: {
      enter: function (context, event) {
        props.handleSetCoinValue(context.dataset.data[context.dataIndex]);
      },
    },
  });

  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          drawBorder: false,
          color: "rgb(255,255,255)",
        },
      },
      y: {
        grid: {
          drawBorder: false,
          color: "rgb(255,255,255)",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      title: {
        display: false,
        text: "Cake/BNB",
      },
    },
  };

  const dataYear = [
    { time: "JAN 22", value: "12" },
    { time: "FEB 22", value: "17" },
    { time: "MAR 22", value: "11" },
    { time: "APR 22", value: "22" },
    { time: "MAY 22", value: "35" },
    { time: "JUN 22", value: "29" },
    { time: "JLY 22", value: "42" },
    { time: "AUG 22", value: "56" },
    { time: "SEP 22", value: "66" },
    { time: "OCT 22", value: "61" },
    { time: "NOV 22", value: "59" },
    { time: "DEC 22", value: "45" },
    { time: "JAN 23", value: "23" },
  ];

  let dataWeek = [
    { time: "MON", value: "62" },
    { time: "TUE", value: "56" },
    { time: "WED", value: "75" },
    { time: "THU", value: "45" },
    { time: "FRI", value: "47" },
    { time: "SAT", value: "58" },
    { time: "SUN", value: "50" },
    { time: "MON", value: "33" },
  ];

  let dataMonth = [
    { time: "01 JAN 23", value: "26" },
    { time: "04 JAN 23", value: "45" },
    { time: "07 JAN 23", value: "65" },
    { time: "10 JAN 23", value: "59" },
    { time: "14 JAN 23", value: "55" },
    { time: "17 JAN 23", value: "50" },
    { time: "20 JAN 23", value: "62" },
    { time: "24 JAN 23", value: "46" },
    { time: "27 JAN 23", value: "35" },
    { time: "31 JAN 23", value: "40" },
  ];

  let dataDay = [
    { time: "12:30 AM", value: "55" },
    { time: "02:30 AM", value: "58" },
    { time: "04:30 AM", value: "62" },
    { time: "06:30 AM", value: "55" },
    { time: "08:30 AM", value: "53" },
    { time: "10:30 AM", value: "50" },
    { time: "12:30 PM", value: "51" },
    { time: "02:30 PM", value: "52" },
    { time: "04:30 PM", value: "55" },
    { time: "06:30 PM", value: "60" },
    { time: "08:30 PM", value: "66" },
    { time: "10:30 PM", value: "64" },
    { time: "12:30 PM", value: "60" },
  ];

  const yearChart = {
    labels: dataYear.map((label) => label.time),
    datasets: [
      {
        data: dataYear.map((data) => data.value),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const monthChart = {
    labels: dataMonth.map((label) => label.time),
    datasets: [
      {
        data: dataMonth.map((data) => data.value),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  const weekChart = {
    labels: dataWeek.map((label) => label.time),
    datasets: [
      {
        data: dataWeek.map((data) => data.value),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const dayChart = {
    labels: dataDay.map((label) => label.time),
    datasets: [
      {
        data: dataDay.map((data) => data.value),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const handleCorrectChart = (buttonInfo) => {
    if (buttonInfo === "1w") {
      return weekChart;
    } else if (buttonInfo === "1m") {
      return monthChart;
    } else if (buttonInfo === "24h") {
      return dayChart;
    } else {
      return yearChart;
    }
  };

  return (
    <div>
      <Bar options={options} data={handleCorrectChart(props.buttonInfo)} />
    </div>
  );
}
