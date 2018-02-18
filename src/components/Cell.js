import React from 'react'
import PropTypes from 'prop-types'

/**
 * Cell represents the atomic element of a table
 */
export default class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      valueOfN: props.valueOfN
    };
  }

  /**
   * Calculates a cell's CSS values
   */
  calculateCss = () => {
    const css = {
      width: '40px',
      padding: '4px',
      margin: '0',
      height: '40px',
      boxSizing: 'border-box',
      position: 'relative',
      display: 'inline-block',
      color: 'black',
      border: '1px solid #cacaca',
      textAlign: 'left',
      verticalAlign: 'top',
      fontSize: '14px',
      lineHeight: '15px',
      overflow: 'hidden',
    }

    if (this.props.x === 0 || this.props.y === 0) {
      css.textAlign = 'center'
      css.backgroundColor = '#f0f0f0'
      css.fontWeight = 'bold'
    }



    return css
  }

  render() {
    const css = this.calculateCss();

    return (
      <span
        style={css}
        role="presentation"
      >
      </span>
    )
  }
}

Cell.propTypes = {
  onChangedValue: PropTypes.func.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  valueOfN: PropTypes.number.isRequired,
};