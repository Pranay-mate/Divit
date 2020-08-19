import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.data,
      chartOptions: props.options
    };
  }

  static defaultProps = {
    displayTitle: true,
    DisplayLegend: true,
    LegendPosition: "right",
    level: "Skills",

    data: {
      labels: ["HTML", "CSS", "Javascript", "Drupal", "ReactJS",'ASSA', "SQL", "web developer","sdfsdfsd","web developer"],
      datasets: [
        {
          data: [100, 80, 60, 70, 65, 100, 80, 55, 80, 65, 30, 40, 10, 0],
          backgroundColor: [
            "rgba(255, 99, 132, 0.6)",
            "rgba(54, 162, 235, 0.6)",
            "rgba(255, 206, 86, 0.6)",
            "rgba(75, 192, 192, 0.6)",
            "rgba(153, 102, 235, 0.6)",
            "rgba(255, 159, 132, 0.6)",
            "rgba(255, 99, 132, 0.6)"
          ],
              label: false
        }
        /* {
          data: [90, 90, 60, 70, 60, 70, 100, 55, 80, 40, 30, 20, 10, 0],
          backgroundColor: "#FF7",
          label: 2016
      }*/
      ]
    },

    options: {
      legend: {
           display: false,
       },
      scales: {
        yAxes: [
          {
            ticks: {
              callback: function(label, index, labels) {
                console.log("label is: " + label);
                if (label > 75) {
                  return "Expert: " + label;
                } else if (label > 50) {
                  return "Advanced: " + label;
                } else if (label > 25) {
                  return "Intermediate: " + label;
                } else {
                  return "Beginner: " + label;
                }
                //                         return '$' + label;
              }
            }
          }
        ]
      }
    }
  };
  render() {
    return (
      <Bar data={this.state.chartData} options={this.state.chartOptions} />
    );
  }
}

export default Chart;
