import MODULES from "../modules";

/**
 * This function will get the chart url to show in the img tag given the data.
 *
 * dataSet - this needs to be an array of numbers of the same length as the MODULES array (7)
 */
const exampleData = [10, 9, 7, 5, 8, 6, 10];

export const getRadarChartUrl = (dataSet) => {
  if (!Array.isArray(dataSet)) {
    throw Error("The variable dataSet should be of type Array!");
  }

  const chartObject = {
    type: "radar",
    options: {
      scale: {
        ticks: {
          suggestedMin: 0,
          suggestedMax: 10,
        },
      },
    },
    data: {
      labels: MODULES,
      datasets: [
        {
          label: "",
          data: dataSet,
        },
      ],
    },
  };

  return `https://quickchart.io/chart?c=${JSON.stringify(chartObject)}`;
};

export const getBarChartUrl = (dataSet) => {
  if (!Array.isArray(dataSet)) {
    throw Error("The variable dataSet should be of type Array!");
  }

  const chartObject = {
    type: "bar",
    data: {
      labels: MODULES,
      datasets: [
        {
          label: "",
          data: dataSet,
        },
      ],
    },
  };

  return `https://quickchart.io/chart?c=${JSON.stringify(chartObject)}`;
};

