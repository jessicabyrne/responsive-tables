import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class Selector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueOfN: '',
      valueOfX: '',
      valueOfM: '',
      valueOfW: '',
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
    event.preventDefault();
  }

  render() {
    return (
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
    );
  }
}



