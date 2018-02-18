import React from 'react'
import PropTypes from 'prop-types'
import Row from './Row'

export default class Table extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      valueOfN : '',
      valueOfX : '',
      valueOfM : '',
      valueOfW : '',
    }
  }



  render() {
    const rows = [];

    for (let y = 0; y < this.props.y + 1; y += 1) {
      const rowData = this.state.data[y] || {};
      rows.push(
        <Row
          key={y}
          y={y}
          x={this.props.x + 1}
          rowData={rowData}
        />,
      )
    }
    return (
      <div>
        {rows}
      </div>
    )
  }
}

Table.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  valueOfN: PropTypes.number.isRequired,
  valueOfX: PropTypes.number.isRequired,
  valueOfM: PropTypes.number.isRequired,
  valueOfW : PropTypes.number.isRequired,
};