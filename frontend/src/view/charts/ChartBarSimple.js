import React from 'react'
import PropTypes from 'prop-types'
import { getColor } from '@coreui/utils/src'
import { CChartBar } from '@coreui/react-chartjs'
import {formatNumber} from "../pages/Procurement";

const ChartBarSimple = props => {

  const {
    backgroundColor,
    pointHoverBackgroundColor,
    dataPoints,
    label,
    labels,
    pointed,
    ...attributes
  } = props

  const defaultDatasets = (()=>{
    return [
      {
        data: dataPoints,
        backgroundColor: getColor(backgroundColor),
        pointHoverBackgroundColor: getColor(pointHoverBackgroundColor),
        label: label,
        barPercentage: 0.5,
        categoryPercentage: 1
      }
    ]
  })()

  const defaultOptions = (()=>{
    return {
      tooltips: {
        enabled: true,
        callbacks: {
          label: function (tooltipItem, data) {
            return "$ " + formatNumber(tooltipItem.yLabel);
          },
        },
      },
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          display: false,
          ticks: {
            beginAtZero: true,
          }
        }],
        yAxes: [{
          display: false
        }]
      }
    }
  })()

  // render
  return (
    <CChartBar
      {...attributes}
      type="bar"
      datasets={defaultDatasets}
      options={defaultOptions}
      labels={labels}
    />
  )
}

ChartBarSimple.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  //
  backgroundColor: PropTypes.string,
  pointHoverBackgroundColor: PropTypes.string,
  dataPoints: PropTypes.array,
  dataLabels: PropTypes.array,
  label: PropTypes.string,
  pointed: PropTypes.bool
};

ChartBarSimple.defaultProps = {
  backgroundColor: 'rgba(0,0,0,.2)',
  dataPoints: [10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12],
  label: 'Sales'
};

export default ChartBarSimple
