import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Define the Statistics Chart component
class StatisticsChart extends Component {
	componentDidMount() {
		if (window !== 'undefined') {
			let Chart = require('chart.js')

			new Chart(this.canvas, this.props.options)
		}
	}

	render() {
		return (
			<canvas className="chart" width="400" height="400" ref={(canvas) => this.canvas = canvas} />
		)
	}
}

// Define the property types that the component expects to receive
StatisticsChart.propTypes = {
	options: PropTypes.object.isRequired
}

export default StatisticsChart