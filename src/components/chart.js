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
          data: [0,1,2,3,4,1,3,2,1,1],
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
              maxTicksLimit: 6,
              callback: function(label, index, labels) {
                console.log("label is: " );
                if (label === 4) {
                  return "Expert " ;
                } else if (label === 3) {
                  return "Advanced ";
                } else if (label === 2) {
                  return "Intermediate " ;
                } else if (label === 1) {
                  return "Beginner " ;
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

      <Bar data={this.state.chartData} options={this.state.chartOptions}  />
    );
  }
}

export default Chart;
