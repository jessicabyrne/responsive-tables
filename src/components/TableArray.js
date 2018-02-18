import React, { Component } from 'react';
import { render } from 'react-dom';



const min = 8;
const step =1;
const max = 29;


const getRange = (min, max, step, r =[]) =>
  min <= max
    ? getRange(min + step, max, step, [...r, min])
    : r;


const chunk = (n, arr) =>
  arr.reduce((acc, cur) => {
    var last = acc[acc.length - 1];
    return last.length === n
      ? (acc.push([cur]), acc)
      : (last.push(cur), acc[acc.length - 1] = last, acc);
  }, [[]]);


const range = getRange(min, max, step);
const data = chunk(5, range);
const reversed = data.reverse();


export class TableArray extends Component {

  render() {
    return (
      <table>
        {
          reversed.map(row =>
            <tr className='row'>
              { row.map(col => <td className='column'>{ col }</td>) }
            </tr>
          )
        }
      </table>
    );
  }
}

