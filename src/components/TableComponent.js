import React, { PropTypes, Component } from 'react'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {
  Table,
  TableRow,
  TableRowColumn,
  TableBody
} from 'material-ui/Table';

export default class MagicTableReact extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      height: '300px',
      valueOfN: '8',
      valueOfX : '1',
      valueOfM : '29',
      valueOfW : '20%',
    };
    this.handleChangeOfN = this.handleChangeOfN.bind(this);
    this.handleChangeOfX = this.handleChangeOfX.bind(this);
    this.handleChangeOfM = this.handleChangeOfM.bind(this);
    this.handleChangeOfW = this.handleChangeOfW.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeOfN(event) {
    this.setState({valueOfN: event.target.value});
  }
  handleChangeOfX(event) {
    this.setState({valueOfX: event.target.value});
  }
  handleChangeOfM(event) {
    this.setState({valueOfM: event.target.value});
  }
  handleChangeOfW(event) {
    this.setState({valueOfW: event.target.value});
  }

  handleSubmit(event) {
    console.log(this.state)
    alert('N was submitted: ' + this.state.valueOfN);
    this.createArray()
    event.preventDefault();
  }

  createArray() {
    const min = this.state.valueOfN;
    const max = this.state.valueOfM;
    const step = this.state.valueOfX;
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
    console.log(chunk(3, range));
     const data = chunk(3, range);
    return data

  }


  render() {

    return (
      <div  className="col-sm-3">
        <table>
        {
          this.createArray().map(row =>
            <tr className='row'>
              { row.map(col => <td className='column'>{ col }</td>) }
            </tr>
          )
        }
        </table>

        <div>
          <Card>
            <CardHeader
              title="Table"
              subtitle="Red"
            />
            <CardText>
              <div>
                <label>
                  N =
                  <input type="number" value={this.state.valueOfN} onChange={this.handleChangeOfN}/>
                </label>
              </div>
              <div>
                <label>
                  X =
                  <input type="number" value={this.state.valueOfX} onChange={this.handleChangeOfX}/>
                </label>
              </div>
              <div>
                <label>
                  M =
                  <input type="number" value={this.state.valueOfM} onChange={this.handleChangeOfM}/>
                </label>
              </div>
              <div>
                <label>
                  W =
                  <input type="number" value={this.state.valueOfW} onChange={this.handleChangeOfW}/>
                </label>
              </div>
            </CardText>
            <CardActions>
              <FlatButton label="Cancel"/>
              <FlatButton label="OK" onClick={this.handleSubmit}/>
            </CardActions>
          </Card>
        </div>
      </div>
    )
  }
}

MagicTableReact.propTypes = {

};