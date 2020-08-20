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
    LegendPosition: "top",
    level: "Skills",
    data: {
      labels: ["C", "C++", "Java", "Python", "Ansible",'Jenkins', "Shell Scripting", "Market Research","Product Management"],
      datasets: [
        {
          data: [4,2,2,3,2,2,2,1,1,0],
          backgroundColor: [
            "rgba(54, 162, 235, 0.6)",
            "rgba(255, 206, 86, 0.6)",
            "rgba(75, 192, 192, 0.6)",
            "rgba(153, 102, 235, 0.6)",
            "rgba(255, 159, 132, 0.6)",
            "rgba(255, 99, 132, 0.6)",
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
      plugins: {
      deferred: {
        xOffset: 150,   // defer until 150px of the canvas width are inside the viewport
        yOffset: '50%', // defer until 50% of the canvas height are inside the viewport
        delay: 500      // delay of 500 ms after the canvas is considered inside the viewport
      }
    },
      legend: {
           display: false,
       },
      scales: {
        yAxes: [
          {
            ticks: {
              maxTicksLimit: 5,
              callback: function(label, index, labels) {
                console.log("label is: " );
                if (label === 4) {
                  return "Expert " ;
                } else if (label === 3) {
                  return "Advanced ";
                } else if (label === 2) {
                  return "Intermediate " ;
                } else if (label === 1) {
                  return "Beginner" ;
                } else {
                  return '';
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
